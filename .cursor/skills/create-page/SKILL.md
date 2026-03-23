---
name: create-page
description: Create template-derived routed pages in this project. Use when adding a new page from src/layout/templates to src/pages and wiring routes/navigation in App.jsx while preserving locked regions.
---

# Create Page Skill

## When to use
Use this skill whenever adding or updating pages in this repository.

## Required workflow
1. Start from a template in `src/layout/templates/`.
2. Create or update only derived page modules in `src/pages/`.
3. Register or update route entries in `src/App.jsx` for every new page.
4. Keep `/` redirecting to the primary app route (currently `/app`).
5. Use consistent route naming (kebab-case, stable URL structure).
6. Add internal navigation using `Link`, `NavLink`, or `useNavigate` (no raw `<a>` for internal routes).
7. Ensure a fallback route exists: `path="*"`.

## Hard constraints
- Never modify nodes marked `data-region-lock="locked"` unless explicitly requested.
- Never remove, replace, or reorder locked template regions.
- Keep app wiring minimal and focused on routing/mounting.

## Validation checklist
- Direct URL for the new route resolves.
- Navigation entry reaches the new page.
- Existing routes still work.
- Fallback route works for unknown URLs.

## Output requirements
- Updated page module in `src/pages/`.
- Updated route map in `src/App.jsx`.
- Navigation entry added where appropriate.
