# Quick Start Guide

Get up and running with the design system in 5 minutes.

## ⚡ 5-Minute Setup

### Step 1: Install Dependencies (2 min)

```bash
npm install -D tailwindcss postcss autoprefixer tailwindcss-animate
npm install class-variance-authority clsx tailwind-merge
npm install @radix-ui/react-avatar @radix-ui/react-label @radix-ui/react-slot
```

### Step 2: Copy Files (1 min)

Copy these files from the `design-system/` directory to your project:

```
📁 Your Project
├── tailwind.config.ts          ← Copy this
├── src/
│   ├── globals.css             ← Copy this
│   ├── components/
│   │   └── ui/                 ← Copy this entire folder
│   │       ├── button.tsx
│   │       ├── alert.tsx
│   │       ├── avatar.tsx
│   │       ├── input.tsx
│   │       ├── badge.tsx
│   │       ├── label.tsx
│   │       ├── form-field.tsx
│   │       └── index.ts
│   └── lib/
│       └── utils.ts            ← Copy this
```

### Step 3: Import Styles (30 sec)

In your app entry point (e.g., `app.tsx`, `main.tsx`, or `_app.tsx`):

```tsx
import './globals.css';
```

### Step 4: Configure TypeScript (30 sec)

Add to your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### Step 5: Use Components (1 min)

```tsx
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';

function MyComponent() {
  return (
    <div className="p-4">
      <Alert variant="info">
        <AlertDescription>You're all set!</AlertDescription>
      </Alert>

      <Button variant="primary">Get Started</Button>
    </div>
  );
}
```

## 🎯 First Component Examples

### Button

```tsx
import { Button } from '@/components/ui/button';

// Primary button (default)
<Button onClick={handleClick}>Save</Button>

// Secondary button
<Button variant="secondary">Cancel</Button>

// Ghost button
<Button variant="ghost">View Details</Button>

// Warning button
<Button variant="warning">Delete</Button>
```

### Alert

```tsx
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

// Success alert
<Alert variant="success">
  <AlertTitle>Success!</AlertTitle>
  <AlertDescription>Your changes have been saved.</AlertDescription>
</Alert>

// Error alert
<Alert variant="error">
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>Something went wrong.</AlertDescription>
</Alert>
```

### Form Field

```tsx
import { FormField } from '@/components/ui/form-field';

// Basic input
<FormField
  label="Email"
  type="email"
  placeholder="your@email.com"
/>

// Input with error
<FormField
  label="Password"
  type="password"
  isInvalid={true}
  error="Password is required"
/>
```

### Badge

```tsx
import { Badge } from '@/components/ui/badge';

// Status badges
<Badge variant="closed">Closed</Badge>
<Badge variant="released">Released</Badge>
<Badge variant="onHold">On Hold</Badge>
```

### Avatar

```tsx
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

<Avatar>
  <AvatarImage src="/user.jpg" alt="User Name" />
  <AvatarFallback>UN</AvatarFallback>
</Avatar>
```

## 🎨 Common Tailwind Classes

### Spacing
```tsx
className="p-4"      // padding: 1rem
className="px-6"     // padding-left/right: 1.5rem
className="mt-2"     // margin-top: 0.5rem
className="gap-3"    // gap: 0.75rem
```

### Colors
```tsx
className="bg-snap-teal-600"      // Primary color
className="bg-snap-yellow-600"    // Secondary color
className="text-white"            // White text
className="text-snap-red-600"     // Red text
```

### Layout
```tsx
className="flex items-center justify-between"
className="grid grid-cols-2 gap-4"
className="space-y-4"  // Vertical spacing between children
```

### Typography
```tsx
className="text-sm"              // 0.875rem
className="text-lg"              // 1.125rem
className="font-semibold"        // 600 weight
className="font-heading"         // Source Sans Pro
```

### Responsive
```tsx
className="block md:flex"               // Block on mobile, flex on tablet+
className="text-sm md:text-base"        // Smaller on mobile
className="grid-cols-1 md:grid-cols-2"  // 1 column mobile, 2 on tablet+
```

## 📋 Complete Form Example

```tsx
import { FormField } from '@/components/ui/form-field';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';

function ContactForm() {
  return (
    <form className="space-y-4 max-w-md">
      <h2 className="text-2xl font-heading font-semibold">Contact Us</h2>

      <FormField
        label="Name"
        placeholder="Enter your name"
        required
      />

      <FormField
        label="Email"
        type="email"
        placeholder="your@email.com"
        required
      />

      <FormField
        label="Message"
        placeholder="Your message..."
        required
      />

      <Alert variant="info">
        <AlertDescription>
          We'll respond within 24 hours
        </AlertDescription>
      </Alert>

      <div className="flex gap-2">
        <Button type="submit">Send Message</Button>
        <Button type="button" variant="ghost">Cancel</Button>
      </div>
    </form>
  );
}
```

## 🎭 Real-World Example: User Profile Card

```tsx
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

function UserProfileCard({ user }) {
  return (
    <div className="border rounded-sm p-6 bg-white">
      <div className="flex items-start gap-4">
        <Avatar className="h-16 w-16">
          <AvatarImage src={user.avatar} alt={user.name} />
          <AvatarFallback>{user.initials}</AvatarFallback>
        </Avatar>

        <div className="flex-1">
          <h3 className="text-lg font-heading font-semibold">
            {user.name}
          </h3>
          <p className="text-sm text-muted-foreground">
            {user.email}
          </p>
          <div className="flex gap-2 mt-2">
            <Badge variant="closed">{user.role}</Badge>
            <Badge variant="released">{user.department}</Badge>
          </div>
        </div>

        <Button variant="ghost" size="sm">
          Edit
        </Button>
      </div>
    </div>
  );
}
```

## 🔍 Troubleshooting

### Classes not working?

Check your `tailwind.config.ts` content paths:

```ts
content: [
  './pages/**/*.{ts,tsx}',
  './components/**/*.{ts,tsx}',
  './app/**/*.{ts,tsx}',
  './src/**/*.{ts,tsx}',
],
```

### Import errors?

Verify TypeScript path aliases in `tsconfig.json`:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### Fonts not loading?

Ensure fonts are imported in `globals.css` or your HTML:

```html
<link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap" rel="stylesheet">
```

## 📚 Next Steps

1. ✅ You're now set up with the design system!
2. 🎨 **View the showcase in your browser**: [VIEWING_SHOWCASE.md](./VIEWING_SHOWCASE.md)
3. 📖 Read [README.md](../README.md) for complete documentation
4. 🔍 Check [COMPONENT_REFERENCE.md](./COMPONENT_REFERENCE.md) for detailed API
5. 📝 Explore [examples/showcase.tsx](../examples/showcase.tsx) for more code
6. 🚀 Start building your app!

## 💡 Tips

- Use `className` prop to customize any component
- Combine components for complex UIs
- Use `cn()` utility from `@/lib/utils` to merge classes intelligently
- Follow Tailwind's mobile-first responsive approach
- Check the showcase file for more real-world examples

## 🎉 You're Ready!

Start building with the design system. All components maintain the original snap_components look and feel while giving you the power and flexibility of Tailwind CSS.

**Happy coding!** 🚀
