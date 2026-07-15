## Om Shala 2.0 — Round 4: Two Independent Journeys

Restructure the site so Corporate and Private become two self-contained experiences that share only a Footer, remove the standalone About page, and replace the gateway photography with an abstract artistic treatment.

---

### 1. Homepage Credentials — match About page structure
Update `src/pages/Index.tsx` Credentials section so it uses the same two-column editorial layout already used (sticky "Credentials" heading on the left, numbered list on the right). Keep spacing, hairlines, and typography consistent so About/Home/Corporate/Private all read as one system.

### 2. Corporate page — new structure
`src/pages/EventsPublic.tsx` becomes:
1. Hero (using the current corporate gateway image as the hero photograph)
2. About section — copied verbatim from Homepage (portrait + exact copy + quote + closing line)
3. Credentials section — same editorial two-column block as Homepage
4. Existing Corporate-specific sections (What This Is, Session Flow, Benefits, A Glimpse video, etc.)
5. Contact / Enquire CTA

**Remove:** the Setup section (heading, copy, image) entirely.

### 3. Private page — new structure
`src/pages/EventsPrivate.tsx` becomes:
1. Hero (using the current private gateway image)
2. About section — identical to Homepage
3. Credentials section — identical to Homepage
4. Existing Private-specific sections (Experience block, A Glimpse video, etc.)
5. Contact / Enquire CTA

**Remove:**
- The Private Offering section (entire block).
- The How It Works section (heading, copy, icons, images) — surrounding sections join directly with clean spacing, no empty gap.

### 4. Delete the standalone About page
- Delete `src/pages/About.tsx`.
- Remove the `/about` route from `src/App.tsx` (and its lazy import).
- Remove all `Link to="/about"` references across the codebase (Header, Footer, any CTAs).

### 5. Independent navigation per journey
Rework `src/components/Header.tsx` so nav is scoped to the active journey. No cross-links between Corporate and Private, and no About link anywhere.

- **On `/` (gateway):** wordmark only, no nav links (the gateway itself is the navigation).
- **On `/events/public/*` (Corporate journey):** nav shows only `Contact` and `Enquire` (Enquire = in-page anchor).
- **On `/events/private/*` (Private journey):** nav shows only `Contact` and `Enquire`.
- **On `/contact`:** determine the active journey from a query param (e.g. `?from=corporate` / `?from=private`) set when navigating from either journey. Header then shows only that journey's links (Back to Corporate / Back to Private + Enquire). Never surface the opposite journey.
- Update every existing link into `/contact` to include the correct `?from=` param so the journey context carries through.
- Mobile menu mirrors the same scoped links.

### 6. Footer — the only shared element
`src/components/Footer.tsx` stays global but is trimmed so it does not act as a cross-journey bridge: remove any About link, keep brand mark, tagline, contact essentials, and social. If it currently lists both Corporate and Private, keep only a single neutral "Enquire" / contact link plus legal/brand — no journey switch.

### 7. Gateway — abstract artistic treatment (no photography)
Rebuild `src/components/HeroGateway.tsx` so the two panels are pure visual compositions, not photographs.

- Remove the corporate and private image imports from the gateway.
- Each panel becomes a full-bleed abstract canvas built with CSS + SVG + subtle motion:
  - **Corporate panel:** cooler, structured composition — layered painterly gradients in deep charcoal / bone / muted clay, soft horizontal light bands, faint concentric ring pattern (echoing a singing bowl seen from above), gentle parallax on hover.
  - **Private panel:** warmer, softer composition — flowing gradient blooms in clay / dusk / bone, organic blurred forms, faint vertical light column, slow drifting grain/noise overlay.
  - Both share a thin bone hairline divider and consistent typographic treatment already in place (eyebrow, title, "Explore →").
- Use only CSS gradients, blurred divs, SVG shapes, and existing brand tokens (`--charcoal`, `--bone`, `--clay`). No `<img>` tags. No AI-generated raster art. No stock imagery.
- Preserve the existing hover expansion, dimming, and click-to-navigate transition.
- Update wordmark/subtitle treatment to sit cleanly against the abstract backgrounds.

### 8. Hero images move into journeys
- Corporate hero uses `img8-sunset-circle.webp` (previous corporate gateway image).
- Private hero uses `img5-studio-night.webp` (previous private gateway image).
- Heroes keep the existing left-aligned title treatment used across the site.

---

### Technical notes
- Extract the shared About block into a small component (e.g. `src/components/AboutSection.tsx`) so Homepage, Corporate, and Private render it identically without duplication.
- Extract the shared Credentials editorial block into `src/components/CredentialsEditorial.tsx` (or extend `CredentialCards.tsx`) for the same reason. `CREDENTIALS` array stays the single source of truth.
- Header journey detection: derive from `pathname` for `/events/public` and `/events/private`; for `/contact`, read `?from=` search param, defaulting to gateway-style minimal header if absent.
- After deleting `About.tsx`, run through `rg "/about"` and `rg "About.tsx"` to purge every remaining reference (routes, links, imports).
- Verify the build after edits — no dead imports, no broken routes.
