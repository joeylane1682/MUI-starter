# Layout Heuristic Contract

## 0. Allowed Primitives (Constraint)
Allowed:
- stack
- grid
- container
- component

Disallowed:
- page
- section (unless explicitly permitted by template)

Purpose:
- Prevent structural drift
- Keep AI scoped to region-level composition

---

## 1. Composition Defaults
- Default to vertical stacking
- Prefer existing patterns over custom composition
- Only introduce structure when necessary

---

## 2. Structure Introduction
- Group related items together
- Use:
  - stack → linear content
  - grid → repeated or symmetric items
  - container → bounded or grouped content

- Avoid:
  - unnecessary nesting
  - mixing layout paradigms within the same group

---

## 3. Spatial Consistency
- Use consistent spacing within a region
- Recommended spacing scale:
  - 8 / 16 / 24
- Avoid arbitrary values (e.g. 13, 27)
- Maintain equal spacing between sibling elements

---

## 4. Hierarchy
- Start with a clear top-level element (title or anchor)
- Separate primary content from secondary/meta content
- Group related content into visually distinct sections

---

## 5. Complexity Control
- Limit nesting to 2–3 levels
- Prefer simpler structures over deeply nested layouts
- Avoid combining multiple layout strategies unnecessarily

---

## 6. Accessibility & Usability (Layout-Level)
- Maintain logical reading order (top-to-bottom, left-to-right)
- Ensure adequate spacing between interactive elements
- Avoid dense or hard-to-scan layouts
- Do not rely on visual position alone to convey meaning

---

## Scope
This contract applies ONLY to AI-generated UI within predefined layout regions (e.g. main-content).

It does NOT:
- Override templates (page structure)
- Override pattern definitions
- Modify Yoga layout behavior

Heuristics guide composition, not layout structure.
