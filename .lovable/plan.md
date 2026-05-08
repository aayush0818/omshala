## Goal

Replace placeholder/fictional copy across the site with the real Om Shala content from the uploaded docs, and layer in subtle premium motion + ambient touches that match a sound-healing aesthetic. Keep all existing layouts, sections, and components intact — only swap text and add light visual polish.

---

## Content updates (from the two .docx files)

### Landing page (`Index.tsx` + child sections)
- **Hero / philosophy**: keep current structure, but reword to reference *Nada Yoga, breathwork, guided relaxation, crystal singing bowls (435 Hz)*.
- **Guide section (Shrutika)**: rewrite bio to match the doc — Meditation Teacher, Indian Classical Singer, Nada Yoga practitioner, 12+ years, founder of Om Shala (first Bombay studio dedicated to Sound Healing). Add the pull-quote: *"Pure sound pulls you inward and brings deep relaxation…"*.
- **Credentials list** (used in About + Guide): replace fake certifications with the real ones:
  - 12+ years in mindfulness
  - Founder of Om Shala, first Bombay studio for Sound Healing
  - Spotify meditations w/ Universal Music
  - Sessions for Royal Family in Dubai & Saudi Arabia
  - Private sessions for the Late G. P. Hinduja, London
  - Private sessions for the Health Minister of Goa
  - 1,000+ participant event (Rotary Club, Vapi)
  - Online clients across US, Europe & Madagascar

### About page
- Rewrite story + philosophy using doc language ("relaxation as gateway to the inner life", meditation is not something you do — it happens, etc.).
- Replace fake credential list with the real one above.

### Practices page
- Add a primary **Yog Nidra Meditation** offering with the doc's content: Breathwork → Soundscape → Yoga Nidra triad, benefits, weekly online format, 60 min, first class free, monthly plan €80 (~$86 / ~400,000 MGA), 1 live session/week + 7-day recording access. Payment options: Wise / PayPal / Bank Transfer.
- Keep existing offering cards (Sound Bath, Breathwork, etc.) but reword descriptions to align with Nada Yoga / 435 Hz framing.

### Private Events page
- Replace fictional offerings with the real positioning: weddings, birthdays, Diwali parties, women's forums, baby showers.
- Use the doc's "The Experience" copy (crystal bowls @ 435 Hz, live ragas as lullabies, soft lighting, blankets, aromas).
- Replace fake testimonials/pricing with a single CTA: *"Let's discuss how we can organise one for you"* + WhatsApp +91 7400361681.

### Public Events page → repurpose as **Corporate Events**
- Update copy: "Deep Relaxation for High-Performance Teams", Sound Baths for corporate wellness, ideal for leadership teams + orgs prioritising wellbeing.
- Benefits list (reduces stress, focus, emotional regulation, nervous-system relaxation, etc.).
- "How a Session Works" steps (breathwork → guided relaxation → sound immersion → optional ragas/mantras).
- "Rise of Online Sound Baths" explainer + "The Setup" note.
- Booking: online/in-person, small/large, one-time/ongoing. Email `omshala.official@gmail.com`, WhatsApp `+91 7400361681`.

### Contact page
- Update email to `omshala.official@gmail.com`, WhatsApp `+91 7400361681`. Keep Bandra West, Mumbai location.

---

## Subtle premium motion & ambient polish (light-touch, no redesign)

1. **Ambient background layer** — new `<AmbientBackground />` component mounted once in `App.tsx`, rendering 2–3 very slow drifting blurred clay/earth orbs (fixed, `pointer-events-none`, ~5% opacity, 30–60s loops). Adds a subtle "breathing" feel across every page without touching individual sections.
2. **Breathing pulse on hero decorative dots/lines** — extend existing `animate-pulse-soft` to a slower 6–8s ease, suggesting a breath cycle. Add one small "breath ring" near hero CTAs (expanding/contracting circle).
3. **Framer-motion micro-interactions**:
   - `whileHover={{ y: -4 }}` + soft shadow on offering/credential cards.
   - Stagger fade-in for credential and benefit list items as they enter the viewport (replace current css-based reveals where it's a list — cards stay as-is).
4. **Smooth scroll cue** — small animated "scroll" indicator at bottom of each hero (thin vertical line that slides down and loops), already used in some places; standardise via a tiny shared component.
5. **Image Ken-Burns** — apply a very slow (20s) scale 1 → 1.05 loop to hero background images for a living, meditative feel.
6. **Number-counter on credentials** — when the "12+ years" / "1,000+ participants" stats scroll into view, count up using framer-motion. Add a small stats strip on landing + about (3–4 numbers).
7. **Cursor-follow soft glow (desktop only)** — a faint clay-tinted radial gradient that follows the cursor at low opacity; disabled on touch devices and with `prefers-reduced-motion`.
8. Respect `prefers-reduced-motion` everywhere — all new motion gated behind the existing media query block in `index.css`.

No new colors, no new fonts, no layout changes beyond inserting the small stats strip and the corporate-events restructuring. Existing components (Header, Footer, PageTransition, Card styles) untouched.

---

## Technical notes

- Files touched: `src/pages/Index.tsx` (+ child section components), `About.tsx`, `Practices.tsx`, `EventsPrivate.tsx`, `EventsPublic.tsx`, `Contact.tsx`, `App.tsx`, `index.css`.
- New files: `src/components/AmbientBackground.tsx`, `src/components/CursorGlow.tsx`, `src/components/StatCounter.tsx`, `src/components/ScrollCue.tsx`.
- Uses already-installed `framer-motion`. No new dependencies.
- All copy stored as plain strings in the page files (no CMS / backend changes).

## Out of scope

- No backend/Lovable Cloud work (no booking forms wired up — CTAs remain mailto/WhatsApp links).
- No new imagery generation; reuses existing assets.
- No restructuring of routes or navigation.
