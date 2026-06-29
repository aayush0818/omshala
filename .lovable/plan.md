# Om Shala — Gateway Redesign Plan

Restructure the site from a single-scroll brochure into a gateway experience that routes visitors into one of two distinct journeys (Corporate or Private). Keep the existing brand identity, motion system, and signature interactions intact.

## 1. Site structure & navigation

**Remove pages/routes:**
- `src/pages/Schedule.tsx` (delete file + route in `App.tsx`)
- `src/components/BookingSection.tsx` (delete, remove imports)
- Any "Practices" remnants

**Final routes:** `/`, `/about`, `/events/corporate`, `/events/private`, `/contact`

**`src/components/Header.tsx`:**
- Nav: About · Corporate · Private · Contact (flat, no dropdown)
- Remove the "Book" CTA button entirely
- Mirror in the mobile menu

## 2. Homepage rebuild (`src/pages/Index.tsx`)

New order — nothing else:
1. Hero
2. Shrutika intro
3. Credentials
4. Experience Split (centerpiece)
5. Philosophy
6. Footer

Remove from homepage: `StatsStrip`, `PracticesSection`, `ExpectSection`, `TestimonialSection`, `BookingSection`, `GuideSection` (becomes part of new Shrutika section).

### New / updated components

- **`HeroSection.tsx`** — rewrite for cinematic calm. Single headline "Sound Healing Experiences for Work & Life", one sub-line, single CTA "Explore Experiences" that smooth-scrolls to `#experience-split`. Remove the second button and "Begin a session".
- **`ShrutikaIntro.tsx`** (new) — large portrait left, editorial copy right, subtle "Read more →" link to `/about`. Uses existing About copy verbatim.
- **`CredentialsSection.tsx`** (new) — two tiers:
  - Tier 1: four large stat blocks (12+ years, 1000+ largest event, International clients, Founder of Bombay's first dedicated sound healing studio)
  - Tier 2: editorial hairline-divided list (Spotify × Universal Music, Royal Family sessions, Late G.P. Hinduja, Health Minister of Goa, international online clients)
- **`ExperienceSplit.tsx`** (new) — full-viewport, 50/50 panels (Corporate left, Private right). Each panel: immersive image, title, short description, "Explore →", entire panel is a `<Link>`. Hover: hovered side expands to ~60%, opposite contracts to ~40%, image scales ~1.05, brightness lifts subtly, text shifts up. All transitions ~700ms ease-out. Respects `prefers-reduced-motion`.
- **`PhilosophySection.tsx`** — keep copy, scale type up, add whitespace.

## 3. About page (`src/pages/About.tsx`)

Strip any promotional/booking content. Pure narrative about Shrutika: journey, Nada Yoga, Indian Classical Music, meditation, personal philosophy, founding Om Shala. Large portrait, editorial layout, minimal motion. No pricing, no schedule, no CTAs beyond a quiet contact link.

## 4. Corporate page (`src/pages/EventsPublic.tsx` → rename intent to "Corporate")

Rebuild with these sections in order:
1. **Hero** — "Deep Relaxation for High Performance Teams", large professional image, minimal copy
2. **Credentials** — visual treatment of corporate credentials (not paragraphs)
3. **What This Is** — provided copy, typographic only
4. **Ideal For** — six cards: Leadership Teams, Decision Makers, High Pressure Teams, Employee Wellbeing, Retention, Offsites
5. **Benefits** — seven icon cards (lucide icons): Reduce Stress, Prevent Burnout, Improve Focus, Increase Creativity, Support Emotional Regulation, Relax the Nervous System, Strengthen Workplace Wellbeing
6. **How A Session Works** — vertical timeline: Breathwork → Guided Relaxation → Crystal Singing Bowls → Live Indian Classical Voice → Deep Relaxation, each with short explanation
7. **The Rise of Online Sound Baths** — split layout, copy left, calming visual right, broken into digestible editorial blocks
8. **The Setup** — two-column comparison: "You Need" (Quiet Space, Headphones, Comfortable Seating) vs "We Provide" (Professional Recording, Crystal Singing Bowls, Guided Experience, Live Voice)
9. **Contact block** — Email + WhatsApp only, no form

## 5. Private page (`src/pages/EventsPrivate.tsx`)

Warmer, more emotional tone:
1. **Hero** — "Meaningful Sound Healing for Life's Special Moments", warm photography
2. **Introduction** — provided copy, improved layout
3. **The Experience** — vertical journey: Arrive → Breath → Relaxation → Crystal Singing Bowls → Live Ragas → Deep Connection
4. **Occasions** — six cards: Wedding, Birthday, Baby Shower, Women's Forum, Festive Gathering, Private Celebration
5. **Atmosphere** — image gallery (candles, blankets, mats, flowers)
6. **Closing** — "Let's create something unforgettable", Email + WhatsApp

## 6. Contact page (`src/pages/Contact.tsx`)

Reduce to Email, WhatsApp, Location (Bandra West, Mumbai). Either drop the form entirely or keep a single minimal block (name + message). Remove map clutter and any fictional hours.

## 7. Footer (`src/components/Footer.tsx`)

Remove any large booking banner / CTA. Keep enso mark, contact essentials, socials (if present). Quiet and minimal.

## 8. Motion & visuals

- Keep `AmbientBackground`, `CursorGlow`, `BreathCompanion`, `SoundBowl`, `PageTransition`, `Reveal`, `ScrollProgress`.
- All new hover/transitions: 600–800ms ease-out, subtle scale (≤1.05), no harsh movement.
- Wrap new motion in `useReducedMotion` check / `motion-reduce:` Tailwind variants.

## 9. Images needed

Generate (or wire placeholders for) the following with `imagegen` at the appropriate moment:
- Corporate panel image (calm executive setting)
- Private panel image (candles, blankets, warm gathering)
- Shrutika portrait placeholder (if no asset exists)
- Atmosphere gallery for Private page (3–4 warm images)
- Calming visual for "Rise of Online Sound Baths"

## 10. Cleanup checklist

- Delete `Schedule.tsx`, `BookingSection.tsx`, any practice-page residue
- Remove all `/schedule` and `#booking` links across components (Header, Footer, Hero, etc.)
- Remove `StatsStrip`, `TestimonialSection`, `ExpectSection`, `GuideSection`, `PracticesSection` imports from Index
- Verify no broken routes or dead links

## Technical notes

- Files created: `ShrutikaIntro.tsx`, `CredentialsSection.tsx`, `ExperienceSplit.tsx`, plus Corporate/Private subcomponents inline.
- Files deleted: `src/pages/Schedule.tsx`, `src/components/BookingSection.tsx`.
- Files edited: `App.tsx`, `Header.tsx`, `HeroSection.tsx`, `PhilosophySection.tsx`, `Footer.tsx`, `Index.tsx`, `About.tsx`, `Contact.tsx`, `EventsPublic.tsx`, `EventsPrivate.tsx`.
- Keep `framer-motion` for the split-panel hover and existing transitions.
- No business logic / backend changes.
