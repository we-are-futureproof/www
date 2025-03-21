# futureproof Website Project Structure

## Directory Structure

### Top-Level Structure

- `app/` - Next.js application routes and pages using App Router
- `components/` - Reusable React components (10 components total)
- `hooks/` - Custom React hook (1 hook)
- `lib/` - Utility functions and shared code (3 files)
- `public/` - Static assets (images, fonts, favicon)
- `.ai/` - AI documentation for project orientation (see below for details)

### Key Files

- `package.json` - Dependencies (Next.js 15.1.0, React 19) and scripts
- `next.config.mjs` - Next.js configuration
- `tailwind.config.ts` - Tailwind CSS configuration

- `pnpm-lock.yaml` - pnpm lockfile
- `tsconfig.json` - TypeScript configuration
- `postcss.config.mjs` - PostCSS configuration

## Detailed Structure

### App Directory

- `app/layout.tsx` - Root layout with font configuration (Space Mono and Inter)
- `app/page.tsx` - Homepage with multiple sections
- `app/services/` - Services section
  - `page.tsx` - Services overview page
  - `[slug]/` - Dynamic route for individual service pages
- `app/case-studies/` - Case studies section
  - `page.tsx` - Case studies overview with 2 completed case studies
  - `[slug]/` - Dynamic route for individual case study pages
- `app/globals.css` - Global CSS with Tailwind imports

### Components Directory

- `components/home/` - Homepage-specific components (5)
  - `HeroSection.tsx` - Hero section with headline and CTA
  - `ProblemSection.tsx` - Problem statements section
  - `SolutionSection.tsx` - Solution statements section
  - `ServicesPreview.tsx` - Services preview grid
  - `CaseStudyPreview.tsx` - Case study preview

- `components/Button.tsx` - Custom button component
- `components/CTASection.tsx` - Call to action section
- `components/Footer.tsx` - Site footer
- `components/Header.tsx` - Site header
- `components/TestimonialCarousel.tsx` - Testimonial carousel component

### Hook Directory

- `hooks/use-mobile.tsx` - Custom hook for detecting mobile screen sizes


### Library Directory

- `lib/quotes.ts` - Testimonial quotes data with formatting
- `lib/utils.ts` - Utility functions (className merging)
- `lib/colorUtils.ts` - Color management and processing utilities
- `lib/data/case-studies.ts` - Centralized case studies data

## AI Documentation Directory

The `.ai/` directory contains documentation to help understand the project:

- `README.md` - Overview of the AI documentation directory
- `ai-guidelines.md` - Guidelines for AI assistants working with this project
- `content-management.md` - Guide for managing website content
- `core-components-guide.md` - Documentation for the reusable components
- `development-workflow.md` - Development practices and workflows
- `environment-setup.md` - Setup guide for development environment
- `issues-improvements.md` - Known issues and planned improvements
- `project-roadmap.md` - Planned features and development timeline
- `project-structure.md` - This file, outlining code organization
- `tech-stack.md` - List of technologies, libraries and tools used
- `version-history.md` - Project changelog and version information

