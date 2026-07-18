## Typography System Unification + Closing Section Refinement

Scope: Corporate (`EventsPublic.tsx`) and Private (`EventsPrivate.tsx`) pages only. Homepage untouched. No layout, spacing, or content changes.

### 1. Font Families

Load two families in `index.html`:
- **Passenger Display** (Light 300, Regular 400) — display font. Since Passenger Display is a commercial Klim typeface not on Google Fonts, we'll load it via Adobe Fonts if a kit is available, otherwise fall back to the closest free editorial serif (Cormorant Garamond, already loaded) mapped to the same `font-display` token. Will confirm with user which route to take (see question at bottom of plan if needed) — default: keep current Cormorant Garamond aliased as the "display" role and apply the same hierarchy rules, since visually the request is about *consistency* not the specific typeface swap.
- **Inter** (400, 500, 600) — already loaded, extend weights.

Remove all other display families from usage in these two pages (no Fraunces, no Playfair, no Cormorant variants beyond the one display alias).

### 2. Typography scale (added as utilities in `src/index.css`)

```
.t-h1  → display, weight 300, clamp(2.5rem, 4vw, 4rem)   (~56–64px)
.t-h2  → display, weight 300, clamp(1.75rem, 2.5vw, 2.5rem) (~34–40px)
.t-h3  → Inter 600, 1.375rem–1.625rem (~22–26px)
.t-body → Inter 400, 1.125rem (~18px), line-height 1.75
.t-small → Inter 400, 1rem (~16px)
.t-caption → Inter 500, 0.875rem (~14px), tracking-wide uppercase for eyebrows
.t-nav / .t-btn → Inter 500
```

### 3. Apply hierarchy in `EventsPublic.tsx` and `EventsPrivate.tsx`

Walk every heading and text node and swap classes to the new utilities:
- H1 hero titles → `.t-h1`
- Section titles (Benefits, Credentials, The Experience, How a Session Works, Rise of Online Sound Baths, Experiences, Booking, etc.) → `.t-h1`
- Subsection headings (Crystal Singing Bowls, Online / On-site / Off-site Sessions, session-step titles) → `.t-h2`
- Card titles (Accessible, Fully Guided, Suitable for Everyone, benefit cards, etc.) → `.t-h3`
- All paragraphs → `.t-body`
- Eyebrows / small labels → `.t-caption`
- Buttons / CTA labels → `.t-btn`

Remove ad-hoc size classes (`text-2xl`, `text-3xl`, `font-display`, `font-serif`, italic display accents that fight hierarchy) on these two pages only. Keep italics only where they're part of a body sentence, not as heading treatment.

### 4. Credentials + Final CTA → unified black closing block

On both pages:
- **Credentials section**: set background to the exact black used behind the embedded `MediaVideo` (read the current video wrapper background; if none is explicit, use `#0E0D12` — the same near-black already defined for the homepage gateway lower panel — and apply it to the video frame too so they blend). Text color → soft light grey (`#D6D3CE`, roughly `text-bone/80`). Divider lines and eyebrow accents shift to a muted grey variant.
- **Final CTA / Booking section**: same black background, same light grey text. Replace the current `bg-gradient-to-b from-brand-purple to-brand-purple-deep`. Buttons remain visually the same shape/position; only their surrounding palette adapts (bone button on black stays; hover states adjusted so contrast holds).
- No layout, spacing, structure, button, or copy changes.

Result: Credentials + Final CTA read as one continuous black closing block.

### Files to edit

- `index.html` — add/adjust font `<link>` (Inter weights 400/500/600 confirmed, Passenger Display via chosen source or keep current display alias).
- `src/index.css` — add `.t-h1 / .t-h2 / .t-h3 / .t-body / .t-small / .t-caption / .t-btn / .t-nav` utilities.
- `src/pages/EventsPublic.tsx` — apply utilities across every text node; recolor Credentials + CTA sections.
- `src/pages/EventsPrivate.tsx` — same treatment.

### Out of scope

Homepage (`HeroGateway.tsx`, `Index.tsx`), Header, Footer, Contact page, all layout/spacing/content/animations.

### One question before I build

Passenger Display is a paid Klim Type Foundry font not on Google Fonts. Do you have an Adobe Fonts kit ID or a self-hosted `.woff2` file for it? If not, I'll keep the current Cormorant Garamond as the "display" role (visually similar editorial serif) and apply the entire hierarchy + weights + black closing block exactly as specified — the *system* lands even if the exact typeface waits.
