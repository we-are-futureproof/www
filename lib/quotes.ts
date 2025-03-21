// Testimonial quotes data

export interface QuoteSegment {
  text: string;
  highlight?: boolean;
}

export interface QuoteParagraph {
  segments: QuoteSegment[];
}

export interface Quote {
  title: string;
  quote: string; // Keep for backward compatibility
  paragraphs?: QuoteParagraph[]; // New field for rich text formatting by paragraphs
  segments?: QuoteSegment[]; // For backward compatibility with initial implementation
  author: string;
  company: string;
}

export const quotes: Quote[] = [
  {
    "title": "",
    "quote": "futureproof drilled down to the essential pieces of our user relationship, properly assessed our technical understanding, and provided us with a platform that all stakeholders can succeed with in realtime operation. \n\nWe are excited to continue our AI integration with futureproof, and look forward to their insights into our next generation offerings.",
    "author": "Founder & CEO",
    "company": "IoT Company",
    "paragraphs": [
      {
        "segments": [
          { "text": "futureproof drilled down to the "},
          { "text": "essential pieces of our user relationship, ", highlight: true },
          { "text": " properly assessed our technical understanding."},
        ]
      },
      {
        "segments": [
          { "text": "They provided us with a platform that all stakeholders can succeed with in realtime operation." },
        ]
      },
      {
        "segments": [
          { "text": "We are excited to continue our AI integration with futureproof, and look forward to their insights into our next generation offerings." }
        ]
      }
    ]
  },
  {
    "title": "Strategic Clarity",
    "quote": "futureproof transformed our understanding of AI by cutting through the hype and identifying practical applications for our business.\n\nTheir methodical approach provided a clear roadmap for implementing marketing automation, resulting in a structured plan with measurable objectives.",
    "paragraphs": [
      {
        "segments": [
          { "text": "futureproof transformed our understanding of AI by " },
          { "text": " cutting through the hype ", "highlight": true },
          { "text": " and identifying practical applications for our business." }
        ]
      },
      { 
        "segments": [
          { "text": "Their methodical approach provided a clear roadmapfor implementing marketing automation, resulting in a structured plan with measurable objectives." },
        ]
      }
    ],
    "author": "Marketing Director",
    "company": "Construction Technology Company"
  },
  {
    "title": "Technical Translation",
    "quote": "futureproof excels at demystifying complex AI concepts, making them accessible to our entire team.\n\nThey didn't just propose solutions; they equipped us with analytical frameworks to independently evaluate AI opportunities.\n\nOur technical support project moved from concept to implementation after just two strategic sessions.",
    "paragraphs": [
      { 
        "segments": [
          { "text": "futureproof excels at demystifying complex AI concepts, making them accessible to our entire team. " },
        ]
      },
      { 
        "segments": [
          { "text": "They didn't just propose solutions; they  " },
          { "text": " equipped us with analytical frameworks ", "highlight": true },
          { "text": " to independently evaluate AI opportunities." }
        ]
      },
      { 
        "segments": [
          { "text": "Our technical support project moved from concept to implementation after just two strategic sessions." }
        ]
      }
    ],
    "author": "Operations Lead",
    "company": "Engineering Firm"
  },
  {
    "title": "Making Sense of AI",
    "quote": "Before futureproof, AI complexity had stalled our progress.\n\nTheir systematic approach provided both the technical knowledge and strategic confidence needed to tackle document automation.\n\nfutureproof fosters an environment where both technical and non-technical stakeholders can contribute.",
    "paragraphs": [
      { 
        "segments": [
          { "text": "Before futureproof, AI complexity had stalled our progress. " },
        ]
      },
      { 
        "segments": [
          { "text": "Their "},
          { "text": " systematic approach provided both the technical knowledge and strategic confidence ", "highlight": true },
          { "text": " needed to tackle document automation. " },
        ]
      },
      { 
        "segments": [
          { "text": "futureproof fosters an environment where both technical and non-technical stakeholders can contribute. " },
        ]
      }
    ],
    "author": "Project Manager",
    "company": "Professional Services"
  },
  {
    "title": "Problem Decomposition",
    "quote": "futureproof breaks AI complexity into actionable steps.\n\nWhen our sales training stalled due to scope complexity, their approach helped us identify immediate opportunities while aligning with strategic objectives.\n\nThey provided a comprehensive framework for AI adoption, beyond just implementation tactics.",
    "paragraphs": [
      { 
        "segments": [
          { "text": "futureproof breaks AI complexity into actionable steps. " },
        ]
      },
      { 
        "segments": [
          { "text": "When our sales training stalled due to scope complexity, their approach helped us identify immediate opportunities while aligning with objectives." },
        ]
      },
      { 
        "segments": [
          { "text": "They provided a "},
          {"text": " comprehensive framework for AI adoption ", highlight: true},
          {"text": ", beyond just implementation tactics. " }
        ]
      }
    ],
    "author": "Sales Director",
    "company": "Industrial Services"
  },
  {
    "title": "Team Support",
    "quote": "We valued futureproof's focus on capability development rather than creating dependency.\n\nThey equipped our team with robust frameworks to independently evaluate and implement AI.\n\nTheir collaborative approach during our GIS visualization project helped us transfer knowledge and build competency.",
    "paragraphs": [
      { 
        "segments": [
          { "text": "We valued futureproof's focus on capability development rather than creating dependency. " },
        ]
      },
      { 
        "segments": [
          { "text": "They equipped our team with " },
          { "text": " robust frameworks ", "highlight": true },
          { "text": " to independently evaluate and implement AI. " }
        ]
      },
      { 
        "segments": [
          { "text": "Their collaborative approach during our GIS visualization project helped us transfer knowledge and build competency. " }
        ]
      }
    ],
    "author": "Data Analytics Manager",
    "company": "Regional Consultancy"
  },
  {
    "title": "Practical Perspective",
    "quote": "futureproof stands out by focusing on practicality over theory.\n\nThey helped us prioritize use cases for our customer support system based on quantifiable business value, not just technological novelty.\n\nTheir methodical approach transformed uncertainty into productive implementation momentum.",
    "paragraphs": [
      { 
        "segments": [
          { "text": "futureproof "},
          { "text": " stands out by focusing on practicality over theory. " },
        ]
      },
      { 
        "segments": [
          { "text": " They helped us "},
          { "text": " prioritize use cases for our customer support system ", highlight: true },
          { "text": " based on quantifiable business value, not just technological novelty. " },
        ]
      },
      { 
        "segments": [
          { "text": "Their methodical approach transformed uncertainty into productive implementation momentum. " },
        ]
      }
    ],
    "author": "Customer Experience Lead",
    "company": "Engineering Services"
  },
  {
    "title": "Balanced Guidance",
    "quote": "futureproof provided an optimal balance of expert guidance and organizational autonomy as we explored AI applications for document processing workflows.\n\nThey established a productive environment for exploration and inquiry.\n\nWithin weeks, we moved from uncertainty to a implementation.",
    "paragraphs": [
      { 
        "segments": [
          { "text": "futureproof "},
          { "text": " provided an optimal balance of expert guidance and organizational autonomy ", highlight: true},
          { "text": " as we explored AI applications for document processing workflows. " },
        ]
      },
      { 
        "segments": [
          { "text": "They established a productive environment for exploration and inquiry. " },
        ]
      },
      { 
        "segments": [
          { "text": "Within weeks, we moved from uncertainty to an implementation. " },
        ]
      }
    ],
    "author": "Operations Director",
    "company": "Infrastructure Firm"
  },
  {
    "title": "Thoughtful Questioning",
    "quote": "Engaging with futureproof transformed our approach to technical challenges.\n\nThrough strategic questioning and systematic analysis, they ensured we addressed the right problems with our marketing content system.\n\nTheir methodical process aligned technical and business stakeholders around a unified strategic vision.",
    "paragraphs": [
      { 
        "segments": [
          { "text": "Engaging with futureproof transformed our approach to technical challenges. " },
        ]
      },
      { 
        "segments": [
          { "text": "Through "},
          { "text":" strategic questioning and systematic analysis ", highlight: true},
          { "text": ", they ensured we addressed the right problems with our marketing content system. " },
        ]
      },
      { 
        "segments": [
          { "text": "Their methodical process aligned technical and business stakeholders around a unified strategic vision. " },
        ]
      }
    ],
    "author": "Communications Manager",
    "company": "Construction Technology"
  },
  {
    "title": "Learning Acceleration",
    "quote": "futureproof's methodology accelerated our AI adoption.\n\nOur team now employs a structured process for evaluating and prioritizing AI opportunities.\n\nTheir expert guidance and strategic problem-solving during our sales training automation project established the foundation for independent advancement.",
    "paragraphs": [
      { 
        "segments": [
          { "text": "futureproof's methodology accelerated our AI adoption. " },
        ]
      },
      { 
        "segments": [
          { "text": "Our team now employs a structured process for evaluating and prioritizing AI opportunities. " },
        ]
      },
      { 
        "segments": [
          { "text": "Their "},
          {"text": "expert guidance and strategic problem-solving ", highlight: true},
          { "text": " during our sales training automation project established the foundation for independent advancement." },
        ]
      }
    ],
    "author": "Training Coordinator",
    "company": "Engineering Services"
  },
  {
    "title": "Collaborative Discovery",
    "quote": "The primary value of futureproof's consultation extended beyond technical expertise to their structured discovery methodology.\n\nThey demonstrated that our GIS visualization challenge required refining decision processes rather than technological implementation.\n\nTheir analytical approach transformed our organization.",
    "paragraphs": [
      { 
        "segments": [
          { "text": "The primary value of futureproof's consultation extended beyond technical expertise to their " },
          { "text": " structured discovery methodology. ", "highlight": true },
        ]
      },
      { 
        "segments": [
          { "text": "They demonstrated that our GIS visualization challenge required refining decision processes rather than technological implementation." }
        ]
      },
      { 
        "segments": [
          { "text": "Their analytical approach transformed our organization." }
        ]
      }
    ],
    "author": "Business Development Director",
    "company": "Regional Construction Firm"
  }
];

// Helper function to get quotes for a specific section
export const getQuotesBySection = (section: string): Quote[] => {
  return quotes;
  // Note: In the future, if we need to filter quotes by section, we can uncomment:
  // return quotes.filter(quote => quote.section === section);
};

// Helper function to convert a quote to paragraphs with segments
// This preserves backwards compatibility with both formats
export const getQuoteParagraphs = (quote: Quote): QuoteParagraph[] => {
  // If paragraphs are already defined, use them
  if (quote.paragraphs && quote.paragraphs.length > 0) {
    return quote.paragraphs;
  }
  
  // If segments are defined, convert them to a single paragraph
  if (quote.segments && quote.segments.length > 0) {
    return [{ segments: quote.segments }];
  }
  
  // Convert traditional quote format with \n\n to paragraphs
  return quote.quote.split('\n\n').map(text => ({ 
    segments: [{ text }]
  }));
};
