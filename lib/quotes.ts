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
    "title": "Strategic Clarity",
    "quote": "Futureproof transformed our understanding of AI by cutting through the hype and identifying practical applications for our business.\n\nTheir methodical approach provided a clear roadmap for implementing marketing automation, resulting in a structured plan with measurable objectives.",
    "paragraphs": [
      { 
        "segments": [
          { "text": "Futureproof transformed our understanding of AI by " },
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
    "quote": "Futureproof excels at demystifying complex AI concepts, making them accessible to our entire team.\n\nThey didn't just propose solutions; they equipped us with analytical frameworks to independently evaluate AI opportunities.\n\nOur technical support enhancement project moved swiftly from concept to implementation after just two strategic sessions.",
    "paragraphs": [
      { 
        "segments": [
          { "text": "Futureproof excels at demystifying complex AI concepts, making them accessible to our entire team. " },
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
          { "text": "Our technical support enhancement project moved swiftly from concept to implementation after just two strategic sessions." }
        ]
      }
    ],
    "author": "Operations Lead",
    "company": "Engineering Firm"
  },
  {
    "title": "Making Sense of AI",
    "quote": "Before engaging Futureproof, AI complexity had stalled our progress.\n\nTheir systematic approach provided both the technical knowledge and strategic confidence needed to advance our document automation project.\n\nFutureproof fosters an environment where both technical and non-technical stakeholders can contribute effectively.",
    "paragraphs": [
      { 
        "segments": [
          { "text": "Before engaging Futureproof, AI complexity had stalled our progress. " },
        ]
      },
      { 
        "segments": [
          { "text": "Their "},
          { "text": " systematic approach provided both the technical knowledge and strategic confidence ", "highlight": true },
          { "text": " needed to advance our document automation project. " },
        ]
      },
      { 
        "segments": [
          { "text": "Futureproof fosters an environment where both technical and non-technical stakeholders can contribute effectively. " },
        ]
      }
    ],
    "author": "Project Manager",
    "company": "Professional Services"
  },
  {
    "title": "Problem Decomposition",
    "quote": "Futureproof excels at breaking down complex AI projects into manageable components.\n\nWhen our sales training initiative stalled due to scope complexity, their structured methodology helped us identify immediate opportunities while aligning with strategic objectives.\n\nThey provided a comprehensive framework for AI adoption, beyond just implementation tactics.",
    "paragraphs": [
      { 
        "segments": [
          { "text": "Futureproof excels at breaking down complex AI projects into manageable components. " },
        ]
      },
      { 
        "segments": [
          { "text": "When our sales training initiative stalled due to scope complexity, their structured methodologyhelped us identify immediate opportunities while aligning with strategic objectives." },
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
    "quote": "We valued Futureproof's focus on capability development rather than creating dependency.\n\nThey equipped our team with robust frameworks to independently evaluate and implement AI solutions.\n\nTheir collaborative methodology during our GIS visualization project effectively transferred knowledge and built internal competency.",
    "paragraphs": [
      { 
        "segments": [
          { "text": "We valued Futureproof's focus on capability development rather than creating dependency. " },
        ]
      },
      { 
        "segments": [
          { "text": "They equipped our team with " },
          { "text": " robust frameworks ", "highlight": true },
          { "text": " to independently evaluate and implement AI solutions. " }
        ]
      },
      { 
        "segments": [
          { "text": "Their collaborative methodology during our GIS visualization project effectively transferred knowledge and built internal competency. " }
        ]
      }
    ],
    "author": "Data Analytics Manager",
    "company": "Regional Consultancy"
  },
  {
    "title": "Practical Perspective",
    "quote": "Futureproof stands out by focusing on practical implementation over theoretical capabilities.\n\nThey helped us prioritize use cases for our customer support system based on quantifiable business value, not just technological novelty.\n\nTheir methodical approach transformed uncertainty into productive implementation momentum.",
    "paragraphs": [
      { 
        "segments": [
          { "text": "Futureproof "},
          { "text": " stands out by focusing on practical implementation over theoretical capabilities. " },
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
    "quote": "Futureproof provided an optimal balance of expert guidance and organizational autonomy as we explored AI applications for document processing workflows.\n\nThey established a productive environment for exploration and inquiry.\n\nWithin weeks, we moved from strategic uncertainty to a defined implementation roadmap.",
    "paragraphs": [
      { 
        "segments": [
          { "text": "Futureproof "},
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
          { "text": "Within weeks, we moved from strategic uncertainty to a defined implementation roadmap. " },
        ]
      }
    ],
    "author": "Operations Director",
    "company": "Infrastructure Firm"
  },
  {
    "title": "Thoughtful Questioning",
    "quote": "Engaging with Futureproof transformed our approach to technical challenges.\n\nThrough strategic questioning and systematic analysis, they ensured we addressed the right problems with our marketing content system.\n\nTheir methodical process aligned technical and business stakeholders around a unified strategic vision.",
    "paragraphs": [
      { 
        "segments": [
          { "text": "Engaging with Futureproof transformed our approach to technical challenges. " },
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
    "quote": "Futureproof's methodology significantly accelerated our AI adoption timeline.\n\nOur team now employs a structured process for evaluating and prioritizing AI opportunities.\n\nTheir expert guidance and strategic problem-solving during our sales training automation project established the foundation for independent advancement.",
    "paragraphs": [
      { 
        "segments": [
          { "text": "Futureproof's methodology significantly accelerated our AI adoption timeline. " },
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
    "quote": "The primary value of Futureproof's consultation extended beyond technical expertise to their structured discovery methodology.\n\nThey demonstrated that our GIS visualization challenge required refining decision processes rather than merely technological implementation.\n\nTheir analytical approach transformed our organizational approach to technology adoption.",
    "paragraphs": [
      { 
        "segments": [
          { "text": "The primary value of Futureproof's consultation extended beyond technical expertise to their " },
          { "text": " structured discovery methodology. ", "highlight": true },
        ]
      },
      { 
        "segments": [
          { "text": "They demonstrated that our GIS visualization challenge required refining decision processes rather than merely technological implementation." }
        ]
      },
      { 
        "segments": [
          { "text": "Their analytical approach transformed our organizational approach to technology adoption." }
        ]
      }
    ],
    "author": "Business Development Director",
    "company": "Regional Construction Firm"
  }
];

// Helper function to get quotes for a specific section
export const getQuotesBySection = (section: string): Quote[] => {
  return quotes //.filter(quote => quote.section === section);
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
