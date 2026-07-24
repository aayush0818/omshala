## Header Redesign

### 1. `src/components/Header.tsx`
- **Background:** Replace conditional scroll-based background with a constant solid `#322E4F` strip. Remove the `scrolled` state and scroll listener entirely.
- **Logo:** Remove the "OM SHALA" text link. Replace with the `omshala-wordmark-transparent.png` image asset (same one used in `HeroGateway.tsx`), wrapped in a `<Link to="/">`. Size around `h-8` / ~120px wide.
- **Layout:** Center the logo horizontally. Use a 3-column flex layout so the logo stays centered while nav sits on the right:
  ```
  [ spacer ]   [ centered logo ]   [ nav + IG icon ]
  ```
  On mobile: hamburger on the right, centered logo, spacer on the left.
- **Nav text color:** Change "Home" and "Contact" links from `text-muted-foreground` to `text-[#CEBFB5]` (bone). Hover state stays purple-tinted or lightens — use `hover:text-white` for contrast on purple.
- **Mobile menu button + close (X):** Recolor to `#CEBFB5`.
- **Mobile overlay:** Keep existing overlay behavior; recolor the wordmark inside it to also use the image logo, and links to bone.
- **Instagram icon:** Replace `lucide-react` `Instagram` with `<InstagramColorIcon />` (already exists at `src/components/InstagramColorIcon.tsx`).

### 2. `src/components/Footer.tsx`
- Replace the `lucide-react` `Instagram` icon in the "Reach Us" section with `<InstagramColorIcon className="w-4 h-4" />`.
- No other footer changes.

### 3. `src/pages/Contact.tsx`
- In the `contactMethods` array, the Instagram entry currently uses the lucide `Instagram` icon. Swap the rendered icon to `<InstagramColorIcon />` (the array-driven `<m.icon />` needs a small adjustment to render the color icon for the Instagram row while keeping Mail/Phone as lucide icons).

### Technical Notes
- The transparent wordmark asset is already imported pattern: `import wordmark from "@/assets/omshala-wordmark-transparent.png.asset.json"` → `wordmark.url`.
- Page content currently sits under a fixed transparent header; since the header becomes an opaque purple strip, hero sections with `pt-40`/`pt-48` already provide sufficient top padding — no page-level spacing changes needed.
- `InstagramColorIcon` accepts a `className` prop for sizing.
