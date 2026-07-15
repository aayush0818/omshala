## Om Shala — Conservative Revision Pass

Refine the existing site only where specified. No redesigns, no content rewrites, no layout changes outside the items below.

---

### 1. Global

**Header (`src/components/Header.tsx`)**
- Replace all journey-scoped logic. Nav is always: `Home`, `Contact`. Remove Corporate/Private/About/Enquire links (desktop + mobile).

**Remove sound/breath widgets (`src/App.tsx`)**
- Remove `BreathCompanion` and `SoundBowl` imports + renders. Delete component files.
- Remove any "435 Hz" interactive widget references site-wide (keep text mentions of 435 Hz in copy).

**Homepage — remove sections below gateway (`src/pages/Index.tsx`)**
- Delete: A First Look video, About, Credentials, Contact CTA sections, and Footer render.
- Homepage now contains only `Header` + `HeroGateway`.
- Remove "Choose your path" hint at bottom of `HeroGateway`.

---

### 2. Homepage Gateway (`src/components/HeroGateway.tsx`)

**Background**
- Replace both panel canvases (`CorporateCanvas`, `PrivateCanvas`) and section background with a single flat Om Shala brand purple (approx `#2E2A5E` — sampled from uploaded branding image). No abstract painterly art, no gradients, no rings, no grain. Keep hover dim / expand-on-click behavior.

**Brand mark**
- Replace centered "OM SHALA" wordmark with typography matching the uploaded logo: lowercase `om shāla` (with macron over the `a`), in a refined display serif, in the bone/beige tone (`hsl(var(--bone))`). Below it: `sound healing experiences` in a light sans, letter-spaced, same bone tone. Remove the divider line between them. Keep current position.

**Gateway cards — visual only**
- Card container: add a slightly stronger bone-tinted border (`border border-bone/25`), a subtle inner surface (`bg-bone/[0.03]`), and a clearer hover state (`hover:border-clay/70 hover:bg-bone/[0.06]`). Improves clickability without changing layout.
- Headings `Corporate Events` / `Private Events`: make noticeably more prominent — larger size, tighter tracking, stay non-bold. Replace both `<h2>` blocks (desktop long-title + mobile short) so the eyebrow becomes the main heading at a larger scale; drop the descriptive long sentence.
- Typography: swap the serif on eyebrow + headings for a refined modern display face (add Google Font `Fraunces` via `index.html` and expose as `font-display` in `tailwind.config.ts`). Applied only inside `HeroGateway`. Not bold.
- CTA: remove `Explore` text and the horizontal line. Replace with a small square bone-bordered box containing an arrow icon (`→`), placed where the current CTA sits. Keep hover nudge animation.

---

### 3. Corporate & Private Hero (`EventsPublic.tsx`, `EventsPrivate.tsx`)

- Keep current hero section height.
- Restructure hero into two stacked blocks inside the same section:
  1. Image block: the current hero image at full width, no overlays, no gradients, no `object-cover` scaling tricks, no `objectPosition` crop. Use `object-contain` on a fixed hero-height container (or `object-cover` at `object-position: 50% 50%` with no scale) so the image displays naturally within existing hero dimensions.
  2. Content block directly beneath: move the existing eyebrow, headline, body paragraph, quote (Private only), and CTA area under the image. Do not modify a single word, break, or class of the text content itself.
- Remove the radial white glow, dark overlays, floating orbs/particles, decorative vertical clay line, and text-shadow styles added for legibility (no longer needed since text is off the image).
- CTA: remove the `WhatsApp Us` secondary button from Corporate hero. Private hero already has no WhatsApp secondary — leave as is.

---

### 4. Credentials Section (Corporate + Private)

Replace `<CredentialCards />` on both pages with a new inline two-column block:
- Left column: `Credentials` heading (existing style, larger label size per §6) + vertical editorial list of the `CREDENTIALS` array. No cards, no borders, no numbered chips. Simple stacked list with hairline dividers between items, current typography.
- Right column: the video currently on the homepage (`home-intro.mp4` via `homeVideoAsset`) rendered through `MediaVideo`, portrait/natural aspect preserved. Sized so its height roughly matches the credentials list height.
- Keep the existing "A Glimpse" video sections on both Corporate and Private pages unchanged (they use their own videos).
- Since `CredentialCards` is no longer imported anywhere, leave the file in place but unreferenced (safe).

---

### 5. Corporate Page — additional edits (`EventsPublic.tsx`)

**How a Session Works**
- Replace the numbered indicator box (`01`–`04` in a bordered square) with a simple bullet dot (`•` in clay). Keep the rest of the layout, spacing, typography, and copy exactly.

**Booking section**
- Convert the standalone paragraph "Sessions can also be positioned as part of leadership development or performance optimisation programs." into a fourth `<li>` in the existing bullet list, using the same `·` marker style. Delete the paragraph.
- CTA area:
  - Remove the "Request the rate card" (`mailto:`) button entirely.
  - Above the remaining button add a small heading: `Schedule a Consultation` (small tracked uppercase eyebrow style, consistent with existing labels).
  - Replace the "Schedule a consultation" secondary link with a single primary button: `WhatsApp · +91 7400361681`, linking to `https://wa.me/917400361681?text=Hi%2C%20I%20wanted%20to%20enquire%20about%20Corporate%20Events.` Style it as the primary CTA (bone-on-charcoal, matches prior primary button treatment).
  - Delete the Email / WhatsApp contact row below the buttons.

---

### 6. Section Headings — slightly larger

In both `EventsPublic.tsx` and `EventsPrivate.tsx`, bump only the label eyebrows (`What This Is`, `Experience` / `The Experience`, `Booking`, `How a Session Works`, `Credentials`) from `text-xs` / `text-[10px]` to `text-sm` with same tracking, color, and layout. No other changes.

---

### 7. Private Page — additional edits (`EventsPrivate.tsx`)

**Experience section**
- Convert current center-aligned block into a two-column layout: left = image (uploaded studio image, sound-healing setup with singing bowls at night — save to `src/assets` via lovable-assets and import); right = existing text content. Do not modify wording.
- Within the paragraph, apply inline treatments only (no rewording, no line-break changes):
  - Wrap `Sound healing can be experienced seated or laying down in a calm environment.` in an emphasized span (e.g. `text-bone font-medium` / slightly larger).
  - Wrap `The Crystal Singing Bowls` in the same highlight treatment.
  - Wrap `Soothing aromas, soft lighting and cozy pillows and blankets` in `<em>`.
- Keep existing bg-charcoal treatment, spacing, and typography for surrounding elements.

**CTA section**
- Above the primary button add a small heading: `Schedule a Call`.
- Replace the `Call +91 7400361681` button with `WhatsApp` linking to `https://wa.me/917400361681?text=Hi%2C%20I%20wanted%20to%20enquire%20about%20Private%20Events.`. Remove the secondary `Send an enquiry` link so WhatsApp is the only CTA.

---

### 8. Contact Page (`src/pages/Contact.tsx`)

- Remove the entire enquiry `<form>` section (`#enquire`). Leave hero + methods sections untouched. Remove now-unused `formData`, `handleSubmit`, `Send` import.

---

### Technical notes

- New font: add `Fraunces` (weights 300, 400) via `<link>` in `index.html`; register as `font-display` in `tailwind.config.ts` and apply only inside `HeroGateway`.
- Uploaded logo image is used strictly as design reference (typography + purple). Do not embed the raster.
- Uploaded studio-night photo (`user-uploads://image-3.png`) becomes the Private Experience image via `lovable-assets create` → `src/assets/private-experience.webp.asset.json`.
- Delete `src/components/SoundBowl.tsx` and `src/components/BreathCompanion.tsx` after removing imports.
- Verify build after edits: no orphan imports (`Mail`, `Send`, `Users`, `useScrollAnimation`, unused asset imports on Public), no broken routes.
