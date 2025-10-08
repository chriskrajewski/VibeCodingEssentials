# 🚀 Running the Component Showcase

The showcase is **already set up with Next.js** and ready to run! No configuration needed.

## Quick Start (3 Steps)

### 1. Install Dependencies

```bash
cd design-system
npm install
```

This will install:
- Next.js
- React
- Tailwind CSS
- All component dependencies
- TypeScript

### 2. Start the Development Server

```bash
npm run dev
```

### 3. Open in Browser

```
http://localhost:3000
```

**That's it!** 🎉 The showcase is now running.

## What You'll See

The showcase displays all design system components:

- ✅ **Buttons** - All variants (primary, secondary, ghost, warning)
- ✅ **Alerts** - Info, warning, success, error
- ✅ **Avatars** - With images and fallbacks
- ✅ **Form Fields** - Inputs with labels, icons, validation
- ✅ **Badges** - Standard and order status variants
- ✅ **Typography** - Font samples and sizes
- ✅ **Color Palette** - All theme colors
- ✅ **Complete Form Example** - Real-world usage

## Available Scripts

```bash
# Development server (with hot reload)
npm run dev

# Production build
npm run build

# Run production server
npm start

# Type checking
npm run type-check

# Linting
npm run lint
```

## File Structure

The Next.js setup includes:

```
design-system/
├── pages/
│   ├── index.tsx          # Showcase page
│   ├── _app.tsx          # App wrapper (imports globals.css)
│   └── _document.tsx     # HTML document (fonts)
├── examples/
│   └── showcase.tsx      # Component showcase
├── components/ui/        # All components
├── next.config.js        # Next.js config
├── tsconfig.json         # TypeScript config
├── postcss.config.js     # PostCSS config
└── package.json          # Dependencies & scripts
```

## Customizing the Showcase

### Add More Examples

Edit [examples/showcase.tsx](examples/showcase.tsx):

```tsx
// Add new section
<section className="space-y-4">
  <h2 className="text-2xl font-heading font-semibold">My New Section</h2>
  <Button>My Button</Button>
</section>
```

### Change Port

```bash
# Run on different port
npm run dev -- -p 3001
```

Or edit [package.json](package.json):

```json
{
  "scripts": {
    "dev": "next dev -p 3001"
  }
}
```

### Enable Turbopack (Faster)

```bash
npm run dev -- --turbo
```

## Deployment Options

### Deploy to Vercel (Recommended)

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import repository
4. Deploy! ✨

### Deploy to Netlify

1. Build the site:
   ```bash
   npm run build
   ```

2. Deploy the `out/` folder to Netlify

### Static Export

Add to [next.config.js](next.config.js):

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export', // Add this line
};

module.exports = nextConfig;
```

Then build:

```bash
npm run build
```

Static files will be in the `out/` directory.

## Troubleshooting

### Port Already in Use

```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill

# Or use different port
npm run dev -- -p 3001
```

### Module Not Found Errors

```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors

```bash
# Run type checking
npm run type-check

# Check specific file
npx tsc --noEmit pages/index.tsx
```

### Tailwind Classes Not Working

1. Check [tailwind.config.ts](tailwind.config.ts) content paths
2. Ensure [globals.css](globals.css) is imported in `pages/_app.tsx`
3. Restart dev server

### Fonts Not Loading

Check [pages/_document.tsx](pages/_document.tsx) has Google Fonts link:

```tsx
<link
  href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap"
  rel="stylesheet"
/>
```

## Hot Reload & Fast Refresh

Next.js automatically:
- ✅ Reloads when you edit files
- ✅ Preserves component state
- ✅ Shows errors in browser overlay
- ✅ Updates styles instantly

Just edit files and save - changes appear instantly!

## Production Build

### Build for Production

```bash
npm run build
```

This:
1. Type checks all files
2. Bundles and optimizes code
3. Generates static pages
4. Creates production build

### Test Production Build Locally

```bash
npm run build
npm start
```

Open: http://localhost:3000

## Performance

The production build is optimized:

- ✅ **Code Splitting** - Only load what's needed
- ✅ **Image Optimization** - Automatic image optimization
- ✅ **CSS Optimization** - Purged and minified
- ✅ **Minification** - JS/CSS minified
- ✅ **Compression** - Gzip/Brotli compression

## Environment Variables

Create `.env.local` for local environment variables:

```bash
# .env.local
NEXT_PUBLIC_SITE_NAME="Design System Showcase"
```

Use in code:

```tsx
const siteName = process.env.NEXT_PUBLIC_SITE_NAME;
```

## Adding New Pages

Create files in `pages/`:

```tsx
// pages/components.tsx
export default function ComponentsPage() {
  return <div>Components Page</div>;
}
```

Access at: http://localhost:3000/components

## API Routes (Optional)

Create API endpoints in `pages/api/`:

```tsx
// pages/api/hello.ts
import type { NextApiRequest, NextApiRequest } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'Hello!' });
}
```

Access at: http://localhost:3000/api/hello

## VS Code Integration

### Recommended Extensions

- ESLint
- Prettier
- Tailwind CSS IntelliSense
- TypeScript and JavaScript Language Features

### Settings

Add to `.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "tailwindCSS.experimental.classRegex": [
    ["cva\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"]
  ]
}
```

## Tips

💡 **Fast Refresh**: Save files to see instant updates
💡 **Error Overlay**: Errors show in browser automatically
💡 **TypeScript**: Get autocomplete and type checking
💡 **Tailwind IntelliSense**: Install extension for class autocomplete
💡 **Component Isolation**: Test components independently

## Next Steps

1. ✅ Run the showcase with `npm run dev`
2. 🎨 Explore all components visually
3. 📝 Copy code examples from [showcase.tsx](examples/showcase.tsx)
4. 🔧 Start building your own components
5. 📖 Read [README.md](README.md) for full documentation

## Need Help?

- 📖 [Next.js Documentation](https://nextjs.org/docs)
- 📖 [React Documentation](https://react.dev)
- 📖 [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- 📖 [Design System Docs](README.md)

## Support

For issues specific to:
- **Next.js setup**: Check [Next.js docs](https://nextjs.org/docs)
- **Components**: See [COMPONENT_REFERENCE.md](docs/COMPONENT_REFERENCE.md)
- **Styling**: See [README.md](README.md)
- **General questions**: See [docs/INDEX.md](docs/INDEX.md)

---

**Happy exploring!** 🎨 The showcase is your playground to see all components in action.
