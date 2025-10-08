# Tailwind CSS Build Pipeline

```text
React/MDX Files (pages/, components/, examples/, docs/, lib/)
        │
        ▼
@source globs in globals.css inform Tailwind about every file to scan
        │
        ▼
@tailwindcss/postcss plugin expands utilities + theme tokens using tailwind.config.ts
        │
        ▼
Next.js compiles the generated CSS bundle and injects it via _app.tsx
        │
        ▼
Browser receives optimized CSS with MW tokens (bg-mw-*, text-mw-*) ready to render
```

## Notes
- `tailwind.config.ts` centralizes brand tokens, keyframes, and plugins used by shadcn/ui components.
- `globals.css` keeps the Tailwind runtime completely configuration-driven—no manual safelists required.
- The pipeline runs automatically during `next dev` and `next build`, ensuring consistent results in local and production builds.
