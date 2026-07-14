
## Om Shala Website Revision Pass

Scope: apply only the changes listed. Preserve all other layout, spacing, animations, and copy.

### 1. Brand assets

- Upload the provided `image.png` logotype ("om shala") to Lovable Assets → `src/assets/omshala-logotype.png.asset.json`.
- Add the official Om Shala purple as a CSS variable in `src/index.css` (`--omshala-purple: 240 35% 22%` — sampled from the logo bg) and expose as `bg-omshala` in `tailwind.config.ts`.

### 2. Homepage (`src/pages/Index.tsx` + `src/components/HeroGateway.tsx`)

- Delete every section under the Hero (In Motion video, `AboutSection`, `CredentialCards`, Contact CTA). Homepage becomes: Header + HeroGateway + Footer only.
- HeroGateway changes:
  - Replace the two abstract painterly canvases (`CorporateCanvas`, `PrivateCanvas`) with the flat official Om Shala purple background. Same layout, same split, same divider.
  - Replace the "OM SHALA" serif text mark + tagline block with the uploaded `omshala-logotype.png` (image only, no accompanying tagline text). Keep it in the same top-center position and preserve visual balance.
  - Switch all Hero + gateway typography from `font-serif` to `font-sans`.
  - Increase panel titles "Corporate Events" / "Private Events" — larger font size, stronger weight, clear hierarchy. Keep the shorter description underneath at the current smaller/secondary size (but replace long marketing sentence with a brief supporting line already present).
  - Refine cards for interactivity: slightly stronger border between panels, clearer hover elevation/tint, subtle visual feedback (no layout redesign).
  - Remove the word "Explore" and the "Choose your path" scroll hint. Keep only the arrow (`→`) as the navigation cue.

### 3. Corporate (`src/pages/EventsPublic.tsx`) & Private (`src/pages/EventsPrivate.tsx`) — Hero restructure

- Change the Hero from image-with-overlay-text into a stacked layout:
  1. Hero image at the same container dimensions (no cropping/zoom — use `object-contain` on natural aspect or a container that shows the full photo; remove `objectPosition` zoom hack and the white radial glow behind text).
  2. Generous spacing.
  3. Editorial content block below the image (eyebrow, heading, body, quote/description, CTAs) — copy unchanged.
- Switch Hero typography from `font-serif` to `font-sans`. No other copy changes.

### 4. Credentials section (Corporate + Private only)

- Remove `<CredentialCards />` usage on Homepage (already handled in step 2).
- Replace `<CredentialCards />` on Corporate and Private with a new inline two-column layout:
  - Left: credentials listed vertically as a plain editorial list (no cards, no boxes, no numbered chips).
  - Right: the video currently on the Homepage (`home-intro.mp4`) rendered via `MediaVideo`.
- Same layout used on both pages.

### 5. Corporate page — other tweaks (`EventsPublic.tsx`)

- Increase visual prominence of section headings: "What This Is", "Benefits", "How a Session Works", "The Rise of Online Sound Baths", "Booking" (larger size / stronger weight). No other typography changes.
- "How a Session Works": replace the numbered `01/02/03/04` chips with standard bullet points. Keep titles, descriptions, and section layout intact.
- Rename "A Glimpse" section heading to "Experiences".
- "The Rise of Online Sound Baths": subtly highlight the phrase "Felt deeply, even from your desk." within the existing body (e.g. italic or `text-clay`). Do not rewrite anything.
- Booking section: convert the sentence "Sessions can also be positioned as part of leadership development or performance optimisation programs." into an additional bullet in the existing list. Remove the second standalone paragraph.
- Final CTA (Booking): keep only one CTA. Heading becomes "Schedule a Consultation". Below it, a single clickable WhatsApp card:
  - Label: `WhatsApp · +91 74003 61681`
  - Href: `https://wa.me/917400361681?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20Corporate%20Events.`
  - Remove the existing dual CTA buttons and the email/WhatsApp meta row.

### 6. Private page — Experience section (`EventsPrivate.tsx`)

- Replace the current center-aligned "The Experience" block with a two-column layout:
  - Left: the second uploaded image (`image-2.png`) — upload to Lovable Assets and render.
  - Right: existing copy, unchanged.
- Within the copy, apply subtle typographic emphasis only:
  - Highlight "Sound healing can be experienced seated or laying down in a calm environment." (e.g. bold or `text-bone`).
  - Highlight "The Crystal Singing Bowls" (already partly styled — extend emphasis).
  - Italicise "Soothing aromas, soft lighting and cozy pillows and blankets".
- Rename standalone "A Glimpse" video section heading on Private page to "Experiences" as well (consistency with Corporate — implicit).
- Final CTA on Private: replace dual CTAs with same single WhatsApp card pattern, heading "Schedule a Consultation", WhatsApp message pre-fill: `Hi%2C%20I%27d%20like%20to%20enquire%20about%20Private%20Events.`

### 7. Contact page (`src/pages/Contact.tsx`)

- Remove the enquiry form section entirely (form + heading).
- Keep only the Email + WhatsApp contact method cards and the hero intro. No enquiry categories, no additional fields.

### 8. Header (`src/components/Header.tsx`)

- Simplify navigation across all routes to only: `Home`, `Contact`.
- Remove journey-scoped logic, About, Corporate, Private, and Enquire CTA entries from both desktop nav and mobile menu.

### Technical notes

- No new components — extend existing ones. `CredentialCards.tsx` stays but is no longer used on Homepage; a new inline two-column block lives in each events page (using the existing `CREDENTIALS` export).
- Font: `font-sans` already maps to Inter in `tailwind.config.ts`; no font install needed.
- Purple color: introduce as HSL token in `index.css`, add Tailwind color `omshala` — used only on Homepage Hero background.
- No changes to animations, `PageTransition`, `Reveal`, `Footer` (aside from what's untouched), spacing scale, or the design system tokens.

### Out of scope

Do not modify: other section layouts, copy, spacing, `Footer`, `AboutSection` component itself, page transitions, or any file not listed above.
