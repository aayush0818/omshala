# Om Shala 2.0 — Round 5 Revision

A structural pass that repositions the site as a pure gateway with two editorial journeys, all funneling to a single WhatsApp conversion point.

## 1. Brand assets & typography

- Save the uploaded `om shala` wordmark logo as a Lovable asset (`src/assets/om-shala-logo.png`) and the second uploaded photo (purple-lit studio) as `src/assets/experience-purple.webp` for the Private Experience section.
- Extract the official purple from the logo (deep indigo/violet) and add it as a semantic token `--brand-purple` in `src/index.css` + `tailwind.config.ts`.
- Introduce a clean modern sans-serif (Inter or similar, via Google Fonts in `index.html`) as `font-sans-display` for the new gateway + hero + section headings. Serif stays available but is removed from the touched surfaces per spec.

## 2. Header (global)

Rewrite `src/components/Header.tsx` so navigation contains only:
- `Home` → `/`
- `Contact` → `/contact`

Remove journey-scoped logic, Enquire CTA, Corporate/Private/About links, and mobile equivalents. Keep the wordmark linking home, keep the mobile hamburger.

## 3. Homepage (`src/pages/Index.tsx` + `HeroGateway.tsx`)

Strip the page down to a single full-viewport gateway:
- Full-page background = brand purple.
- Centered Om Shala logo image (generous whitespace).
- Two large cards below the logo: `Corporate Events` / `Private Events`.
  - Sans-serif, large heading, small supporting description, arrow icon only.
  - Subtle border, obvious hover state, generous gap.
  - No "Explore" / "Choose Your Path" / "Learn More" labels.
- Delete every other section from the homepage (About, Credentials, video, CTA band, footer content sections). Footer component may remain minimal at bottom.

`HeroGateway.tsx` will be rewritten to this minimal spec (removing painterly gradients, wordmark type block, subtext panels, animated SVGs).

## 4. Corporate & Private pages — shared changes

### Hero
- Remove overlay gradients, radial white glow, text-over-image layout.
- Show the hero photograph in its natural aspect (no crop/zoom/opacity), full-width contained.
- Move eyebrow + headline + body copy into an editorial block **below** the image, using the new sans-serif.

### Credentials section (new shared layout)
- Two columns: left = credentials as a clean vertical editorial list (no cards, no containers, just typographic rhythm); right = the current homepage intro video (`home-intro.mp4`).
- Apply to both Corporate and Private. Rewrite `CredentialCards.tsx` (or add a new `CredentialsEditorialSplit.tsx`) accordingly and drop the card grid usage.

### Typography scale
- Bump all primary section headings (`What This Is`, `How a Session Works`, `The Rise of Online Sound Baths`, `Benefits`, `Experiences`, `Booking`, `The Experience`, etc.) to a larger, consistent size (e.g. `text-4xl md:text-6xl`, sans-serif, medium weight).

### "How a Session Works"
- Replace numbered ordered list with bulleted list styling (dot markers, lighter rhythm).

### "A Glimpse" → "Experiences"
- Rename the heading on both pages. Positioning + video content stay.

### "The Rise of Online Sound Baths" (Corporate)
- Increase heading prominence (largest section heading on the page).
- Wrap `Felt deeply, even from your desk.` in a span with subtle emphasis (italic + slightly heavier weight + brand color accent) while keeping it inline in the paragraph.

### Booking section (Corporate)
- Pull the sentence `Sessions can also be positioned as part of leadership development or performance optimisation programs.` out of the paragraph and render it as a standalone bullet below.

### Final CTA (both pages)
- Replace the current CTA block (dual buttons, background band) with:
  - Heading: `Schedule a Consultation` (Corporate) / `Schedule a Call` (Private).
  - Single clickable contact card: `WhatsApp · +91 74003 61681`.
  - `href` = `https://wa.me/917400361681?text=<encoded message>` with:
    - Corporate: `Hi, I'd like to enquire about Corporate Events.`
    - Private: `Hi, I'd like to enquire about Private Events.`
  - Remove all other buttons, tel: links, secondary CTAs, form links.

## 5. Private page — Experience section rework

- Swap in the newly uploaded purple-lit studio image (`experience-purple.webp`).
- Layout: left image (natural proportions, generous size), right editorial text.
- Rewrite copy hierarchy:
  - Lead statement (larger/heavier): `Sound healing can be experienced seated or laying down in a calm environment.`
  - Body: `Participants are guided through deep breathing and relaxation techniques to be able to let go and absorb the subtle vibrations of sound.`
  - Sub-emphasis: `The Crystal Singing Bowls` (highlighted) followed by body `used are tuned to a healing frequency, 435 Hz, and instantly dissolve mental and emotional tensions, sometimes even putting people off to sleep. Ragas are sung live in the Indian classical style, like lullabies for the soul.`
  - Poetic break: `Soothing aromas, soft lighting and cozy pillows and blankets` in italics, followed by body `are put together aesthetically, to make this journey truly special and unforgettable.`

## 6. Contact page (`src/pages/Contact.tsx`)

- Remove the enquiry form entirely.
- Keep an ultra-minimal editorial layout with just two links:
  - Email: `omshala.official@gmail.com` (mailto:)
  - WhatsApp: `+91 74003 61681` (wa.me link, no prefilled journey message here — generic).
- Header + Footer stay.

## 7. Cleanup

- Remove now-unused components/imports: `AboutSection` (from homepage & journey pages), old CredentialCards grid usage, dual-button CTA blocks, `MagneticButton` if unused, homepage `MediaVideo` first-look block.
- Keep files that other pages still consume; delete only files with zero remaining references.

## Technical notes

- Files touched: `src/pages/Index.tsx`, `src/pages/EventsPublic.tsx`, `src/pages/EventsPrivate.tsx`, `src/pages/Contact.tsx`, `src/components/Header.tsx`, `src/components/HeroGateway.tsx`, `src/components/CredentialCards.tsx` (or new split component), `src/index.css`, `tailwind.config.ts`, `index.html`.
- New assets: `src/assets/om-shala-logo.png.asset.json`, `src/assets/experience-purple.webp.asset.json` via `lovable-assets create` from `/mnt/user-uploads/`.
- WhatsApp links use `https://wa.me/917400361681?text=` with `encodeURIComponent` for the journey-specific messages.
- No backend, schema, or dependency changes required.
