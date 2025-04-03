"use client"

import { ArrowRight } from "lucide-react"
import Button from "../Button"
import { handleColorHoverEffect, getRandomColor } from "../../lib/colorUtils"
import { services } from "../../lib/data/services"

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
    "Evaluate your organization's current capabilities and processes to define the best starting points and pathways for successful AI adoption.",
    link: "/services/ai-readiness-assessment",
  },
  {
    title: "Roadmap",
    description:
      "Develop a customized strategic implementation plan that prioritizes for maximum impact, feasibility, and organizational readiness.",
    link: "/services/ai-implementation-roadmap",
  },
  {
    title: "Selection",
    description:
    "Evaluate AI vendors against business-driven criteria to ensure strategic alignment and maximum value.",
    link: "/services/ai-vendor-selection",
  },
  {
    title: "Pilot",
    description:
      "Test-drive AI using controlled, measurable pilot projects to minimize risk, validate practical AI value, and establish a strong foundation for broader adoption.",
    link: "/services/phased-ai-pilot-execution",
  },
  {
    title: "Impact",
    description:
      "Validate and maximize the value of your AI initiatives through comprehensive outcome assessment, ROI confirmation, and targeted knowledge transfer to ensure lasting success.",
    link: "/services/ai-impact-assessment",
  },
]

export default function ServicesPreview() {
  // We no longer need to pre-generate random colors since our hover effect logic handles everything
  return (
    <section className="border-b border-black">
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-5xl font-bold mb-12">SERVICES</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICE_ITEMS.map((service, index) => {
            // Find matching service from services data to get icon
            const serviceData = services.find(s => s.link === service.link);

            return (
              <div
                key={index}
                className="border border-black p-6 cursor-pointer group relative flex flex-col h-full service-card"
                id={`service-card-${index}`}
                onClick={() => (window.location.href = service.link)}
                onMouseEnter={handleColorHoverEffect.onMouseEnter}
                onMouseLeave={handleColorHoverEffect.onMouseLeave}
              >
                {/* Header with Title and Icon */}
                <div className="flex justify-between items-start mb-4">
                  {/* One-word title at top left */}
                  <h3 className="text-xl font-bold">{service.title}</h3>

                  {/* Service Icon at top right */}
                  {serviceData && (
                    <div className="ml-2">
                      {serviceData.icon()}
                    </div>
                  )}
                </div>

                {/* TLDR from services menu */}
                {serviceData && (
                  <p className="text-md text-white font-bold py-2 mb-4 border-l-2 border-black pl-2 bg-gray-600">
                    {serviceData.description}
                  </p>
                )}

                {/* Original detailed description */}
                <p className="mb-6">{service.description}</p>

                <div className="mt-auto inline-flex items-center font-bold group-hover:underline">
                  LEARN MORE <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            );
          })}
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
