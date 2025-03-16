// Testimonial quotes data

export interface Quote {
  title: string;
  quote: string;
  author: string;
  company: string;
  section: string;
}

export const quotes: Quote[] = [
  {
    "title": "Strategic Clarity",
    "quote": "Futureproof transformed our understanding of AI by cutting through the hype and identifying practical applications for our business.\n\nTheir methodical approach provided a clear roadmap for implementing marketing automation, resulting in a structured plan with measurable objectives.",
    "author": "Marketing Director",
    "company": "Construction Technology Company",
    "section": "hero"
  },
  {
    "title": "Technical Translation",
    "quote": "Futureproof excels at demystifying complex AI concepts, making them accessible to our entire team.\n\nThey didn't just propose solutions; they equipped us with analytical frameworks to independently evaluate AI opportunities.\n\nOur technical support enhancement project moved swiftly from concept to implementation after just two strategic sessions.",
    "author": "Operations Lead",
    "company": "Engineering Firm",
    "section": "hero"
  },
  {
    "title": "Making Sense of AI",
    "quote": "Before engaging Futureproof, AI complexity had stalled our progress.\n\nTheir systematic approach provided both the technical knowledge and strategic confidence needed to advance our document automation project.\n\nFutureproof fosters an environment where both technical and non-technical stakeholders can contribute effectively.",
    "author": "Project Manager",
    "company": "Professional Services",
    "section": "hero"
  },
  {
    "title": "Problem Decomposition",
    "quote": "Futureproof excels at breaking down complex AI projects into manageable components.\n\nWhen our sales training initiative stalled due to scope complexity, their structured methodology helped us identify immediate opportunities while aligning with strategic objectives.\n\nThey provided a comprehensive framework for AI adoption, beyond just implementation tactics.",
    "author": "Sales Director",
    "company": "Industrial Services",
    "section": "hero"
  },
  {
    "title": "Team Support",
    "quote": "We valued Futureproof's focus on capability development rather than creating dependency.\n\nThey equipped our team with robust frameworks to independently evaluate and implement AI solutions.\n\nTheir collaborative methodology during our GIS visualization project effectively transferred knowledge and built internal competency.",
    "author": "Data Analytics Manager",
    "company": "Regional Consultancy",
    "section": "hero"
  },
  {
    "title": "Practical Perspective",
    "quote": "Futureproof stands out by focusing on practical implementation over theoretical capabilities.\n\nThey helped us prioritize use cases for our customer support system based on quantifiable business value, not just technological novelty.\n\nTheir methodical approach transformed uncertainty into productive implementation momentum.",
    "author": "Customer Experience Lead",
    "company": "Engineering Services",
    "section": "hero"
  },
  {
    "title": "Balanced Guidance",
    "quote": "Futureproof provided an optimal balance of expert guidance and organizational autonomy as we explored AI applications for document processing workflows.\n\nThey established a productive environment for exploration and inquiry.\n\nWithin weeks, we moved from strategic uncertainty to a defined implementation roadmap.",
    "author": "Operations Director",
    "company": "Infrastructure Firm",
    "section": "hero"
  },
  {
    "title": "Thoughtful Questioning",
    "quote": "Engaging with Futureproof transformed our approach to technical challenges.\n\nThrough strategic questioning and systematic analysis, they ensured we addressed the right problems with our marketing content system.\n\nTheir methodical process aligned technical and business stakeholders around a unified strategic vision.",
    "author": "Communications Manager",
    "company": "Construction Technology",
    "section": "hero"
  },
  {
    "title": "Learning Acceleration",
    "quote": "Futureproof's methodology significantly accelerated our AI adoption timeline.\n\nOur team now employs a structured process for evaluating and prioritizing AI opportunities.\n\nTheir expert guidance and strategic problem-solving during our sales training automation project established the foundation for independent advancement.",
    "author": "Training Coordinator",
    "company": "Engineering Services",
    "section": "hero"
  },
  {
    "title": "Collaborative Discovery",
    "quote": "The primary value of Futureproof's consultation extended beyond technical expertise to their structured discovery methodology.\n\nThey demonstrated that our GIS visualization challenge required refining decision processes rather than merely technological implementation.\n\nTheir analytical approach transformed our organizational approach to technology adoption.",
    "author": "Business Development Director",
    "company": "Regional Construction Firm",
    "section": "hero"
  }
];

// Helper function to get quotes for a specific section
export const getQuotesBySection = (section: string): Quote[] => {
  return quotes.filter(quote => quote.section === section);
};
