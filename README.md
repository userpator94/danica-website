# Danica Filipović — personal website

Multilingual static site (Astro) for student guidance and relocation support in Slovenia.

## Languages

| Code | Label in UI | URL prefix | HTML `lang` |
|------|-------------|------------|-------------|
| SR (default) | Srpski | `/sr/` | `sr-Latn` |
| EN | English | `/en/` | `en` |
| SL | Slovenščina | `/sl/` | `sl` |

`/` redirects to `/sr/`. `hreflang` uses `sr-Latn`, `en`, `sl`, and `x-default` → SR.

## Pages

- Home, About, Services (includes How It Works), Contact, Privacy — localized slugs per language
- Custom `404`

## Setup

```bash
npm install
cp .env.example .env
# Set PUBLIC_WEB3FORMS_ACCESS_KEY from https://web3forms.com
npm run dev
```

```bash
npm run build
npm run preview
```

## Editing copy

All UI and page text lives in:

- `src/i18n/dictionaries/sr.ts`
- `src/i18n/dictionaries/en.ts`
- `src/i18n/dictionaries/sl.ts`

Keep the three files structurally in sync (`Dictionary` type in `types.ts`). Route slugs are in `src/i18n/routes.ts`.

## Form (Web3Forms)

The contact form POSTs to Web3Forms. Set `PUBLIC_WEB3FORMS_ACCESS_KEY` in `.env` before launch. Without a valid key, submissions will fail and show the error state.

## Design tokens

Defined in `src/styles/global.css`: forest green `#263C35`, ivory `#F1EEE7`, terracotta `#B97756`.

## Deploy

Static output in `dist/`. Point any static host (Netlify, Cloudflare Pages, Vercel) at the Astro build. Update `site` in `astro.config.mjs` to the production domain before launch.

## Out of scope (v1)

Blog, client portal, payments, booking calendar, CMS, document uploads, testimonials.
