# Portfolio Visual Style

## 1. Design positioning

**Working name:** Mineral Editorial

This is a motion-led portfolio for an AI Experience Designer. The portfolio has its own identity and does not inherit the visual language of ClarityBrief, Eco-Bridge, or any future project.

The intended first impression is:

- Editorial, not SaaS dashboard
- Tactile, not glossy tech
- Experimental, but still easy to navigate
- Calm and self-assured, not visually noisy
- Human-centred, not generic AI-themed

**Design dials:**

- `DESIGN_VARIANCE: 9`
- `MOTION_INTENSITY: 8`
- `VISUAL_DENSITY: 3`

The site should feel like a designed object before it feels like a project directory. Project pages and external product links can then carry their own visual identities.

## 2. Core visual idea

The visual language combines three references:

1. **Editorial typography:** oversized serif display type, strong cropping, deliberate overlap, and generous empty space.
2. **Mineral materiality:** lichen, oxidised metal, paper, stone, and muted natural surfaces rather than blue AI gradients.
3. **Systemic order:** a precise grid, restrained controls, clear typography roles, and consistent interaction behaviour.

The contrast between organic shapes and a strict grid is the main visual signature.

## 3. Colour system

| Token | Hex / value | Use |
|---|---:|---|
| Background | `#D4D6CC` | Main cool mineral-grey canvas |
| Surface | `#F0F0E8` | Light paper-like sections and media surfaces |
| Surface strong | `#C2C6B8` | Secondary panels and organic section transitions |
| Foreground | `#1B1D18` | Primary text and high-contrast lines |
| Muted | `#5B6056` | Supporting copy and metadata |
| Accent | `#536A3F` | Lichen green for interaction, focus, and selected states |
| Accent contrast | `#F2F1E9` | Text placed on the accent colour |
| Line | `rgba(27, 29, 24, 0.18)` | Structural borders and dividers |
| Grid line | `rgba(27, 29, 24, 0.075)` | Background grid only |

### Colour rules

- The portfolio uses one accent colour across the entire site.
- A project's brand colour is allowed only inside that project's own content or destination.
- Project colours must never recolour the global navigation, page background, typography system, or main CTA.
- Avoid generic AI blue, purple glow, neon gradients, and oversaturated accents.
- Shadows should be softly tinted from the foreground colour, never pure black.

## 4. Typography

### Display type

**Cormorant Garamond Variable** is used for the name, project titles, and occasional large statements. It is justified by the portfolio's editorial direction and should not be used for long body copy.

- Weight range: `400-500`
- Tight letter spacing: approximately `-0.055em`
- Compact but unclipped line height
- Italic only as an intentional emphasis within the same family

### Interface and body type

**Geist Sans** is used for navigation, descriptions, buttons, and readable supporting copy.

- Regular body: `400-500`
- Interactive text: `600`
- Body lines should remain short and direct

### Metadata

**Geist Mono** is reserved for concise metadata and a small number of labels.

- Small size, around `0.7rem`
- Uppercase only when the label has a real information role
- Do not place a mono eyebrow above every section

## 5. Layout and spacing

- Desktop uses a visible 12-column grid.
- Mobile collapses to a 4-column grid.
- The grid is structural and quiet. It should not compete with content.
- Composition is intentionally asymmetric at desktop sizes.
- Mobile layouts become strict single-column layouts with comfortable horizontal padding.
- Large empty zones are part of the composition, not unused space.
- The hero must fit in the initial viewport and establish identity immediately.
- Site content is contained within a maximum width of approximately `1560px`.

The page should alternate between poster-like compositions, curved spatial transitions, and direct project navigation. Repeating the same card layout section after section is not part of this system.

## 6. Shape and material language

### Decorative circles

Circles are purely decorative and must not contain project screenshots, product interfaces, or clickable project content.

They can contain:

- Mineral or lichen-like texture
- Soft tonal gradients
- Subtle grain or surface variation
- Slow positional or rotational motion

They should behave as visual punctuation and spatial anchors.

### Organic sections

Large curved shapes can transition between major sections. These shapes should feel cut from paper or formed from soft material, not like generic rounded cards.

### Radius system

- Interactive controls use a full pill radius: `999px`
- Media surfaces use a restrained soft radius: `18px`
- Large editorial compositions use curves as part of the section silhouette rather than applying rounded corners to every container

### Surface treatment

- Prefer fine grid lines, flat colour fields, texture, and large silhouettes.
- Avoid glassmorphism, heavy blur, glowing borders, and deep black shadows.
- Do not use decorative interface mockups inside abstract shapes.

## 7. Motion system

Motion is part of the portfolio identity, but every animation must communicate hierarchy, transition, feedback, or spatial continuity.

### Signature motion

- Staged hero typography reveal
- Slow drift or rotation of the mineral circle
- Subtle parallax between type, grid, and decorative shapes
- Curved section transitions that feel spatially connected

### Navigation and feedback motion

- Buttons lift slightly on hover
- Buttons compress on active press
- Project titles respond clearly on hover and focus
- Page movement uses a consistent easing curve: `cubic-bezier(0.16, 1, 0.3, 1)`

### Motion rules

- Animate transform and opacity whenever possible.
- Do not add motion simply to fill empty space.
- Avoid endless marquee repetition, custom cursors, and decorative scroll prompts.
- Do not mix multiple animation systems on the same element.
- All non-essential motion must collapse under `prefers-reduced-motion`.

## 8. Project presentation

The portfolio overview is visual and direct. It is not a compressed case-study archive.

- Projects are presented as large typographic navigation items.
- Hovering a project reveals a real project preview in a dedicated image mask. This is a semantic preview, not a decorative circle.
- Project previews alternate left and right by project order. Odd-position projects open from the left; even-position projects open from the right. Future projects inherit this rule automatically.
- Preview screenshots are captured at high resolution and shown inside a native 16:9 media frame. Never enlarge a low-resolution image to fill the full organic mask.
- Each project title opens an internal visual introduction before linking to the finished online product.
- The introduction uses a split-screen layout with a scrollable image gallery and fixed project context.
- Project screenshots are never placed inside the hero's decorative circle.
- The overview does not need process diagrams, research walls, or long methodology sections.
- A project's original colour palette appears inside its screenshots, while the surrounding portfolio interface keeps the global Mineral Editorial palette.

This keeps the portfolio identity coherent, gives recruiters enough visual context, and avoids sending them abruptly to an external product.

## 9. Navigation and controls

- Navigation is fixed, compact, and pill-shaped.
- Primary navigation uses `Work`, `About`, `What I Do`, and `Contact`. The CV remains available as a project asset but is not a primary navigation item.
- Desktop navigation remains on one line and stays below `80px` in height.
- Primary actions use the lichen accent colour.
- Secondary actions use a transparent background with a structural border.
- Use one label per intent. For example, do not mix `Contact`, `Let's talk`, and `Get in touch` for the same action.
- Focus-visible states use the accent colour with sufficient separation from the element.

## 9.1 What I Do composition

- The capabilities section uses one large circular field with scroll-responsive circular typography.
- Capability circles sit inside the field as an asymmetric cluster rather than a service card grid.
- `AI Experience Design` is the visual centre. UX/UI, motion, AI coding, and product prototyping form the supporting system.
- Scroll motion communicates range and connection: the outer phrase rotates while the capability cluster shifts at a different pace.
- On mobile, the section becomes a contained static composition with the same hierarchy and no sticky scroll behaviour.

## 9.2 About composition

- The About section opens with a direct personal introduction rather than a manifesto-only statement.
- The left side establishes name and identity; the right side holds two concise paragraphs about practice and background.
- The lower composition uses one portrait and one working-context image, offset over a single accent circle.
- The primary portrait uses the vertical Rome image; the secondary frame uses the horizontal Colosseum image.
- Photography enters with a restrained opposing rotation and vertical reveal. Reduced motion removes the rotation transition.
- Mobile keeps the introduction readable first, then layers the two media frames below it without horizontal overflow.

## 10. Accessibility and responsive behaviour

- Body and control text must meet WCAG AA contrast.
- All links and buttons require visible keyboard focus states.
- Hover interactions must have an equivalent focus state.
- Mobile layouts must avoid horizontal overflow at `390px` width.
- Decorative elements use `pointer-events: none` when they do not provide interaction.
- The site must honour `prefers-reduced-motion`.
- No custom cursor is used.
- Text remains readable when motion and decoration are disabled.

## 11. Guardrails for future iterations

Keep these rules stable unless the portfolio is intentionally rebranded:

- Do not derive the global palette from the newest featured project.
- Do not place project screenshots inside decorative circles.
- Do not turn the homepage into a SaaS dashboard or card grid.
- Do not use generic blue-purple AI gradients.
- Do not add process imagery to the project index unless it materially improves the visual story.
- Do not use heavy WebGL as the default visual solution.
- Do not copy the reference site's exact composition, texture, or colour values.
- Preserve the contrast between editorial type, organic material, and systemic grid.

## 12. Current CSS tokens

```css
:root {
  --background: #d4d6cc;
  --surface: #f0f0e8;
  --surface-strong: #c2c6b8;
  --foreground: #1b1d18;
  --muted: #5b6056;
  --line: rgba(27, 29, 24, 0.18);
  --grid-line: rgba(27, 29, 24, 0.075);
  --accent: #536a3f;
  --accent-contrast: #f2f1e9;
  --font-editorial: "Cormorant Garamond Variable", Georgia, serif;
  --media-radius: 18px;
  --control-radius: 999px;
  --nav-height: 68px;
}
```

This document describes the portfolio's current visual direction. It should be treated as the reference for future page, component, and motion decisions.
