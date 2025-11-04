# Cat Website - Interactive Multi-page Experience

An interactive, responsive website featuring dynamic navigation, modal dialogs, and custom form validation built with vanilla JavaScript.

## Features

- **Adaptive Hamburger Menu**: Desktop horizontal nav transforms to mobile hamburger menu at 44rem breakpoint
- **Modal Dialog System**: Subscribe functionality with custom form validation
- **JavaScript Form Validation**: Real-time validation with custom error messages
- **Fully Responsive**: Seamless experience from 360px to desktop sizes
- **Keyboard Accessible**: Complete keyboard navigation support with skip links
- **Semantic HTML5**: Proper use of modern HTML elements and ARIA labels

## Technologies Used

- HTML5 (Semantic markup, Dialog API)
- CSS3 (Grid, Flexbox, responsive design)
- Vanilla JavaScript (ES6+, event handling, DOM manipulation)
- Node.js & Express (development server)

## Getting Started

### Installation
```bash
npm install
```

### Running the Project
```bash
node server.js
```

Visit: `http://localhost:3000/`

## Key Features

### Interactive Navigation
- Desktop: Horizontal navigation menu
- Mobile (< 44rem): Hamburger menu with smooth transitions
- Same HTML structure adapts via CSS

### Modal Dialog
- Subscribe buttons trigger modal window
- Custom form validation (no HTML5 validation)
- Email validation checks for "@" symbol
- Confirm email field must match
- ESC key closes modal (native dialog behavior)
- Real-time validation on field changes

### Responsive Design
- Adaptive breakpoint at 44rem
- Text wraps around images at mobile sizes using float
- Footer navigation adapts from horizontal to vertical
- Panels adjust spacing at different breakpoints

### Accessibility Features
- Skip link to main content
- Keyboard navigation throughout
- ARIA labels for icons and controls
- Descriptive alt text for all images
- Focus indicators on interactive elements
- No color-only information conveyance

## Project Structure
```
public/
├── index.html          # Homepage
├── cats.html           # Famous Cats page
├── styles.css          # Main stylesheet
├── script.js           # JavaScript functionality
└── images/             # Image assets
```

## Color Palette

- Background: papayawhip, burlywood, #eee
- Accents: lime, lightcoral, dodgerblue
- Interactive: blue, red
- Modal backdrop: black (70% opacity)

## Form Validation Rules

- All fields required
- Email must contain "@" symbol
- Confirm email must match email field
- Validation runs on field change and form submission
- Custom error messages displayed inline

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Image Credits

All images sourced from:
- Unsplash (https://unsplash.com)
- Google Material Icons (https://fonts.google.com/icons)
- Personal copyright

See `licenses.txt` for detailed attribution.

## Development Notes

- Uses strict mode JavaScript
- Code wrapped in IIFE
- Follows ES6+ best practices (const/let, no var)
- Event listeners via addEventListener()
- Semantic CSS class naming (kebab-case)
- Consistent code formatting and indentation

## License

Personal project - All rights reserved
