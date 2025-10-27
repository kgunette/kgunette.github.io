# Karen Schoellkopf Portfolio Website
Personal Portfolio Site: This is a simple personal portfolio site, nothing fancy to see here, but you can get a deeper look at my work.

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
<span class="accent">Your highlighted text</span>
```

Or inline:
```html
<span style="color: #334155;">Your highlighted text</span>
```

### Using Highlight Boxes
For key sections like major accomplishments, use the highlight box component:

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
  <h2>Your Heading</h2>
  <p>Your content...</p>
</div>

```

This adds left padding to create visual interest in specific sections. (Note: Automatically removes on mobile for better readability)

## File Structure

```
portfolio-website/
├── index.html          # Home page
├── projects.html       # Projects/case studies page
├── contact.html        # Contact page
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

### Updating Content

1. **Home page:** Edit `index.html`
2. **Projects:** Edit `projects.html`
3. **Contact info:** Edit `contact.html`

### Changing the Accent Color

To change accent color from slate gray to another color:

1. Find and replace `#334155` throughout CSS
2. Update `#f8fafc` background tint (use a very light version of your new accent)
3. Test hover states and underlines to ensure good contrast

### Adding New Pages

1. Copy the structure from an existing page
2. Update the navigation `active` class
3. Ensure the footer is included
4. Test responsive behavior

## License

© 2025 Karen Schoellkopf

---

**Last updated:** October 2025
