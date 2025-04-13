// Define the case study type
export interface CaseStudy {
  id: string;
  sort: number;
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
  logo?: {
    src: string;
    alt: string;
  };
  additionalImages?: {
    src: string;
    alt: string;
    description: string; // Caption to display above the image
    type: 'image' | 'video' | 'gif';
    sort?: number; // Optional sort order for display
  }[];
}

// Define the list view version (which is slightly different)
export interface CaseStudyPreview {
  id: string;
  sort: number;
  title: string;
  subtitle: string;
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
  logo?: {
    src: string;
    alt: string;
  };
}

// Define all case studies
export const caseStudies: Record<string, CaseStudy> = {
  "knowspace": {
    id: "knowspace",
    sort: 3,
    title: "Knowspace",
    subtitle: "AI-Powered Senior Care Monitoring System",
    description:
      "Knowspace monitors and protects seniors with cognitive impairments.\n\nTheir technology, deployed at Assisted Living Facilities (ALFs), combines portable Bluetooth beacons, wall-plug gateways, and AI analytics to provide real-time location tracking and privacy-preserving behavioral insights without the use of invasive cameras.\n\nThe system alerts staff to potential falls or emergencies with 3 second latency from event to alert, and provides detailed reports for facility management.",
    challenge:
      "Knowspace needed to navigate the complex technical landscape of developing their real-time monitoring platform that processes millions of data points from IoT devices.\n\nThey faced challenges in selecting appropriate technologies for their data pipeline, including MQTT brokers, stream processing frameworks, and indoor positioning algorithms.\n\nAdditionally, they needed guidance on hardware options, system architecture optimization, and implementing practical machine learning approaches for behavior recognition and fall detection.",
    solution:
      "futureproof provided structured guidance on selecting appropriate technologies for Knowspace's data pipeline, including MQTT brokers, stream processing frameworks, and indoor positioning algorithms.\n\nWe helped them evaluate hardware options, optimize their system architecture, and implement practical machine learning approaches for behavior recognition and fall detection.\n\nOur advisory services included technical architecture reviews, vendor selection for IoT components, and implementation planning for their AI analytics pipeline.\n\nDuring a 60-day pilot in late 2024, seniors were able to choose one or more wearable devices from a broad catalog. This included wristwatches and pendants among other stylish, lightweight options.\n\nEach device was automatically provisioned in seconds at the front desk by ALF staff using a custom, secure mobile app. 30 million data points were collected at a rate of 1M per device per week with an operating cost of under $300/mo and capacity for 1000 devices.",
    results: [
      "1M data points per device per week",
      "3-second latency from event to alert",
      "Data pipeline costs reduced by 90%",
    ],
    testimonial: {
      quote:
        "futureproof took a complicated technical problem and crafted a layperson's solution. They are the only technical team we've worked with that was able to truly listen and understand the nature of our business, along with the technical ability to develop an off the shelf solution.  And it didn't require a steep learning curve for my team or our customers to implement.",
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
    },
    logo: {
      src: "/projects/knowspace/logo.png",
      alt: "Knowspace logo"
    },
    additionalImages: [
      {
        src: "/projects/knowspace/landing.png",
        alt: "Knowspace landing page",
        description: "Main landing page and device onboarding instructions",
        type: "image",
        sort: 1
      },
      {
        src: "/projects/knowspace/devices.png",
        alt: "Knowspace devices interface",
        description: "Selection of wearable devices available to seniors in the Knowspace system",
        type: "image",
        sort: 2
      },
      {
        src: "/projects/knowspace/notifications.png",
        alt: "Knowspace notifications interface",
        description: "Alert system providing staff with real-time notifications of potential emergencies",
        type: "image",
        sort: 3
      },
      {
        src: "/projects/knowspace/performance.png",
        alt: "Knowspace performance metrics",
        description: "System performance dashboard showing data collection rates and latency metrics",
        type: "image",
        sort: 4
      },
      {
        src: "/projects/knowspace/maps.png",
        alt: "Knowspace facility maps",
        description: "Interactive facility map showing real-time resident locations and movement patterns",
        type: "image",
        sort: 5
      },
      // {
      //   src: "/projects/knowspace/mobile.png",
      //   alt: "Knowspace mobile interface",
      //   description: "Mobile app interface for staff to receive alerts and monitor residents on the go",
      //   type: "image",
      //   sort: 6
      // },
      {
        src: "/projects/knowspace/alert-flow.png",
        alt: "Knowspace alert flow diagram",
        description: "Visualization of the alert processing pipeline from sensor data to staff notification",
        type: "image",
        sort: 6
      },
      {
        src: "/projects/knowspace/architecture-alt.png",
        alt: "Knowspace simplified architecture",
        description: "Simplified architecture visualization showing key components and data flow",
        type: "image",
        sort: 7
      },
      {
        src: "/projects/knowspace/architecture.png",
        alt: "Knowspace system architecture",
        description: "High-level architecture diagram showing the complete system infrastructure",
        type: "image",
        sort: 8
      },
      {
        src: "/projects/knowspace/influxdb.png",
        alt: "Knowspace InfluxDB dashboard",
        description: "Time-series database visualization of resident movement data",
        type: "image",
        sort: 9
      },
      {
        src: "/projects/knowspace/influxdb-correlation.png",
        alt: "Knowspace data correlation analysis",
        description: "Correlation analysis of multiple data streams for pattern identification",
        type: "image",
        sort: 10
      },
      {
        src: "/projects/knowspace/influxdb-zoom.png",
        alt: "Knowspace detailed data view",
        description: "Detailed view of sensor data patterns used for behavior analysis",
        type: "image",
        sort: 11
      },
      {
        src: "/projects/knowspace/rssi.png",
        alt: "Knowspace RSSI signal analysis",
        description: "Signal strength analysis used for precise indoor positioning of residents",
        type: "image",
        sort: 12
      },
      {
        src: "/projects/knowspace/quix.png",
        alt: "Knowspace Quix integration",
        description: "Stream processing implementation for real-time data analysis",
        type: "image",
        sort: 13
      }
    ]
  },
  "peak-sensor-systems": {
    id: "peak-sensor-systems",
    sort: 1,
    title: "PEAK Sensor Systems",
    subtitle: "Design-Build Structural Monitoring Supplier",
    description:
      "PEAK Sensor Systems provides structural monitoring solutions for infrastructure and industrial applications.\n\nThey needed a cost-effective way to monitor market trends and generate content for their marketing efforts with minimal resources.",
    challenge:
      "PEAK Sensor Systems needed to establish a marketing function that could effectively monitor competitive intelligence and generate content, but with limited resources and a need for quick implementation.\n\nThey required a solution that could automatically gather industry news, identify market opportunities, and assist in content creation without requiring significant human oversight.",
    solution:
      "futureproof designed and built a new marketing function including a competitive marketing intelligence monitor and a content production pipeline.\n\nThe solution was implemented using low-code and no-code platforms to quickly develop a usable application with minimal development effort.\n\nWe created an automated system that scans industry publications, analyzes content, and drafts preliminary marketing materials for human review.",
    results: [
      "Daily situational awareness report saved hours each week",
      "Quickly identified market opportunities and competitive insights",
      "Cost-effective solution with low operating costs ($0.50 per day)",
      "Implementation completed within 1 week of project kickoff"
    ],
    testimonial: {
      quote:
        "futureproof delivered a solid marketing intelligence system in record time.\n\nTheir approach used lightweight, flexible tools that allowed us to get up and running quickly.",
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
      src: "/oneline-hands-reaching-lightbulb.png",
      alt: "Minimalist line drawing of a dashboard - representing PEAK's marketing intelligence system",
      detailPosition: {
        sm: "center -70px",
        md: "center -70px",
        default: "center -70px"  // Fallback
      },
      listPosition: "center center"
    },
    logo: {
      src: "/projects/peak/logo.png",
      alt: "PEAK Sensor Systems logo"
    },
    additionalImages: [
      {
        src: "/projects/peak/peak-loading-news.gif",
        alt: "PEAK news loading animation",
        description: "Animated loading screen while the system pulls in the latest industry news",
        type: "gif",
        sort: 1
      },
      {
        src: "/projects/peak/inbox.png",
        alt: "PEAK intelligence inbox",
        description: "Inbox view showing filtered news and market intelligence items",
        type: "image",
        sort: 2
      },
      {
        src: "/projects/peak/peak-save.png",
        alt: "PEAK save interface",
        description: "System for saving and organizing important market insights",
        type: "image",
        sort: 5
      },
      {
        src: "/projects/peak/peak-filter.png",
        alt: "PEAK filtering interface",
        description: "Content filtering system allowing users to focus on specific industry sectors",
        type: "image",
        sort: 4
      },
      {
        src: "/projects/peak/peak-search.png",
        alt: "PEAK search functionality",
        description: "Advanced search interface for finding specific market intelligence",
        type: "image",
        sort: 3
      },
      {
        src: "/projects/peak/openrouter-log.png",
        alt: "PEAK OpenRouter logs",
        description: "Behind-the-scenes view of the AI processing pipeline",
        type: "image",
        sort: 7
      },
      {
        src: "/projects/peak/openrouter-activity.png",
        alt: "PEAK OpenRouter activity",
        description: "Activity dashboard showing AI model usage and costs",
        type: "image",
        sort: 6
      }
    ]
  },
  "johnreid": {
    id: "johnreid",
    sort: 2,
    title: "John Reid Companies",
    subtitle: "Real Estate Development & Construction Management",
    description: "John Reid Companies provides construction management consulting, representing owners and investors in real estate projects. \n\nThey needed rapid, accurate access to market intelligence and competitive data, specifically to identify viable real estate development opportunities across the United States.",
    challenge: "John Reid Companies had significantly expanded their operations—from a handful of real estate assessments annually to several hundred per year. \n\nTheir existing manual process involved labor-intensive, error-prone searches for property data:\n\n- Manually researching addresses one-by-one using consumer-grade tools.\n- Individually querying disparate county registries and databases.\n- Navigating specialized proprietary GIS data.\n\nThis approach was inefficient, taking three to five minutes per property and limiting scalability. \n\nThey needed a solution that could rapidly and accurately aggregate critical GIS and real estate data.",
    solution: "Futureproof developed a tailored mapping tool leveraging rapid application development methods. Key elements included:\n\n- Superbase Backend: Hosted GIS and property data tables, providing rapid querying based on geographic map interactions.\n- GIS Mapping with Mapbox: Interactive map visualization enabling real-time navigation, property searches, and data filtering.\n- Automated Data Enrichment: Leveraged Smarty APIs for automatic address verification and retrieval of enriched property data (plot size, zoning details, county information).\n- UMC Data Integration: Scraped 45,000 properties from umdata.org, automatically distinguishing closed and operational properties to streamline property selection.\n- HUD Data Layers: Integrated Qualified Census Tracts (QCT), Distressed Designation Areas (DDA), and Area Median Income (AMI) data layers to pinpoint optimal investment regions.\n- Airtable Dashboard: Integrated real-time data export to Airtable, offering sophisticated filtering, visualizations, and reporting capabilities for strategic decision-making.\n\nImplementation took just three days from kickoff to deployment, facilitated by lightweight yet targeted collaboration between futureproof and John Reid Companies.",
    results: [
      "10x market reach expansion",
      "Significant efficiency gains",
      "Enhanced strategic capability"
    ],
    testimonial: {
      quote: "Futureproof built something that changed our business almost overnight. One day we were manually researching properties, and the next, we had everything we needed in seconds. It was a transformational improvement in our workflow.",
      author: "J.R. Glennie, CEO, John Reid Companies",
    },
    services: ["Opportunity Assessment", "Pilot Execution", "Vendor Selection", "Impact Measurement"],
    technologies: ["Mapbox", "Public GIS Data", "Real Estate API (Smarty)", "React", "Node.js", "Airtable", "Supabase"],
    image: {
      src: "/oneline-bookstack.png",
      alt: "John Reid Companies project overview",
      detailPosition: {
        default: "center center"
      },
      listPosition: "center center"
    },
    logo: {
      src: "/projects/johnreid/logo.png",
      alt: "John Reid & Sons Ltd logo"
    },
    additionalImages: [
      {
        src: "/projects/johnreid/map-with-dashboard.png",
        alt: "Map view with dashboard",
        description: "Map view with dashboard",
        type: "image",
        sort: 1
      },
      {
        src: "/projects/johnreid/map-with-list.png",
        alt: "Map view with project list",
        description: "Map view with project list",
        type: "image",
        sort: 2
      },
      {
        src: "/projects/johnreid/smarty-api-stats.png",
        alt: "Smarty API stats",
        description: "US address verification and property data via Smarty API",
        type: "image",
        sort: 3
      }
    ]
  }
};

// Convert to the preview format for the list page
export const caseStudyPreviews: CaseStudyPreview[] = Object.values(caseStudies).map(study => ({
  id: study.id,
  sort: study.sort,
  title: study.title,
  subtitle: study.subtitle,
  description: [
    study.solution.substring(0, 250) + "...",
    study.challenge.substring(0, 250) + "..."
  ],
  results: study.results,
  services: study.services,
  link: `/case-studies/${study.id}`,
  image: study.image,
  logo: study.logo
}));

// Function to get specific case study by ID
export function getCaseStudy(id: string): CaseStudy | undefined {
  return caseStudies[id];
}

// Function to get all case study previews
export function getAllCaseStudyPreviews(): CaseStudyPreview[] {
  // Return a sorted copy of the case study previews array
  return [...caseStudyPreviews].sort((a, b) => a.sort - b.sort);
}
