# S3 Academy Design System

## 1. Design Tokens

### Colors
Defined in `tailwind.config` (in `index.html`) or `index.css`.

| Token | Hex | Usage |
| :--- | :--- | :--- |
| `navy` | `#0B1D3A` | Primary Brand, Headings, Footer, Backgrounds |
| `gold` | `#C89B3C` | Accent, Buttons, Highlights, Links |
| `offWhite` | `#F5F7FA` | Page Backgrounds, Section Backgrounds |
| `slate` | `#6B7280` | Body Text, Subtitles |
| `white` | `#FFFFFF` | Card Backgrounds, Text on Navy |

### Typography

| Family | Font | Usage |
| :--- | :--- | :--- |
| `font-sans` | Inter | Body text, UI elements, Buttons |
| `font-header` | Bebas Neue | Headings, Large Numbers, CTAs |

### Spacing System (4pt Grid)
Use Tailwind spacing classes:
- `gap-1` (4px)
- `gap-2` (8px)
- `gap-4` (16px)
- `gap-6` (24px)
- `gap-8` (32px)
- `gap-12` (48px)
- `section` (clamp(4.5rem, 8vw, 6rem)) - Vertical section padding

## 2. Component Patterns

### Buttons

**Primary CTA (Premium)**
- Background: `gold`
- Text: `navy`
- Font: `font-header` or `font-bold` uppercase
- Shape: Rounded full or Skewed
- Hover: Lighter gold, slight lift (`-translate-y-1`)

**Secondary CTA (Outline)**
- Border: `2px solid gold` (or `navy` on light bg)
- Text: `gold` (or `navy`)
- Background: Transparent
- Hover: Filled `gold`

### Cards
- Background: `white`
- Border: `1px solid slate-200`
- Shadow: `shadow-lg` (subtle)
- Radius: `rounded-2xl`
- Hover: Lift and increased shadow

### Navigation
- **Desktop**:
    - Items: Uppercase, tracking-widest, `text-[11px]`
    - Hover: Underline animation (`w-0` -> `w-full`)
    - Active: `text-gold` + full underline
- **Mobile**:
    - Full screen overlay or Dropdown
    - Large typography

## 3. Global States
- **Hover**: Transitions `duration-300 ease-out`.
- **Focus**: `focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none`.
- **Disabled**: `opacity-50 cursor-not-allowed`.

## 4. Accessibility Checklist
- [ ] All images must have `alt` text.
- [ ] Buttons must have `aria-label` if text is not descriptive (e.g., icons).
- [ ] Color contrast must meet WCAG AA (Navy on White is safe; Gold on White needs checking).
- [ ] Focus rings must be visible on keyboard navigation.
