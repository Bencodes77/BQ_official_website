# BQ Technologies — Design System

## Direction

Clear, established and approachable. The website uses a light corporate identity, direct photography, strong information hierarchy and familiar interaction patterns. It should feel like a real Tanzanian technology business—not an abstract startup template.

## Principles

1. Make the company understandable in the first viewport.
2. Use real context and photography before abstract decoration.
3. Keep layouts structured, familiar and easy to scan.
4. Use one confident accent colour with neutral supporting colours.
5. Prefer clear service descriptions over marketing effects.
6. Keep claims factual and supportable.

## Colour

| Role | Value |
| --- | --- |
| Page | `#FFFFFF` |
| Warm section | `#F6F3ED` |
| Cool section | `#EDF2F3` |
| Primary ink | `#15232E` |
| Secondary text | `#687781` |
| Deep navy | `#102534` |
| Primary accent | `#D84A32` |
| Accent hover | `#B83824` |
| Accent tint | `#F7E7E2` |
| WhatsApp brand | `#1FB75B` |
| Border | `#DCE3E6` |

The vermilion accent is used for primary actions, section labels, small rules and focus states. Avoid gradients, neon colours and decorative glow.

## Typography

- Family: IBM Plex Sans
- Headings: 600
- Body: 400–500
- Labels and actions: 600–700
- Headings use tight but readable tracking
- Body copy should remain below approximately 68 characters per line

## Layout

- Maximum content width: 1180px
- Desktop side margin: 24px minimum
- Mobile side margin: 16px
- Desktop section spacing: 88–136px
- Mobile section spacing: approximately 80px
- Use square or lightly rounded geometry; default radius is 4px

## Components

### Header

A narrow navy contact bar sits above a white sticky navigation bar. Navigation is concise and the contact action is always clear.

### Hero

Two-column layout with direct business copy and real Tanzania photography. No abstract orbit, fake interface, dashboard, gradient headline or glass panel.

### Service grid

Simple bordered service blocks with consistent line icons. Cards do not float, glow or use heavy shadows.

### Buttons

Solid vermilion with white text. Secondary buttons use an ink border and transparent background.

### Footer

A structured deep-navy footer with a prominent conversation prompt, service/company/contact columns and recognisable social icons.

### WhatsApp

Use the dedicated floating green WhatsApp control with an accessible label. Do not duplicate floating controls.

## Motion

- Content reveal: 600ms with 18px maximum travel
- Control feedback: 180ms
- No looping effects, parallax or animated backgrounds
- Respect `prefers-reduced-motion`

## Avoid

- Full dark themes
- Cyan-on-navy startup styling
- Abstract system or orbit diagrams
- Fake dashboards, terminals and charts
- Unsupported statistics or guarantees
- Excessive rounded cards
- Glassmorphism and glow
- Multiple competing accents
- Newsletter success states without a real service

## Delivery checklist

- Semantic heading order
- Keyboard-operable navigation and disclosure controls
- Visible focus states
- Recognisable social and WhatsApp icons
- No horizontal overflow at 375px
- Responsive checks at 375px, 768px, 1024px and 1440px
- Reduced-motion support
- Valid internal and external links
- No unsupported claims
- Metadata, sitemap, privacy and terms aligned with current functionality
