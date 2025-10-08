# Design System

A comprehensive design system based on the snap_components theme, built with Tailwind CSS and shadcn/ui.

## Overview

This design system translates the existing Chakra UI-based snap_components into a modern Tailwind CSS and shadcn/ui implementation while maintaining the brand identity and design patterns.

## Table of Contents

- [Installation](#installation)
- [Theme Tokens](#theme-tokens)
- [Components](#components)
- [Usage Examples](#usage-examples)
- [Migration Guide](#migration-guide)

## Installation

### Prerequisites

```bash
npm install -D tailwindcss postcss autoprefixer
npm install tailwindcss-animate class-variance-authority clsx tailwind-merge
npm install @radix-ui/react-avatar @radix-ui/react-label @radix-ui/react-slot
```

### Setup

1. Copy the `tailwind.config.ts` to your project root
2. Import `globals.css` in your app entry point
3. Copy the `components/ui` directory to your project
4. Copy the `lib/utils.ts` utility file

```tsx
// app.tsx or main.tsx
import './globals.css';
```

## Theme Tokens

### Color Palette

The design system maintains the original snap_components color palette:

#### Snap Colors

**Teal (Primary)**
- `snap-teal-50`: #E6F8F9
- `snap-teal-600`: #0b7178 (Primary brand color)
- `snap-teal-700`: #08606B
- `snap-teal-800`: #05505D
- `snap-teal-900`: #03404F

**Yellow (Secondary)**
- `snap-yellow-600`: hsl(50 100% 50%) (Secondary brand color)
- `snap-yellow-700`: #ccaa00

**Red (Warning/Error)**
- `snap-red-600`: hsl(8 100% 47%)
- `snap-red-700`: #A20C33
- `snap-red-800`: #720925

#### MW Brand Colors

- `mw-yellow`: #FFD600
- `mw-black`: #001223
- `mw-blue`: #00A8B5
- `mw-darkBlue`: #007B7B
- `mw-darkRed`: #A20C33
- `mw-darkGreen`: #6E9934

#### Validation Colors

- `validation-error`: #f22000
- `validation-warning`: #d08700
- `validation-info`: #00A8B5

### Typography

**Font Families**
- Headings: `Source Sans Pro, system-ui, sans-serif`
- Body: `Source Sans Pro, system-ui, sans-serif`
- Mono: `Menlo, monospace`

**Font Sizes**
- xs: 0.75rem (12px)
- sm: 0.875rem (14px)
- base: 1rem (16px)
- lg: 1.125rem (18px)
- xl: 1.25rem (20px)
- 2xl-9xl: Scaling up to 8rem

### Border Radius

The design system uses `sm` (0.125rem / 2px) as the default border radius to match the original Chakra theme.

### Breakpoints

- base: 0px
- sm: 480px
- md: 768px
- lg: 992px
- xl: 1280px
- 2xl: 1536px

## Components

### Button

Matches the original snap_components Button with five variants:

```tsx
import { Button } from '@/components/ui/button';

// Primary (default)
<Button>Primary Button</Button>

// Secondary
<Button variant="secondary">Secondary Button</Button>

// Ghost
<Button variant="ghost">Ghost Button</Button>

// Warning
<Button variant="warning">Warning Button</Button>

// Destructive
<Button variant="destructive">Destructive</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon">Icon</Button>
```

#### Variant Mapping

| Original | New Design System |
|----------|------------------|
| primary | `variant="primary"` - Teal background |
| secondary | `variant="secondary"` - Yellow background |
| ghost | `variant="ghost"` - Transparent with teal text |
| warning | `variant="warning"` - Red background |
| base | Use default styling or `variant="outline"` |

### Alert

Provides contextual feedback messages with multiple status variants:

```tsx
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

// Info
<Alert variant="info">
  <AlertTitle>Info</AlertTitle>
  <AlertDescription>This is an informational message.</AlertDescription>
</Alert>

// Warning
<Alert variant="warning">
  <AlertTitle>Warning</AlertTitle>
  <AlertDescription>Please review this warning.</AlertDescription>
</Alert>

// Success
<Alert variant="success">
  <AlertTitle>Success</AlertTitle>
  <AlertDescription>Operation completed successfully.</AlertDescription>
</Alert>

// Error
<Alert variant="error">
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>An error occurred.</AlertDescription>
</Alert>
```

### Avatar

User avatar with fallback support:

```tsx
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

<Avatar>
  <AvatarImage src="/user.jpg" alt="User Name" />
  <AvatarFallback>UN</AvatarFallback>
</Avatar>
```

The fallback uses `bg-mw-darkBlue` to match the original Avatar component.

### Input

Form input with focus states matching the original theme:

```tsx
import { Input } from '@/components/ui/input';

<Input type="text" placeholder="Enter text..." />
<Input type="email" placeholder="Email" />
<Input disabled placeholder="Disabled" />
<Input readOnly value="Read only" />
```

#### Input States

- **Focus**: 2px teal ring (`ring-snap-teal-600`)
- **Invalid**: 2px red ring (`ring-snap-red-600`)
- **Disabled**: Gray background, full opacity
- **ReadOnly**: Gray background, not-allowed cursor

### Form Field

Enhanced input with label, icons, and error handling:

```tsx
import { FormField } from '@/components/ui/form-field';
import { EnvelopeIcon } from './icons';

<FormField
  label="Email"
  type="email"
  leftIcon={EnvelopeIcon}
  placeholder="Enter your email"
/>

<FormField
  label="Username"
  isInvalid={true}
  error="Username is required"
  errorSeverity="error"
/>
```

#### Error Severities

- `error`: Red color (#f22000)
- `warning`: Orange color (#d08700)
- `info`: Teal color (#00A8B5)

### Badge

Status badges with order status variants:

```tsx
import { Badge } from '@/components/ui/badge';

// Standard variants
<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>

// Order status variants (matching OrderStatusBadge)
<Badge variant="closed">Closed</Badge>
<Badge variant="cancelled">Cancelled</Badge>
<Badge variant="released">Released</Badge>
<Badge variant="onHold">On Hold</Badge>
<Badge variant="firmed">Firmed</Badge>
```

### Label

Form labels with consistent styling:

```tsx
import { Label } from '@/components/ui/label';

<Label htmlFor="email">Email Address</Label>
<Input id="email" type="email" />
```

## Usage Examples

### Complete Form Example

```tsx
import { FormField } from '@/components/ui/form-field';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';

function LoginForm() {
  return (
    <form className="space-y-4">
      <FormField
        label="Email"
        type="email"
        id="email"
        placeholder="Enter your email"
      />

      <FormField
        label="Password"
        type="password"
        id="password"
        placeholder="Enter your password"
      />

      <Alert variant="error">
        <AlertDescription>Invalid credentials</AlertDescription>
      </Alert>

      <div className="flex gap-2">
        <Button type="submit">Sign In</Button>
        <Button variant="ghost">Cancel</Button>
      </div>
    </form>
  );
}
```

### User Profile with Avatar

```tsx
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

function UserProfile({ user }) {
  return (
    <div className="flex items-center gap-3">
      <Avatar>
        <AvatarImage src={user.avatar} alt={user.name} />
        <AvatarFallback>{user.initials}</AvatarFallback>
      </Avatar>
      <div>
        <h3 className="font-heading font-semibold">{user.name}</h3>
        <Badge variant="closed">Active</Badge>
      </div>
    </div>
  );
}
```

### Alert Notifications

```tsx
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

function NotificationCenter({ notifications }) {
  return (
    <div className="space-y-3">
      {notifications.map((notification) => (
        <Alert key={notification.id} variant={notification.type}>
          <AlertTitle>{notification.title}</AlertTitle>
          <AlertDescription>{notification.message}</AlertDescription>
        </Alert>
      ))}
    </div>
  );
}
```

## Migration Guide

### From Chakra UI Button to shadcn Button

**Before (Chakra UI)**
```tsx
import { Button } from '@ui/components/Button';

<Button variant="primary">Click me</Button>
<Button variant="secondary">Click me</Button>
<Button variant="ghost">Click me</Button>
```

**After (shadcn)**
```tsx
import { Button } from '@/components/ui/button';

<Button variant="primary">Click me</Button>
<Button variant="secondary">Click me</Button>
<Button variant="ghost">Click me</Button>
```

### From Chakra Alert to shadcn Alert

**Before (Chakra UI)**
```tsx
import { Alert } from '@ui/components/Alert';

<Alert status="error" title="Error" description="Something went wrong" />
```

**After (shadcn)**
```tsx
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

<Alert variant="error">
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>Something went wrong</AlertDescription>
</Alert>
```

### From Chakra Field to shadcn FormField

**Before (Chakra UI)**
```tsx
import { Field } from '@ui/components/Field';

<Field
  label="Email"
  leftIcon={EnvelopeIcon}
  isInvalid={true}
  error="Invalid email"
/>
```

**After (shadcn)**
```tsx
import { FormField } from '@/components/ui/form-field';

<FormField
  label="Email"
  leftIcon={EnvelopeIcon}
  isInvalid={true}
  error="Invalid email"
/>
```

## Design Principles

### 1. Consistency
All components follow the same design language with consistent spacing, colors, and typography.

### 2. Accessibility
- All interactive elements have proper focus states
- Form fields support `aria-invalid` for error states
- Semantic HTML elements are used throughout

### 3. Flexibility
Components are built with composition in mind, allowing for easy customization through className props and variants.

### 4. Performance
- Uses Tailwind's JIT compiler for optimal bundle sizes
- Components are tree-shakeable
- Minimal runtime overhead with CVA (class-variance-authority)

## Utilities

### cn() Helper

The `cn()` utility combines `clsx` and `tailwind-merge` for intelligent class merging:

```tsx
import { cn } from '@/lib/utils';

// Merges classes intelligently, removing conflicts
<div className={cn(
  'bg-red-500',
  isActive && 'bg-blue-500', // blue-500 overrides red-500
  className
)} />
```

## CSS Variables

The design system uses CSS variables for theming:

```css
:root {
  --primary: 184 83.2% 25.7%; /* Snap Teal */
  --secondary: 50 100% 50%; /* Snap Yellow */
  --destructive: 8 100% 47%; /* Snap Red */
  --radius: 0.125rem; /* 2px */
}
```

Override these in your own CSS for custom theming:

```css
.custom-theme {
  --primary: 220 70% 50%; /* Custom primary color */
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

When adding new components:

1. Follow the existing component structure
2. Use CVA for variant handling
3. Include all necessary TypeScript types
4. Match the original snap_components design intent
5. Document with usage examples

## License

Matches the project license.
