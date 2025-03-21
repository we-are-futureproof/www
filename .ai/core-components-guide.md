# Core Components Guide

## UI Components Library

This guide provides detailed information about the reusable UI components in the futureproof website.

### General Components

| Component | Purpose | Usage | Props |
|-----------|---------|-------|-------|
| `Button.tsx` | Custom button component | Navigation, form submission, actions | `variant`, `size`, `asChild`, etc. |
| `CTASection.tsx` | Call to action section | Bottom of pages to prompt user action | `title`, `description`, `buttonText`, etc. |
| `Header.tsx` | Site navigation | Top of every page | N/A |
| `Footer.tsx` | Site footer | Bottom of every page | N/A |
| `TestimonialCarousel.tsx` | Displays client testimonials | Homepage and service pages | `quotes` |

### Home Page Components

Located in `components/home/`:

- `HeroSection.tsx` - Main landing section with headline and subheading
- `ProblemSection.tsx` - Outlines customer problems the business solves
- `SolutionSection.tsx` - Describes solutions to the outlined problems
- `ServicesPreview.tsx` - Preview grid of available services
- `CaseStudyPreview.tsx` - Highlighted case studies preview



## Component Usage Guidelines

1. **Consistency**: Use the existing components rather than creating new ones for similar purposes
2. **Props**: Follow the established prop patterns when extending components
3. **Styling**: Use Tailwind utility classes within the component
4. **Variants**: For components with multiple appearances, use consistent prop patterns

## Custom Hooks

The project includes custom hooks in the `hooks/` directory that should be used when applicable:

- `useIsMobile` - For detecting mobile screen sizes (in `use-mobile.tsx`)

## Adding New Components

When adding a new component:

1. Consider if it should be a general component or page-specific
2. Follow the naming conventions (PascalCase)
3. Use TypeScript for props typing
4. Document the component purpose and props
5. If creating a new reusable UI component, maintain consistency with existing component patterns
