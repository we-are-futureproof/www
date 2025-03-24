// Define the case study type
export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  testimonial?: {
    quote: string;
    author: string;
  };
  services: string[];
  technologies: string[];
  image: {
    src: string;
    alt: string;
    listPosition?: string;  // For object-position CSS in list view
    detailPosition?: {
      sm?: string;  // Small screens
      md?: string;  // Medium screens and up
      default: string; // Fallback position
    };
  };
}

// Define the list view version (which is slightly different)
export interface CaseStudyPreview {
  id: string;
  title: string;
  description: string[];
  results: string[];
  services: string[];
  link: string;
  image: {
    src: string;
    alt: string;
    listPosition?: string;  // For object-position CSS in list view
    detailPosition?: {
      sm?: string;  // Small screens
      md?: string;  // Medium screens and up
      default: string; // Fallback position
    };
  };
}

// Define all case studies 
export const caseStudies: Record<string, CaseStudy> = {
  "knowspace": {
    id: "knowspace",
    title: "Knowspace",
    subtitle: "AI-Powered Senior Care Monitoring System",
    description:
      "Knowspace developed an advanced awareness system for assisted living facilities that helps monitor and protect seniors with cognitive impairments. Their technology combines Bluetooth beacons, gateways, and AI analytics to provide real-time location tracking and behavioral insights without invasive cameras.",
    challenge:
      "Knowspace needed to navigate the complex technical landscape of developing their real-time monitoring platform that processes millions of data points from IoT devices. They faced challenges in selecting appropriate technologies for their data pipeline, including MQTT brokers, stream processing frameworks, and indoor positioning algorithms. Additionally, they needed guidance on hardware options, system architecture optimization, and implementing practical machine learning approaches for behavior recognition and fall detection.",
    solution:
      "futureproof provided structured guidance on selecting appropriate technologies for Knowspace's data pipeline, including MQTT brokers, stream processing frameworks, and indoor positioning algorithms. We helped them evaluate hardware options, optimize their system architecture, and implement practical machine learning approaches for behavior recognition and fall detection. Our advisory services included technical architecture reviews, vendor selection for IoT components, and implementation planning for their AI analytics pipeline.",
    results: [
      "Accelerated development timeline by avoiding costly experimentation with inappropriate technologies",
      "Reduced EMQX deployment complexity by 50% and costs by 90%",
      "Gained confidence in technical decisions through expert validation of their approach to indoor positioning",
      "Developed a scalable architecture capable of handling anticipated growth while maintaining critical 10-second system response time KPI for emergency events",
    ],
    testimonial: {
      quote:
        "futureproof took a complicated technical problem and crafted a layperson's solution.  They are the only technical team we've worked with that was able to truly listen and understand the nature of our business, along with the technical ability to develop an off the shelf solution.  And it didn't require a steep learning curve for my team or our customers to implement.",
      author: "Jack Burden, Founder and CEO, Knowspace",
    },
    services: ["Opportunity Assessment", "Vendor Selection", "Implementation Roadmap", "Pilot Execution"],
    technologies: [
      "BLE (Bluetooth Low Energy)",
      "MQTT (Message Queuing Telemetry Transport)",
      "Kafka (Stream Processing)",
      "Data Cleaning and Device Positioning"
    ],
    image: {
      src: "/oneline-oldhands.png",
      alt: "Minimalist line drawing of a floor plan - representing Knowspace's assisted living facility monitoring system",
      detailPosition: {
        default: "center -100px" // Works well across all sizes
      },
      listPosition: "center center"
    }
  },
  "peak-sensor-systems": {
    id: "peak-sensor-systems",
    title: "PEAK Sensor Systems",
    subtitle: "Design-Build Structural Monitoring Supplier",
    description:
      "PEAK Sensor Systems provides structural monitoring solutions for infrastructure and industrial applications. They needed a cost-effective way to monitor market trends and generate content for their marketing efforts.",
    challenge:
      "PEAK Sensor Systems needed to establish a marketing function that could effectively monitor competitive intelligence and generate content, but with limited resources and a need for quick implementation. They required a solution that could automatically gather industry news, identify market opportunities, and assist in content creation.",
    solution:
      "futureproof designed and built a new marketing function including a competitive marketing intelligence monitor and a content production pipeline. The solution was implemented using low-code and no-code platforms like Airbnb and n8n to quickly develop a usable application. We created an automated system that scans industry publications, analyzes content, and drafts preliminary marketing materials for human review.",
    results: [
      "Thousands of articles per week are scanned for new and competitive opportunities automatically for pennies per day in operating costs",
      "Daily situational awareness report provides insight into competitive market activity",
      "Fully customizable system costs a fraction of the price of similar applications",
      "Implementation completed within 3 weeks of project kickoff"
    ],
    testimonial: {
      quote:
        "futureproof delivered a solid marketing intelligence system in record time. Their approach used lightweight, flexible tools that allowed us to get up and running quickly.",
      author: "Abe Uccello, Owner / Operator, PEAK Sensor Systems",
    },
    services: ["Opportunity Assessment", "Implementation Roadmap", "Pilot Execution"],
    technologies: [
      "Low-code/No-code Platform",
      "AI Model Orchestration",
      "Content Analysis Pipeline",
      "Automated Reporting",
    ],
    image: {
      src: "/online-hands-reaching-lightbulb.png",
      alt: "Minimalist line drawing of a dashboard - representing PEAK's marketing intelligence system",
      detailPosition: {
        sm: "center -70px",
        md: "center -70px",
        default: "center -70px"  // Fallback
      },
      listPosition: "center center"
    }
  }
};

// Convert to the preview format for the list page
export const caseStudyPreviews: CaseStudyPreview[] = Object.values(caseStudies).map(study => ({
  id: study.id,
  title: study.title + " - " + study.subtitle,
  description: [
    study.solution.substring(0, 250) + "...",
    study.challenge.substring(0, 250) + "..."
  ],
  results: study.results,
  services: study.services,
  link: `/case-studies/${study.id}`,
  image: study.image
}));

// Function to get specific case study by ID
export function getCaseStudy(id: string): CaseStudy | undefined {
  return caseStudies[id];
}

// Function to get all case study previews
export function getAllCaseStudyPreviews(): CaseStudyPreview[] {
  return caseStudyPreviews;
}
