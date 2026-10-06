# Umar Haris — portfolio redesign

A responsive, buildless, five-page portfolio based on https://www.umarharis.com/ and the supplied previous portfolio HTML. Designed for hiring teams and potential collaborators equally.

## Files

- `dist/index.html`: introduction and selected project previews
- `dist/work.html`: all four projects and the interactive pipeline
- `dist/about.html`: background and education
- `dist/experience.html`: career history and toolkit
- `dist/contact.html`: contact details and the restored contact form
- `dist/styles.css` and `dist/pages.css`: shared responsive design system
- `dist/app.js`: mobile navigation, pipeline exploration, email copying and conceptual line drawing
- `dist/contact.js`: form validation, delivery and accessible feedback
- `dist/contact-config.js`: original EmailJS public browser configuration
- `dist/assets/`: locally served fonts, favicon, and the original downloadable CV
- `tests/contact.test.cjs`: simulated form delivery and failure tests

Serve `dist/` using any static web host. No package installation or build is required. For local preview: `python3 -m http.server 4173 --directory dist`.

## Content choices

Work appears before career history. Four projects retain their original scope and attribution. Project visuals are conceptual illustrations; none is represented as a measured chart, a product screenshot, or a patient record. Work dates and metrics are retained from the existing portfolio and have not been independently verified. The inconsistent “4+” versus “5–6” experience statements are replaced by the actual role dates.

The Contact page restores the Name, Email, Company and Message fields from the supplied previous HTML, preserving its EmailJS service, template, public key and template parameter names. Company remains optional. The integration uses EmailJS's documented REST endpoint and needs no third-party script to load. Email links remain available as a fallback. The CV is the original file supplied by the existing website.

The form checks required fields and email format, blocks duplicate submissions while sending, preserves the draft on errors, and clears fields only after a successful service response. No real emails were sent during verification. If EmailJS has an origin allowlist enabled, the private preview hostname must be allowed there before it can send; the account's settings have not been inspected or changed.

Integration references: [EmailJS send endpoint](https://www.emailjs.com/docs/rest-api/send/) and [domain allowlist](https://www.emailjs.com/docs/faq/can-i-add-my-domain-to-allowlist/).

Run form tests with `node --test tests/contact.test.cjs`. All requests in those tests are simulated; the tests cannot contact EmailJS. Syntax, internal links, required-field validation, navigation and responsive layouts are also checked before publishing.

The private Sites preview is separate from the existing domain. Pointing umarharis.com to this design requires a deliberate hosting/domain change.

## Design

Warm paper `#f4f2ec`, dark ink `#202e2c`, vermilion `#b83b27`, muted sage `#e6e9df`. Newsreader display type paired with Public Sans. Hairline rules, a restrained typographic scale, varied compositions, and project-specific diagrams. No scroll hijacking, autoplay, animated counters, generic skill-rating bars, or invented testimonials.

See the accompanying design research document for the source articles and audit.
