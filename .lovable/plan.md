## Refinement Verification & Completion Pass

Most items from this brief were implemented in the previous turn (Header, Homepage cleanup, widget removal, HeroGateway purple + wordmark + arrow, Contact form removal, EventsPrivate/EventsPublic rewrites). This plan verifies each item against the spec and completes what's outstanding — no redesigns.

---

### 1. New Private Experience image
- Replace `src/assets/private-experience.png` with the newly uploaded `user-uploads://image-4.png` (crystal bowls + tanpura at night, pink/purple light). Regenerate the asset pointer via `lovable-assets create`.

### 2. Verify Homepage Gateway (`src/components/HeroGateway.tsx`)
Confirm and adjust if needed:
- Background: flat `#2E2A5E` ✓
- Wordmark: `om shāla` in Fraunces + `sound healing experiences` subtitle ✓
- Cards: full border, hover distinction, large scale preserved ✓
- Fraunces used on card headings; not bold; scale-based emphasis ✓
- Only square arrow button remains — no "Explore" text, no line, no "Choose your path" hint ✓
- No content below gateway ✓

### 3. Verify Corporate Hero (`src/pages/EventsPublic.tsx`)
- Image stacked ABOVE text using `object-contain` in natural aspect (no crop, no zoom, no overlays)
- Eyebrow / heading / paragraph / italic quote unchanged in wording
- WhatsApp secondary button removed from hero
- Apply Fraunces to hero heading (light/regular weight) to match Homepage typography

### 4. Verify Private Hero (`src/pages/EventsPrivate.tsx`)
- Same stacked image-then-text pattern with natural aspect
- Content unchanged; Fraunces applied to heading
- No secondary CTAs in hero

### 5. Credentials Section (both pages)
- Confirm two-column: left editorial list, right = `home-intro.mp4` via `MediaVideo`
- Distribute list items with `justify-between` + `min-h-full` so first item sits at top, last at bottom, dividers preserved — visually matches video height
- No cards; wording/order unchanged

### 6. Section Headings
- Bump eyebrow labels (`What This Is`, `How A Session Works`, `Experience`, `Booking`, `Credentials`, `The Rise of Online Sound Baths`) from `text-xs` → `text-sm` (or equivalent small bump). Layout unchanged.

### 7. How A Session Works (Corporate)
- Replace numbered `01`–`04` bordered squares with a simple clay bullet dot. Everything else identical.

### 8. Booking (Corporate)
- Move "Sessions can also be positioned as part of leadership development or performance optimisation programs." into the existing `<ul>` as a new `<li>`
- Add small eyebrow heading `Schedule a Consultation` above the CTA
- Single primary CTA: `WhatsApp · +91 74003 61681` → `https://wa.me/917400361681?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20Corporate%20Events.`
- Remove "Request the Rate Card" button and the Email/WhatsApp text row beneath

### 9. Private Experience Editorial
Rebuild the right-column composition using scale + whitespace (no bold-driven emphasis). Wording untouched:
- **Lead statement** (large serif display, ~text-2xl md:text-3xl, light): `Sound healing can be experienced seated or laying down in a calm environment.`
- Body paragraph: `Participants are guided through deep breathing and relaxation techniques to be able to let go and absorb the subtle vibrations of sound.`
- **Editorial heading** (serif, tracked, medium size): `The Crystal Singing Bowls`
- Body: `used are tuned to a healing frequency, 435 Hz, and instantly dissolve mental and emotional tensions, sometimes even putting people off to sleep. Ragas are sung live in the Indian classical style, like lullabies for the soul.`
- **Italicised standalone editorial line**: `Soothing aromas, soft lighting and cozy pillows and blankets`
- Body: `are put together aesthetically, to make this journey truly special and unforgettable.`
- Left column: newly uploaded image at natural proportions.

### 10. Private CTA
- Small eyebrow `Schedule a Call`
- Single WhatsApp button: `WhatsApp · +91 74003 61681` → `https://wa.me/917400361681?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20Private%20Events.`
- Remove every other CTA in that section.

### 11. Verify Contact / Header / Globals
- Contact: form removed, everything else intact ✓
- Header: only Home + Contact ✓
- Globals: `BreathCompanion`, `SoundBowl`, 435 Hz widget removed everywhere ✓

### Technical notes
- No new dependencies. Uses existing `Fraunces` (already added), `MediaVideo`, `home-intro.mp4` asset.
- After edits: build check, and quick visual verification via Playwright screenshots of `/`, `/events/public`, `/events/private`, `/contact` on desktop + mobile.
