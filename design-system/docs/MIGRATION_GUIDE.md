# Migration Guide: Chakra UI → Tailwind + shadcn

Complete guide for migrating from snap_components (Chakra UI) to the new Tailwind CSS + shadcn/ui design system.

## Table of Contents

1. [Overview](#overview)
2. [Installation & Setup](#installation--setup)
3. [Component-by-Component Migration](#component-by-component-migration)
4. [Common Patterns](#common-patterns)
5. [Styling Migration](#styling-migration)
6. [Testing After Migration](#testing-after-migration)

## Overview

### Why Migrate?

- **Better Performance**: Tailwind's JIT compiler generates only the CSS you use
- **Smaller Bundle Size**: No runtime CSS-in-JS overhead
- **Better Developer Experience**: Consistent utility classes, better autocomplete
- **Modern Stack**: shadcn/ui provides accessible, customizable components
- **Type Safety**: Full TypeScript support with better inference

### Migration Strategy

We recommend a **gradual migration** approach:

1. Install new design system alongside existing Chakra components
2. Migrate page by page or feature by feature
3. Test thoroughly at each step
4. Remove Chakra dependencies when migration is complete

## Installation & Setup

### Step 1: Install Dependencies

```bash
npm install -D tailwindcss postcss autoprefixer
npm install tailwindcss-animate class-variance-authority clsx tailwind-merge
npm install @radix-ui/react-avatar @radix-ui/react-label @radix-ui/react-slot
```

### Step 2: Configure Tailwind

Copy `tailwind.config.ts` from the design-system directory to your project root.

### Step 3: Add Global Styles

Import the global CSS in your app entry point:

```tsx
// app.tsx or main.tsx
import './globals.css'; // New Tailwind styles
import './chakra-overrides.css'; // Keep existing Chakra styles temporarily
```

### Step 4: Copy Components

Copy the `components/ui` directory and `lib/utils.ts` to your project:

```
src/
├── components/
│   └── ui/          # shadcn components
│       ├── button.tsx
│       ├── alert.tsx
│       ├── avatar.tsx
│       ├── input.tsx
│       ├── badge.tsx
│       ├── label.tsx
│       └── form-field.tsx
└── lib/
    └── utils.ts     # cn() utility
```

### Step 5: Update TypeScript Config

Ensure path aliases are configured:

```json
// tsconfig.json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"],
      "@/components/*": ["./src/components/*"],
      "@/lib/*": ["./src/lib/*"]
    }
  }
}
```

## Component-by-Component Migration

### Button Migration

**Before (Chakra UI)**
```tsx
import { Button } from '@ui/components/Button';

<Button variant="primary" onClick={handleClick}>
  Save Changes
</Button>
```

**After (Tailwind + shadcn)**
```tsx
import { Button } from '@/components/ui/button';

<Button variant="primary" onClick={handleClick}>
  Save Changes
</Button>
```

**Changes Required:**
- Update import path only
- All props remain the same
- Variants match 1:1

### Alert Migration

**Before (Chakra UI)**
```tsx
import { Alert } from '@ui/components/Alert';

<Alert
  status="error"
  title="Error Occurred"
  description="Please try again"
/>
```

**After (Tailwind + shadcn)**
```tsx
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

<Alert variant="error">
  <AlertTitle>Error Occurred</AlertTitle>
  <AlertDescription>Please try again</AlertDescription>
</Alert>
```

**Changes Required:**
- Change `status` prop to `variant`
- Use composition pattern with `AlertTitle` and `AlertDescription`
- Wrap content in components instead of props

### Field → FormField Migration

**Before (Chakra UI)**
```tsx
import { Field } from '@ui/components/Field';

<Field
  label="Email Address"
  type="email"
  placeholder="your@email.com"
  isInvalid={!!errors.email}
  error={errors.email}
  errorSeverity="error"
/>
```

**After (Tailwind + shadcn)**
```tsx
import { FormField } from '@/components/ui/form-field';

<FormField
  label="Email Address"
  type="email"
  placeholder="your@email.com"
  isInvalid={!!errors.email}
  error={errors.email}
  errorSeverity="error"
/>
```

**Changes Required:**
- Update import path
- All props remain the same
- Icon components may need adjustment (see Icon Migration)

### Avatar Migration

**Before (Chakra UI)**
```tsx
import { Avatar } from '@ui/components/Avatar';

// Context-aware component with auth
<Avatar showDisplayName={true} />
```

**After (Tailwind + shadcn)**
```tsx
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { useAuth } from '@/hooks/useAuth';

function UserAvatar({ showDisplayName }) {
  const { user } = useAuth();

  return (
    <div className="flex items-center gap-2">
      <Avatar>
        <AvatarImage src={user?.avatar} alt={user?.displayName} />
        <AvatarFallback>{user?.initials}</AvatarFallback>
      </Avatar>
      {showDisplayName && (
        <span className="text-sm">{user?.displayName}</span>
      )}
    </div>
  );
}
```

**Changes Required:**
- Create wrapper component that uses auth context
- Use composition pattern with AvatarImage and AvatarFallback
- Extract menu functionality to separate DropdownMenu component

### Badge Migration

**Before (Chakra UI)**
```tsx
import { Badge } from '@chakra-ui/react';

<Badge backgroundColor="mw.darkGreen" color="mw.white">
  Closed
</Badge>
```

**After (Tailwind + shadcn)**
```tsx
import { Badge } from '@/components/ui/badge';

<Badge variant="closed">Closed</Badge>
```

**Changes Required:**
- Use semantic variants instead of color props
- Map status codes to variants (see table below)

#### Status Code Mapping

| Status | Before | After |
|--------|--------|-------|
| Closed | `backgroundColor="mw.darkGreen"` | `variant="closed"` |
| Cancelled | `backgroundColor="mw.darkRed"` | `variant="cancelled"` |
| Released | `backgroundColor="mw.darkBlue"` | `variant="released"` |
| On Hold | `backgroundColor="mw.yellow"` | `variant="onHold"` |

## Common Patterns

### Layout Container Migration

**Before (Chakra UI)**
```tsx
import { Box, Container, Flex } from '@chakra-ui/react';

<Container maxW="container.xl">
  <Box p={4} bg="white">
    <Flex justify="space-between" align="center">
      {/* Content */}
    </Flex>
  </Box>
</Container>
```

**After (Tailwind)**
```tsx
<div className="container mx-auto max-w-7xl">
  <div className="p-4 bg-white">
    <div className="flex justify-between items-center">
      {/* Content */}
    </div>
  </div>
</div>
```

### Responsive Design Migration

**Before (Chakra UI)**
```tsx
<Box
  display={{ base: 'block', md: 'flex' }}
  gap={{ base: 2, md: 4 }}
  p={{ base: 4, lg: 8 }}
>
  {/* Content */}
</Box>
```

**After (Tailwind)**
```tsx
<div className="block md:flex gap-2 md:gap-4 p-4 lg:p-8">
  {/* Content */}
</div>
```

### Color Usage Migration

**Before (Chakra UI)**
```tsx
<Box
  bg="snap.teal.600"
  color="white"
  borderColor="snap.gray.100"
  _hover={{ bg: 'snap.teal.700' }}
>
  {/* Content */}
</Box>
```

**After (Tailwind)**
```tsx
<div className="bg-snap-teal-600 text-white border-snap-gray-100 hover:bg-snap-teal-700">
  {/* Content */}
</div>
```

### Form State Management

**Before (Chakra UI)**
```tsx
import { FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/react';

<FormControl isInvalid={!!errors.name}>
  <FormLabel>Name</FormLabel>
  <Input {...register('name')} />
  <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
</FormControl>
```

**After (Tailwind + shadcn)**
```tsx
import { FormField } from '@/components/ui/form-field';

<FormField
  label="Name"
  isInvalid={!!errors.name}
  error={errors.name?.message}
  {...register('name')}
/>
```

## Styling Migration

### Chakra Props → Tailwind Classes

| Chakra Prop | Tailwind Class | Example |
|------------|----------------|---------|
| `p={4}` | `className="p-4"` | Padding 1rem |
| `px={2}` | `className="px-2"` | Horizontal padding 0.5rem |
| `mt={6}` | `className="mt-6"` | Margin top 1.5rem |
| `bg="white"` | `className="bg-white"` | Background white |
| `color="blue.500"` | `className="text-blue-500"` | Text blue |
| `borderRadius="sm"` | `className="rounded-sm"` | Border radius small |
| `fontSize="lg"` | `className="text-lg"` | Font size large |
| `fontWeight="bold"` | `className="font-bold"` | Bold text |
| `display="flex"` | `className="flex"` | Flexbox |
| `justifyContent="center"` | `className="justify-center"` | Center content |
| `alignItems="center"` | `className="items-center"` | Center items |
| `gap={4}` | `className="gap-4"` | Gap 1rem |

### Pseudo-Class Props → Tailwind Modifiers

| Chakra Pseudo | Tailwind Modifier | Example |
|--------------|-------------------|---------|
| `_hover={{ bg: 'blue' }}` | `hover:bg-blue-500` | Hover background |
| `_focus={{ outline: '2px' }}` | `focus:ring-2` | Focus ring |
| `_disabled={{ opacity: 0.5 }}` | `disabled:opacity-50` | Disabled state |
| `_active={{ bg: 'red' }}` | `active:bg-red-500` | Active state |

## Testing After Migration

### Visual Regression Testing

1. **Take Screenshots**: Capture before and after screenshots of all pages
2. **Compare**: Use tools like Percy or Chromatic for visual diffs
3. **Manual Review**: Review each component visually

### Functional Testing

```tsx
// Update test imports
import { render, screen } from '@testing-library/react';
import { Button } from '@/components/ui/button'; // Updated import

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Click me');
  });

  it('applies correct variant classes', () => {
    render(<Button variant="primary">Primary</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-snap-teal-600');
  });
});
```

### Accessibility Testing

Verify that all accessibility features still work:

```tsx
import { axe } from 'jest-axe';

it('should not have accessibility violations', async () => {
  const { container } = render(<FormField label="Email" />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

## Checklist

Use this checklist to track your migration progress:

### Setup
- [ ] Install Tailwind CSS and dependencies
- [ ] Configure `tailwind.config.ts`
- [ ] Add `globals.css` to app entry point
- [ ] Copy component library to project
- [ ] Configure TypeScript path aliases
- [ ] Test that Tailwind is working

### Components
- [ ] Migrate Button components
- [ ] Migrate Alert/Flash components
- [ ] Migrate Form Field components
- [ ] Migrate Avatar components
- [ ] Migrate Badge components
- [ ] Migrate custom components

### Layouts
- [ ] Migrate page layouts
- [ ] Update responsive breakpoints
- [ ] Convert Flex/Grid layouts
- [ ] Update spacing utilities

### Styling
- [ ] Replace color tokens
- [ ] Update typography classes
- [ ] Convert responsive props
- [ ] Update hover/focus states

### Testing
- [ ] Update component tests
- [ ] Run visual regression tests
- [ ] Test accessibility
- [ ] Test on different browsers
- [ ] Test responsive layouts

### Cleanup
- [ ] Remove unused Chakra components
- [ ] Remove Chakra UI dependencies
- [ ] Remove Chakra theme configuration
- [ ] Update documentation
- [ ] Update Storybook (if applicable)

## Common Issues & Solutions

### Issue: Tailwind Classes Not Working

**Solution**: Ensure the content paths in `tailwind.config.ts` include all your component files:

```ts
content: [
  './pages/**/*.{ts,tsx}',
  './components/**/*.{ts,tsx}',
  './app/**/*.{ts,tsx}',
  './src/**/*.{ts,tsx}',
],
```

### Issue: CSS Specificity Conflicts

**Solution**: Use the `cn()` utility to properly merge classes:

```tsx
import { cn } from '@/lib/utils';

<Button className={cn('custom-class', existingClasses)} />
```

### Issue: Missing Fonts

**Solution**: Import fonts in your global CSS:

```css
/* globals.css */
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap');
```

### Issue: Dark Mode Not Working

**Solution**: Ensure you've added the `dark` class to your root element:

```tsx
<html className="dark">
  {/* Your app */}
</html>
```

## Performance Optimization

### Before Migration (Chakra UI)
- Runtime CSS-in-JS parsing
- Larger bundle size due to emotion/styled-system
- Theme computation at runtime

### After Migration (Tailwind)
- Zero-runtime CSS (compiled at build time)
- Smaller bundle (only used utilities)
- Faster initial page load

### Measuring Performance

```bash
# Before migration
npm run build
# Note bundle sizes

# After migration
npm run build
# Compare bundle sizes
```

Expected improvements:
- **Bundle Size**: 20-40% reduction
- **First Contentful Paint**: 10-20% faster
- **Time to Interactive**: 15-25% faster

## Next Steps

1. Start with a single page or component
2. Test thoroughly
3. Gradually expand migration
4. Monitor performance improvements
5. Document any custom patterns
6. Share learnings with the team

## Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Radix UI Documentation](https://www.radix-ui.com)
- [Design System README](./README.md)
- [Component Reference](./COMPONENT_REFERENCE.md)

## Support

For questions or issues during migration:
1. Check the [Component Reference](./COMPONENT_REFERENCE.md)
2. Review the [showcase examples](./examples/showcase.tsx)
3. Consult the team design system channel
