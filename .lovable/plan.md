# Om Shala 2.0 — Gateway Redesign

Treating this as a version bump: the site becomes a premium **Sound Healing Experiences & Events** studio where every visitor immediately picks Corporate or Private and never sees the other path again.

## 1. Site structure

**Keep:** Home, About, Corporate, Private, Contact
**Remove entirely:**
- `src/pages/Schedule.tsx` (delete file + route)
- All references to weekly Yog Nidra classes, €80/month pricing, first class free, timezones, Wise / PayPal / Bank Transfer, "Book" buttons
- `BookingSection` on the homepage (replaced by simple Contact CTA)
- Any "book a class" language sitewide → replaced with "enquire"

## 2. Navigation (context-aware)

`Header.tsx` reads the current route and renders one of three nav sets:

- **Home** (`/`): `About · Corporate · Private · Contact` — no dropdown, no Book button
- **Corporate** (`/events/public` + descendants): `About · Contact · Enquire` (Enquire = clay-accent button scrolling to enquiry form)
- **Private** (`/events/private` + descendants): `About · Contact · Enquire`
- **About / Contact:** homepage nav

Logo always `OM SHALA`. Mobile menu mirrors the same context logic.

## 3. Homepage rebuild (`Index.tsx`)

Shortened to four sections only. Remove: `PhilosophySection`, `PracticesSection`, `ExpectSection`, `TestimonialSection`, `StatsStrip`, `BookingSection`.

### Section 1 — Hero Gateway (`HeroGateway.tsx`, new)
Full-viewport split into two interactive panels (stacked on mobile).

- **Left — Corporate:** background image conveys scale/professionalism. Overlay: eyebrow "Corporate", headline "Sound Healing for Teams, Leadership Retreats & Employee Wellbeing", "Explore →"
- **Right — Private:** background image conveys warmth/intimacy. Overlay: eyebrow "Private", headline "Sound Healing for Celebrations, Gatherings & Special Moments", "Explore →"
- Hover: hovered panel zooms slightly + saturates + text lifts; opposite panel darkens; a soft clay ripple drifts toward hovered side (framer-motion)
- Click: hovered panel expands to fill the viewport, then routes to the page (framer-motion layout animation + navigate on completion)
- Small `OM SHALA` wordmark centered at the top with a hairline divider — no other chrome

Two new images generated via `imagegen` (premium tier) into `src/assets/`:
- `gateway-corporate.jpg` — wide airy conference/retreat hall with singing bowls arranged, warm daylight, editorial
- `gateway-private.jpg` — intimate candle-lit gathering with bowls, soft textiles, dusk warmth

### Section 2 — About Om Shala
Editorial two-column. Left: portrait/quiet image (reuse existing Shrutika asset if present, otherwise a calm still). Right: heading "About Om Shala" + the three provided paragraphs + the italic pull quote.

### Section 3 — Credentials
Quiet vertical list, small caps eyebrow "Credentials", each row separated by a hairline `border-b border-foreground/10`, generous `py-6`, no icons, no cards. Eight items exactly as written.

### Section 4 — Contact CTA
Centered, minimal: "Ready to create a Sound Healing Experience?" + single ghost-outline `Link` "Contact Om Shala" → `/contact`. That's it.

Footer stays but is simplified: remove Schedule link.

## 4. About page (`About.tsx`)
Rewrite as one flowing editorial passage (no numbered pillars, no section headers). Opens with Shrutika + Nada Yoga, flows into Voice / Indian Classical Music / Crystal Singing Bowls / Breathwork / Guided Relaxation as prose, closes with the quote. Remove any Corporate/Private specifics. Keep ambient background + Reveal for gentle fade-in per paragraph.

## 5. Corporate page (`EventsPublic.tsx`)
No structural changes. Small tweaks:
- Ensure "Sound Healing for Teams, Leadership Retreats & Workplace Wellbeing" is the hero subhead
- 435 Hz explanation stays here under "Why Sound Healing Works Online"
- Add a matching "Enquire" anchor / form section id so header Enquire button scrolls to it

## 6. Private page (`EventsPrivate.tsx`)
No structural changes. Small tweaks:
- Use "Private Experiences" in headings; keep "Private Events" only where clarity requires it
- Remove any 435 Hz explanation (belongs on Corporate)
- Add "Enquire" section id for scroll target

## 7. Contact page (`Contact.tsx`)
Trim to: Email · WhatsApp · Location · Enquiry form. Remove any leftover placeholder blocks.

## 8. Copy refinements sitewide
- Replace "Sound Healing for the office" → "Sound Healing for Teams, Leadership Retreats & Workplace Wellbeing"
- Replace "The Mind, is the highest human power" → "The mind is our greatest resource. A rejuvenated mind is an optimised human resource."
- Purge all mentions of weekly classes, subscription, monthly pricing, "book a class" (grep sweep across `src/`)

## 9. Technical notes
- Delete `src/pages/Schedule.tsx`; drop the route in `App.tsx`; drop any Schedule imports/links (Header, Footer, BookingSection callers)
- Delete `BookingSection.tsx` (no longer used) or leave unimported — will delete
- New `HeroGateway.tsx` uses framer-motion for hover ripple + click expand transition; `useNavigate` fires after expand animation completes (~500ms) for a "curtain reveal" feel
- Header derives context from `useLocation().pathname.startsWith('/events/public' | '/events/private')`
- Enquire button in Corporate/Private nav = `<a href="#enquire">` (or `scrollIntoView`)
- All new copy uses semantic tokens; no hardcoded colors

## 10. Out of scope (unchanged)
`SoundBowl`, `BreathCompanion`, `AmbientBackground`, `CursorGlow`, `ScrollProgress`, `Reveal`, brand palette, footer branding.
