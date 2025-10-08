# Changelog

## [1.1.1] - 2025-01-08

### 🛠️ Fixes
- Restored the Tailwind CSS configuration file so custom MW design tokens are compiled and available in every environment.
- Declared explicit content sources in `globals.css` to guarantee Tailwind scans all React and documentation directories during builds.

## [1.1.0] - 2025-01-07

### 🎨 Major Redesign
- **Showcase Transformation**: Redesigned showcase from basic component demo to professional dashboard application
  - Added realistic navigation with logo and menu
  - Created stats dashboard with revenue, orders, users, and conversion metrics
  - Added recent orders table with avatars and status badges
  - Implemented quick actions sidebar with activity feed
  - Added professional contact support form
  - Included footer with branding
  - Fully responsive design for mobile/tablet/desktop

### 🏢 Branding Updates
- Updated all branding from "Snap" to "MW Components"
- Aligned with **MW Brand Standards** throughout
- Updated logo, footer, and all references
- Corrected design system attribution
- Updated CSS comments to reference MW Brand Standards

### 🔧 Configuration
- Using Tailwind CSS 3.4.1 for Next.js compatibility
- All MW brand colors available in tailwind.config.ts
- Updated CSS variable comments to reference MW branding

## [1.0.0] - 2025-01-07

### 🎉 Initial Release
- Complete design system based on snap_components
- 7 core components with full Tailwind + shadcn/ui implementation
- Comprehensive documentation (6 guides + examples)
- Next.js showcase ready to run
- Full TypeScript support
- WCAG AA accessible components
