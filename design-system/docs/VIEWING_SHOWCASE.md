# Viewing the Component Showcase

This guide shows you how to view the interactive component showcase in your browser.

## Quick Setup

### Option 1: Using Next.js (Recommended)

**Step 1: Install Next.js**
```bash
cd design-system
npm install next@latest react@latest react-dom@latest
```

**Step 2: Create Pages Directory**
```bash
mkdir -p pages
```

**Step 3: Create Showcase Page**

Create `pages/index.tsx`:
```tsx
import ComponentShowcase from '../examples/showcase';
import '../globals.css';

export default function Home() {
  return <ComponentShowcase />;
}
```

**Step 4: Create `_app.tsx`**

Create `pages/_app.tsx`:
```tsx
import type { AppProps } from 'next/app';
import '../globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
```

**Step 5: Add Scripts to package.json**
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  }
}
```

**Step 6: Run the Dev Server**
```bash
npm run dev
```

**Step 7: Open in Browser**
```
http://localhost:3000
```

---

### Option 2: Using Vite

**Step 1: Install Vite**
```bash
cd design-system
npm install vite @vitejs/plugin-react
```

**Step 2: Create Vite Config**

Create `vite.config.ts`:
```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
});
```

**Step 3: Create Entry Point**

Create `index.html`:
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Design System Showcase</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap" rel="stylesheet">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/main.tsx"></script>
  </body>
</html>
```

**Step 4: Create Main Entry**

Create `main.tsx`:
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import ComponentShowcase from './examples/showcase';
import './globals.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ComponentShowcase />
  </React.StrictMode>
);
```

**Step 5: Update package.json**
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

**Step 6: Run the Dev Server**
```bash
npm run dev
```

**Step 7: Open in Browser**
```
http://localhost:5173
```

---

### Option 3: Using Create React App

**Step 1: Create React App**
```bash
npx create-react-app showcase-app --template typescript
cd showcase-app
```

**Step 2: Install Dependencies**
```bash
npm install -D tailwindcss postcss autoprefixer tailwindcss-animate
npm install class-variance-authority clsx tailwind-merge
npm install @radix-ui/react-avatar @radix-ui/react-label @radix-ui/react-slot
```

**Step 3: Copy Design System Files**
```bash
# From the design-system directory
cp -r components src/
cp -r lib src/
cp -r examples src/
cp tailwind.config.ts .
cp globals.css src/
```

**Step 4: Configure Tailwind**

Initialize Tailwind (if not using the copied config):
```bash
npx tailwindcss init -p
```

**Step 5: Update src/App.tsx**
```tsx
import ComponentShowcase from './examples/showcase';
import './globals.css';

function App() {
  return <ComponentShowcase />;
}

export default App;
```

**Step 6: Import Fonts**

Add to `public/index.html` in the `<head>`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap" rel="stylesheet">
```

**Step 7: Run the App**
```bash
npm start
```

**Step 8: Open in Browser**
```
http://localhost:3000
```

---

## Standalone HTML File (No Build Step)

For a quick preview without any build tools:

**Step 1: Create `showcase.html`**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Design System Showcase</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap" rel="stylesheet">
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            'snap-teal-600': '#0b7178',
            'snap-teal-700': '#08606B',
            'snap-yellow-600': 'hsl(50 100% 50%)',
            'snap-yellow-700': '#ccaa00',
            'snap-red-700': '#A20C33',
            'snap-red-800': '#720925',
            'snap-gray-100': '#e6e5e5',
            'mw-darkBlue': '#007B7B',
            'mw-darkGreen': '#6E9934',
            'mw-darkRed': '#A20C33',
            'mw-yellow': '#FFD600',
            'mw-lightGrey': '#BBBABA',
          },
          fontFamily: {
            heading: ['Source Sans Pro', 'system-ui', 'sans-serif'],
          }
        }
      }
    }
  </script>
  <style>
    body {
      font-family: 'Source Sans Pro', system-ui, sans-serif;
    }
  </style>
</head>
<body class="bg-gray-50">
  <div class="p-8 max-w-6xl mx-auto space-y-12">
    <!-- Header -->
    <header class="border-b pb-6">
      <h1 class="text-4xl font-heading font-bold text-snap-teal-600">
        Design System Showcase
      </h1>
      <p class="text-lg text-gray-600 mt-2">
        Components based on snap_components, built with Tailwind CSS
      </p>
    </header>

    <!-- Buttons -->
    <section class="space-y-4">
      <h2 class="text-2xl font-heading font-semibold">Buttons</h2>
      <div class="flex flex-wrap gap-3">
        <button class="bg-snap-teal-600 text-white hover:bg-snap-teal-700 rounded-sm px-4 py-2">
          Primary
        </button>
        <button class="bg-snap-yellow-600 text-black hover:bg-snap-yellow-700 rounded-sm px-4 py-2">
          Secondary
        </button>
        <button class="bg-transparent text-snap-teal-600 hover:bg-snap-gray-100 rounded-sm px-4 py-2">
          Ghost
        </button>
        <button class="bg-snap-red-700 text-white hover:bg-snap-red-800 rounded-sm px-4 py-2">
          Warning
        </button>
      </div>
    </section>

    <!-- Alerts -->
    <section class="space-y-4">
      <h2 class="text-2xl font-heading font-semibold">Alerts</h2>
      <div class="space-y-3">
        <div class="border-blue-500/50 text-blue-600 bg-blue-50 rounded-sm border p-4">
          <h5 class="mb-1 font-medium">Information</h5>
          <div class="text-sm">This is an informational message.</div>
        </div>
        <div class="border-yellow-500/50 text-yellow-700 bg-yellow-50 rounded-sm border p-4">
          <h5 class="mb-1 font-medium">Warning</h5>
          <div class="text-sm">Please review this warning.</div>
        </div>
        <div class="border-green-500/50 text-green-700 bg-green-50 rounded-sm border p-4">
          <h5 class="mb-1 font-medium">Success!</h5>
          <div class="text-sm">Operation completed successfully.</div>
        </div>
      </div>
    </section>

    <!-- Badges -->
    <section class="space-y-4">
      <h2 class="text-2xl font-heading font-semibold">Badges</h2>
      <div class="flex flex-wrap gap-2">
        <span class="bg-mw-darkGreen text-white rounded px-2 py-1 text-xs font-semibold">Closed</span>
        <span class="bg-mw-darkRed text-white rounded px-2 py-1 text-xs font-semibold">Cancelled</span>
        <span class="bg-mw-darkBlue text-white rounded px-2 py-1 text-xs font-semibold">Released</span>
        <span class="bg-mw-yellow text-white rounded px-2 py-1 text-xs font-semibold">On Hold</span>
        <span class="bg-mw-lightGrey text-white rounded px-2 py-1 text-xs font-semibold">Unknown</span>
      </div>
    </section>

    <!-- Form -->
    <section class="space-y-4">
      <h2 class="text-2xl font-heading font-semibold">Form Fields</h2>
      <form class="max-w-md space-y-4 p-6 border rounded-sm bg-white">
        <div>
          <label class="text-sm font-medium">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            class="flex h-10 w-full rounded-sm border border-gray-400 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-snap-teal-600"
          />
        </div>
        <div>
          <label class="text-sm font-medium">Email</label>
          <input
            type="email"
            placeholder="your@email.com"
            class="flex h-10 w-full rounded-sm border border-gray-400 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-snap-teal-600"
          />
        </div>
        <div class="flex gap-2">
          <button type="submit" class="bg-snap-teal-600 text-white hover:bg-snap-teal-700 rounded-sm px-4 py-2">
            Submit
          </button>
          <button type="button" class="bg-transparent text-snap-teal-600 hover:bg-snap-gray-100 rounded-sm px-4 py-2">
            Cancel
          </button>
        </div>
      </form>
    </section>
  </div>
</body>
</html>
```

**Step 2: Open in Browser**
```bash
open showcase.html  # macOS
# or
start showcase.html  # Windows
# or
xdg-open showcase.html  # Linux
```

---

## Using a Simple HTTP Server

If you prefer to avoid build tools but want proper imports:

**Step 1: Install a Simple Server**
```bash
# Using Python (usually pre-installed)
cd design-system
python3 -m http.server 8000

# Or using Node.js
npm install -g http-server
http-server -p 8000

# Or using npx (no installation needed)
npx http-server -p 8000
```

**Step 2: Open in Browser**
```
http://localhost:8000/showcase.html
```

---

## Troubleshooting

### Fonts Not Loading
Add to your HTML `<head>`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap" rel="stylesheet">
```

### Tailwind Classes Not Working
Make sure:
1. `globals.css` is imported
2. `tailwind.config.ts` is in the root directory
3. Content paths include your files

### Module Resolution Errors
Check `tsconfig.json` has:
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

### React Not Defined
Add to the top of `showcase.tsx`:
```tsx
import React from 'react';
```

---

## Recommended Approach

For the best development experience:

1. **Use Next.js** (Option 1) - Best for production apps
2. **Use Vite** (Option 2) - Fastest development experience
3. **Use HTML file** (Standalone) - Quickest preview

---

## What You Should See

When successfully loaded, you'll see:

- ✅ Header with "Design System Showcase"
- ✅ Button examples (Primary, Secondary, Ghost, Warning)
- ✅ Alert examples (Info, Warning, Success, Error)
- ✅ Avatar examples with fallbacks
- ✅ Badge examples with all variants
- ✅ Form field examples with validation states
- ✅ Color palette showcase
- ✅ Typography examples
- ✅ Complete form example

Screenshot layout:
```
┌─────────────────────────────────────────┐
│ Design System Showcase                   │
│ Components based on snap_components...   │
├─────────────────────────────────────────┤
│ Buttons                                  │
│ [Primary] [Secondary] [Ghost] [Warning]  │
├─────────────────────────────────────────┤
│ Alerts                                   │
│ [ℹ️ Information alert]                   │
│ [⚠️ Warning alert]                       │
│ [✅ Success alert]                       │
│ [❌ Error alert]                         │
├─────────────────────────────────────────┤
│ ... more sections ...                    │
└─────────────────────────────────────────┘
```

---

## Next Steps

After viewing the showcase:

1. Try interacting with components
2. Inspect elements to see Tailwind classes
3. Review the code in `examples/showcase.tsx`
4. Start building your own components!

Happy showcasing! 🎨
