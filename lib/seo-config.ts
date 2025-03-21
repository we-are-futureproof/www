// SEO Configuration for Futureproof website

// Base site configuration
export const siteConfig = {
  name: "Futureproof",
  title: "Futureproof | AI Adoption Advisory",
  url: "https://thefutureproof.company",
  description: "Transform AI complexity into competitive advantage. Futureproof provides practical AI adoption advisory for small and medium businesses with measurable results within days.",
  keywords: [
    'AI advisory', 
    'AI adoption', 
    'small business AI', 
    'AI transformation', 
    'AI implementation', 
    'AI strategy', 
    'technology consulting', 
    'AI roadmap', 
    'AI vendor evaluation', 
    'AI pilot execution'
  ],
  ogImage: '/futureproof-meta.png',
  authors: [{ name: 'Futureproof' }],
  category: 'Technology',
  locale: 'en_US',
}

// Default metadata for Open Graph and Twitter
export const defaultOpenGraph = {
  title: siteConfig.title,
  description: siteConfig.description,
  url: siteConfig.url,
  logo: siteConfig.ogImage, // Adding og:logo property
  siteName: siteConfig.name,
  images: [
    {
      url: siteConfig.ogImage,
      width: 1084,
      height: 576,
      alt: `${siteConfig.name} - AI Adoption Advisory for Small and Medium Businesses`,
    },
  ],
  locale: siteConfig.locale,
  type: 'website',
}

export const defaultTwitter = {
  card: 'summary_large_image',
  title: siteConfig.title,
  description: siteConfig.description,
  images: [siteConfig.ogImage],
}

// SEO helper functions

// For creating service page metadata
export function generateServiceMetadata(service: {
  title: string,
  description: string,
  benefits: string[]
}) {
  // Generate a focused meta description from the first benefit
  const metaDescription = `${service.description.split('.')[0]}. ${service.benefits[0].split('.')[0]}.`
  
  return {
    title: `${service.title} | Futureproof AI Services`,
    description: metaDescription,
    openGraph: {
      ...defaultOpenGraph,
      title: `${service.title} | Futureproof AI Services`,
      description: metaDescription,
      url: `${siteConfig.url}/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`,
      type: 'article',
    },
    twitter: {
      ...defaultTwitter,
      title: `${service.title} | Futureproof AI Services`,
      description: metaDescription,
    },
  }
}

// For creating case study page metadata
export function generateCaseStudyMetadata(caseStudy: {
  title: string,
  subtitle: string,
  description: string,
  results: string[]
}) {
  // Create a meta description highlighting results
  const firstResult = caseStudy.results[0]
  const metaDescription = `${caseStudy.subtitle}: ${caseStudy.description.split('.')[0]}. Results: ${firstResult}.`
  
  return {
    title: `${caseStudy.title} | Futureproof Case Study`,
    description: metaDescription,
    openGraph: {
      ...defaultOpenGraph,
      title: `${caseStudy.title} | Futureproof Case Study`,
      description: metaDescription,
      url: `${siteConfig.url}/case-studies/${caseStudy.title.toLowerCase().replace(/\s+/g, '-')}`,
      type: 'article',
    },
    twitter: {
      ...defaultTwitter,
      title: `${caseStudy.title} | Futureproof Case Study`,
      description: metaDescription,
    },
  }
}
