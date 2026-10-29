# Top in Tech — brand and website redesign

Implemented 29 October 2026 in the existing React/Vite repository. This is a local implementation; no public deployment or live backend modification was performed.

## Business positioning

One technology partner for small businesses in and around Marburg: IT support, AI/automation, and web/app development. Household IT remains easy to find in the IT category. The existing `brand-foundation.md` informed positioning; the attached brand image informed appearance. Its embedded sample website content was treated as reference material, not as additional user instructions.

The user confirmed the legal name **Top in tech Ltd** and customer-facing email **contact@topintech.com**. Other legal details are intentionally pending. Existing team names and telephone details were retained from the repository; no additional credentials, customers or testimonials were invented.

## Research and decisions

These are design references, not endorsements or evidence that Top in Tech delivers the same scale or outcomes.

| Reference | Observation | Implementation |
| --- | --- | --- |
| [Bechtle: Managed services](https://www.bechtle.com/de-en/it-services/managed-services) | Services are explained through operating benefits, responsibility and modular areas of help. | IT pages explain the customer problem, specific deliverables and ongoing scope. Bechtle's 24/7 availability, certifications and scale are not claimed for Top in Tech. |
| [Thoughtworks: What we do](https://www.thoughtworks.com/what-we-do) | A broad technical portfolio is grouped into a few understandable business themes, with capabilities below. | Three top-level categories retain all 11 existing services. Each service receives its own page. No enterprise timelines or reported client outcomes are reused. |
| [Nielsen Norman Group: Information scent](https://www.nngroup.com/articles/information-scent/) | Clear labels and relevant surrounding content help visitors predict where a link leads. | Goal-based entry points, plain-language descriptions, service-specific accessible link names and category breadcrumbs. |
| [§ 5 DDG](https://www.gesetze-im-internet.de/ddg/__5.html) | Provider details must be readily accessible. | Persistent legal links and bilingual draft provider details. Missing registration information is marked, not invented. |
| [European Parliament: discontinuation of the ODR platform](https://oeil.europarl.europa.eu/oeil/en/document-summary?id=1800145) | The former ODR platform was discontinued in July 2025. | Removed the obsolete platform link and outdated TMG wording from the active legal page. |

## Customer journey

1. Homepage explains the offer and gives three goal-based starting points.
2. Services can be filtered by IT, automation or development. All 11 are reachable without hidden tabs.
3. Every service page explains the challenge, deliverables, benefit, illustrative use case and how progress can be measured.
4. The service CTA preselects that service in the contact form.
5. The contact page explains what happens next, supports an undecided customer and offers direct email/telephone alternatives.
6. A scoped proposal separates implementation, third-party costs and ongoing support.

Removed from the active site: speculative price packages, unsupported savings/ROI statistics, fake social links, a placeholder video, conflicting AI-only positioning, and unconfirmed response-time promises. Illustrative use cases are labelled and do not masquerade as customer results.

## Visual system

- Midnight navy `#071B3A`: hero, navigation, closing section.
- Deep navy `#0E2A5A`: depth and secondary dark surfaces.
- Electric blue `#1F6FFF`: brand accent; a slightly darker blue is used for small action text/buttons to improve contrast.
- Cyan `#2ED8FF`: hero emphasis and logo highlights.
- White `#FFFFFF`: main content and clear reading surfaces.
- Cool gray `#8A94A6`: restrained secondary decoration; darker text colors preserve readability.
- Sora: headings and wordmark. Inter: body and interface text.
- Font binaries and OFL licenses are self-hosted in `public/brand/`.
- `public/brand/mark.svg` is a scalable geometric reconstruction based on the supplied brand board, not an extracted original master artwork.
- Responsive layouts, visible focus, skip link, mobile navigation, reduced-motion support and readable bilingual forms.

## Content and code ownership

- `src/brand/content.ts`: typed English/German pairs, service content, company details, labels and team information.
- `src/brand/legal.ts`: bilingual legal drafts, deliberately marked incomplete.
- `src/brand/Site.tsx`: active routes, shared layout, interactions and enquiry form.
- `src/brand/brand.css`: visual system and breakpoints.
- `src/App.tsx`: entry point for the redesigned site.
- Old page/component/translation files remain in the repository for reference but are no longer imported by the active application. Update the new content source for future site copy changes.

Both languages cover all active pages, 11 service detail pages, navigation, accessibility labels, metadata, form labels, placeholders, native validation text, success/error messages and legal drafts. Language choice persists, and switching language retains the selected service and entered form values. The privacy link in the form opens separately so it does not discard the draft enquiry.

## Backend changes prepared

`submit-contact` preserves the existing Supabase lead-storage flow and adds language-aware confirmation emails, the new business email, blue email styling, reply-to configuration, input validation and HTML escaping. Email failures after a successful database save do not turn a received enquiry into an apparent failure. These changes are local and require deployment to the existing Supabase project to affect the live endpoint.

`FROM_EMAIL` can be set to a verified sender, such as `Top in Tech <contact@topintech.com>`. Until configured, the existing Resend test sender remains the fallback. Confirm the domain is verified and `RESEND_API_KEY` is configured before relying on customer email delivery. The legacy booking endpoint's brand color and notification email were also updated; it is not exposed by the redesigned UI.

## Validation

- `npm run build`: production bundle passes.
- `npx tsc --noEmit -p tsconfig.app.json`: passes.
- `node scripts/check-brand.mjs`: paired translations, all 11 services/categories, assets; isolated edge-handler tests for DE/EN emails, escaping, malformed inputs, database failures and email-delivery failures.
- Browser checks: English and German routes, service filtering, detail-to-contact selection, empty-form validation, persisted language and mobile navigation.
- Visual review: desktop 1440px and narrow mobile 320px layouts; longer German headings checked.
- No test lead was submitted to the real database and no email was sent. Live delivery is not verified.

## Before public launch

Complete the legal address, representative, registration/VAT details if applicable, and the privacy draft's provider/region/retention details. The user explicitly deferred these details.

Deploy the frontend through the project's chosen hosting and deploy the changed Supabase functions separately. No new Sites project was created and no existing production site was overwritten. Confirm the canonical website domain, then add canonical/hreflang URLs and a sitemap; the old `topintech.example.com` placeholders were removed. For full bilingual search indexing, locale-specific URLs and prerendering are recommended as a separate publishing step.

The new public email is displayed everywhere in the active site. Mailbox existence, domain verification and deliverability cannot be established from a local build.
