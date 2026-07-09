## Why the site feels laggy right now

After auditing, the slowdown isn't one bug — it's accumulated weight:

1. **Too many large blur layers stacked on every page.** `AmbientBackground` renders 3 fixed `blur-[120–140px]` orbs *plus* each page (Practices, Philosophy, CTA sections, hero) renders its own `blur-[60–100px]` orbs and `animate-float`/`animate-pulse-soft` rings. Browsers composite these on every frame.
2. **`CursorGlow` triggers a React re-render on every mouse move** (state-driven inline style on a full-screen div) which keeps the main thread busy.
3. **`AnimatePresence mode="wait"`** delays paint of the next page until the old one finishes exiting — feels like nav is "stuck".
4. **Hero images use `transition-all duration-[2s]`** on the entire image — `transition-all` is the most expensive transition variant.
5. **Lots of always-on infinite CSS animations** (`animate-float`, `animate-pulse-soft` on multiple decorative elements per section) running off-screen too.
6. **Heavy `useScrollAnimation` IntersectionObservers** instantiated per component — fine, but combined with the above adds up.

## Plan

### 1. Performance pass (the biggest win)

- **Slim `AmbientBackground`** to 2 orbs, drop blur radius to ~80px, add `will-change: transform` and `translate3d` so it stays on the GPU compositor layer. Pause animation when tab is hidden (`document.visibilityState`).
- **Rewrite `CursorGlow`** to mutate a `ref`'d div's `style.background` directly inside `requestAnimationFrame` — zero React re-renders. Also disable below the `lg` breakpoint, not just on touch.
- **Remove duplicate orbs from individual pages** (Practices hero, Philosophy, CTA, EventsPublic, EventsPrivate, About). The sitewide ambient layer covers it. Keep only the small accent floats that actually frame content.
- **Switch `transition-all` → `transition-opacity`/`transition-transform`** on hero images and reduce `duration-[2s]` to `duration-1000`.
- **Cap `animate-pulse-soft` / `animate-float`** to one or two elements per section and add `prefers-reduced-motion` short-circuits in `index.css` (extend the existing block).
- **Switch `AnimatePresence` to `mode="sync"`** with a faster (250 ms) crossfade so navigation feels instant.
- **Lazy-load page routes** with `React.lazy` + `Suspense` so the initial bundle is smaller.

### 2. Premium subtle motion (consistent across pages)

- **Shared `<Reveal>` wrapper** (framer-motion + IntersectionObserver, single instance) replacing the ad-hoc `useScrollAnimation` + class-toggle pattern. One easing curve, one duration, one stagger — applied to section headings, paragraphs, lists, cards. This alone makes the whole site feel cohesive.
- **Magnetic CTA buttons** — primary "Begin a session" / "Book" buttons gently pull toward the cursor within a small radius (desktop only). Adds a tactile, expensive feel without being loud.
- **Card lift micro-interaction** — replace existing scale/shadow hovers with a unified `whileHover={{ y: -4 }}` + soft clay glow. Same on Practices, Corporate, Private cards.
- **Soft focus ring on form fields** in Contact (clay glow expands on focus, breathing rhythm).
- **Word-by-word reveal** on hero headlines (h1) — staggered fade, very slow (90 ms per word). Used only on hero h1s.
- **Slow Ken-Burns** (20 s) on hero background images via transform only (cheap, GPU).

### 3. Two signature, non-generic features

These are what makes the site stand out — both directly tie to Shrutika's craft (sound + breath):

#### A. Interactive 435 Hz Sound Bowl (landing hero corner + Practices page)
A small floating crystal-bowl ring in the bottom-right of the hero. On hover it begins a soft, slow rotation; on click it actually **plays a 6-second 435 Hz sine tone** with a gentle attack/decay envelope through Web Audio API, while concentric ripples emanate from it on the page (SVG circles expanding + fading). Click again to stop. A tiny label reads *"Tap to hear 435 Hz"*. No external assets needed — the tone is synthesised in-browser.

This is the single most "Om Shala" thing the site can do: visitors physically experience the frequency the brand is built on.

#### B. Live Breath Companion (sitewide, dismissible)
A slim 1-px clay line pinned to the very bottom of the viewport that **slowly expands and contracts in a 4-7-8 breath rhythm** (inhale 4s, hold 7s, exhale 8s) with a tiny floating label that fades in once per cycle: *"Inhale… Hold… Exhale…"*. There's a subtle pill button in the footer area: *"Breathe with us"* that toggles it on/off (off by default for first-time visitors; preference saved to localStorage).

When active, the entire page subtly syncs — the ambient orbs match the same breath rhythm. It turns the website itself into a 60-second meditation. Nothing else on the web does this for a sound-healing brand.

Both features fully respect `prefers-reduced-motion` (Bowl still plays audio but skips ripples; Breath Companion shows a static line).

### 4. Polish gaps that make it feel "incomplete"

- Add a real **footer divider with the enso/ring brand mark** centered (currently footer is flat).
- Add a **scroll-progress hairline** at the top of the viewport (1 px clay line, GPU-only `scaleX`) — present on every page.
- Standardise hero scroll cue (small animated vertical line) across all 7 pages via a single `<ScrollCue />` component.
- Make sure every page has the same **section rhythm**: hero → intro → meat → CTA → footer. Audit Schedule + Contact, which currently feel light.

## Technical notes

- New files: `src/components/SoundBowl.tsx`, `src/components/BreathCompanion.tsx`, `src/components/Reveal.tsx`, `src/components/ScrollCue.tsx`, `src/components/ScrollProgress.tsx`, `src/hooks/useBreathCycle.tsx`.
- Edited: `App.tsx` (lazy routes, mount BreathCompanion + ScrollProgress), `AmbientBackground.tsx`, `CursorGlow.tsx`, `HeroSection.tsx`, `Practices.tsx`, `PhilosophySection.tsx`, `EventsPublic.tsx`, `EventsPrivate.tsx`, `About.tsx`, `Contact.tsx`, `Footer.tsx`, `index.css`.
- Audio: Web Audio API only (no library, no asset). ~30 lines.
- No new dependencies.
- All new motion gated on `prefers-reduced-motion`.

## Out of scope

- No backend, no booking system wiring, no new copy beyond labels for the new features.
- No design-system color/typography changes.
