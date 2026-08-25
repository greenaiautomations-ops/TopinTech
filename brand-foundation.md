# Top in Tech — Brand Foundation

*Mission, vision, values, and story, written to match what the business actually is and does — not a generic tech-startup template.*

---

## The inconsistency this fixes

Right now the site tells two slightly different stories about itself:

- **Homepage, nav, Services page** (driven by `en.json`): "AI Automation Agency" — pure AI focus.
- **About page** (hardcoded directly in `About.tsx`, not pulled from `en.json` at all): a broader technology partner covering **IT support, AI automation, and web/app development**, for **both households and businesses**.

The About page is the more accurate one — it matches the "One partner, three disciplines" line already sitting in your own "Why Us" section, and it matches what your Services page actually sells (IT support alongside AI and vibe-coded apps). The foundation below is built on that broader, truer positioning. Once you're happy with it, the fix is mechanical: update `en.json`'s `hero` and `about` sections to match, and make `About.tsx` pull from `en.json` like every other page does, so the two never drift apart again.

---

## Positioning, in one line

**Top in Tech is the one technical team a small business or household in and around Marburg calls instead of five different vendors — for IT that just works, AI that actually saves time, and software that holds it all together.**

---

## Mission

**We exist so a small business doesn't need an IT department, a marketing agency, and an AI consultant just to keep up with companies ten times its size.**

Most of our clients aren't choosing between us and a big enterprise vendor — they're choosing between doing this themselves at 11pm after closing, or not doing it at all. Every engagement we take on has to save someone real time or make them real money within a timeframe they can actually see. If it can't, we say so before we start, not after we've billed for it.

---

## Vision

**A town like Marburg where a two-person clinic or a five-person gym runs as smoothly as a company with a hundred employees — without needing a hundred-employee budget to get there.**

AI and automation tend to get built for companies that already have the engineering headcount to install them. We think the businesses that need this the most are the ones nobody's really building for — the dentist's office, the property manager, the family-run gym. Getting good technology into their hands, without making them hire someone to run it, is the whole bet we're making with this company.

---

## Core Values

### 1. Practical over Perfect
We'd rather ship something that saves you three hours a week starting Monday than spend two months designing something impressive that never leaves the whiteboard. If a plain webhook does the job, we won't sell you a custom model. Boring and working beats clever and stuck in review.

### 2. Show the Number, Not the Pitch
Before we start, we agree on what "working" looks like — fewer missed calls, fewer manual hours, more booked consultations, whatever it is for you. If we can't point to that number by the end of the engagement, we didn't do our job, regardless of how the demo looked.

### 3. No Black Boxes
You should never have to call us because you're locked out of your own system. We document what we build, explain the "why" behind it in plain language, and hand over the keys — including training your team to run it — so you're not permanently dependent on us for things you could manage yourself.

### 4. One Team, Every Discipline
We got tired of watching clients juggle an IT guy, a web developer, and an "AI person" who don't talk to each other and each blame the others when something breaks. Being IT support, automation, and development under one roof isn't a growth strategy we backed into — it's the actual reason we started this instead of a single-service shop.

### 5. Small On Purpose
We're a five-person team, and we're not apologizing for that or padding it with vague claims. It means the person who scopes your project is the same person who can still explain, six months later, exactly why it was built the way it was — and that whoever answers your call actually knows your setup, instead of reading it off a ticket.

---

## Brand Story

Top in Tech didn't start with a plan to build "an AI company." It started with a pattern our founder, Zoraiz, kept running into: a small business owner would have one contact for their website, a different one for anything that broke on their laptops, and nobody at all for the repetitive stuff eating their week — the same email replies, the same appointment reminders, the same manual data entry, over and over.

Individually, none of those problems were big enough to justify hiring someone full-time to solve. Together, they were costing owners hours they didn't have. So instead of picking one lane, we built a small team that could cover all three: the day-to-day IT support that keeps a home or office running, the AI automation that takes the repetitive work off someone's plate, and the websites and internal tools that tie it together — all from Marburg, all hands-on, no handoffs between departments that don't know each other.

We're still a small team — five people, not five hundred — and that's deliberate. It means when you talk to us about a workflow that's not working, you're talking to the person who's going to build the fix, not an account manager relaying it to an engineering queue three timezones away. It also means we're picky about what we take on: we'd rather turn down a project that isn't a good fit than build something that looks good in a proposal and falls apart in your actual business.

That's still the whole idea. Not "AI for AI's sake" — a practical, accountable technology partner for the businesses and households that never had one before.

---

## Voice notes — how to keep this from sounding AI-written

A few concrete rules, since that was explicitly part of the ask:

**Cut these words if they show up in a draft:** revolutionize, seamless(ly), cutting-edge, unlock, empower, elevate, leverage, robust, holistic, game-changer, next-level, unparalleled, transform (as a verb applied to abstract nouns — "transform your business" is the classic tell), "in today's fast-paced world," "at the intersection of."

**Use instead:** specific numbers, specific job titles ("the dentist's front desk," "the gym owner," not "businesses"), specific time savings, and admissions of limitation ("we're a five-person team" instead of implying enterprise scale). Real brand voice sounds a little unpolished in exactly the places AI copy is suspiciously smooth — a stray "honestly," a sentence that ends on a slightly blunt note instead of a triumphant one.

**Sentence rhythm:** vary length on purpose. AI-generated marketing copy tends to write in the same 12–18 word sentence over and over. Mix in short ones. Let a paragraph end on a four-word sentence sometimes.

---

## Where this should land in the actual site

1. **`src/i18n/translations/en.json` → `about` section:** replace `storyP1–P3`, `missionText` line, and `valuesTitle` items with the language above (trimmed to fit each field's existing length/format).
2. **`src/pages/About.tsx`:** rewrite the hardcoded Story, Mission, and Values sections to match, and — separately from copy — wire this page into the `i18n` system like every other page, so German visitors currently get nothing here at all (worth confirming, but it looks like this page isn't translated).
3. **`footer.tagline`** in `en.json`: currently "AI Automation Agency building practical, revenue-driven AI systems for real businesses" — this should become the one-line positioning statement above, since the footer appears on every page and is currently the strongest signal that the site is AI-only.
4. **Hero badge/subheadline:** currently "AI Automation Agency" — worth deciding deliberately whether the badge stays AI-first (since AI is likely your highest-margin, most differentiated service) while the About page carries the fuller three-discipline story. That's a legitimate choice, but it should be a choice, not a leftover from before the site expanded.
