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
├── writing/             # Writing section (essays + newsletter signup)
│   ├── index.html       # Writing index: tagline, signup card, post list
│   ├── subscribed.html  # Post-confirmation "You're in" page (noindexed, no footer subscribe CTA; Buttondown's after-confirming redirect lands here)
│   └── *.html           # One page per essay, generated from career/work-newsletter/posts/*.md via /prep-newsletter-post
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

**When a deploy publishes a new writing post:** right after verifying the live URL, prompt Karen to create an Apple Reminder for 7 days post-publish ("GA day-7 snapshot for `<slug>`") — details in the `/prep-newsletter-post` skill's deploy-day section.

## Making Changes

**Rebuild CSS after editing HTML** (only needed if new Tailwind classes are added):
```
npm run build:css
```

**Reviewing pages without a server**

Opening any page via file:// in Chrome works fully styled, because the relative `style.css` link resolves as long as the file sits in its real location. Only a *copy* of a page separated from the site folder renders unstyled (no `style.css` next to it), which is why single-file versions for emailing need the CSS inlined.

**Running a local server**

Start it yourself from a terminal at the repo root, then attach the browser preview to it (`portfolio` in this repo's `.claude/launch.json`, or `portfolio-live` in the Darkroom root registry). Both are attach-only entries with no command, deliberately.

```bash
python3 -m http.server 3457
```

The preview tool cannot start this one itself. Processes it spawns run in a sandbox where `getcwd()` fails and project files are unreadable, so every command form either dies at import or serves 404s for every path. The same command runs fine from an ordinary shell, which is what makes the failure look like a fluke. This cost about nine days of not being able to preview locally in July 2026 before it was diagnosed; full write-up in the Darkroom root `CLAUDE.md` under Tools & Setup.

**Side-by-side layouts use `md:` (768px), not `lg:` (1024px)**

The case study layout on projects.html activates side-by-side at `md:` so it matches when the desktop nav appears. Using `lg:` causes a visible mismatch where the nav looks "desktop" but content stays mobile-style stacked between 768–1023px.

## Contact Form

The contact modal on all pages uses [Web3Forms](https://web3forms.com/). Form submissions are sent to the email configured in the Web3Forms dashboard. The access key is embedded in each page's modal HTML.

## Analytics

Google Analytics (GA4, property `G-5X6X7CQSRR`) is on every page via the gtag snippet in each page's head; new writing pages inherit it automatically.

Configuration (set up 2026-07-22):
- **Key event `newsletter_subscribed`** — fires on a page view of `/writing/subscribed` (the post-confirmation page), counted once per session, no monetary value. This counts confirmed subscribers with source attribution. Buttondown's subscriber list stays the source of truth for the number itself; GA's version answers "which channel produced them."
- **Internal traffic filter** — Karen's home IP (`68.161.218.25`) is excluded via the Define Internal Traffic rule + the active Internal Traffic data filter. If Karen's own visits start appearing in Realtime again, the ISP rotated the IP: update the rule with the new address. Coverage is home wifi only (phone on cellular still counts).
- **Reports snapshot** — curated as the day-7 screenshot target: top metrics (Active users, New users, Engagement time, Views) + Top pages, Active users by first user source, Sessions by session source, Key events by event name, New vs Returning.
- **Habit** — ~7 days after each post publishes: Reports snapshot → Last 7 days → screenshot → snapshot entry in the Signal log (`career/work-newsletter/newsletter-log.md`). The deploy that publishes a post prompts Karen to set an Apple Reminder for this (see the `/prep-newsletter-post` skill's deploy-day section).
- **Dual URLs** — every writing page answers at both `.../slug.html` and the extensionless `.../slug` (GitHub Pages serves both), so path-based GA reports split one page into two rows while title-based reports (like the Reports snapshot's Top pages card) merge them. Share the extensionless canonical; sum the rows in path views.

## Newsletter Signup Form

The subscribe forms (Writing index + essay pages) post to Buttondown's embed endpoint (`https://buttondown.com/api/emails/embed-subscribe/kgunette`) in the background with `fetch` + `mode: 'no-cors'`, so readers stay on the page. Two things to know:

- **The inline "Thanks! Check your email" message is optimistic.** `no-cors` means the page cannot read Buttondown's response, so the message only confirms the request was sent. The endpoint itself was verified working 2026-07-13: a direct POST returns 302 → `state=confirmed_subscription`, and the double-opt-in confirmation email arrives.
- **Repeat signups from the same browser get silently rate-limited by Buttondown** (benign, but it makes hand-testing look broken). To test the flow, use a fresh `+tag` address (e.g. `karen.schoellkopf+test@gmail.com`) in a private window, confirm it appears in the Buttondown Subscribers list, then delete the test subscriber.
- **The platform side** (Buttondown firewall and its silent signup drops, sending domain DNS, reply routing, full testing protocol) is documented in `career/work-newsletter/buttondown-reference.md`. Read that before debugging a "signup didn't work" report.
- While the request is in flight, the button shows "Subscribing" with pulsing dots (`.subscribing .dot` in input.css; static under `prefers-reduced-motion`) and restores to "Subscribe" on failure.

## Reading Page

reading.html pulls book data from a published Google Sheet ("Book & Media & Recs Oh My"):

- 2026: `https://docs.google.com/spreadsheets/d/e/2PACX-1vQuOieHRZ_cDgvoN7TDeujJWV5Akg1ITU8WWEwrDnHjEkyzGEEvoDh4uaGJvZuNYl0WQL6_jTultDNW/pub?gid=1004744420&single=true&output=csv`
- 2025: `https://docs.google.com/spreadsheets/d/e/2PACX-1vQuOieHRZ_cDgvoN7TDeujJWV5Akg1ITU8WWEwrDnHjEkyzGEEvoDh4uaGJvZuNYl0WQL6_jTultDNW/pub?gid=1785861805&single=true&output=csv`

Books display sorted by status (in progress, done, DNF), then alphabetically by title. To add a new year, publish a new tab from the Google Sheet and add the URL to the `SHEETS` object in reading.html.

### How the sheet feeds the page

The full pipeline: Quick Add form → hidden "Form Responses 1" tab → ARRAYFORMULAs at Media Tracker row 231 spill form data into columns C/D/E/G/H/I → "Read in 20XX" tabs QUERY the Media Tracker for books → published CSVs (above) → reading.html.

**The fragility rule:** in Media Tracker, from row 231 down, only columns A (Status), B (Year), and F (Where/Platform) are typed by hand. Typing anything into the other columns in that zone kills the ARRAYFORMULAs with #REF! and blanks every form-fed row (this happened 2026-07-15; fixed by deleting the typed cells and resubmitting those entries through the form). New items always go in through the Quick Add form, never typed into the tracker.

### Parser and deploy notes

- As of 2026-07-15 the CSV parser in reading.html handles standard CSV: quoted fields may contain commas, line breaks, and escaped quotes, and blank lines are skipped. Before that, a line break inside a sheet cell silently dropped that book from the page.
- The canonical domain is `www.karenschoellkopf.com`. The apex domain and kgunette.github.io both 301 to it, so any curl check of the live site must follow redirects (`curl -L`) or hit www directly.

## License

© 2026 Karen Schoellkopf

Last updated: 2026-07-15
