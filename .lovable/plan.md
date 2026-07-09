
# Om Shala V2.0 — Gateway Redesign

A structural rebuild, not a facelift. The site pivots from "meditation classes" to a premium Sound Healing Experiences & Events site where every visitor picks Corporate or Private within five seconds and never sees the other again.

## 1. Structural changes

### Removed entirely
- `src/pages/Schedule.tsx` (route + all references)
- `src/components/BookingSection.tsx` (weekly classes, pricing, trial, timezones, payment methods)
- Any residual class / subscription / price copy across the site
- The `Book` button in the header
- The Events dropdown (Corporate/Private become top-level)

### Final routes
- `/` — Gateway homepage
- `/about` — Shared About
- `/corporate` — (rename from `/events/public`)
- `/private` — (rename from `/events/private`)
- `/contact`

Old paths `/schedule`, `/events/public`, `/events/private` redirect to `/`, `/corporate`, `/private` respectively so no link breaks.

### Context-aware navigation
Replace the single `Header` with a context-aware one driven by route:
- On `/`, `/about`, `/contact` → `OM SHALA · About · Corporate · Private · Contact`
- On `/corporate/*` → `OM SHALA · About · Contact · Enquire` (Private hidden; Enquire = anchor to corporate CTA / contact with `?type=corporate`)
- On `/private/*` → `OM SHALA · About · Contact · Enquire` (Corporate hidden)

No dropdowns anywhere. No Book button anywhere.

## 2. Homepage — Gateway

Complete rewrite of `src/pages/Index.tsx`. Only four sections:

### Section 1 — Split Gateway (replaces HeroSection)
New component `GatewayHero.tsx`. Full-viewport split (50/50 desktop, stacked mobile) with two large image panels:
- **Left — Corporate**: generated image of a large-scale corporate/stage sound-bath setting conveying scale + professionalism. Overlay: "Corporate — Sound Healing for Teams, Leadership Retreats & Employee Wellbeing — Explore →"
- **Right — Private**: generated image conveying warmth + intimacy + premium. Overlay: "Private — Sound Healing for Celebrations, Gatherings & Special Moments — Explore →"

Interactions:
- Hover: hovered panel scales ~1.03, saturation +, text rises slightly; opposite panel darkens; a soft radial ripple emanates from cursor toward the chosen side.
- Click: chosen panel expands to fill viewport (framer-motion layout animation ~600ms) then navigates.
- Reduced motion: static, no zoom/ripple.
- Small centered "OM SHALA" wordmark floating over the seam.

### Section 2 — About Om Shala (editorial)
Two-column: portrait (`IMG_3535.webp`) left, copy right. Uses the provided body copy verbatim, closing with the italic quote.

### Section 3 — Credentials (5 editorial cards)
Grid of 5 cards using exact provided copy (12+ Years, Founder, Universal Music, Global Reach, Large Events). Numbers animate via existing `StatCounter`. No stock icons — typographic emphasis + hairline dividers.

### Section 4 — Contact CTA
"Ready to create a Sound Healing Experience?" + single link to `/contact`.

Delete usage of `PhilosophySection`, `PracticesSection`, `ExpectSection`, `GuideSection`, `TestimonialSection`, `BookingSection`, `StatsStrip` from Index (keep files unless orphaned).

## 3. Corporate page (`/corporate`)

Keep existing hero as-is per instruction, but retitle overlay to:
- "Deep Relaxation for High Performance Teams"
- Subcopy: "Therapeutic sound immersions designed to reduce mental fatigue, improve focus and support emotional resilience within organisations."

Then rebuild body sections in order:
1. **The Challenge** — "Modern workplaces demand constant attention. Recovery has become just as important as performance." + supporting copy (with refined "The mind is our greatest resource..." line).
2. **What This Is** — two-column (text left, image right = `IMG_6832.webp`). Lists modes: Online, Onsite, Leadership Retreats, Corporate Offsites, Wellness Programs.
3. **Ideal For** — 5 cards: Leadership Teams, High Performance Teams, Employee Wellbeing, Corporate Retreats, Decision Makers.
4. **Benefits** — typography-only list of 7 benefits.
5. **How Sessions Work** — two-column (text + image `IMG_7792.webp`), lists Gentle Breathwork / Guided Relaxation / Crystal Singing Bowls / Optional Live Ragas or Mantras.
6. **Why Sound Healing Works Online** — no image, preserves existing 435 Hz / brainwaves / nervous system / headphones explanation (this is the ONLY page it appears on).
7. **Corporate Gallery** — masonry of `IMG_6788.jpeg`, `IMG_6824.webp`, `IMG_6832.webp`, `IMG_0714.webp` with captions.
8. **Final CTA** — "Bring Deep Rest Into The Workplace." → "Enquire for Corporate Sessions" → `/contact?type=corporate`.

## 4. Private page (`/private`)

Keep existing hero as-is, but retitle overlay to:
- "Celebrate Differently."
- Subcopy: "Sound Healing Experiences for weddings, birthdays, baby showers, festive gatherings and meaningful celebrations."

Softer tone throughout. Body:
1. **More Than A Celebration** — provided intro copy.
2. **The Experience** — two-column (text left, image `IMG_7478.webp` right), lists Breathing / Relaxation / Crystal Singing Bowls / 435Hz / Live Ragas / Aromas / Soft Lighting / Blankets / Pillows. (No 435 Hz explainer here — kept short.)
3. **Perfect For** — cards: Weddings, Birthdays, Baby Showers, Women's Forums, Festive Gatherings, Retreats, Family Celebrations.
4. **Featured Experience** — editorial layout with `IMG_3844.webp` + `IMG_3848.webp`, short evocative copy about crafting unforgettable moments.
5. **Gallery** — immersive `IMG_1988.webp`, `IMG_7478.webp`, `IMG_3848.webp`.
6. **Final CTA** — "Let's Create Something Beautiful Together." → "Enquire for Private Experiences" → `/contact?type=private`.

## 5. About page

Keep as shared page. Hero portrait swapped to `IMG_3535.webp` (large). Remove any corporate/private-flavored content — leave only philosophy sections: Shrutika · Nada Yoga · Voice · Indian Classical Music · Crystal Singing Bowls · Breathwork · Guided Relaxation · closing quote.

## 6. Contact page

Simplify to: Email, WhatsApp, Location, Enquiry Form. Remove any residual class/pricing/hours content. If arriving with `?type=corporate|private`, pre-select the enquiry subject.

## 7. Assets

- **Generate 2 new hero images** (premium tier) for the Gateway:
  - `src/assets/gateway-corporate.jpg` — moody wide shot of a large audience at a sunrise sound bath / stage with crystal bowls, sense of scale, cinematic.
  - `src/assets/gateway-private.jpg` — intimate candle-lit crystal-bowl setup with cushions, warm pink/violet glow, premium editorial mood.
- **Upload the 10 user-provided images via `lovable-assets`** and reference by CDN pointer:
  - Corporate: `IMG_6788.jpeg`, `IMG_6824.webp`, `IMG_6832.webp`, `IMG_0714.webp`, `IMG_7792.webp`
  - Private: `IMG_7478.webp`, `IMG_1988.webp`, `IMG_3844.webp`, `IMG_3848.webp`
  - Portrait: `IMG_3535.webp` (About hero + Homepage About section)

## 8. Content refinements

- "Sound Healing for the office" → "Sound Healing for Teams, Leadership Retreats & Workplace Wellbeing"
- "Private Events" → "Private Experiences" in headings (route stays `/private`)
- Mind quote refined to: "The mind is our greatest resource. A rejuvenated mind is an optimised human resource."
- 435 Hz explanation lives ONLY on the Corporate "Why Sound Healing Works Online" section.
- Purge every mention of: weekly classes, €80/month, first class free, timezones, Wise/PayPal/Bank Transfer, subscriptions, Book buttons.

## 9. Preserved

- Design system (bone/clay/charcoal, enso, typography) — unchanged.
- `AmbientBackground`, `CursorGlow`, `ScrollProgress`, `Reveal`, `MagneticButton`, `SoundBowl`, `BreathCompanion`, `Footer` — unchanged.
- Page transitions unchanged.
- The Yog Nidra PDF at `public/OmShala-Yog-Nidra.pdf` — untouched (out of scope).

## Files touched

Created: `src/components/GatewayHero.tsx`, `src/pages/Corporate.tsx` (rename), `src/pages/Private.tsx` (rename), `src/assets/gateway-corporate.jpg`, `src/assets/gateway-private.jpg`, 10 `.asset.json` pointers under `src/assets/`.

Edited: `src/App.tsx` (routes + redirects), `src/components/Header.tsx` (context-aware nav), `src/pages/Index.tsx` (gateway layout), `src/pages/About.tsx` (portrait swap + philosophy-only), `src/pages/Contact.tsx` (simplify + `?type=` prefill), `src/components/Footer.tsx` (link cleanup).

Deleted: `src/pages/Schedule.tsx`, `src/components/BookingSection.tsx`.
