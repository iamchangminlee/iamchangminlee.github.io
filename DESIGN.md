# Changmin Lee — Personal Website

## 1. Atmosphere & Identity
A compact, single-page academic homepage adapted from Yaoyao Liu's Minimal Light (upstream commit dd114c3fef2d97adc1c6b6d46901e0d96ab83a7c). Preserve its centered profile column and flowing research content. The user's white background, charcoal text, and navy accents replace the demo palette. Use the supplied square portrait, biography, DGIST education, and the StyleID and AAAI publications. Every section is on this page. The AAAI entry shows only its supplied title, authors, white-background teaser, and conference badge; no unconfirmed year, description, or resource buttons. CV creation is deferred at the user's request.

## 2. Color
| Token | Value | Usage |
| --- | --- | --- |
| --paper | #ffffff | Always-light page background |
| --ink | #303740 | Primary text |
| --muted | #626a73 | Secondary text |
| --navy | #193b61 | Headings, links, keyboard focus |
| --navy-hover | #102946 | Link hover |
| --line | #dce3eb | Resource and footer borders |
| --soft | #f3f6fa | Venue badge and hover fill |

## 3. Typography
Georgia / Times New Roman / serif for body and headings, following the academic character of Minimal Light. Arial / Helvetica / sans-serif for profile metadata, resource links, venue badge, and credits. Tokens: caption 12px, small 14px, body 16px, paper-title 18px, section-title 26px, name 30px. Body line-height 1.65, headings 1.25. Name and section headings use normal weight; paper titles and the user's author name are bold. System fonts require no external requests.

## 4. Spacing & Layout
4px base spacing with tokens for 4, 8, 12, 16, 20, 24, 32, 40, 48, 64px. Wrapper maximum width 960px plus 32px side gutters, top 64px. Desktop columns: 232px profile and flexible content, gap 64px. Profile sticky at 64px, circular portrait 176px. Publication: 208px teaser and flexible text, gap 24px. Consecutive publication entries have 48px vertical spacing. Below 800px the profile stacks above content and becomes static, with 24px gutters, 144px portrait, and 40px top spacing. Below 540px the publication stacks. Minimum viewport 320px. At desktop heights of 600px or less the profile becomes static so all links remain reachable. Footer stays in document flow.

## 5. Components
Profile header: portrait with descriptive alt text, name, M.S. role, linked affiliations, public email, and GitHub / LinkedIn / Google Scholar links in a centered wrapping row with 8px gaps. Main content: About Me, Research Interests, Publications. Biography paragraphs have a 16px gap. Each publication is a semantic article with teaser, venue badge, title, and author list; venue details, summary, and resource links appear only when available and requested. Resource links share a 4px radius, 8px/12px padding, 1px border, and 8px gap. Inline links are underlined. Keyboard focus is a 2px navy outline offset 4px. Footer credits Minimal Light / Yaoyao Liu and its Minimal lineage. Figures from the owner's publications have no separate footer credit, as requested by the owner.

## 6. Motion & Interaction
No automatic animation or JavaScript. Native anchors, immediate hover/focus feedback, explicit image dimensions, and a focus-revealed skip link to main content. The palette stays light regardless of operating-system appearance.

## 7. Depth & Surface
Flat white, no shadows or gradients. Circular profile portrait; teaser and resource links have 4px corners. Subtle borders for resource links and footer, soft background for the venue badge. No filler, empty sections, invented publications, or unavailable CV links.

