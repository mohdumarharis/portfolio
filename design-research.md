# Umar Haris: portfolio audit and redesign rationale

Prepared 6 October 2026. Source: [umarharis.com](https://www.umarharis.com/). Audience: hiring teams and potential consulting collaborators, equally.

## What the existing site communicates

The strongest story is practical applied AI: a production call-analytics pipeline at Call Assist, supported by forecasting, deployment and data engineering experience. The pharmacy degree and MSc with Distinction form a useful connection to clinical NLP and molecular activity prediction.

The existing site includes four jobs, four projects, six technology categories, two degrees, a downloadable CV and contact links. I retrieved its HTML, examined it in a browser and preserved the original CV. Its contact form uses EmailJS; I did not submit it.

## What needed to change

- **Work was too far down the page.** Recruiters and clients had to read biography and career history before seeing the most distinctive evidence. Selected work now comes immediately after the introduction.
- **Too much material had equal emphasis.** The redesign gives the deployed call pipeline the leading position and treats the other projects according to their subject and scope.
- **The visual identity was familiar.** Dark gradients, glowing accents, a terminal-style introduction and repeated text-heavy blocks made the page resemble many technical portfolios. The redesign uses publication-style typography and project-specific diagrams.
- **Experience totals conflicted.** The hero said “4+ years”; the biography said “5–6 years.” The new design uses actual career dates rather than choosing a total without confirmation.
- **Contact was primarily framed around employment.** The dedicated Contact page welcomes both role and project conversations through the restored contact form.
- **Metrics needed context.** The 22% improvement and 35% reporting-time reduction stay attached to Call Assist experience. They are not presented as measured results of the call-analysis pipeline.

## Articles worth reading

### 1. Nielsen Norman Group: AI Prototyping in Real Design Contexts

[Read the evaluation](https://www.nngroup.com/articles/ai-prototyping/)

NN/g found that detailed design context improved generated prototypes, but the results still needed judgment about hierarchy, grouping, spacing and contrast. The practical lesson is to review the actual interface and its tasks, not just the first attractive screen.

**Applied here:** visitors can move from a concise introduction to project evidence, career context, then contact. Desktop and mobile layouts and interactions receive direct browser checks.

### 2. Anthropic: Harness Design for Long-Running Application Development

[Read the frontend design section](https://www.anthropic.com/engineering/harness-design-long-running-apps)

The article evaluates frontend work across design quality, originality, craft and functionality. It also discusses models' tendency to overrate their own output. A design should show coherent, contextual decisions and remain usable.

**Applied here:** one restrained visual system, custom illustrations grounded in the projects, readable content and real links. “Looks premium” is not treated as a verification result.

### 3. VisiblePage: How to Make AI-Generated Pages Look Less Generic

[Read the practical guide](https://visiblepage.com/insights/websites/make-ai-pages-look-less-generic/)

This guide recommends specifying typography, a small palette, spacing and one memorable visual decision before generating a page. It argues against allowing all design choices to fall back to common defaults.

**Applied here:** warm paper, dark ink and vermilion; a typographic pairing; a custom signal-to-system drawing; compositions that change with the content. This is a practical vendor guide, not an independent research study.

### 4. Bruvora: How to Avoid AI-Slop Typography

[Read the typography guide](https://www.bruvora.com/blog/stop-ai-slop-typography)

The guide highlights weak hierarchy, default type settings and one neutral typeface being asked to do every job. Its recommendation is deliberate contrast between display typography and reading text.

**Applied here:** Newsreader carries the editorial headings; Public Sans carries explanations and navigation. Both are served locally. This is design guidance from a type-focused vendor, rather than experimental evidence.

## The proposed direction

**Data science, put to work.** A personal technical portfolio with the pacing of a carefully edited publication.

- Paper: `#f4f2ec`; ink: `#202e2c`; accent: `#b83b27`; sage: `#e6e9df`.
- Typography: Newsreader and Public Sans, with a limited scale and clear hierarchy.
- Layout: asymmetric introduction, one substantial featured project, staggered research work, concise career rows and two contact routes.
- Visuals: original vector diagrams. The call architecture describes the supplied workflow. Molecule and text graphics are explicitly conceptual. No invented dashboards, numerical charts, customer data or testimonials.
- Interaction: navigate five separate pages, inspect the three pipeline stages, open project notes, download the existing CV, copy an email address or use the restored EmailJS contact form.
- Motion: restrained state changes and ordinary scrolling; respects reduced-motion preferences.

The goal is specificity and editorial judgment. A light background, serif font or absence of gradients alone does not guarantee a distinctive design.

## Before replacing the existing domain

The separate Sites version is a private review preview. The current domain has not been changed. The claims, dates, CV and metrics come from the existing portfolio and have not been independently audited. The Contact page now restores the four fields and EmailJS configuration from the supplied previous HTML. Delivery logic was tested with simulated responses; no live test email was sent.

The highest-value future content improvement would be a real, sanitised project artifact and a short account of the evaluation criteria, tradeoffs and outcomes for each major project. None has been invented for this redesign.
