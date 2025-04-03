import React from 'react';
import Image from 'next/image';

// Service interface
export interface Service {
  id: string;
  title: string;
  description: string;
  stage: number;
  icon: () => React.ReactElement;
  link: string;
}

// Services data for the navigation menu only
export const services: Service[] = [
  // Left column - stages 1-3
  {
    id: "ai-opportunity-assessment",
    title: "Opportunity",
    description: "Identify Quick-Win AI Opportunities",
    stage: 1,
    icon: () => (
      <Image 
        src="/svg/services/opportunity.svg" 
        alt="Opportunity icon" 
        width={60} 
        height={60} 
      />
    ),
    link: "/services/ai-opportunity-assessment",
  },
  {
    id: "ai-readiness-assessment",
    title: "Readiness",
    description: "Assess Your Business's AI Readiness",
    stage: 2,
    icon: () => (
      <Image 
        src="/svg/services/readiness.svg" 
        alt="Readiness icon" 
        width={60} 
        height={60} 
      />
    ),
    link: "/services/ai-readiness-assessment",
  },
  {
    id: "ai-implementation-roadmap",
    title: "Roadmap",
    description: "Create a Clear AI Implementation Plan",
    stage: 3,
    icon: () => (
      <Image 
        src="/svg/services/roadmap.svg" 
        alt="Roadmap icon" 
        width={60} 
        height={60} 
      />
    ),
    link: "/services/ai-implementation-roadmap",
  },
  // Right column - stages 4-6
  {
    id: "ai-vendor-selection",
    title: "Selection",
    description: "Choose the Best AI Partners for You",
    stage: 4,
    icon: () => (
      <Image 
        src="/svg/services/selection.svg" 
        alt="Selection icon" 
        width={60} 
        height={60} 
      />
    ),
    link: "/services/ai-vendor-selection",
  },
  {
    id: "phased-ai-pilot-execution",
    title: "Pilot",
    description: "Pilot AI Projects with Measurable Results",
    stage: 5,
    icon: () => (
      <Image 
        src="/svg/services/pilot.svg" 
        alt="Pilot icon" 
        width={60} 
        height={60} 
      />
    ),
    link: "/services/phased-ai-pilot-execution",
  },
  {
    id: "ai-impact-assessment",
    title: "Impact",
    description: "Maximize the Value of Your Investment",
    stage: 6,
    icon: () => (
      <Image 
        src="/svg/services/impact.svg" 
        alt="Impact icon" 
        width={60} 
        height={60} 
      />
    ),
    link: "/services/ai-impact-assessment",
  },
];
