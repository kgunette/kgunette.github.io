# Karen Schoellkopf Portfolio Website
Personal Portfolio Site: This is a simple personal portfolio site, nothing fancy to see here, but shows a deeper look at my work.

## Design System
This site uses a minimal design approach with a slate gray accent color.

### Color Palette
- **Primary accent:** `#334155` (slate gray)
- **Background tint:** `#f8fafc` (very light slate)
- **Text primary:** `#1a1a1a` (near black)
- **Text secondary:** `#4a4a4a` (medium gray)
- **Border color:** `#e0e0e0` (light gray)

### Typography
- **Font:** Inter (Google Fonts)
- **Headings:** Bold, oversized with tight letter-spacing
- **Body text:** 1.05rem with 1.8 line-height for readability

## Making Updates

### Adding Accent Color to Text
To highlight important text in the slate gray accent color:

```html
<span class="accent">Highlighted text</span>
```

Or inline:
```html
<span style="color: #334155;">Highlighted text</span>
```

### Using Highlight Boxes
For key sections, there is a highlight box component:

```html
<div class="highlight-box">
  <h2>Section Title</h2>
  <p><span class="accent">Key detail</span> | Additional context</p>
  <p>Your content here...</p>
</div>

```

This creates a subtle slate-tinted box with a left border accent.

### Creating Visual Hierarchy with Offsets
To create an asymmetric, editorial-style layout for certain sections:

```html
<div class="section-offset">
  <h2>Heading</h2>
  <p>Content...</p>
</div>

```

This adds left padding to create visual interest in specific sections. (Note: Automatically removed on mobile for better readability)

## File Structure

```
portfolio-website/
├── index.html          # Home page
├── projects.html       # Projects/case studies page
├── contact.html        # Contact page
├── reading.html        # What I'm reading page
└── README.md           # This file
```

## Technical Details

### Dependencies

- Bootstrap 5.3.0 (for responsive grid and components)
- Google Fonts - Inter (for typography)
- Font Awesome or similar (if using icons)

### Responsive Design

The site is fully responsive with breakpoints at:
- Desktop: 1100px max-width container
- Tablet: Adjustments at 768px
- Mobile: Further adjustments at 576px

Key responsive behaviors:
- Navigation collapses to hamburger menu on mobile
- Heading sizes scale down on smaller screens
- Section offsets remove on mobile
- Container padding reduces on mobile

### Browser Support

Modern browsers (Chrome, Firefox, Safari, Edge) - last 2 versions

## Maintenance Notes

### Changing the Accent Color

To change accent color from slate gray to another color:

1. Find and replace `#334155` throughout CSS
2. Update `#f8fafc` background tint (use a very light version of new accent color)
3. Test hover states and underlines to ensure good contrast

### Reading Page
The reading page (reading.html) pulls data automatically from a published Google Sheet:
- 2025: https://docs.google.com/spreadsheets/d/e/2PACX-1vQuOieHRZ_cDgvoN7TDeujJWV5Akg1ITU8WWEwrDnHjEkyzGEEvoDh4uaGJvZuNYl0WQL6_jTultDNW/pub?gid=1785861805&single=true&output=csv
- 2026: https://docs.google.com/spreadsheets/d/e/2PACX-1vQuOieHRZ_cDgvoN7TDeujJWV5Akg1ITU8WWEwrDnHjEkyzGEEvoDh4uaGJvZuNYl0WQL6_jTultDNW/pub?gid=1004744420&single=true&output=csv

To add a new year, publish a new tab from the Google Sheet (File → Share → Publish to web) and add the URL to the SHEETS object in reading.html.

## License

© 2026 Karen Schoellkopf

---

**Last updated:** January 2026
