## Homepage rebuild to match final approved reference

Rebuild `src/components/HeroGateway.tsx` to match the desktop and mobile references exactly. No other files touched except adding Montserrat to `index.html`.

### Structure

Single full-viewport section, two stacked blocks:

- **Hero (top ~60% desktop / ~58% mobile)** — flat `#322E4F`, `om shāla` wordmark centered, `SOUND HEALING EXPERIENCES` subtitle directly beneath.
- **Lower (~40% desktop / ~42% mobile)** — flat `#0E0D12`, split into two equal 50/50 halves with a single thin vertical divider (`#4A4A4A`, ~1px) that starts at the top of the black section and ends at the bottom. Left half: `CORPORATE\nEVENTS` + arrow. Right half: `PRIVATE\nEVENTS` + arrow. Same layout on mobile — no vertical stacking.

### Typography

- Logo `om shāla`: Cormorant Garamond, light/regular, large elegant serif — rendered as text (not the PNG) so it matches the reference exactly.
- Event titles: Cormorant Garamond regular, uppercase, two lines, centered.
- Subtitle: Montserrat, uppercase, light weight, wide letter-spacing.
- Text color throughout: `#D8C6B7`.

### Fonts to load

Add Montserrat (300/400) to the existing Google Fonts `<link>` in `index.html`. Cormorant Garamond already loaded.

### Interactions

Halves are clickable (link to `/events/public` and `/events/private`). Hover = subtle opacity transition on text/arrow only. No scale, glow, or motion.

### Colors used (inline hex, per spec)

Purple `#322E4F`, black `#0E0D12`, text `#D8C6B7`, divider `#4A4A4A`. Used directly since these are exact spec values, not theme tokens.

### Not changing

`Index.tsx`, header/footer, journey pages, tailwind config, `index.css`, existing wordmark PNG asset. Only `HeroGateway.tsx` + font link in `index.html`.
