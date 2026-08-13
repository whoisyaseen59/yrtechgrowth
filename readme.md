# 🚀 YR Tech Growth — Official Digital Marketing Agency Web Platform

[![Platform](https://img.shields.io/badge/Platform-Node.js%20%7C%20Express-green.svg)](https://nodejs.org/)
[![Port](https://img.shields.io/badge/Port-3000-blue.svg)](#-server--deployment-guide)
[![PWA](https://img.shields.io/badge/PWA-Supported-gold.svg)](#1--full-progressive-web-app-pwa-integration)
[![SEO](https://img.shields.io/badge/SEO-4--Tier%20Keyword%20Architecture-purple.svg)](#3--4-tier-seo-keyword-architecture--content-engineering)
[![License](https://img.shields.io/badge/License-Proprietary-red.svg)](#-contact--support)

**YR Tech Growth** (`https://yrtechgrowth.site/`) is Pakistan's premier performance marketing, search engine optimization (SEO), e-commerce scaling, and digital growth engineering agency platform headquartered on Jaranwala Road, Faisalabad, Punjab, Pakistan. 

This repository houses the complete, production-grade, multi-page web application featuring **50+ optimized landing pages**, a unified gold-and-charcoal design system, advanced Progressive Web App (PWA) offline capabilities, a 4-tier SEO keyword architecture with structured `FAQPage` JSON-LD schemas, and a lightweight Node.js/Express production web server.

---

## 📋 Table of Contents

- [🌟 Platform Overview](#-platform-overview)
- [🏗️ Tech Stack & Architecture](#️-tech-stack--architecture)
- [📁 Complete Project Directory Structure](#-complete-project-directory-structure)
- [⚡ Key Technical & Structural Capabilities](#-key-technical--structural-capabilities)
  - [1. 📱 Full Progressive Web App (PWA) Integration](#1--full-progressive-web-app-pwa-integration)
  - [2. 🎨 Unified Design System (`/assets/css/style.css`)](#2--unified-design-system-assetscssstylecss)
  - [3. 🔍 4-Tier SEO Keyword Architecture & Content Engineering](#3--4-tier-seo-keyword-architecture--content-engineering)
  - [4. 📊 Schema.org JSON-LD & Structured Data](#4--schemaorg-json-ld--structured-data)
  - [5. 🛠️ Interactive Tools & Marketing Utilities](#5--interactive-tools--marketing-utilities)
- [📂 Service & Content Modules Breakdown](#-service--content-modules-breakdown)
- [💻 Server & Deployment Guide](#-server--deployment-guide)
- [🤖 AI & Search Crawler Optimization](#-ai--search-crawler-optimization)
- [📞 Contact & Agency Support](#-contact--agency-support)

---

## 🌟 Platform Overview

YR Tech Growth bridges the gap between creative digital marketing and verifiable financial performance. Designed specifically for Pakistani retail brands, e-commerce stores, B2B exporters, healthcare clinics, and educational institutions, this platform delivers deep, educational, and high-converting marketing content backed by advanced server-side tracking methodologies.

### Core Value Propositions
- **No Vanity Metrics:** Focus on net Return on Ad Spend (ROAS), Cost per Acquisition (CPA), and verified revenue.
- **Server-Side Data Security:** Dual-layer tracking utilizing Meta Conversions API (CAPI) and Google Analytics 4 (GA4) server-side tagging.
- **Localized Pakistani E-Commerce Integration:** Cash on Delivery (COD) WhatsApp verification workflows, Raast/JazzCash/EasyPaisa gateway configurations, and regional purchasing optimizations.

---

## 🏗️ Tech Stack & Architecture

- **Frontend Core:** Semantic HTML5, Vanilla JavaScript (ES6+), Modern CSS3 with Custom Variables (`--primary-gold`, `--dark-bg`, etc.).
- **Backend Runtime:** Node.js with Express.js (`server.js`) configured for port `3000` with HTTP Gzip/Brotli static compression.
- **Progressive Web App (PWA):** Custom Service Worker (`sw.js`) utilizing Network-First with Stale-While-Revalidate caching, Web App Manifest (`manifest.json`), and custom iOS/Android installation UI triggers.
- **Asset Pipeline:** High-performance WebP image formats, SVG vectors, and responsive typography paired via Google Fonts (`Poppins` & `Open Sans`).
- **Structured Data:** Schema.org JSON-LD definitions (`DigitalMarketingAgency`, `LocalBusiness`, `Organization`, `FAQPage`, `WebPage`).

---

## 📁 Complete Project Directory Structure

```
yr-tech-growth/
│
├── 📄 index.html                                 # Primary Homepage (Hero, Services, CEO, Reviews, Growth Framework)
├── 📄 contact.html                               # Contact & Free Digital Audit Booking Form Page
├── 📄 insights.html                             # Executive Digital Maturity & Strategy Insights Directory
├── 📄 reviews.html                              # Verified Client Testimonials & Success Rating Hub
├── 📄 sitemap.html                              # User-Facing Categorized HTML Site Directory
├── 📄 sitemap.xml                               # Search Engine XML Sitemap Index (50 Indexed URLs)
├── 📄 robots.txt                                # Search Engine & AI Crawler Directives (GPTBot, ClaudeBot, etc.)
├── 📄 404.html                                  # Custom Rerouting 404 Error Hub & Quick Service Matrix
├── 📄 manifest.json                             # PWA Manifest (Icons, Scope, Theme Color)
├── 📄 sw.js                                     # Service Worker (Offline Cache & Network Strategy)
├── 📄 server.js                                 # Express.js Production Web Server (Port 3000, Compression, Routing)
├── 📄 package.json                              # Node.js Dependencies & NPM Scripts
├── 📄 metadata.json                             # AI Studio Applet Metadata & Frame Permissions
├── 📄 security.txt                              # Vulnerability Disclosure & Security Policy
├── 📄 llms.txt                                  # AI & LLM Machine-Readable Content Guide
├── 📄 humans.txt                                # Author, Developer & Agency Credits
├── 📄 app-ads.txt                               # Digital Publisher Verification File
├── 📄 browserconfig.xml                         # Windows Tile & IE Navigation Config
├── 📄 favicon.ico                               # Brand Favicon Icon
├── 📄 icon.svg                                  # Scalable Vector Brand Icon
├── 📄 googleb84174c774f4bf30.html               # Google Search Console Verification Token
│
├── 📂 about/                                    # Company Leadership & Team Subdirectory
│   ├── 📄 about-yr-tech-growth.html            # Agency Vision, Mission & Comparison Matrix
│   ├── 📄 meet-our-ceo.html                     # Founder & CEO Biography (Muhammad Yaseen Rashid)
│   └── 📄 our-team.html                         # Departmental Team Breakdown & Operations
│
├── 📂 services/                                 # Digital Marketing & Engineering Services Subdirectory
│   ├── 📄 all-services.html                     # Master Service Directory Matrix
│   ├── 📄 digital-marketing.html                # Performance Digital Marketing Strategy
│   ├── 📄 meta-ads-management.html              # Facebook & Instagram Meta Ads Management
│   ├── 📄 google-ads-management.html            # Google PPC, Search & Performance Max (PMax) Ads
│   ├── 📄 tiktok-ads.html                       # TikTok Video Advertising & Viral Funnels
│   ├── 📄 seo-services.html                     # Local & Technical Search Engine Optimization
│   ├── 📄 content-marketing.html                # Copywriting & Strategic Content Marketing
│   ├── 📄 social-media-management.html          # Organic Social Media Community Management
│   ├── 📄 branding-and-identity.html            # Brand Identity, Logos & Visual Systems
│   ├── 📄 website-development.html              # Custom Web Design & E-Commerce Engineering
│   ├── 📄 ecommerce-marketing.html              # E-Commerce Revenue Scaling & CRO
│   ├── 📄 shopify-marketing.html                # Shopify Store Development & Ads
│   ├── 📄 sales-funnel-development.html        # High-Converting Lead & Sales Funnel Engineering
│   ├── 📄 marketing-automation.html             # Automated Workflows & CRM Nurturing
│   ├── 📄 email-marketing.html                  # Email Marketing & Automated Flows
│   ├── 📄 whatsapp-marketing.html               # WhatsApp API Automation & Chatbots
│   ├── 📄 analytics-and-tracking.html           # GA4 Analytics, Server Tagging & Event Tracking
│   └── 📄 pixel-conversion-api-setup.html       # Meta Pixel & Server Conversions API (CAPI) Setup
│
├── 📂 blog/                                     # Educational Articles, News & Insights
│   ├── 📄 all-posts.html                        # Master Blog Post Directory
│   └── 📂 category/                             # Categorized Blog Feeds
│       ├── 📄 case-studies.html                 # Campaign Teardowns & Verified Results
│       ├── 📄 digital-marketing-tips.html       # Practical Growth & Ad Optimization Tutorials
│       └── 📄 industry-insights.html            # Pakistani & Regional E-Commerce Trends
│
├── 📂 case-study/                               # Client Success Portfolio
│   └── 📄 all-case-studies.html                 # Audited Case Studies Portfolio Showcase
│
├── 📂 resources/                                # Free Tools, Company Programs & Legal Portal
│   ├── 📄 faqs.html                             # Master Frequently Asked Questions Hub
│   ├── 📄 marketing-guides.html                 # Downloadable Strategy Guides & Playbooks
│   ├── 📄 roi-calculator.html                   # Interactive Marketing ROI & Ad Spend Calculator
│   │
│   ├── 📂 company/                              # Corporate & Partner Programs
│   │   ├── 📄 affiliate-program.html            # Referral & Affiliate Commission Program
│   │   ├── 📄 careers.html                      # Job Openings & Hiring Portal
│   │   └── 📄 partner-with-us.html              # Agency Partnership & White-Label Program
│   │
│   ├── 📂 tools/                                # Interactive Marketing Calculators
│   │   └── 📄 all-free-tools.html               # Directory of Free Marketing Calculators
│   │
│   └── 📂 legal/                                # Legal & Compliance Center
│       ├── 📄 acceptable-use-policy.html        # Platform Acceptable Use Policy
│       ├── 📄 cancellation-policy.html          # Service & Order Cancellation Terms
│       ├── 📄 cookie-policy.html                # Cookie Usage & Tracking Disclosure
│       ├── 📄 data-processing-agreement.html    # Data Processing Addendum (DPA)
│       ├── 📄 disclaimer.html                   # Earnings & Performance Disclaimer
│       ├── 📄 gdpr-compliance.html              # GDPR Data Protection & User Rights
│       ├── 📄 privacy-policy.html               # Complete Privacy Policy
│       ├── 📄 refund-policy.html                # Refund & Money-Back Terms
│       ├── 📄 service-level-agreement.html      # SLA Service Level Terms
│       └── 📄 terms-and-conditions.html         # Master Terms of Service
│
└── 📂 assets/                                   # Application Static Assets
    ├── 📂 css/
    │   └── 📄 style.css                         # Unified Design System & Custom CSS Properties
    ├── 📂 js/
    │   └── 📄 global.js                        # Global Navigation, PWA Listeners & Form Controls
    └── 📂 images/                               # Optimized WebP Image Assets
        ├── 📄 yr-tech-growth-logo.webp          # Primary Brand Logo
        ├── 📄 hero.webp                         # Hero Banner Illustration
        ├── 📄 1st-testimonial.webp              # Client Testimonial Avatar 1
        ├── 📄 2nd-testimonial.webp              # Client Testimonial Avatar 2
        ├── 📄 3rd-testimonial.webp              # Client Testimonial Avatar 3
        ├── 📄 muhammad-yaseen-rashid-ceo-yr-tech-growth.webp # CEO Executive Portrait
        ├── 📄 about-us-yr-tech-growth.webp      # About Section Visual
        └── 📂 client-images/                    # Local Client Partner Logos
            ├── 📄 logo-hassan-medical-center-jaranwala.webp
            ├── 📄 logo-star-chinese-language-center-jaranwala.webp
            ├── 📄 logo-star-medical-college-jaranwala.webp
            ├── 📄 logo-informatics-group-of-college-jaranwala.webp
            ├── 📄 logo-inspire-computer-college-jaranwala.webp
            ├── 📄 logo-yaseen-traders-and-collections.webp
            └── 📄 logo-mansoob-aziz-client-fsd.webp
```

---

## ⚡ Key Technical & Structural Capabilities

### 1. 📱 Full Progressive Web App (PWA) Integration
- **Web App Manifest (`manifest.json`):** Configured with standalone display mode, Gold theme color (`#FFD700`), and dark background (`#0B0F19`).
- **Service Worker (`sw.js`):** Implements a **Network-First with Stale-While-Revalidate Fallback** strategy. Serves cached offline assets when disconnected and automatically updates caches upon network reconnection.
- **Automated PWA Installation Prompts:** Custom modal event handlers in `/assets/js/global.js` detect `beforeinstallprompt` on Chrome Android and provide Safari "Add to Home Screen" instructions on iOS.

### 2. 🎨 Unified Design System (`/assets/css/style.css`)
- **Color Palette:** Premium Metallic Gold (`#FFD700` / `#D4AF37`), Deep Obsidian (`#0B0F19`), Dark Slate (`#1F2937`), and High-Contrast White (`#FFFFFF`).
- **Typography & Hierarchy:** Integrated Google Fonts (`Poppins` display headings paired with `Open Sans` body text) using mathematically scaled line-heights and baseline spacing.
- **Mega Navigation Menu:** 3-Column hover-responsive dropdown menu categorized by Advertising, Organic Search, and Web Engineering.
- **Inner Hero Standard (`.inner-hero`):** Uniform dark radial-gradient banner across all 50+ subpages featuring gold gradient typography, breadcrumbs, action buttons, and trust indicators.
- **Micro-Interactions:** Custom `.card-hover-effect` with gold glow borders, subtle drop-shadow elevation, and zero layout shift.

### 3. 🔍 4-Tier SEO Keyword Architecture & Content Engineering
Every single page on the platform is engineered around a dedicated **4-Tier SEO Keyword Map**:
1. **Tier 1 — Primary Keyword:** Unique, non-duplicated focus phrase targeted per page.
2. **Tier 2 — Secondary Keywords:** 4–6 high-intent commercial and regional keyword variations.
3. **Tier 3 — Long-Tail / Question Keywords:** 5–8 conversational user queries mapped directly into expanded FAQ sections.
4. **Tier 4 — LSI / Semantic Keywords:** 8–12 contextually relevant terms naturally distributed across body text.

#### On-Page Conversion & SEO Elements
- **Featured Snippet Summary Boxes:** 40–60 word "Key Takeaways" summary callout at the top of every page targeting Google AI Overviews and Featured Snippets.
- **Table of Contents (TOC):** Jump-link navigation on pages over 1000 words.
- **Contextual Internal Links:** 6–8 contextual internal links per page connecting related service verticals and case studies.
- **Comprehensive FAQs:** 6–8 expanded Q&As per page, providing in-depth (3–5 sentences) solutions to common client objections.

### 4. 📊 Schema.org JSON-LD & Structured Data
Every page includes validated JSON-LD schema blocks tailored to its content type:
- **`DigitalMarketingAgency` & `LocalBusiness`:** Embedded on core pages with geolocation coordinates (`Faisalabad, Punjab, Pakistan`), operating hours, address, and telephone (`+92-329-7752006`).
- **`FAQPage` Schema:** Dynamic JSON-LD arrays containing questions and answers matching on-page FAQ content.
- **`WebPage` / `Organization`:** Authority signals linking social profiles and official web entities.

### 5. 🛠️ Interactive Tools & Marketing Utilities
- **ROI & Ad Spend Calculator (`/resources/roi-calculator.html`):** Client-side interactive widget allowing business owners to input ad budget, expected conversion rates, and average order value (AOV) to project net ROAS and net revenue.
- **Interactive Form Validation:** `/contact.html` features custom client-side validation, error feedback, and instant WhatsApp referral routing.

---

## 📂 Service & Content Modules Breakdown

### Core Services Suite (`/services/`)
1. **Meta Ads Management:** High-ROAS Facebook & Instagram campaigns, broad audience scaling, and ad creative testing.
2. **Google Ads Management:** Search Ads, Performance Max (PMax), Shopping Ads, and negative keyword strategies.
3. **SEO Services:** Technical site audits, Google Business Profile local ranking, and backlink building.
4. **Shopify Marketing:** Custom store development, speed optimization, and e-commerce growth funnels.
5. **Meta CAPI Setup:** Server-side Meta Conversions API via Server GTM and Stape.io to overcome iOS privacy blockages.
6. **WhatsApp Marketing:** Automated Cash on Delivery (COD) order verification, broadcast campaigns, and chatbot flows.
7. **Marketing Automation:** Lead scoring, CRM integration, and automated nurture sequences.
8. **E-Commerce Growth:** CRO, cart abandonment recovery, and payment gateway setups (JazzCash/EasyPaisa/Raast).

---

## 💻 Server & Deployment Guide

The application is deployed via a Node.js Express server (`server.js`) optimized for containerized Cloud Run and standard hosting environments.

### System Requirements
- **Node.js:** v18.x or higher
- **NPM:** v9.x or higher
- **Port:** `3000` (Hardcoded infrastructure port)

### 🛠️ Local Development & Server Execution
1. **Install Dependencies:**
   ```bash
   npm install
   ```
2. **Start Server:**
   ```bash
   npm start
   ```
3. Open browser at `http://localhost:3000`.

### ⚙️ Production Server Features (`server.js`)
- Static file serving with strict caching headers.
- Automatic compression (`gzip` / `brotli`).
- Fallback 404 error routing serving `/404.html`.
- Security headers enforcing X-Content-Type-Options and frame options.

---

## 🤖 AI & Search Crawler Optimization

This project includes specialized files to guide both web search engines and Large Language Models (LLMs):

- **`sitemap.xml`:** Comprehensive XML map listing all 50 landing pages with change frequencies and priorities.
- **`robots.txt`:** Fully configured permissions allowing standard search crawlers while providing clean index rules for AI agents (GPTBot, ClaudeBot, PerplexityBot).
- **`llms.txt`:** Standardized text summary file outlining agency services, CEO background, contact details, and core methodologies for AI agents and LLM scrapers.
- **`security.txt`:** Vulnerability disclosure guidelines adhering to security standards.

---

## 📞 Contact & Agency Support

- **CEO & Founder:** Muhammad Yaseen Rashid
- **Agency Name:** YR Tech Growth
- **Physical Address:** Jaranwala Road, Faisalabad, Punjab, 38000, Pakistan
- **Phone / WhatsApp:** [+92-329-7752006](https://wa.me/923297752006)
- **Official Email:** yrtechgrowth@gmail.com
- **Official Website:** [https://yrtech.site](https://yrtech.site)
- **Live Platform URL:** [https://yrtechgrowth.site/](https://yrtechgrowth.site/)

---

*Copyright © 2026 YR Tech Growth. All rights reserved.*

