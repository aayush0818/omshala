# Om Shala — Two-Journey Restructure

Keep the existing design system (palette, typography, ambient background, cursor glow, breath companion, sound bowl, page transitions, reveal animations). Only the information architecture and navigation change so Corporate and Private feel like two dedicated sites under one brand.

## 1. Route structure

Move to prefixed routes so the URL itself carries the experience context.

```text
/                        Landing (both journeys meet here only)
/about                   Shared About (renders inside whichever context the visitor came from)
/corporate               Corporate experience page
/corporate/contact       Contact — Corporate context
/private                 Private experience page
/private/contact         Contact — Private context
```

Redirects to keep old links alive: `/events/corporate` → `/corporate`, `/events/private` → `/private`, `/contact` → `/` (visitor must pick a journey first).

## 2. Experience context

A tiny `ExperienceContext` (`"landing" | "corporate" | "private"`) derived from the URL prefix, with a `sessionStorage` fallback so `/about` remembers where the visitor came from. Clicking a panel on the landing page writes the choice to sessionStorage and navigates to `/corporate` or `/private`.

## 3. Navigation (context-aware `Header.tsx`)

Header reads the context and renders one of three nav sets. No experience ever links to the other.

- **Landing**: Logo · About
- **Corporate**: Logo · About · Corporate · Contact
- **Private**: Logo · About · Private · Contact

Footer follows the same rule (Landing footer is minimal; Corporate/Private footers only reference their own contact + About).

## 4. Landing page (`Index.tsx`) — trim to the essentials

Final section order, everything else removed:

1. Hero — cinematic, brand-only, no Corporate/Private mention
2. ShrutikaIntro — existing copy, editorial layout
3. CredentialsSection — supplied credentials, editorial grouping
4. ExperienceSplit — becomes the centrepiece under a large "Choose Your Experience" heading; entire panels clickable (no buttons), subtle hover (zoom, brightness, expansion); clicking writes context + navigates
5. PhilosophySection — Nada Yoga content verbatim, large typography
6. Footer (landing variant)

Anything not in that list is removed from the homepage (no schedule, no bookings, no practice previews, no corporate/private detail).

## 5. Corporate page (`/corporate`)

Uses only supplied Corporate content. Sections, in order:

1. Hero — "Deep Relaxation for High Performance Teams" + supplied supporting paragraph, executive/retreat imagery
2. Credentials (corporate-only subset)
3. What This Is — "Sound Baths for Corporate Wellness" verbatim, more whitespace
4. Ideal For — 6 elegant cards (Leadership teams, Decision-makers, High-performance teams, Employee wellbeing, Retention, Corporate retreats)
5. Benefits — one visual block per supplied benefit
6. How A Session Works — vertical journey: Breathwork → Guided Relaxation → Crystal Singing Bowls → Optional Live Ragas
7. The Rise of Online Sound Baths — split into distinct editorial sub-sections: Why online works · Brain waves · 435Hz · Professional recording system · Setup requirements (all supplied text preserved)
8. Setup — two columns: From Your Side / From Om Shala
9. Contact block linking to `/corporate/contact`

No Private references anywhere on the page or footer.

## 6. Private page (`/private`)

Uses only supplied Private Events content.

1. Hero — warm, emotional imagery (candles, bowls, people), supplied headline
2. Introduction — supplied intro verbatim, editorial typography
3. The Experience — guided vertical journey: Arrival · Breath · Relaxation · Crystal Singing Bowls · Live Ragas · Connection
4. Atmosphere — pillows, blankets, lighting, aromas, 435Hz, live ragas, with immersive imagery
5. Occasions — visual grid: Weddings · Birthdays · Baby Showers · Women's Forums · Festive Gatherings
6. Contact block linking to `/private/contact`

No corporate terminology anywhere.

## 7. Contact pages

Two thin variants of the existing minimal Contact (email + WhatsApp + location, no forms):

- `/corporate/contact` — Corporate header + footer, corporate-toned intro line
- `/private/contact` — Private header + footer, warmer intro line

## 8. About (`/about`)

Shared page, unchanged content focus (Shrutika: Meditation Teacher, Indian Classical Singer, Nada Yoga practitioner, founder of Om Shala). Renders inside whichever context the visitor arrived from (via `ExperienceContext` fallback to sessionStorage; defaults to landing nav if opened cold).

## 9. Design system

No visual redesign. All motion primitives (`AmbientBackground`, `CursorGlow`, `BreathCompanion`, `SoundBowl`, `PageTransition`, `Reveal`, `ScrollProgress`) stay exactly as they are. Only layouts and section composition change.

## Technical details

- New `src/context/ExperienceContext.tsx` — hook + provider; derives value from `useLocation().pathname`, seeds/reads `sessionStorage("omshala.experience")` for `/about`.
- `src/App.tsx` — add nested routes for `/corporate`, `/corporate/contact`, `/private`, `/private/contact`; add redirects for legacy `/events/*` and `/contact`; wrap routes with `ExperienceProvider`.
- `src/components/Header.tsx` — read context, render one of three nav sets; remove any hard-coded Corporate/Private/Contact links from the Landing variant.
- `src/components/Footer.tsx` — same context-driven variants.
- `src/components/ExperienceSplit.tsx` — panels become full clickable `<Link>`s that also write the sessionStorage key; remove any inner buttons; refine hover (subtle scale + brightness).
- `src/pages/Index.tsx` — remove any sections outside the six listed above; add the "Choose Your Experience" heading above `ExperienceSplit`.
- `src/pages/EventsPublic.tsx` (Corporate) — restructure into the 9 sections above using existing supplied copy; split the "Rise of Online Sound Baths" block into sub-sections.
- `src/pages/EventsPrivate.tsx` — restructure into the 6 sections above.
- `src/pages/Contact.tsx` — split into `ContactCorporate.tsx` and `ContactPrivate.tsx` (or a single component that branches on context) and wire the new routes.
- No new dependencies, no schema/backend changes, no changes to the MCP server.
