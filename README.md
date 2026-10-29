# Top in Tech

Bilingual React/TypeScript website for Top in tech Ltd. The redesigned site uses the supplied navy/blue/cyan branding, self-hosted Sora and Inter, three service categories and 11 service detail pages.

## Local development

```sh
npm install
npm run dev
```

Vite serves the site on port 8080. Existing `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY` configuration is used by the contact form. Never commit private service credentials.

## Check and build

```sh
npx tsc --noEmit -p tsconfig.app.json
node scripts/check-brand.mjs
npm run build
```

The isolated contact-function checks use mock database/email adapters and send no real messages. Build output is in `dist/`. The existing Vercel rewrite supports SPA routes.

## Edit the site

- `src/brand/content.ts`: company details and paired English/German content.
- `src/brand/legal.ts`: legal drafts with the intentionally pending business details.
- `src/brand/Site.tsx`: active page components, shared navigation, footer and form.
- `src/brand/brand.css`: layout, colors, typography and responsive rules.
- `public/brand/`: logo mark, font files and licenses.
- `supabase/functions/submit-contact/index.ts`: database submission and localized confirmation emails.

Legacy files in `src/pages`, `src/components` and `src/i18n` are retained for reference but are not used by the new application entry point.

See [the redesign notes](docs/brand-redesign.md) for research sources, positioning, validation and publishing requirements. No public deployment was performed. Legal information, hosting privacy details and live email configuration need completion before launch.
