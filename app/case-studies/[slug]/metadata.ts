import { Metadata } from 'next'
import { generateCaseStudyMetadata } from '@/lib/seo-config'
import { getCaseStudy } from '@/lib/data/case-studies'

// Dynamic metadata generation based on the slug
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const slug = params.slug;
  const caseStudy = getCaseStudy(slug);
  
  // If case study not found, return default metadata
  if (!caseStudy) {
    return {
      title: "Case Study Not Found | Futureproof",
      description: "The requested case study could not be found.",
    };
  }
  
  // Generate case study-specific metadata
  return generateCaseStudyMetadata(caseStudy);
}

// Retrieve all case study slugs for static generation
// This will need to be adjusted based on how case studies are stored
export function generateStaticParams() {
  // Assuming we have access to case study data directly
  // If not, we'd have to modify this to get the data in an SSG-compatible way
  const caseStudies = require('@/lib/data/case-studies').caseStudies;
  return Object.keys(caseStudies).map(slug => ({ slug }));
}
