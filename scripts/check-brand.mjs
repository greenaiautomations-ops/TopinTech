import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import ts from "typescript";
const source = fs.readFileSync("src/brand/content.ts", "utf8");
const output = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.CommonJS },
}).outputText;
const context = { exports: {} };
vm.runInNewContext(output, context);
const { services, groups, ui, company } = context.exports;
let pairs = 0;
function check(value, path = "content") {
  if (!value || typeof value !== "object") return;
  if ("en" in value || "de" in value) {
    assert.equal(typeof value.en, "string", `${path}: English missing`);
    assert.equal(typeof value.de, "string", `${path}: German missing`);
    assert.ok(value.en.trim() && value.de.trim(), `${path}: empty translation`);
    pairs++;
  } else
    Object.entries(value).forEach(([key, child]) =>
      check(child, `${path}.${key}`),
    );
}
check({ services, groups, ui });
assert.equal(services.length, 11);
assert.equal(new Set(services.map((s) => s.id)).size, 11);
for (const s of services) {
  assert.ok(groups.some((g) => g.id === s.group));
  for (const key of [
    "title",
    "intro",
    "problem",
    "benefit",
    "example",
    "metric",
  ])
    assert.ok(s[key].en && s[key].de);
  assert.equal(s.items.length, 3);
}
assert.equal(company.email, "contact@topintech.com");
for (const filename of ["mark.svg", "sora-latin.woff2", "inter-latin.woff2"])
  assert.ok(fs.statSync(`public/brand/${filename}`).size > 100);
console.log(
  `PASS: ${pairs} paired translations, 11 unique services, category coverage and brand assets.`,
);
// Run the actual edge-function handler with isolated database/email adapters.
// No network calls, real leads or email deliveries are made.
let handler;
let inserted = [];
let sent = [];
let dbError = null;
let networkFailure = false;
const edge = fs
  .readFileSync("supabase/functions/submit-contact/index.ts", "utf8")
  .replace(/^import .*;\n/gm, "");
const edgeJs = ts.transpileModule(edge, {
  compilerOptions: {
    target: ts.ScriptTarget.ES2022,
    module: ts.ModuleKind.None,
  },
}).outputText;
vm.runInNewContext(edgeJs, {
  serve: (fn) => (handler = fn),
  createClient: () => ({
    from: () => ({
      insert: async (data) => {
        inserted.push(data);
        return { error: dbError };
      },
    }),
  }),
  Deno: {
    env: {
      get: (key) =>
        key === "RESEND_API_KEY"
          ? "test-key"
          : key === "FROM_EMAIL"
            ? "Top in Tech <contact@topintech.com>"
            : "test",
    },
  },
  fetch: async (url, options) => {
    if (networkFailure) throw new Error("Email service offline");
    sent.push(JSON.parse(options.body));
    return new Response("{}", { status: 200 });
  },
  Request,
  Response,
  console: { error() {}, warn() {} },
});
async function submit(body) {
  return handler(
    new Request("https://test.invalid", {
      method: "POST",
      body: JSON.stringify(body),
    }),
  );
}
for (const language of ["de", "en"]) {
  sent = [];
  const response = await submit({
    name: "<script>test</script>",
    email: "test@example.invalid",
    company: "A & B",
    service: "Voice",
    message: "<img src=x onerror=alert(1)>",
    language,
  });
  assert.equal(response.status, 200);
  assert.equal((await response.json()).success, true);
  assert.equal(sent.length, 2);
  assert.equal(sent[1].to[0], "contact@topintech.com");
  assert.ok(
    sent[0].subject.includes(
      language === "de" ? "Ihre Anfrage" : "your enquiry",
    ),
  );
  assert.ok(
    !sent[0].html.includes("<script>") && !sent[0].html.includes("<img src=x"),
  );
  assert.ok(sent[0].html.includes("&lt;script&gt;"));
}
for (const body of [
  { name: " ", email: "a@b.de" },
  { name: "A", email: "bad" },
  { name: "A", email: "a@b.de", message: "x".repeat(5001) },
  { name: "A", email: "a@b.de", company: { html: "test" } },
]) {
  const before = inserted.length;
  assert.equal((await submit(body)).status, 400);
  assert.equal(inserted.length, before);
}
dbError = { message: "test failure" };
assert.equal((await submit({ name: "A", email: "a@b.de" })).status, 500);
dbError = null;
networkFailure = true;
assert.equal(
  (await submit({ name: "A", email: "a@b.de" })).status,
  200,
  "Persisted lead must not appear failed if email delivery is unavailable",
);
console.log(
  "PASS: DE/EN confirmations, HTML escaping, invalid input rejection, database failure and email-failure behavior.",
);
