# BQ Technologies — Design System

## Direction

Premium, calm and technically capable. The website uses one intentional dark identity, an editorial information hierarchy and restrained motion. Every visual element must explain, guide or establish trust.

## Core principles

1. Clarity before decoration.
2. Factual language before marketing claims.
3. Editorial layouts before repeated cards.
4. One controlled accent colour.
5. Motion should be subtle and optional.
6. Mobile layouts must be intentionally composed.

## Colour

| Role | Value |
| --- | --- |
| Primary background | `#050A10` |
| Secondary dark surface | `#09111B` |
| Raised dark surface | `#0D1723` |
| Light editorial background | `#EEF3F7` |
| Secondary light background | `#DFE7ED` |
| Primary light text | `#F7FAFC` |
| Secondary light text | `#A8B5C1` |
| Primary dark text | `#0B1420` |
| Secondary dark text | `#53616E` |
| Accent | `#35BDF5` |
| Accent highlight | `#74D7FF` |

Do not introduce purple, pink, orange or rainbow gradients. Cyan is used for navigation feedback, primary actions, small labels and the branded systems motif.

## Typography

- Family: Inter
- Body: 400–500
- Labels and actions: 600–700
- Headings: 500 with tight tracking
- Display scale: responsive `clamp()` values
- Body copy should stay below approximately 68 characters per line

## Layout

- Maximum content width: 1180px
- Desktop side margin: 24px minimum
- Mobile side margin: 16px
- Section spacing: 96–144px desktop, 88px mobile
- Grid and alignment should carry the visual system; avoid decorative containers

## Shape and depth

- Small radius: 8px
- Medium radius: 14px
- Large radius: 22px, reserved for the hero composition
- Use thin borders instead of heavy shadows
- Glass is limited to the sticky header and hero system frame

## Motion

- Reveal: 700ms, 22px maximum travel
- Controls: 180–250ms
- No looping background movement
- No scroll hijacking or parallax
- All motion must collapse under `prefers-reduced-motion`

## Components

### Buttons

Solid cyan, dark text, 8px radius and a small vertical hover shift. Use one primary CTA per major decision point.

### Service rows

Numbered editorial rows separated by hairlines. Do not convert them into identical icon cards.

### Forms

Dark solid inputs with visible cyan focus states, explicit labels and honest descriptions of what submission does.

### Team

Photography is quiet and consistent. Roles are factual and biographies are optional.

## Forbidden patterns

- Theme toggles
- Fake dashboards, terminals, charts or statistics
- Unsupported claims and guarantees
- Repeated glowing cards
- Decorative icon grids
- Excessive pills, badges or floating controls
- Generic AI brains, robots, shields and circuit imagery
- Newsletter success states without a real subscription service

## Delivery checklist

- Semantic heading order
- Keyboard-operable navigation and disclosure controls
- Visible focus states
- Accurate alt text
- No horizontal overflow at 375px
- Responsive checks at 375px, 768px, 1024px and 1440px
- Reduced-motion support
- Valid internal links
- No unsupported claims
- Metadata, sitemap, privacy and terms aligned with current functionality
