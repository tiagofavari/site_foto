# Tiago Favari · Fotografia — Design System

An editorial design system for **Tiago Favari**, a portrait, editorial and
corporate photographer based in São Paulo (est. 2013). The system exists to make
**presentations (apresentações)** and **proposals/quotes (orçamentos)** fast to
produce while staying perfectly on-brand.

The aesthetic is **monochrome and editorial** — warm cream paper, near-black ink,
a high-contrast Didone serif for voice, and a neutral grotesque set in wide-tracked
uppercase for labels. No chromatic accent: the brand lives in light, contrast and
generous whitespace, the way a printed portfolio does.

---

## Source material

- `uploads/Entregáveis · Tiago Favari.pdf` — the brand-kit "deliverables" page
  (avatars, banners and a one-page site spec). This was the **only** source provided.
  Page renders were extracted to `uploads/page-1.png` / `page-2.png`; the logo
  lockups were cropped from it into `assets/`.

No codebase, Figma file, or font files were supplied. Typeface choices and exact
colors were derived from the PDF (see Caveats).

---

## Content fundamentals — how the brand writes

- **Language:** Brazilian Portuguese. Warm, calm, confident — never salesy.
- **Voice:** First-person-singular for the photographer ("fotografo pessoas e
  marcas"), second person for the client. Speaks about permanence and care:
  *"Retratos que permanecem."*, *"Retratos que ficam."*
- **Casing:** Display headlines in sentence case. Labels, eyebrows and CTAs in
  **UPPERCASE with wide tracking** ("BAIXAR", "RETRATOS · EDITORIAL · CORPORATIVO").
- **Punctuation:** Middot ` · ` is the signature separator between categories,
  locations and dates. Em-dash for asides.
- **Numbers/specs:** Tracked uppercase ("1080 × 1080 PX · PNG", "EST. 2013").
- **Emoji:** Never. The brand is restrained and print-like.
- **Sample phrases:** "Fotografia corporativa, editorial e autoral.",
  "Estúdio em São Paulo, atendimento on-location no Brasil e exterior.",
  "Inscreva-se · novos ensaios mensalmente."

---

## Visual foundations

- **Color:** Two signatures — `--paper` `#F2EFE8` (warm cream) and `--ink-900`
  `#0B0B0B` (near-black). A warm neutral ramp (`--ink-100`…`--ink-900`) covers text,
  lines and surfaces. Status tones (olive / bronze / terracotta) exist but are used
  sparingly, mostly in documents. There is **no brand accent color** — keep it mono.
- **Type:** Display = **Playfair Display** (high-contrast Didone), used upright for
  weight and *italic* for warmth — the wordmark is "Tiago" upright + *"Favari"*
  italic. Text/UI = **Hanken Grotesk**, also set as wide-tracked uppercase labels
  (`0.22em`–`0.34em`). Display tracking is tightened (`-0.02em`).
- **Layout:** Generous editorial whitespace, strong baseline and column grids,
  full-bleed dark or paper sections. Imagery is framed like prints.
- **Imagery:** Warm, natural-light photography — portraits and editorial. Presented
  in `PhotoFrame`: square-cornered, soft "print lift" shadow, optional italic index
  number and tracked caption. Placeholders use a warm diagonal hatch.
- **Backgrounds:** Flat paper, flat ink, or a photo under an ink **veil** (gradient
  or flat scrim) for legible captions. No gradients-as-decoration, no textures
  beyond the placeholder hatch.
- **Corners:** Essentially **square** (`--radius-sm` 4px max for surfaces). Pills
  only for true badges/avatars. Photos are framed, not rounded app-cards.
- **Borders:** Hairlines — `1px` `--border-hairline` (12% ink), or a `1.5px`
  `--rule-ink` solid rule under headers. Lines do a lot of the structural work.
- **Shadows:** Whisper-soft and warm. `--shadow-sm/md/lg` for UI; `--shadow-print`
  is the lifted-photograph look.
- **Motion:** Calm and editorial — short fades and eased transitions
  (`--ease-standard`, 140–520ms). **No bounce**, no springy overshoot.
- **Hover:** Solid actions darken (`ink-900 → ink-700`); outline actions invert to
  fill. **Press:** color shift, no shrink. Focus inks the underline on fields.
- **Transparency/blur:** Used only as ink/paper veils over photography; blur is rare.

---

## Iconography

The brand is **typographic, not iconographic**. There is no custom icon set in the
source. Approach:

- **Arrows** are drawn as glyphs — `→` `↗` `↑` — inside tracked labels and CTAs
  ("ABRIR SITE →", "FAVARI.FOTO ↗"). This is the brand's main "icon".
- The **middot** `·` is a structural mark, not decoration.
- The **TF monogram** and **circular seal** act as the brand's emblem/stamp.
- **No emoji.** If a UI genuinely needs functional icons (e.g. a product surface),
  use a **thin 1px line set** — [Lucide](https://lucide.dev) at `1px` stroke is the
  recommended CDN match — and keep it ink-colored and sparse. *(Flagged: this is a
  substitution; the brand ships no icon font.)*

---

## Assets (`assets/`)

Logo lockups cropped from the brand-kit PDF (PNG):

- `logo-monogram-light.png` / `logo-monogram-dark.png` — "TF" + FOTOGRAFIA
- `logo-seal-light.png` / `logo-seal-dark.png` — circular est. seal
- `logo-wordmark-light.png` / `logo-wordmark-dark.png` — "Tiago *Favari*"

`light` = on cream paper, `dark` = light marks on near-black. The dark seals are
designed to drop onto an `--ink-900` field with `mix-blend-mode: screen`; the light
seal sits on `--paper` with no blend (its background *is* paper).

> The `Logo` component reproduces all three marks **from live type** (no image
> dependency) so they stay crisp at any size — prefer it over the PNGs in code.

---

## Index — what's in this system

**Foundations**
- `styles.css` — global entry point (consumers link this one file)
- `tokens/colors.css` · `typography.css` · `spacing.css` · `fonts.css` · `base.css`
- `guidelines/*.html` — foundation specimen cards (Colors, Type, Spacing, Brand)

**Components** (`window.<Namespace>` — see `check_design_system` for the exact name)
- `components/core/` — **Button**, **Tag**, **Badge**, **Divider**
- `components/brand/` — **Logo** (monogram / stack / wordmark / seal)
- `components/media/` — **PhotoFrame**
- `components/forms/` — **Field** (input / textarea / select)

**Templates** (`templates/<slug>/` — Design Components consumers can copy)
- `templates/apresentacao/Apresentacao.dc.html` — editorial 16:9 deck (6 slides)
- `templates/orcamento/Orcamento.dc.html` — one-page proposal / quote, print-ready

**Other**
- `SKILL.md` — Agent-Skill manifest for using this system in Claude Code
- `assets/` — logo PNGs · `uploads/` — original PDF + page renders

---

## Using it

Link the tokens, then mount components from the bundle namespace:

```html
<link rel="stylesheet" href="styles.css">
<script src="_ds_bundle.js"></script>
<script>
  const { Button, Logo, PhotoFrame, Tag } = window.TiagoFavariDesignSystem;
</script>
```

(Use the exact namespace reported by `check_design_system`.) For presentations and
quotes, start from the `templates/` Design Components rather than from scratch.
