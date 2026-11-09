# Changmin Lee — Original Minimal Light

## 1. Atmosphere & Identity
Use Yaoyao Liu's actual Minimal Light repository at commit dd114c3fef2d97adc1c6b6d46901e0d96ab83a7c. This is template configuration and content replacement, not a redesign. Keep its layouts, CSS, fonts, spacing, responsive rules, icons, badges, thumbnail frames, and resource buttons. Remove the previously invented stylesheet and layout. User information and publication order are the only content substitutions. The newer manuscript is Under Review and comes first; CV remains deferred.

## 2. Color
Use the original light-mode setting. A separate color-only file overrides: white background #ffffff, charcoal text #303740, muted text #626a73, navy headings/links/badges #193b61, hover navy #102946. Original geometry, shadows, sizes, and transitions must not change. Retain the upstream stylesheet unchanged so this can be audited.

## 3. Typography
Original Serif setting: Crimson Pro, 16px / 1.5, weight400. Ubuntu Mono for email, 14px. Original h1 is28px weight500; h2 is157% weight500. Keep original heading margins and line-height1.1. Original icon fonts: Academicons and Font Awesome.

## 4. Spacing & Layout
Original wrapper960px; fixed header232px with4em top padding; main section650px with4em top padding and50px bottom padding. Original avatar45% with20px padding; original960px and480px responsive breakpoints. Original publication flex rows and side paddings. Do not replace with custom grid or different gutters. Teaser frame270x123px; supply padded image assets to retain complete figures in that unchanged frame.

## 5. Components
Use upstream homepage layout and publications include, configured with personal content. Profile links remain circular icon links; omit CV and Twitter because unavailable. Publication rows keep original title, authors, periodical, badge, and small PDF/Code/Project Page buttons. Under-review paper has no resource links or year. Preserve original footnote styling, with Yaoyao Liu and Steve Smith credited. No separate StyleID figure credit, per author request.

## 6. Motion & Interaction
Keep upstream hover transforms, publication/button transitions, and responsive behavior. Nonvisual additions may provide alt text, accessible link labels, and safe link attributes. News uses the original template's heading and dated bullet list between Research Interests and Publications, with personal milestones in reverse chronological order. Do not add custom navigation, animation, sections beyond the requested original News section, or controls. Disable the upstream demo's analytics ID.

## 7. Depth & Surface
Keep the original rounded teaser frame and shadows, badge overlay, and small bordered resource buttons. No custom cards, full-width rules, or reinterpreted surfaces. Personalization is restricted to content and palette.
