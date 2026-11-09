# Changmin Lee — Personal Website

## 1. Atmosphere & Identity
A quiet academic homepage inspired by the structure of https://kwanyun.github.io/: profile visual and introduction at the top, a compact link row, and image-led publication entries below. Use only the user's supplied biography and verified publications. The initial profile visual is a neutral CL monogram, not an invented portrait.

## 2. Color
| Token | Value | Usage |
| --- | --- | --- |
| --paper | #ffffff | Page background |
| --ink | #20252b | Primary text |
| --muted | #58636f | Secondary text |
| --line | #e2e6ea | Section rules |
| --accent | #245c82 | Links and keyboard focus |
| --accent-hover | #173e59 | Interactive hover state |
| --soft | #f5f7f9 | Profile visual and link backgrounds |
| --highlight | #edf4f9 | Publication year background |

## 3. Typography
Primary: Arial, Helvetica, sans-serif. Only the decorative monogram uses Georgia, Times New Roman, serif. Sizes: caption 12px, small 14px, body 16px, publication title 20px, section title 28px, name 36px desktop / 32px mobile, monogram 72px. Body line-height 1.7; headings 1.3. System fonts avoid network font requests.

## 4. Spacing & Layout
4px base spacing, named tokens for 4, 8, 12, 16, 24, 32, 40, 48, 64px. Content maximum width 1008px including 48px desktop side gutters. Profile columns: 232px visual (192px below 800px) and flexible biography, 40px gap. Publication columns: 232px teaser and flexible text, 32px gap. At 640px, both stack, with 24px page gutters and a 144px profile visual. Minimum usable viewport 320px. All email addresses wrap if necessary.

## 5. Components
Text links use the accent token and a visible keyboard outline. Inline biography, author and contact links have persistent underlines so color is not their sole distinguishing cue. Reusable resource links are real anchors with a light-gray background, 4px radius, 8px/12px padding and 8px gaps; used for Email/GitHub/VML and Project/Paper/Code. The author name is bold in publication author lists. Decorative SVG icons and the text monogram are hidden from assistive technology. Publications use semantic articles, a linked descriptive image, title, author list, venue, summary, and resource links.

## 6. Motion & Interaction
No automatic or scroll-triggered motion is needed on this compact landing page. Hover and focus feedback is immediate. Every anchor works with keyboard navigation and keeps the current browsing context.

## 7. Depth & Surface
Borders-only separation between major sections. No shadows, gradients, stock photography, decorative cards, or fixed navigation. The monogram uses one flat soft surface, with no implied interaction. Profile, publication image and resource links use a 4px corner radius.
