import { Metadata } from 'next'
import { generateServiceMetadata } from '@/lib/seo-config'
import { siteConfig } from '@/lib/seo-config'

// Define service data (reusing the data from the page component)
const services = {
  "ai-opportunity-assessment": {
    title: "AI Opportunity Assessment",
    description:
      "Systematic analysis that cuts through AI hype to pinpoint where automation and intelligence can deliver immediate ROI for specific operational workflows and business challenges.",
    benefits: [
      "Clear visibility into the highest-impact, lowest-risk AI implementation opportunities ranked by potential ROI.",
      "Confidence in technology investment decisions backed by evidence-based analysis.",
      "Elimination of wasted resources on inappropriate AI applications.",
    ],
  },
  "ai-readiness-assessment": {
    title: "AI Readiness Assessment",
    description:
      "Comprehensive diagnostic process that evaluates a company's current capabilities, infrastructure, and business processes to determine optimal starting points for AI adoption.",
    benefits: [
      "Clearly prioritized AI opportunities mapped to specific business objectives with realistic implementation timelines.",
      "Accurate understanding of technical and organizational readiness gaps with specific remediation plans.",
      "Calibrated expectations across leadership teams with consensus on resource allocation.",
    ],
  },
  "ai-implementation-roadmap": {
    title: "AI Implementation Roadmap",
    description:
      "Development of comprehensive, customized implementation plans that sequence AI initiatives based on business impact, technical feasibility, and organizational readiness factors.",
    benefits: [
      "Accelerated time-to-value through strategically sequenced implementation priorities.",
      "Reduced implementation failures by identifying and addressing potential technical challenges.",
      "Enhanced budget efficiency by establishing clear decision criteria for technology investments.",
    ],
  },
  "ai-vendor-selection": {
    title: "AI Vendor Selection",
    description:
      "Systematic approach for evaluating AI vendors against customized criteria that reflect actual business requirements rather than trending technologies.",
    benefits: [
      "Confident investment decisions backed by transparent evaluation criteria.",
      "Accelerated implementation timelines through early identification of integration requirements.",
      "Stronger negotiating position with vendors through detailed understanding of feature relevance.",
    ],
  },
  "phased-ai-pilot-execution": {
    title: "Phased AI Pilot Execution",
    description:
      "A structured approach to testing AI solutions through controlled, measurable pilot projects that minimize risk while demonstrating practical value in specific business contexts.",
    benefits: [
      "Evidence-based confidence in AI investment decisions backed by quantifiable results.",
      "Refined implementation strategies informed by real-world testing.",
      "Organizational momentum and stakeholder buy-in generated through visible wins.",
    ],
  },
  "ai-education-simplification": {
    title: "AI Education & Simplification",
    description:
      "Bridging the knowledge gap between technical AI concepts and practical business applications through personalized educational frameworks.",
    benefits: [
      "Confident leadership discussions about AI strategy grounded in practical understanding.",
      "Accelerated evaluation processes where decision-makers can quickly distinguish between relevant AI capabilities and marketing hype.",
      "Seamless translation between business challenges and technical AI capabilities.",
    ],
  },
}

// Dynamic metadata generation based on the slug
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const slug = params.slug;
  const service = services[slug as keyof typeof services];
  
  // If service not found, return default metadata
  if (!service) {
    return {
      title: "Service Not Found | futureproof",
      description: "The requested service could not be found.",
    };
  }
  
  // Generate service-specific metadata
  return generateServiceMetadata(service);
}

// Also generate static paths for all service pages
export function generateStaticParams() {
  return Object.keys(services).map(slug => ({ slug }));
}
