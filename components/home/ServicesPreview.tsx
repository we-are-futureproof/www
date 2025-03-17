"use client"

import { ArrowRight } from "lucide-react"
import Button from "../Button"
import { handleColorHoverEffect, getRandomColor } from "../../lib/colorUtils"

interface ServiceItem {
  title: string
  description: string
  link: string
}

const SERVICE_ITEMS: ServiceItem[] = [
  {
    title: "Opportunity",
    description:
      "Pinpoint where automation and intelligence can deliver immediate ROI for specific operational workflows and business challenges.",
    link: "/services/ai-opportunity-assessment",
  },
  {
    title: "Readiness",
    description:
      "Evaluate your company's current capabilities, infrastructure, and business processes to determine optimal starting points for AI adoption.",
    link: "/services/ai-readiness-assessment",
  },
  {
    title: "Roadmap",
    description:
      "Develop comprehensive, customized implementation plans that sequence AI initiatives based on business impact and technical feasibility.",
    link: "/services/ai-implementation-roadmap",
  },
  {
    title: "Evaluation",
    description:
      "Evaluate AI vendors against customized criteria that reflect actual business requirements rather than trending technologies.",
    link: "/services/ai-vendor-evaluation",
  },
  {
    title: "Pilot",
    description:
      "Test AI solutions through controlled, measurable pilot projects that minimize risk while demonstrating practical value.",
    link: "/services/phased-ai-pilot-execution",
  },
  {
    title: "Education",
    description:
      "Bridge the knowledge gap between technical AI concepts and practical business applications through personalized educational frameworks.",
    link: "/services/ai-education-simplification",
  },
]

export default function ServicesPreview() {
  // We no longer need to pre-generate random colors since our hover effect logic handles everything
  return (
    <section className="border-b border-black">
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-5xl font-bold mb-12">SERVICES</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICE_ITEMS.map((service, index) => (
            <div
              key={index}
              className="border border-black p-6 cursor-pointer group relative flex flex-col h-full service-card"
              id={`service-card-${index}`}
              onClick={() => (window.location.href = service.link)}
              onMouseEnter={handleColorHoverEffect.onMouseEnter}
              onMouseLeave={handleColorHoverEffect.onMouseLeave}
            >
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="mb-6">{service.description}</p>
              <div className="mt-auto inline-flex items-center font-bold group-hover:underline">
                LEARN MORE <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button
            href="/services"
            variant="secondary"
            size="large"
          >
            VIEW ALL SERVICES <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
