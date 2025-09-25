# MW Components Branding Standard
*Version 1.0 - Universal AI Development Guide*

## 🏢 Company Identity

**Company Name**: MW Components  
**Industry**: Manufacturing, Industrial Components  
**Brand Positioning**: Professional, enterprise-grade manufacturing solutions  

---

## 🎨 Visual Identity

### Official Brand Colors

## Primary MW Components Color Palette

![#FFD600](https://img.shields.io/badge/-%23FFD600-FFD600?style=flat-square&logoColor=white) **MW Yellow** - Primary brand color - MW signature yellow  
![#ebc603](https://img.shields.io/badge/-%23ebc603-ebc603?style=flat-square&logoColor=white) **MW Dark Yellow** - Hover/active states  
![#001223](https://img.shields.io/badge/-%23001223-001223?style=flat-square&logoColor=white) **MW Black** - Primary dark - headers, text  
![#465B65](https://img.shields.io/badge/-%23465B65-465B65?style=flat-square&logoColor=white) **MW Grey** - Secondary dark  
![#273b46](https://img.shields.io/badge/-%23273b46-273b46?style=flat-square&logoColor=white) **MW Dark Grey** - Darker variant  
![#BBBABA](https://img.shields.io/badge/-%23BBBABA-BBBABA?style=flat-square&logoColor=white) **MW Light Grey** - Light text, borders  
![#EEEFF2](https://img.shields.io/badge/-%23EEEFF2-EEEFF2?style=flat-square&logoColor=white) **MW Panel Grey** - Background panels  
![#00A8B5](https://img.shields.io/badge/-%2300A8B5-00A8B5?style=flat-square&logoColor=white) **MW Blue** - Accent color - teal blue  
![#007B7B](https://img.shields.io/badge/-%23007B7B-007B7B?style=flat-square&logoColor=white) **MW Dark Blue** - Blue hover states  
![#F78B21](https://img.shields.io/badge/-%23F78B21-F78B21?style=flat-square&logoColor=white) **MW Orange** - Warning/alert color  
![#F36B21](https://img.shields.io/badge/-%23F36B21-F36B21?style=flat-square&logoColor=white) **MW Dark Orange** - Orange hover states  
![#EE3341](https://img.shields.io/badge/-%23EE3341-EE3341?style=flat-square&logoColor=white) **MW Red** - Error/danger color  
![#A20C33](https://img.shields.io/badge/-%23A20C33-A20C33?style=flat-square&logoColor=white) **MW Dark Red** - Red hover states  
![#BFD730](https://img.shields.io/badge/-%23BFD730-BFD730?style=flat-square&logoColor=white) **MW Green** - Success color  
![#6E9934](https://img.shields.io/badge/-%236E9934-6E9934?style=flat-square&logoColor=white) **MW Dark Green** - Green hover states  
![#FFFFFF](https://img.shields.io/badge/-%23FFFFFF-FFFFFF?style=flat-square&logoColor=black) **MW White** - Pure white


### Color Usage Guidelines
- **Primary**: MW Yellow (![#FFD600](https://img.shields.io/badge/-%23FFD600-FFD600?style=flat-square&logoColor=white)) for main CTAs, highlights, and branding elements
- **Secondary**: MW Blue (![#00A8B5](https://img.shields.io/badge/-%2300A8B5-00A8B5?style=flat-square&logoColor=white)) for links, secondary actions, and accents
- **Neutral**: MW Black ![#001223](https://img.shields.io/badge/-%23001223-001223?style=flat-square&logoColor=white)(#001223) for headers, MW Grey (![#465B65](https://img.shields.io/badge/-%23465B65-465B65?style=flat-square&logoColor=white)) for body text
- **Status Colors**: Green (success), Orange (warning), Red (error)

### Typography System
```css
/* Font Stack */
font-family: 'Source Sans Pro', system-ui, sans-serif;

/* Heading Hierarchy */
h1: 3rem (48px) - font-weight: 700
h2: 2.25rem (36px) - font-weight: 600
h3: 1.875rem (30px) - font-weight: 600
h4: 1.5rem (24px) - font-weight: 500
h5: 1.25rem (20px) - font-weight: 500
h6: 1.125rem (18px) - font-weight: 500

/* Body Text */
body: 1rem (16px) - font-weight: 400
small: 0.875rem (14px) - font-weight: 400
caption: 0.75rem (12px) - font-weight: 400

/* Code/Monospace */
font-family: 'JetBrains Mono', 'Consolas', monospace;
```

---

## 🏗️ Layout & UI Patterns

### Header Design
- **Background**: MW Black (![#001223](https://img.shields.io/badge/-%23001223-001223?style=flat-square&logoColor=white)) with subtle gradient
- **Logo**: MW Components reversed logo (white/yellow on dark)
- **Height**: 4rem (64px) minimum
- **Content**: White text, MW Yellow accents

### Card Components
```css
.mw-card {
  background: white;
  border-radius: 0.75rem (12px);
  border: 1px solid #e2e8f0;
  box-shadow: 0 10px 15px -3px rgba(59, 130, 246, 0.1);
  padding: 1.5rem (24px);
}
```

### Button System
```css
/* Primary Button */
.btn-primary {
  background: #2563eb; /* or MW Blue #00A8B5 */
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-weight: 500;
  transition: all 0.2s;
}

/* MW Brand Button */
.btn-mw {
  background: #FFD600; /* MW Yellow */
  color: #001223; /* MW Black text */
  font-weight: 600;
}
```

### Status Indicators
```css
.status-pending { background: #fef3c7; color: #92400e; }
.status-in-progress { background: #dbeafe; color: #1e40af; }
.status-completed { background: #dcfce7; color: #166534; }
.status-on-hold { background: #f3f4f6; color: #374151; }
.status-cancelled { background: #fee2e2; color: #991b1b; }
```

---

## 📝 Content & Messaging Standards



### Naming Conventions
**Application Format**: `MW Components [Function] [Type]`  
**Examples**:
- MW Components Shop Floor Calculator
- MW Components Inventory Manager
- MW Components Quality Control

### Standard Descriptions
```
Short: "Professional [function] system for MW Components manufacturing operations"
Keywords: MW Components, manufacturing, [specific function], industrial, professional
Author: MW Components
```

### Environment Variables Template
```env
NEXT_PUBLIC_APP_NAME=MW Components [App Name]
NEXT_PUBLIC_APP_VERSION=1.0.0
COMPANY_NAME=MW Components
BRAND_PRIMARY_COLOR=#FFD600
BRAND_SECONDARY_COLOR=#00A8B5
```

---

## 🛠️ Technical Standards

### Tech Stack Preferences
- **Frontend**: Next.js 14+ with App Router
- **Styling**: Tailwind CSS with MW Components custom theme
- **Typography**: Source Sans Pro, JetBrains Mono
- **Icons**: Heroicons, Lucide React
- **Components**: Shadcn/ui with MW customization

### Project Structure
```
project-name/
├── client/
│   ├── src/
│   │   ├── app/                 # Next.js App Router
│   │   ├── components/          # MW Components UI library
│   │   ├── lib/                 # Utilities, database
│   │   └── types/               # TypeScript definitions
│   ├── tailwind.config.js       # MW brand colors
│   └── package.json
├── scripts/                     # Deployment scripts
├── aws/                         # Infrastructure configs
└── README.md                    # MW branded documentation
```

### Tailwind Config Template
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        mw: {
          yellow: '#FFD600',
          'dark-yellow': '#ebc603',
          black: '#001223',
          grey: '#465B65',
          'dark-grey': '#273b46',
          'light-grey': '#BBBABA',
          'panel-grey': '#EEEFF2',
          blue: '#00A8B5',
          'dark-blue': '#007B7B',
          white: '#FFFFFF',
        }
      },
      fontFamily: {
        sans: ['Source Sans Pro', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Consolas', 'monospace'],
      }
    }
  }
}
```

---

## 🚀 Deployment Standards

### AWS Infrastructure
- **Naming**: `mwc-[app-name]-[environment]`
- **ECR**: `mwc-visual/[app-name]`
- **ECS**: `mwc-visual-helper-apps`
- **Tags**: Environment, Application, Owner: "MW Components"

### Docker Configuration
```dockerfile
# Multi-stage build for production
FROM node:18-alpine AS base
LABEL maintainer="MW Components"
ENV NEXT_PUBLIC_APP_NAME="MW Components [App Name]"
```

### Security Headers Template
```javascript
const securityHeaders = [
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'X-XSS-Protection', value: '1; mode=block' }
];
```

---

## 📋 AI Prompt Template

### For New Projects
```
Create a [type] application for MW Components called "[App Name]".

BRANDING REQUIREMENTS:
- Company: MW Components (19,000+ businesses, 75+ countries)
- Colors: MW Yellow (#FFD600), MW Blue (#00A8B5), MW Black (#001223)
- Font: Source Sans Pro
- UI: Dark header with MW logo, clean white content area
- Style: Professional, enterprise-grade manufacturing focus

TECHNICAL REQUIREMENTS:
- Next.js 14+ with App Router
- Tailwind CSS with MW custom theme
- TypeScript, proper type definitions
- SQL Server database integration
- AWS ECS deployment ready
- Security headers, production optimized

FEATURES NEEDED:
[List specific functionality]

Please follow the MW Components branding standard and create a professional, production-ready application.
```

---

## 📞 Brand Contact

**Application Author**: MW Components  
**Repository Pattern**: `MWC.[Category].[AppName]`  
**License**: Proprietary  
**Support**: https://helpdesk.mw-ind.com

---

*This branding standard ensures consistent MW Components identity across all AI-developed applications and maintains professional quality standards.* 
