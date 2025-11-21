# Coding Guidelines for Blend Design System

## Foundation Tokens Usage

**RULE: Always use Blend's foundation tokens when available. Only write custom CSS when absolutely necessary.**

### Available Foundation Tokens

Blend Design System provides the following foundation tokens via `FOUNDATION_THEME`:

```typescript
import { FOUNDATION_THEME } from "@juspay/blend-design-system";
```

**Token Definition Files Reference:**
All foundation tokens are defined in the Blend Design System package. Refer to these files for complete type definitions:

- **Spacing:** `@juspay/blend-design-system/dist/tokens/unit.tokens.d.ts`
- **Colors:** `@juspay/blend-design-system/dist/tokens/color.tokens.d.ts`
- **Borders:** `@juspay/blend-design-system/dist/tokens/border.tokens.d.ts`
- **Typography:** `@juspay/blend-design-system/dist/tokens/font.tokens.d.ts`
- **Shadows:** `@juspay/blend-design-system/dist/tokens/shadows.tokens.d.ts`
- **Opacity:** `@juspay/blend-design-system/dist/tokens/opacity.tokens.d.ts`
- **Theme (Combined):** `@juspay/blend-design-system/dist/tokens/theme.token.d.ts`

> **Note:** The theme.token.d.ts file exports the complete `FOUNDATION_THEME` object that combines all individual token types.

#### 1. **Spacing (Unit Tokens)**
**Reference:** `@juspay/blend-design-system/dist/tokens/unit.tokens.d.ts`
Use `FOUNDATION_THEME.unit[*]` for all spacing-related properties.

**Available values:** 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 15, 16, 18, 20, 22, 24, 28, 32, 36, 40, 48, 52, 56, 64, 80, 120, 144, auto

**Use for:**
- `padding`, `margin`
- `gap`, `columnGap`, `rowGap`
- `width`, `height` (when using standard spacing units)
- `top`, `right`, `bottom`, `left`

**Examples:**
```tsx
// ✅ GOOD - Using foundation tokens
<div style={{ padding: FOUNDATION_THEME.unit[32] }}>...</div>
<div style={{ marginBottom: FOUNDATION_THEME.unit[20] }}>...</div>
<div style={{ gap: FOUNDATION_THEME.unit[12] }}>...</div>

// ❌ BAD - Hardcoded values
<div style={{ padding: "32px" }}>...</div>
<div className="my-component" /> // where .my-component { margin-bottom: 20px; }
```

#### 2. **Colors**
**Reference:** `@juspay/blend-design-system/dist/tokens/color.tokens.d.ts` + CSS variables in `src/index.css`

Use CSS variables for colors (defined in `src/index.css`).

**Available variables:**
- **Primary:** `var(--color-primary)`, `var(--color-primary-dark)`
- **Semantic:** `var(--color-success)`, `var(--color-danger)`, `var(--color-warning)`
- **Grays:** `var(--color-gray-0)` through `var(--color-gray-900)`
- **Text:** `var(--color-text-primary)`, `var(--color-text-secondary)`, `var(--color-text-tertiary)`
- **UI:** `var(--color-border)`, `var(--color-background)`, `var(--color-surface)`

**Use for:**
- `color`, `backgroundColor`
- `borderColor`
- `fill`, `stroke` (in SVG)

**Examples:**
```css
/* ✅ GOOD - Using CSS variables */
.heading {
  color: var(--color-text-primary);
}

.card {
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
}

/* ❌ BAD - Hardcoded colors */
.heading {
  color: #1e293b;
}
```

#### 3. **Borders**
**Reference:** `@juspay/blend-design-system/dist/tokens/border.tokens.d.ts`

Use `FOUNDATION_THEME.border` for border properties.

**Available:**
- **Width:** `border.width[0]`, `border.width[1]`, `border.width[1.5]`, `border.width[2]`, `border.width[3]`, `border.width[4]`
- **Radius:** `border.radius[0]`, `border.radius[2]`, `border.radius[4]`, `border.radius[6]`, `border.radius[8]`, `border.radius[10]`, `border.radius[12]`, `border.radius[16]`, `border.radius[20]`, `border.radius.full`

**Examples:**
```tsx
// ✅ GOOD
<div style={{ borderRadius: FOUNDATION_THEME.border.radius[8] }}>...</div>
<div style={{ borderWidth: FOUNDATION_THEME.border.width[1] }}>...</div>

// ❌ BAD
<div style={{ borderRadius: "8px" }}>...</div>
```

#### 4. **Typography**
**Reference:** `@juspay/blend-design-system/dist/tokens/font.tokens.d.ts`

Use `FOUNDATION_THEME.font` for typography properties.

**Available:**
- **Family:** `font.family.display`, `font.family.body`, `font.family.heading`, `font.family.mono`
- **Weight:** `font.weight[100]` through `font.weight[900]`
- **Size:** `font.size.body.xs|sm|md|lg`, `font.size.heading.sm|md|lg|xl|2xl`, `font.size.display.sm|md|lg|xl`, `font.size.code.sm|md|lg`
- **Letter Spacing:** `font.letterSpacing.compressed|condensed|normal|expanded|extended`

**Examples:**
```tsx
// ✅ GOOD
<h1 style={{
  fontSize: FOUNDATION_THEME.font.size.heading.xl.fontSize,
  lineHeight: FOUNDATION_THEME.font.size.heading.xl.lineHeight,
  fontWeight: FOUNDATION_THEME.font.weight[700]
}}>Heading</h1>

// ❌ BAD
<h1 style={{ fontSize: "32px", fontWeight: 700 }}>Heading</h1>
```

#### 5. **Shadows**
**Reference:** `@juspay/blend-design-system/dist/tokens/shadows.tokens.d.ts`

Use `FOUNDATION_THEME.shadows` for box shadows.

**Available values:** xs, sm, md, lg, xl, 2xl, full, focusPrimary, focusError

**Examples:**
```tsx
// ✅ GOOD
<div style={{ boxShadow: FOUNDATION_THEME.shadows.sm }}>...</div>

// ❌ BAD
<div style={{ boxShadow: "0 1px 2px rgba(0,0,0,0.1)" }}>...</div>
```

#### 6. **Opacity**
**Reference:** `@juspay/blend-design-system/dist/tokens/opacity.tokens.d.ts`

Use `FOUNDATION_THEME.opacity` for opacity values.

**Available values:** 0, 5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100

**Examples:**
```tsx
// ✅ GOOD
<div style={{ opacity: FOUNDATION_THEME.opacity[50] }}>...</div>

// ❌ BAD
<div style={{ opacity: 0.5 }}>...</div>
```

---

## When to Write Custom CSS

Write custom CSS **ONLY** when:

1. **Layout Properties** - Not covered by foundation tokens
   - `display`, `position`, `flexDirection`, `justifyContent`, `alignItems`, `gridTemplateColumns`, etc.

2. **Component-Specific Styling** - Unique to your component
   - `overflow`, `cursor`, `textTransform`, `whiteSpace`, `textDecoration`

3. **Precise Positioning** - When exact pixel values are required and not available in tokens
   - Example: `max-width: 1400px` for container width

4. **Responsive Breakpoints** - Media queries and responsive design

5. **Transitions and Animations** - Motion properties

---

## Best Practices

### 1. Prefer Inline Styles with Foundation Tokens
```tsx
// ✅ GOOD - Clear what tokens are being used
<div style={{
  padding: FOUNDATION_THEME.unit[32],
  marginBottom: FOUNDATION_THEME.unit[20],
  gap: FOUNDATION_THEME.unit[12]
}}>
  ...
</div>
```

### 2. Keep CSS Files Minimal
CSS files should only contain:
- Layout properties (display, flex, grid)
- Component structure
- Responsive styles
- Overrides that can't be done inline

```css
/* ✅ GOOD - Only layout and structure */
.transaction-analytics {
  max-width: 1400px;
  margin: 0 auto;
  background-color: #ffffff;
  min-height: 100vh;
}

.analytics-top-section {
  display: flex;
  flex-direction: column;
}

/* ❌ BAD - Spacing should use foundation tokens inline */
.analytics-top-section {
  display: flex;
  flex-direction: column;
  gap: 20px; /* Should be FOUNDATION_THEME.unit[20] inline */
  margin-bottom: 32px; /* Should be FOUNDATION_THEME.unit[32] inline */
}
```

### 3. Use Blend Components When Available
Before writing custom components, check if Blend provides:
- Button, Input, Select, etc.
- Layout components (Card, Container, etc.)
- Data display (Table, List, etc.)

### 4. Component Variants Over Custom Styling
Use component variants and props instead of custom CSS:

```tsx
// ✅ GOOD - Using component props and variants
<Button
  buttonType={ButtonType.SECONDARY}
  subType={ButtonSubType.INLINE}
  size={ButtonSize.SMALL}
  fullWidth={false}
/>

// ❌ BAD - Custom styling
<button className="custom-button">...</button>
```

---

## Checklist Before Writing Custom CSS

- [ ] Is there a foundation token for this property?
- [ ] Can I use a Blend component instead?
- [ ] Can I use component props/variants instead of custom CSS?
- [ ] Is this truly custom to my component or a general pattern?
- [ ] Have I checked the Blend Design System documentation?

---

## Migration Strategy

When refactoring existing code:

1. **Spacing** → Replace hardcoded px values with `FOUNDATION_THEME.unit[*]`
2. **Colors** → Replace hex/rgb with CSS variables
3. **Typography** → Use `FOUNDATION_THEME.font.*` or Blend's Text component
4. **Move spacing from CSS to inline styles** → Keep CSS for layout only

---

## Example: Before and After

### Before ❌
```tsx
// Component
<div className="metric-overview-section">
  <div className="section-header">
    <h2>Metric Overview</h2>
  </div>
</div>

// CSS
.metric-overview-section {
  margin-bottom: 32px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
}

.section-header {
  margin-bottom: 20px;
}

.section-header h2 {
  font-size: 20px;
  font-weight: 600;
  color: #1e293b;
}
```

### After ✅
```tsx
// Component
<div
  className="metric-overview-section"
  style={{
    marginBottom: FOUNDATION_THEME.unit[32],
    padding: FOUNDATION_THEME.unit[20],
    borderRadius: FOUNDATION_THEME.border.radius[8]
  }}
>
  <div style={{ marginBottom: FOUNDATION_THEME.unit[20] }}>
    <h2 style={{
      fontSize: FOUNDATION_THEME.font.size.heading.sm.fontSize,
      fontWeight: FOUNDATION_THEME.font.weight[600],
      color: 'var(--color-text-primary)'
    }}>
      Metric Overview
    </h2>
  </div>
</div>

// CSS (minimal - only layout)
.metric-overview-section {
  background-color: var(--color-surface);
}
```

---

## Summary

**Golden Rule:** If Blend has a token for it, use the token. Custom CSS is a last resort for layout and component-specific properties that Blend doesn't cover.

This ensures:
- ✅ Consistent spacing and design across the app
- ✅ Easier maintenance and updates
- ✅ Automatic theme support
- ✅ Better collaboration with design team
