# MW Components Comprehensive Development Standards
*Version 2.0 - Universal Development Guide for Web Applications & Integration Platform*

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

#### **Web Applications Format**
`MW Components [Function] [Type]`  
**Examples**:
- MW Components Shop Floor Calculator
- MW Components Inventory Manager
- MW Components Quality Control

#### **Workato Integration Format**
`[PROJECT_CODE]_[ASSET_CODE]_[SEQUENCE]_[DESCRIPTIVE_NAME]`

**Project Codes (2-5 characters)**:
- CRM - Customer Relationship Management
- SALES - Sales Operations
- FIN - Financial Systems
- HR - Human Resources
- SHARED - Universal Functions
- MONITORING - System Health

**Asset Type Codes**:
```
REC   - Recipe (core Workato recipe)
RF    - Recipe Function (reusable function)
LF    - Local Function (project-specific function)
API   - API Endpoint (callable recipe)
CON   - Connection (cloud app connection)
OPA   - On-Premise Agent Connection
LT    - Lookup Table
```

**Workato Examples**:
```
[CRM]_REC_001_Customer_Data_Sync
[SALES]_API_001_Quote_Generation_Service
[SHARED]_RF_001_Universal_Error_Handler
[FIN]_CON_001_SAP_Financial_System
[HR]_LT_001_Employee_Status_Codes
```

### Standard Descriptions
```
Web App Short: "Professional [function] system for MW Components manufacturing operations"
Integration Short: "Automated [function] integration for MW Components business operations"
Keywords: MW Components, manufacturing, [specific function], industrial, professional
Author: MW Components
```

---

## 🛠️ Platform-Specific Technical Standards

## **Frontend Applications**

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

### Environment Variables Template
```env
NEXT_PUBLIC_APP_NAME=MW Components [App Name]
NEXT_PUBLIC_APP_VERSION=1.0.0
COMPANY_NAME=MW Components
BRAND_PRIMARY_COLOR=#FFD600
BRAND_SECONDARY_COLOR=#00A8B5
```

## **Integration Platform (Workato)**

### Workspace Organization
```
MW Components Workspace/
├── 📁 [SHARED] - Universal Functions/
│   ├── Connections/
│   ├── Recipe Functions/
│   ├── Lookup Tables/
│   └── Global Configurations/
├── 📁 [PROJECT_CODE] - Project Name/
│   ├── API Endpoints/
│   ├── Recipe Functions/
│   ├── Core Recipes/
│   ├── Connections/
│   └── Lookup Tables/
└── 📁 [MONITORING] - System Health/
    ├── Health Checks/
    ├── Performance Metrics/
    └── Alert Management/
```

### Recipe Architecture Standards
```
Recipe Structure:
├── Input Validation (Required)
├── Authentication/Authorization (If API or User Interactive) (Required)
├── Business Logic Processing
├── Data Transformation
├── Output Formatting
├── Error Handling (Required)
└── Monitoring/Logging (Required)
```

### Universal Error Handler Pattern
```json
{
  "success": false,
  "error": {
    "code": "MWC_BUSINESS_RULE_VIOLATION",
    "message": "Customer credit limit exceeded",
    "correlation_id": "req_12345",
    "timestamp": "2024-12-20T10:30:00Z",
    "retry_after": 300
  }
}
```

### Performance Optimization Standards
```yaml
workato_optimization:
  batch_processing:
    threshold: ">100 records triggers batch mode"
    batch_size: "500-1000 records per batch"
    task_reduction: "Target 80%+ reduction"
    
  conditional_logic:
    early_exit: "validate inputs before expensive operations"
    smart_caching: "cache frequently accessed lookup data"
    lazy_loading: "load data only when required"
    
  monitoring:
    tasks_per_job: "target <5"
    execution_time: "target <2 seconds"
    error_rate: "target <1%"
    batch_percentage: "target >80%"
```

---

## 🚀 Deployment Standards

### **Web Application Deployment**

#### AWS Infrastructure
- **Naming**: `mwc-[app-name]-[environment]`
- **ECR**: `mwc-visual/[app-name]`
- **ECS**: `mwc-visual-helper-apps`
- **Tags**: Environment, Application, Owner: "MW Components"

#### Docker Configuration
```dockerfile
# Multi-stage build for production
FROM node:18-alpine AS base
LABEL maintainer="MW Components"
ENV NEXT_PUBLIC_APP_NAME="MW Components [App Name]"
```

#### Security Headers Template
```javascript
const securityHeaders = [
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'X-XSS-Protection', value: '1; mode=block' }
];
```

### **Integration Platform Deployment**

#### Environment Progression
```
Development Lifecycle:
├── Development Environment
│   ├── Feature development and testing
│   ├── Unit testing and validation
│   └── Code review and approval
├── Testing Environment
│   ├── Integration testing
│   ├── Performance validation
│   └── User acceptance testing
└── Production Environment
    ├── Blue-green deployment
    ├── Production monitoring
    └── Performance optimization
```

#### Environment-Specific Naming
- **Development**: Use base name `[CRM]_REC_001_Customer_Data_Sync`
- **Testing**: Append `_TEST` `[CRM]_REC_001_Customer_Data_Sync_TEST`
- **Production**: Append `_PROD` `[CRM]_REC_001_Customer_Data_Sync_PROD`

---

## 🔐 Security Standards

### **Universal Security Requirements**
- JWT Token validation for all authenticated endpoints
- Role-based permission checking
- API rate limiting enforcement
- Audit trail logging for all operations
- Encryption for data at rest and in transit

### **Data Classification Framework**
```
Data Protection Standards:
├── PII (Personally Identifiable Information)
│   └── Automatic masking in logs
├── Financial Data
│   └── Encryption at rest and in transit
├── Authentication Credentials
│   └── Secure connection storage only
└── Business Confidential
    └── Access logging and monitoring
```

### **Authentication Pattern (Both Platforms)**
```
Standard Authentication Flow:
1. Extract JWT token from request
2. Call Universal Token Validator
3. Verify role-based permissions
4. Log authentication attempt
5. Proceed with authorized operations
```

---

## 📋 AI Prompt Templates

### **Web Application Development**
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

### **Integration Development**
```
Create a Workato integration for MW Components called "[Integration Name]".

BRANDING REQUIREMENTS:
- Company: MW Components manufacturing operations
- Naming: [PROJECT_CODE]_[ASSET_CODE]_[SEQUENCE]_[DESCRIPTIVE_NAME]
- Style: Professional, enterprise-grade business automation

TECHNICAL REQUIREMENTS:
- Follow MW Components Workato coding standards
- Implement universal error handling pattern
- Include performance optimization (batch processing, conditional logic)
- JWT authentication and role-based permissions
- Comprehensive monitoring and logging
- Task optimization targeting <5 tasks per job

INTEGRATION REQUIREMENTS:
- Source System: [System Name]
- Target System: [System Name]
- Data Flow: [Description]
- Business Rules: [List rules]
- Error Handling: [Specific requirements]

FEATURES NEEDED:
[List specific functionality]

Please follow the MW Components integration standards and create a production-ready, optimized integration.
```

### **Hybrid Project Development**
```
Create a comprehensive solution for MW Components that includes both web application and integration components.

WEB APPLICATION COMPONENT:
- Name: MW Components [App Name]
- Technology: Next.js 14+ with Tailwind CSS
- Features: [List web features]

INTEGRATION COMPONENT:
- Name: [PROJECT_CODE]_[ASSET_CODE]_[SEQUENCE]_[DESCRIPTIVE_NAME]
- Technology: Workato automation platform
- Features: [List integration features]

UNIFIED REQUIREMENTS:
- Consistent MW Components branding across all components
- Shared authentication and security standards
- Integrated monitoring and logging
- Performance optimization for both platforms
- Production-ready deployment configurations

Please create a cohesive solution following MW Components comprehensive development standards.
```

---

## 📊 Quality Assurance Standards

### **Testing Framework (All Platforms)**
```yaml
testing_requirements:
  unit_tests:
    web_coverage: ">90% component and function coverage"
    integration_coverage: ">90% recipe function coverage"
    
  integration_tests:
    scope: "cross-system data flow validation"
    frequency: "every deployment"
    
  performance_tests:
    web_target: "Core Web Vitals compliance"
    integration_target: "task optimization validation"
    
  security_tests:
    scope: "authentication and authorization"
    frequency: "quarterly penetration testing"
```

### **Code Review Process**
```
Review Requirements:
├── Peer review for all changes
├── Security review for sensitive integrations
├── Performance review for high-volume components
├── Business logic validation
├── Brand compliance check
└── Documentation completeness verification
```

---

## 📝 Documentation Requirements

### **Universal Documentation Standards**
```
Documentation Checklist:
├── Business Purpose and Objective
├── Technical Architecture Overview
├── Input/Output Schema Documentation
├── Business Logic and Rules Description
├── Error Handling and Exception Scenarios
├── Performance Characteristics and Limitations
├── Security Implementation Details
├── Dependencies and Integration Points
├── Testing Procedures and Validation Steps
└── Deployment and Operations Instructions
```

### **Platform-Specific Documentation**

#### **Web Applications**
- Component library documentation
- API endpoint specifications
- Database schema documentation
- Environment configuration guides

#### **Integrations**
- Recipe function interfaces
- Connection setup instructions
- Lookup table definitions
- Performance optimization guides

---

## 📞 Brand Contact & Standards

**Application Author**: MW Components  
**Repository Pattern**: `MWC.[Category].[AppName]`  
**Integration Pattern**: `[PROJECT_CODE]_[ASSET_CODE]_[SEQUENCE]_[DESCRIPTIVE_NAME]`  
**License**: Proprietary  
**Support**: https://helpdesk.mw-ind.com

---

## 📋 Quick Reference Checklists

### **Pre-Development Checklist**
- [ ] Platform identified (Web App / Integration / Hybrid)
- [ ] Project/asset codes assigned and documented
- [ ] Naming conventions planned for all components
- [ ] Security requirements identified
- [ ] Performance targets defined
- [ ] Testing strategy documented
- [ ] Brand compliance verified

### **Development Checklist**
- [ ] MW Components naming conventions followed
- [ ] Brand colors and typography applied
- [ ] Universal error handling implemented
- [ ] Performance optimization applied
- [ ] Security controls integrated
- [ ] Platform-specific standards followed
- [ ] Documentation completed

### **Pre-Deployment Checklist**
- [ ] Code review completed (all platforms)
- [ ] Testing validation passed
- [ ] Performance targets met
- [ ] Security review approved
- [ ] Brand compliance verified
- [ ] Rollback plan prepared
- [ ] Monitoring configured

---

*This comprehensive standard ensures consistent MW Components identity and quality across all development platforms - from web applications to business process automation - maintaining professional excellence in every solution.*
