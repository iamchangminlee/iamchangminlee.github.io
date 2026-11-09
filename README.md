# Changmin Lee — Academic Homepage

Single-page academic website for Changmin Lee, M.S. student at KAIST GSCT / Visual Media Lab.

Live website: https://iamchangminlee.github.io/

## Design and origin

Adapted from [Minimal Light by Yaoyao Liu](https://github.com/yaoyao-liu/minimal-light/tree/dd114c3fef2d97adc1c6b6d46901e0d96ab83a7c), which builds on the Minimal theme. The original Minimal was created by [Steve Smith (orderedlist)](https://github.com/orderedlist/minimal). Visible credits are retained in the footer, with detailed sources and licenses in `THIRD_PARTY_NOTICES.md`.

This version is plain HTML and CSS: a white background, charcoal body text, navy links, a profile sidebar on desktop, and a single scrolling column on phones. No JavaScript, analytics, third-party font requests, package installation, or Jekyll build is required. `DESIGN.md` describes the layout and shared tokens.

## Editing

- `index.html`: biography, links, publication, and footer credits.
- `styles.css`: colors, typography, spacing, and responsive layout. The palette is defined at the top under `:root`.
- `assets/profile-360.webp` and `assets/profile-720.webp`: web-sized versions of the supplied square portrait; image metadata removed, facial appearance unchanged.
- `assets/styleid-teaser.webp`: publication figure. Keep its source and license credit when reusing it.
- `favicon.svg`: CL monogram.

To add a publication, duplicate the existing `<article class="publication">` within the Publications section and update the title, author list, venue, image, and resource links. Give its heading a unique `id` and update the article's matching `aria-labelledby` value and the resource navigation's `aria-label`. Omit unavailable links instead of adding placeholders.

## Preview and publish

Serve this directory using any local static web server, then open its local address. For GitHub Pages, publish the repository's `main` branch at the root directory. The empty `.nojekyll` file preserves plain static-file publishing. No build step is needed.

Template dedications and third-party asset licenses apply only to their respective materials; they do not license the user's portrait or personal content for unrestricted reuse.
