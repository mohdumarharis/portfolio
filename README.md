# Umar Haris — portfolio redesign

A responsive, buildless, five-page portfolio based on https://www.umarharis.com/ and the supplied previous portfolio HTML. Designed for hiring teams and potential collaborators equally.

## Files

- `index.html`: introduction and selected project previews
- `work.html`: all six projects, project navigation and workflow diagrams
- `about.html`: background and education
- `experience.html`: career history and toolkit
- `contact.html`: contact details and the restored contact form
- `styles.css` and `pages.css`: shared responsive design system
- `app.js`: mobile navigation, pipeline exploration, email copying and conceptual line drawing
- `contact.js`: form validation, delivery and accessible feedback
- `contact-config.js`: original EmailJS public browser configuration
- `assets/`: locally served fonts, favicon, and the original downloadable CV

Serve the repository root using any static web host. No package installation or build is required. For local preview: `python3 -m http.server 4173`.

## Content choices

Work appears before career history. The four original projects retain their scope and attribution, alongside two personal projects: Advanced RAG App and AI Insurance Claim Verification Agent. The home page features call intelligence and the two personal projects; the work page retains all six. Project visuals are conceptual illustrations; none is represented as a measured chart, a product screenshot, or a patient record. Work dates and metrics are retained from the existing portfolio and have not been independently verified. The inconsistent “4+” versus “5–6” experience statements are replaced by the actual role dates.

Advanced RAG App content is based on its [public repository](https://github.com/mohdumarharis/advanced-rag-app), including the retrieval pipeline, indexing code, answer prompt and checked-in evaluation baseline. Results are described as specific to the reference corpus; the portfolio does not claim a universal accuracy improvement or guaranteed abstention. The insurance agent description is supplied by the portfolio owner and is explicitly identified as a personal demonstration project. No repository link is shown for it because one was not found in the owner's GitHub repositories.

The Contact page restores the Name, Email, Company and Message fields from the supplied previous HTML, preserving its EmailJS service, template, public key and template parameter names. Company remains optional. The integration uses EmailJS's documented REST endpoint and needs no third-party script to load. Email links remain available as a fallback. The CV is the original file supplied by the existing website.

The form checks required fields and email format, blocks duplicate submissions while sending, preserves the draft on errors, and clears fields only after a successful service response. No real emails were sent during verification. If EmailJS has an origin allowlist enabled, the private preview hostname must be allowed there before it can send; the account's settings have not been inspected or changed.

Integration references: [EmailJS send endpoint](https://www.emailjs.com/docs/rest-api/send/) and [domain allowlist](https://www.emailjs.com/docs/faq/can-i-add-my-domain-to-allowlist/).

Before publishing static changes, check JavaScript syntax, local asset paths, cross-page links, project anchors, expandable notes and responsive layouts.

This repository is connected to Vercel and serves the public portfolio at https://www.umarharis.com. The earlier private Sites preview is a separate deployment.

## Design

Warm paper `#f4f2ec`, dark ink `#202e2c`, vermilion `#b83b27`, muted sage `#e6e9df`. Newsreader display type paired with Public Sans. Hairline rules, a restrained typographic scale, varied compositions, and project-specific diagrams. No scroll hijacking, autoplay, animated counters, generic skill-rating bars, or invented testimonials.

See the accompanying design research document for the source articles and audit.
