## Brand Purple Family — Refinement Plan

Introduce the Om Shala purple as a **family of tones** rather than a single flat colour, so sections gain rhythm and depth without losing brand cohesion.

### 1. Extend the token system (`src/index.css` + `tailwind.config.ts`)

Add sibling tokens around the existing `--brand-purple: #2E2A5E`:

- `--brand-purple-deep`   → `#1F1C45` (≈ -8% lightness) — intimate, immersive
- `--brand-purple`        → `#2E2A5E` (unchanged) — canonical brand
- `--brand-purple-mid`    → `#3B3775` (≈ +6%)      — softer body sections
- `--brand-purple-soft`   → `#4A4690` (≈ +14%)     — calm/airy moments
- `--brand-purple-mist`   → `#E9E7F2` (very light tint) — subtle backgrounds on light pages

Add two reusable gradients:
- `--gradient-purple-immersive`: `linear-gradient(180deg, #1F1C45 0%, #2E2A5E 100%)`
- `--gradient-purple-calm`:      `linear-gradient(180deg, #3B3775 0%, #2E2A5E 100%)`

Expose all as Tailwind classes: `bg-brand-purple-deep`, `bg-brand-purple-mid`, `bg-brand-purple-soft`, `bg-brand-purple-mist`, plus `bg-gradient-purple-immersive` / `bg-gradient-purple-calm`.

### 2. Assign tones per section (intent-driven, not random)

| Section | New treatment | Reason |
|---|---|---|
| Homepage Gateway (`HeroGateway`) | Keep flat `#2E2A5E` | Strongest brand moment — anchor |
| Corporate "How a Session Works" (`EventsPublic` immersive block) | `bg-gradient-purple-immersive` (deep → base) | Should feel intimate, focused |
| Corporate final Booking CTA | `bg-brand-purple` (unchanged) | Clear call-to-action anchor |
| Private "The Experience" editorial block | `bg-gradient-purple-calm` (mid → base) | Softer, contemplative mood |
| Private final Enquire CTA | `bg-brand-purple-deep` | Quiet, intimate close |
| Footer accents & decorative blurs | Mix `brand-purple/soft` at low opacity | Lighter atmosphere on white |
| Ambient blurs / cursor glow / stats strip glow | Shift to `brand-purple-soft` at 4–7% opacity | Softer ambient wash |
| Hairlines, bullet dashes, hover borders on light pages | Keep `brand-purple` (canonical) | Preserves recognisability |

Hover states on purple sections stay `bone` (cream) — no change.

### 3. Guardrails

- Never place two adjacent full-bleed purple sections in the *same* tone — always vary (e.g. deep → base, or base → calm).
- Gradients stay understated: single-axis (180deg), ≤ two stops, ≤ 15% lightness spread. No radial rainbows.
- Text on any purple tone stays `text-bone`; verify contrast on `soft`/`mid` (both pass AA against cream).
- Buttons, CTAs, and the Homepage Gateway remain the canonical `#2E2A5E` so the "brand colour" reads unchanged at a glance.
- Decorative tokens only — no changes to typography, layout, or copy.

### 4. Files touched

- `src/index.css` — add tokens + gradients
- `tailwind.config.ts` — extend `colors.brand` + `backgroundImage`
- `src/pages/EventsPublic.tsx` — swap 2 section backgrounds
- `src/pages/EventsPrivate.tsx` — swap 2 section backgrounds
- `src/components/Footer.tsx`, `AmbientBackground.tsx`, `CursorGlow.tsx`, `StatsStrip.tsx`, `CredentialsEditorial.tsx` — retune ambient tone to `purple-soft`

No copy, structure, or component API changes.
