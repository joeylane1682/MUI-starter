# New Page Command (Strict Mode)

1. Start from a template in `src/layout/templates/`.
2. Create/update only derived page modules in `src/pages/`.
3. Register/update route in `src/App.jsx` for every new page.
4. Keep `/` redirecting to the primary app route (currently `/app`).
5. Use consistent route naming (kebab-case, stable URL structure).
6. Add internal navigation using `Link`/`NavLink`/`useNavigate` (no raw `<a>` for internal routes).
7. Ensure fallback route exists: `path="*"`.
8. Never modify nodes marked `data-region-lock="locked"` unless explicitly requested.
9. Never remove, replace, or reorder locked template regions.
10. Keep app wiring minimal: routing/mounting only.
11. Validate: direct URL works, nav works, existing routes still work, fallback works.
12. Output must include: page module + app route + navigation entry.
