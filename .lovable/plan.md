# Om Shala — Refinement Pass (Round 3)

Refinements only. Visual language stays. Focus: real assets shown naturally, better rhythm, footer polish, full mobile pass, remove em dashes and physical location.

## 1. Asset ingestion

Upload the 3 new photos + 3 videos to Lovable Assets (CDN):
- `IMG_6832.jpg` → Corporate "What This Is"
- `IMG_7478.jpeg` → Corporate "The Setup"
- `IMG_8713.jpeg` → Private (dedicated new section)
- `c5a4581c-...MP4` → Homepage video moment
- `carousel.MP4` → Private page video moment
- `IMG_0743.MOV` → Corporate page video moment

Videos will render via a shared `MediaVideo` component: autoplay, muted, loop, playsInline, `preload="metadata"`, poster fallback, `object-contain` so nothing crops.

## 2. Image container rule (site-wide)

Introduce a `NaturalImage` pattern: images sit in a container with `aspect-auto` (or their natural ratio), `object-contain`, a subtle bone/muted backdrop, and the existing hairline offset border. No forced `aspect-[4/5]` crops for photographic content. Applied to Corporate "What This Is", Corporate "The Setup", and every Private page image.

## 3. Corporate page (`src/pages/EventsPublic.tsx`)

- Replace `img3-large-event` in "What This Is" with the new `IMG_6832` asset, shown in full (no crop).
- Replace `img4-stage-bowls` in "The Setup" with the new `IMG_7478` asset, shown in full.
- Add a dedicated **"See it in motion"** section between "How a Session Works" and "Online Sound Baths Explainer" that hosts `IMG_0743.MOV` as a standalone video block (contained, generous padding, short caption).
- Standardise vertical rhythm to match other sections.

## 4. Private page (`src/pages/EventsPrivate.tsx`)

- Increase spacing between Hero and "The Experience" (larger top padding, quiet spacer with hairline, slower reveal delay) so the transition feels intentional.
- Rework all Private image blocks to use `NaturalImage` (no crop/zoom/stretch); rebalance the gallery into a symmetric two-column composition with equal gutters and aligned baselines.
- Add a new **dedicated section** hosting `IMG_8713.jpeg` (e.g., a quiet editorial "The Room" moment between The Experience and the moments gallery) — not merged into the gallery.
- Add a standalone video section for `carousel.MP4` with its own heading and breathing room, separate from images.

## 5. Homepage (`src/pages/Index.tsx`)

- Insert a standalone video section (using `c5a4581c-...MP4`) between the gateway and the About/Credentials block. Full-width contained video, short intro line, no gallery grouping.

## 6. About page (`src/pages/About.tsx`)

- Remove grayscale/filter treatment from Shrutika's portrait (`IMG_3840` / `img9`); render in full colour. No other changes.

## 7. Typography — remove em dashes

Sweep every page/component and replace `—` with commas, periods, or restructured sentences. Files to scan: all `src/pages/*.tsx` and `src/components/*.tsx`. Also verify any decorative uses inside JSX strings.

## 8. Remove physical location

Strip "Bandra West", "Mumbai", and any address text from:
- `src/components/Footer.tsx`
- `src/pages/Contact.tsx`
- Any other page mentioning location
Keep email + WhatsApp only.

## 9. Footer refinement (`src/components/Footer.tsx`)

Keep minimal aesthetic; upgrade composition:
- Three-column layout (brand + enso mark / navigation / contact)
- Clearer type hierarchy: small-caps eyebrow labels, refined serif wordmark, muted body
- Hairline dividers, generous vertical padding
- Aligned baselines, consistent spacing scale
- Bottom meta row: © line + subtle tagline, right-aligned
- Remove location line entirely

## 10. Comprehensive mobile pass

Audit every page/section at mobile breakpoints. Adjustments per component:
- Hero: reduce type scale, tighten line-height, cap line length, adjust vertical padding, ensure CTA buttons stack full-width with 44px+ touch targets
- Section spacing: introduce mobile-specific `py-*` values (smaller than desktop)
- Typography: fluid scale via responsive Tailwind classes (`text-3xl md:text-5xl` etc.)
- Images / video: full-width, natural ratio, no side padding jitter
- Galleries: single-column on mobile with proper gap
- Navigation (`Header.tsx`): verify mobile menu behaviour, tap targets, active state
- Footer: stack columns cleanly, keep hierarchy
- Gateway (`HeroGateway.tsx`): confirm split panels stack vertically on mobile with equal weight
- Remove any horizontal overflow; ensure all sections respect viewport width

## Technical notes

- New shared components: `src/components/NaturalImage.tsx`, `src/components/MediaVideo.tsx`.
- Assets uploaded via `lovable-assets create` from `/mnt/user-uploads/`; delete old `img3-large-event` and `img4-stage-bowls` pointers after swap.
- Videos autoplay muted/looped/inline; include `poster` where a still exists.
- Em-dash sweep done with `rg -l "—" src/` then targeted edits.
- Mobile pass verified with the Playwright browser at 375px viewport, capturing each page for review.

## Out of scope

- No changes to overall visual identity, color tokens, or the gateway concept.
- No new content copy beyond section labels for the new video sections.
