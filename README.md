# Changmin Lee — Minimal Light homepage

This site uses the actual [Minimal Light theme by Yaoyao Liu](https://github.com/yaoyao-liu/minimal-light/tree/dd114c3fef2d97adc1c6b6d46901e0d96ab83a7c), based on Steve Smith's Minimal. It replaces the earlier hand-written approximation with the upstream Jekyll layout, styles, fonts, icon links, publication rows, and responsive rules.

## Edit personal content

- `_config.yml`: name, position, affiliation, email, portrait, profile destinations. `auto_dark_mode: false` selects the original light theme; `font: Serif` selects the original Crimson Pro and Ubuntu Mono fonts. The demo analytics ID is omitted.
- `index.md`: biography, DGIST education, research interests, and News in reverse chronological order. News uses the original template's dated bullet-list format.
- `_data/publications.yml`: publications in display order. The newer avatar-stylization manuscript is **Under Review**, not an accepted conference publication, and comes first. It has only its title, authors, teaser, and status. StyleID follows with its existing links.
- `assets/css/palette.css`: color overrides only. Do not add layout, typography, spacing, sizing, radius, shadow, or motion overrides here.

The upstream `_sass` and original CSS files are unchanged. `_layouts/homepage.html` adds the palette file, personal favicon metadata, accessible link labels, and fuller author credits. `_includes/publications.md` adds image descriptions, safe external-link attributes, and avoids a blank link for unpublished manuscripts. These changes do not alter component geometry or appearance.

CV creation and its link remain deferred. No invented news, service history, or sample publications are included.

## Images

The supplied portrait is unchanged apart from web delivery encoding. Publication thumbnails in `assets/img` fit the original responsive thumbnail frames: the complete figures are centered on square white canvases with enough padding for the theme's original cover rule at desktop and mobile widths. The figure originals are not modified.

## Publish

GitHub Pages builds the `main` branch root with Jekyll. Keep `index.md`, `_config.yml`, and the original theme folders. Do not add `.nojekyll`, a competing `index.html`, or the former custom `styles.css`.

The upstream theme version is pinned in `_config.yml`. `LICENSE` and `licenses/minimal-light-CC0.txt` contain the theme's CC0 text; those apply to the theme, not the owner's portrait, publication figures, or personal content. See `THIRD_PARTY_NOTICES.md` for provenance.
