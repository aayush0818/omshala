## Swap display font from Fraunces to Cormorant Garamond

Replace Fraunces (currently used for all `font-display` headings and select body text) with **Cormorant Garamond** — a closer match to the intended editorial/luxury tone with a clean, conventional lowercase "f". Cormorant is already used elsewhere in the site as `font-serif`, so the switch keeps typographic harmony.

### Changes

1. **`index.html`** — replace the Fraunces `<link>` with Cormorant Garamond (weights 300/400/500 + italic 300/400 to match current usage).
2. **`tailwind.config.ts`** — update the `display` font stack:
   ```ts
   display: ["Cormorant Garamond", "Cormorant", "Georgia", "serif"],
   ```
   Leave `serif` (Cormorant) and `sans` (Inter) untouched.
3. **`src/index.css`** — remove the Fraunces-specific `font-variation-settings` / `font-feature-settings` override on `.font-display` (added previously to tame Fraunces's WONK axis). Cormorant Garamond is a static font and doesn't need it.

### Not changing

- Body font (Inter) and `font-serif` (Cormorant) remain unchanged.
- All existing `font-display` usages, sizes, weights, tracking, and layouts stay the same.
- No component-level edits.

### Verification

After build, spot-check headings on `/events/public`, `/events/private`, homepage gateway, and About/Credentials sections — the "f" in words like "for", "Deep Relaxation for…", and "Sound Healing for…" should render with a clean, straight-descending lowercase f.