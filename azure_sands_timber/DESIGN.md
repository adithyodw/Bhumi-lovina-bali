# Design System Strategy: Tropical Editorial

## 1. Overview & Creative North Star
**The Creative North Star: "The Silent Sanctuary"**

This design system rejects the "loud" patterns of modern SaaS and standard booking engines. Instead, it adopts the pace of high-end editorial print—like a bespoke coffee table book for a private estate. The goal is to evoke the atmosphere of a Bali retreat: quiet, spacious, and deeply intentional.

To achieve this, we move beyond the grid. We embrace **intentional asymmetry**—placing text off-center or overlapping imagery to create a sense of curated discovery. We do not use "templates"; we create "compositions." The layout should feel like a series of physical spaces where the "white space" isn't empty—it is luxury.

---

## 2. Colors & Tonal Depth
The palette is rooted in the organic transitions of a Balinese coastline, from the deep Indian Ocean to the bleached sands of Uluwatu.

*   **Primary (`#001d2f`) & Primary Container (`#00334e`):** These represent the "Deep Ocean Blue." Use these for moments of highest prestige—footer backgrounds, immersive hero overlays, or primary call-to-actions.
*   **Secondary (`#725a39`) & Tertiary (`#2f1400`):** These "Natural Wood" and "Sand" tones provide warmth. They are your grounding elements.
*   **Surface Hierarchy (The "No-Line" Rule):** 
    *   **Prohibit 1px solid borders.** Sectioning must be achieved through background shifts. 
    *   Place a `surface-container-low` (`#f4f4f0`) section directly against a `surface` (`#faf9f5`) background to define a change in content without "closing" the space with a line.
*   **The Glass & Gradient Rule:** 
    *   For floating navigation or mobile menus, use `surface` at 80% opacity with a `24px` backdrop-blur. 
    *   Main CTAs should utilize a subtle linear gradient from `primary` to `primary_container` to add "soul" and prevent the UI from looking digitally flat.

---

## 3. Typography
The interplay between a high-contrast serif and a functional sans-serif mimics the typography of a luxury fashion journal.

*   **Display & Headline (Noto Serif):** These are the "Voice" of the resort. Use `display-lg` for evocative, single-word headers (e.g., "Breathe," "Belong"). The high contrast of Noto Serif communicates heritage and exclusivity.
*   **Title & Body (Manrope):** This modern sans-serif provides a "Global 5-Star" feel. It is clean, legible, and invisible. 
*   **Editorial Spacing:** Increase letter-spacing on `label-md` and `label-sm` to `0.05rem` to give small metadata (like room dimensions or prices) an air of sophistication.

---

## 4. Elevation & Depth
In this system, depth is a suggestion, not a statement. We avoid heavy shadows in favor of **Tonal Layering.**

*   **The Layering Principle:** Treat the UI as layers of fine linen and stone.
    *   Base layer: `surface`
    *   Nested Content: `surface-container-low`
    *   Elevated Cards: `surface-container-lowest` (pure white)
*   **Ambient Shadows:** For high-priority elements like a booking modal, use a "Botanical Shadow": `0px 20px 40px rgba(27, 28, 26, 0.04)`. The shadow color is derived from `on_surface`, making it feel like a natural light shadow rather than a digital drop-shadow.
*   **The Ghost Border:** If a form field or button requires a container against a similar color, use `outline_variant` at **15% opacity**. It should be barely visible—a suggestion of a boundary.

---

## 5. Components

### Buttons
*   **Primary:** `primary` background, `on_primary` text. No border. Use `md` (0.375rem) roundedness. Padding: `16px 32px`.
*   **Secondary:** `surface` background with a `Ghost Border`. This feels lighter and more "integrated" into the page.
*   **Tertiary:** Text-only, using `label-md` with an underlined hover state.

### Cards & Discovery
*   **The Rule of No Dividers:** Do not use lines to separate room features. Use `body-md` text with increased line-height (`1.6`) and generous vertical padding from the spacing scale.
*   **Image Integration:** Images should use the `lg` (0.5rem) corner radius. Use asymmetrical margins (e.g., `margin-left: 10%`) for text blocks that overlap image containers to create an editorial feel.

### Input Fields
*   **Style:** Minimalist underline or `surface-container` background. 
*   **States:** On focus, the `outline` transitions from 15% opacity to 100% `primary`. Do not use "Error Red" for subtle mistakes; use a refined `error` token and keep the typography small and elegant.

### Signature Component: The "Floating Concierge"
*   A fixed-position `surface_container_lowest` chip with a `Ghost Border` and a high-blur ambient shadow. It acts as a persistent but non-intrusive "Book Now" or "Enquire" trigger.

---

## 6. Do's and Don'ts

### Do
*   **Do** use extreme white space. If you think there is enough padding, double it.
*   **Do** use "surface-on-surface" transitions to define hierarchy.
*   **Do** ensure all photography is color-graded to match the `secondary` (sand/wood) and `primary` (deep blue) tones of the system.

### Don't
*   **Don't** use 100% opaque black. Always use `on_surface` (#1b1c1a) for text.
*   **Don't** use standard "Material Design" shadows. They are too aggressive for this aesthetic.
*   **Don't** use icons unless absolutely necessary. Rely on the strength of the typography scale to communicate importance.
*   **Don't** use traditional grid-based "Box" layouts. Offset your text and imagery to allow the layout to "breathe" naturally.