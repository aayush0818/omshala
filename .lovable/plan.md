# Om Shala 2.0 — Round 2 Implementation Plan

## Image handling
Upload all 10 user images via `lovable-assets` (kept off the repo binary tree) and import the resulting `.asset.json` pointers where needed.

Mapping:
- img1 → Home About section
- img2 → About page (secondary)
- img3, img4 → Corporate page
- img5 → Home gateway (Private panel)
- img6, img7, img10 → Private page
- img8 → Home gateway (Corporate panel)
- img9 → About page hero portrait

Replaces the current AI-generated `gateway-corporate.jpg`, `gateway-private.jpg`, and `guide-portrait.jpg` where relevant.

---

## 1. Homepage — `src/components/HeroGateway.tsx`
- Swap panel images to img8 (Corporate) and img5 (Private).
- Fix legibility: strengthen the gradient overlay (darker `charcoal/95` base, taller falloff) and lift eyebrow label from `text-[10px] text-bone/70` to `text-xs tracking-[0.45em] text-bone` with a thin clay underline; ensure title stays pure `text-bone` with a subtle text-shadow.
- Update copy:
  - Left eyebrow → `CORPORATE EVENTS`; title → "Sound Healing for the office, leadership retreats and employee wellbeing programs."
  - Right eyebrow → `PRIVATE EVENTS`; title → "Sound Healing for your next celebration or social event, from weddings to baby showers, to birthdays, to festive get-togethers."

## 2. Homepage — About section (`src/pages/Index.tsx`)
- Replace `guide-portrait.jpg` with img1 in the left column.

## 3. Homepage — Credentials redesign (`src/pages/Index.tsx`)
Replace the current flat `<ul>` with a more editorial two-column layout:
- Large sticky left column with the eyebrow "Credentials" and the heading.
- Right column: numbered credential entries (`01 — 08`) in serif numerals, clay accent, generous vertical rhythm, hairline dividers, subtle stagger `Reveal`.
- Keep the 8 items unchanged.

## 4. Corporate page — `src/pages/EventsPublic.tsx` (full restructure)
New section order:
1. **Hero** — headline "Deep Relaxation for High-Performance Teams", body + supporting italic line, CTA "Enquire for Corporate Sessions" (anchors to `#enquire`).
2. **Credentials strip (subtle)** — small individual cards in a responsive grid (2/4 cols), each with number + one credential line, thin borders, no bold. Distinct from homepage treatment.
3. **Sound Baths for Corporate Wellness** — heading + body + "Ideal For" list (3 items), clean editorial layout with a supporting image (img3).
4. Keep existing **Benefits** cards; delete the intro paragraph above them.
5. Keep existing **Why Sound Healing Works Online** section.
6. **The Setup** — new section with heading + body, image (img4) alongside.
7. **Booking** (replaces current Enquire) — same visual shell, id `enquire`, updated heading/body/list/CTA and contact block (email + WhatsApp).

## 5. Private page — `src/pages/EventsPrivate.tsx`
- Hero: add a CTA button "Enquire for Private Events" linking to `#enquire` (or contact block anchor).
- New **The Experience** section directly below hero: full-bleed editorial block with img6 as the visual, provided body copy.
- Remove **In Her Words** section entirely.
- Add img7 and img10 as supporting visuals within existing sections (e.g. between "What to Expect" and CTA).
- Final CTA section: keep layout; replace copy with the wedding/birthday/Diwali paragraph + "Call +91 7400361681".

## 6. About page — `src/pages/About.tsx`
- Replace current portrait with img9.
- Insert img2 within the flowing editorial passage as a supporting figure.
- Append a **Credentials** section at the bottom, reusing the same subtle-card treatment used on the Corporate page (visually distinct from the homepage editorial version, and appropriate for a secondary page).

## 7. Shared component
- Create `src/components/CredentialCards.tsx` (subtle card grid) used by Corporate + About.
- Homepage keeps its bespoke editorial variant inline in `Index.tsx`.

---

## Technical notes
- All new imagery imported as `@/assets/<name>.asset.json` pointers created via `lovable-assets create --file /mnt/user-uploads/... > src/assets/<name>.asset.json`.
- Delete the now-unused `src/assets/gateway-corporate.jpg`, `gateway-private.jpg`, and `guide-portrait.jpg` after swap.
- No routing, nav, or design-token changes. Motion primitives (`Reveal`, `MagneticButton`) reused as-is.
- Contact info stays: `omshala.official@gmail.com` / `+91 7400361681`.