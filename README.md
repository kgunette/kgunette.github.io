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
├── style.css            # Production Tailwind CSS (27KB minified)
├── input.css            # Tailwind source with custom styles
├── tailwind.config.js   # Theme config (colors, fonts, forms plugin)
├── package.json         # Build scripts
├── favicon.svg          # Coral accent bar favicon
├── karen-headshot.jpg   # Headshot (used on index and about)
└── README.md
```

## Tech Stack

- Tailwind CSS v3 (production build, no CDN)
- Google Fonts (Sora + Manrope)
- Web3Forms (contact form backend)
- Google Sheets CSV (reading list data source)
- GitHub Pages (hosting)

## Making Changes

**Rebuild CSS after editing HTML** (only needed if new Tailwind classes are added):
```
npm run build:css
```

## Contact Form

The contact modal on all pages uses [Web3Forms](https://web3forms.com/). Form submissions are sent to the email configured in the Web3Forms dashboard. The access key is embedded in each page's modal HTML.

## Reading Page

reading.html pulls book data from a published Google Sheet:

- 2026: `https://docs.google.com/spreadsheets/d/e/2PACX-1vQuOieHRZ_cDgvoN7TDeujJWV5Akg1ITU8WWEwrDnHjEkyzGEEvoDh4uaGJvZuNYl0WQL6_jTultDNW/pub?gid=1004744420&single=true&output=csv`
- 2025: `https://docs.google.com/spreadsheets/d/e/2PACX-1vQuOieHRZ_cDgvoN7TDeujJWV5Akg1ITU8WWEwrDnHjEkyzGEEvoDh4uaGJvZuNYl0WQL6_jTultDNW/pub?gid=1785861805&single=true&output=csv`

Books display sorted by status (in progress, done, DNF), then alphabetically by title. To add a new year, publish a new tab from the Google Sheet and add the URL to the `SHEETS` object in reading.html.

## License

© 2026 Karen Schoellkopf

Last updated: 2026-04-24
