---
name: Executive Collaboration System
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#434655'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#565e74'
  on-secondary: '#ffffff'
  secondary-container: '#dae2fd'
  on-secondary-container: '#5c647a'
  tertiary: '#006242'
  on-tertiary: '#ffffff'
  tertiary-container: '#007d55'
  on-tertiary-container: '#bdffdb'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  title-lg:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  title-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  container-padding: 20px
  stack-gap-sm: 8px
  stack-gap-md: 16px
  stack-gap-lg: 24px
  grid-columns: '4'
  grid-gutter: 16px
---

## Brand & Style

The design system is engineered for high-stakes professional environments where clarity, reliability, and executive polish are paramount. The target audience includes enterprise leaders, project managers, and distributed teams who require a tool that feels both powerful and effortless.

The aesthetic follows a **Modern Corporate** approach with a heavy emphasis on **Minimalism** and **Glassmorphism**. It utilizes expansive white space to reduce cognitive load during complex meetings. Visual depth is achieved through sophisticated semi-transparent layers and soft background blurs, creating a "lens" effect that prioritizes active content while maintaining spatial awareness of the underlying interface.

## Colors

The palette is anchored by a deep Royal Blue, symbolizing trust and technological precision. 

- **Primary (Royal Blue):** Used for primary actions, active states, and brand moments.
- **Secondary (Midnight Navy):** Used for high-contrast text, headers, and navigation backgrounds to provide a grounded, authoritative feel.
- **Accent (Emerald):** Reserved for positive growth indicators, "Join" actions, and success states.
- **Surface Strategy:** In light mode, surfaces use pure white with subtle 1px borders. In dark mode, the "Deep Charcoal" background is paired with slightly lighter navy-tinted overlays to maintain depth without losing the premium dark aesthetic.

## Typography

This design system utilizes **Inter** for its exceptional legibility and systematic feel. The hierarchy is strictly enforced to ensure that even in dense data views (like participant lists or meeting agendas), the user can scan information quickly.

- **Headlines:** Use tight letter spacing and bold weights to command attention.
- **Body Text:** Uses a generous line height (1.6x) to ensure long-form notes and chat messages remain comfortable to read on mobile screens.
- **Labels:** Small caps or medium weights are used for metadata to distinguish them from actionable body text.

## Layout & Spacing

The system follows a **4px base grid** with a fluid layout philosophy optimized for Android devices. 

- **Margins:** A standard 20px lateral margin is applied to all screens to give content room to "breathe," reinforcing the premium feel.
- **Vertical Rhythm:** Elements are stacked using increments of 8px. Grouped items (like an avatar and a name) use 8px, while distinct sections use 24px or 32px.
- **Safe Areas:** Adherence to system bars (status and navigation) is mandatory, with bottom sheets providing a minimum 16px clearance from the home indicator.

## Elevation & Depth

Hierarchy is established through **Tonal Layers** and **Glassmorphism**.

1.  **Base Layer:** Pure background color.
2.  **Mid Layer (Cards):** Subtle white (or charcoal) fills with a very soft, diffused shadow (Blur: 20px, Y: 4, Opacity: 4%).
3.  **Top Layer (Overlays/Dialogs):** Glassmorphic surfaces with a 20px backdrop blur and 70% opacity. A thin 1px inner stroke (tinted white or navy) defines the edge.

Shadows should never be pure black; they are always tinted with the primary or secondary color to ensure the "premium" enterprise look.

## Shapes

The shape language is sophisticated and approachable.
- **Standard Radius:** 16px is the default for buttons and small cards.
- **Large Radius:** 24px is used for large feature cards and bottom sheets to create a friendly, modern container.
- **Pill Shapes:** Reserved exclusively for search bars and status chips to distinguish them from primary action buttons.

## Components

### Buttons
- **Primary:** Filled with a subtle top-to-bottom gradient (Royal Blue to a slightly darker shade). Rounded 16px.
- **Secondary:** Outlined with a 1.5px stroke of the primary color.
- **Floating Action Button (FAB):** Material 3 style, large and rounded, using the Emerald Accent for "New Meeting" or "Create" actions.

### Cards & Lists
- **Meeting Cards:** Feature a left-hand color strip (Primary or Status) to denote category. Padding is a uniform 16px.
- **Lists:** Clean dividers using 1px lines at 10% opacity. High touch-target height (min 56px).

### Input Fields
- **Search Bar:** Pill-shaped, light gray background (#F1F5F9), with centered placeholder and leading outlined icon.
- **Text Fields:** Outlined style with 16px corner radius. Labels float to the top border on focus.

### Overlays
- **Bottom Sheets:** Use the "Glassmorphic" style with a 24px top-corner radius. Include a drag handle (32x4px) at the top center.
- **Snackbars:** Dark background with high-contrast white text, anchored 24px from the screen bottom with a 12px radius.

### Indicators
- **Loading:** Circular indeterminate progress bar using a dual-tone blue gradient.
- **Chips:** Small, 12px font, 32px height, used for attendee status (e.g., "In Lobby", "Speaking").