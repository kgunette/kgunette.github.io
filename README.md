# Karen Schoellkopf Portfolio Website

Personal portfolio site at [karenschoellkopf.com](https://karenschoellkopf.com). Cowritten with Claude.

## Design System

Sora (headlines) + Manrope (body) on a warm, minimal layout with red/coral accents.

**Color Palette**
- Primary: `#af2819` (deep red)
- Coral accent: `#E8513D` (coral)
- Tag teal: `#1F5560` (deep teal — used for theme category tags on projects.html)
- On-surface: `#1a1c1c` (near black)
- Secondary: `#5f5e5e` (medium gray)
- Surface: `#f9f9f9` (off-white)
- Outline variant: `#e2beb9` (warm light border)

**Theme Tags**

Projects are tagged by category (Launches / Turnarounds / Pivots) using outlined teal pills. Tags appear above each project heading on projects.html and connect back to the "What I help with" section on the homepage. The pill style echoes the rounded coral indicators on the homepage accordion.

**Editorial Bullets**

A signature element used in case studies and the AI section on index.html: a thin horizontal coral line replaces the standard round bullet, followed by the text:

```html
<ul class="space-y-5" role="list">
  <li class="flex gap-4 items-start">
    <span class="w-6 h-[1px] bg-primary mt-3 shrink-0"></span>
    <p class="text-base font-body font-light text-secondary">Bullet text here</p>
  </li>
</ul>
```

The line marker uses `mt-3` to align near the baseline of standard text, or `mt-4` for larger text (`text-lg md:text-xl`).

**Case Study Logo Cards**

Company logos on projects.html sit in a 220px-tall card with a subtle teal border (`border-tag-teal/50`), white background, rounded corners. The card lives in the right column of a 2:1 grid (text:logo) next to the My Role / Challenge text block. The grid activates at the `md:` breakpoint (see "Making Changes" below). Logos use `max-h-full max-w-full object-contain` to scale within the card. Padding varies by logo shape (`p-6` for wordmarks, `p-4` for the Walkabout circle).

**Profile Photo**

The headshot (`karen-headshot.jpg`) uses the `.headshot-filter` utility class defined in `input.css`:
```css
filter: saturate(0.85) brightness(1.02);
```

Slightly desaturates and lifts brightness for a softer look.

Container pattern (used on both index.html hero and about.html sidebar):
- Aspect ratio: `aspect-[4/5]` (portrait crop)
- Rounded corners: `rounded-[6px]`
- Image fill: `object-cover object-top` (anchors to the top so the face isn't cropped)

The hero version also has `fetchpriority="high"` since it's above-the-fold LCP content. The about page version has a portrait credit caption underneath in small muted type, linking to the photographer.

**Typography**
- Headlines: Sora (Google Fonts), extrabold
- Body: Manrope (Google Fonts), light/regular weight, 1.8 line-height

## File Structure

```
├── index.html           # Home page
├── about.html           # Values and how I work
├── projects.html        # Case studies and additional work
├── reading.html         # What I'm reading (pulls from Google Sheets)
├── style.css            # Production Tailwind CSS
├── input.css            # Tailwind source with custom styles
├── tailwind.config.js   # Theme config (colors, fonts, forms plugin)
├── package.json         # Build scripts
├── favicon.svg          # Coral accent bar favicon
├── karen-headshot.jpg   # Headshot (used on index and about)
├── logos/               # Company logos for case studies (kebab-case PNG)
│   ├── leap-fund.png
│   ├── vote-run-lead.png
│   └── walkabout-nyc.png
├── CNAME                # Custom domain config for GitHub Pages
└── README.md
```

**Prototypes folder (not deployed)**

Design iterations live one level up at `../prototypes/prototypes-apr-2026/`. These use Tailwind CDN for fast iteration and are NOT part of the deployed site. The convention is: prototype here first, port the winner into `work-portfolio-live/`, then leave a "Decision · shipped to live" callout block at the top of the prototype file noting what was chosen and why (see `theme-tags.html` or `case-study-logos.html` for the pattern).

## Tech Stack

- Tailwind CSS v3 (production build, no CDN)
- Google Fonts (Sora + Manrope)
- Web3Forms (contact form backend)
- Google Sheets CSV (reading list data source)
- GitHub Pages (hosting)

## Deploy

GitHub Pages from [`kgunette/kgunette.github.io`](https://github.com/kgunette/kgunette.github.io). Pushes to `main` auto-deploy within about a minute. Custom domain `karenschoellkopf.com` is configured via the `CNAME` file at the repo root.

## Making Changes

**Rebuild CSS after editing HTML** (only needed if new Tailwind classes are added):
```
npm run build:css
```

**Side-by-side layouts use `md:` (768px), not `lg:` (1024px)**

The case study layout on projects.html activates side-by-side at `md:` so it matches when the desktop nav appears. Using `lg:` causes a visible mismatch where the nav looks "desktop" but content stays mobile-style stacked between 768–1023px.

## Contact Form

The contact modal on all pages uses [Web3Forms](https://web3forms.com/). Form submissions are sent to the email configured in the Web3Forms dashboard. The access key is embedded in each page's modal HTML.

## Reading Page

reading.html pulls book data from a published Google Sheet:

- 2026: `https://docs.google.com/spreadsheets/d/e/2PACX-1vQuOieHRZ_cDgvoN7TDeujJWV5Akg1ITU8WWEwrDnHjEkyzGEEvoDh4uaGJvZuNYl0WQL6_jTultDNW/pub?gid=1004744420&single=true&output=csv`
- 2025: `https://docs.google.com/spreadsheets/d/e/2PACX-1vQuOieHRZ_cDgvoN7TDeujJWV5Akg1ITU8WWEwrDnHjEkyzGEEvoDh4uaGJvZuNYl0WQL6_jTultDNW/pub?gid=1785861805&single=true&output=csv`

Books display sorted by status (in progress, done, DNF), then alphabetically by title. To add a new year, publish a new tab from the Google Sheet and add the URL to the `SHEETS` object in reading.html.

## License

© 2026 Karen Schoellkopf

Last updated: 2026-04-27
