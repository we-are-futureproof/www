# Content Management Guide

## Content Structure Overview

The futureproof website content is organized into the following main categories:

1. **Homepage Content**
   - Hero section
   - Problem/Solution statements
   - Services preview
   - Case study preview
   - Call to action

2. **Testimonials/Quotes**
   - Client testimonials used in the testimonial carousel
   - Organized with highlighting support

3. **Services**
   - Service overview page
   - Individual service detail pages

4. **Case Studies**
   - Case study overview page
   - Individual case study detail pages

## Content Files

### Testimonials

The testimonials are stored in `lib/quotes.ts`. This file contains an array of quote objects with the following structure:

```typescript
{
  "title": "Strategic Clarity",
  "quote": "Raw quote text with \n\n for paragraph breaks",
  "paragraphs": [
    { 
      "segments": [
        { "text": "Regular text" },
        { "text": "Highlighted text", "highlight": true },
        { "text": "More regular text" }
      ]
    },
    // More paragraphs...
  ],
  "author": "Job Title",
  "company": "Company Name"
}
```

The `paragraphs` array allows for rich text formatting with multiple paragraphs, each containing segments that can be highlighted.

### Services

Services content is currently defined within the page files:

- The services overview is in `app/services/page.tsx`
- Service detail pages are in `app/services/[slug]/page.tsx`

Each service includes:
- Title
- Description
- Benefits (bullet points)
- Link to detail page

### Case Studies

Case studies content is defined in a centralized data file and rendered through components:
- The case studies data is stored in `lib/data/case-studies.ts`
- The case studies overview in `app/case-studies/page.tsx` imports data from the central file
- Preview on homepage in `components/home/CaseStudyPreview.tsx` also uses the same data source
- Individual case study pages in `app/case-studies/[slug]/page.tsx` fetch specific case study by ID

Each case study includes:
- Title
- Description (multiple paragraphs)
- Results (bullet points)
- Services used (bullet points)
- Image

## Content Editing Guidelines

### Adding/Editing Testimonials

1. Open `lib/quotes.ts`
2. Add a new quote object or edit an existing one
3. Follow the structure outlined above
4. To highlight text, set `highlight: true` on the segment

### Adding/Editing Services

1. Locate the services array in `app/services/page.tsx`
2. Add a new service object or edit an existing one
3. Create a corresponding detail page in `app/services/[slug]/page.tsx`

### Adding/Editing Case Studies

1. Locate the case studies array in `app/case-studies/page.tsx`
2. Add a new case study object or edit an existing one
3. Follow the defined structure
4. Add a corresponding image in the public directory
5. Create a detail page in `app/case-studies/[slug]/page.tsx`

### Updating Homepage Content

1. Edit the corresponding component in the `components/home/` directory
2. For the hero section, edit `components/home/HeroSection.tsx`
3. For problem statements, edit `components/home/ProblemSection.tsx`
4. For solution statements, edit `components/home/SolutionSection.tsx`

## Best Practices

1. **Content Consistency**: Maintain consistent tone and style across all content.
2. **Image Optimization**: Optimize images before adding them to the site.
3. **Testing**: Always test content changes across different screen sizes.
4. **Backup**: Create backups before making major content changes.
5. **Versioning**: Use Git commits with clear messages for content updates.

## Future Content Management Plans

- Implement a headless CMS integration
- Create a content editing interface for non-technical team members
- Develop automated content validation
- Implement content versioning and rollback capability
