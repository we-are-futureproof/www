"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import Footer from "../../components/Footer"
import Button from "../../components/Button"
import Header from "../../components/Header"
import CTASection from "../../components/CTASection"

export default function CaseStudiesPage() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)

  const caseStudies = [
    {
      id: "knowspace",
      title: "Knowspace - Assisted Living Facility Awareness System",
      description: [
        "Futureproof designed, developed and piloted an advanced awareness system for assisted living facilities (ALF) that monitors and protects seniors with cognitive impairments, alerting family and caregivers within 3 seconds of an 'event of interest'.",
        "During a 60-day pilot in late 2024, seniors were able to choose one or more wearable devices from a broad catalog including wristwatches and pendants among other stylish, lightweight options. Each device was automatically provisioned in seconds at the front desk by ALF staff using a custom, secure mobile app.",
        "30 million data points were collected at a rate of 1M per device per week with capacity for 1000 devices and an operating cost of under $500/mo. Several interior and exterior receivers were enough to track resident movement throughout the facility 24/7."
      ],
      results: [
        "1M data points per device per week",
        "3-second latency from event to alert",
        "Deployment complexity reduced by 50%",
        "Data pipeline costs reduced by 90%",
      ],
      services: ["Opportunity Assessment", "Implementation Roadmap", "Vendor Evaluation", "Pilot Execution", "Education and Handoff"],
      link: "/case-studies/knowspace",
    },
    {
      id: "case-study-2",
      title: "Manufacturing Distributor.",
      description:
        "Helping a mid-sized manufacturing company implement AI-powered predictive maintenance to reduce equipment downtime and maintenance costs.",
      results: [
        "Reduced unplanned downtime by 37%",
        "Decreased maintenance costs by 28%",
        "Improved equipment lifespan by 15%",
      ],
      services: ["AI Readiness Assessment", "Phased AI Pilot Execution"],
      link: "/case-studies/manufacturing-co",
    },
    {
      id: "case-study-3",
      title: "Retail Chain",
      description:
        "Guiding a regional retail chain through the implementation of AI-powered inventory management and demand forecasting solutions.",
      results: [
        "Reduced inventory holding costs by 22%",
        "Decreased stockouts by 35%",
        "Improved inventory turnover by 18%",
      ],
      services: ["AI Opportunity Assessment", "AI Implementation Roadmap"],
      link: "/case-studies/retail-chain",
    },
  ]

  return (
    <div className="min-h-screen bg-white text-black font-mono">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="border-b border-black">
        <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
          <div className="max-w-4xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-thin mb-4 sm:mb-6 md:mb-8 leading-tight">
              Case Studies
              <br />
              <span className="font-sans font-bold tracking-wide text-gray-800">with Measurable Results</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-10 md:mb-14 max-w-2xl">
              Real-world examples of how we've helped businesses navigate the <span className='bg-green-200'>complex AI landscape</span> and implement
              practical solutions that deliver measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies List */}
      <section>
        <div className="container mx-auto px-4 py-12">
          <div className="space-y-12">
            {caseStudies.map((caseStudy, index) => (
              <div key={index} className="border border-black">
                <div className="grid md:grid-cols-2">
                  <div className="p-8 md:p-12 flex flex-col justify-between">
                    <div>
                      <h2 className="text-3xl font-bold mb-4">{caseStudy.title}</h2>
                      {Array.isArray(caseStudy.description) ? (
                        caseStudy.description.map((paragraph, i) => (
                          <p key={i} className="text-sm md:text-lg mb-6">{paragraph}</p>
                        ))
                      ) : (
                        <p className="text-sm md:text-lg mb-6">{caseStudy.description}</p>
                      )}

                      <h3 className="text-xl font-bold mb-3">RESULTS</h3>
                      <ul className="space-y-2 mb-6">
                        {caseStudy.results.map((result, i) => (
                          <li key={i}>• {result}</li>
                        ))}
                      </ul>

                      <h3 className="text-xl font-bold mb-3">SERVICES USED</h3>
                      <ul className="space-y-2 mb-6">
                        {caseStudy.services.map((service, i) => (
                          <li key={i}>• {service}</li>
                        ))}
                      </ul>
                    </div>

                    <Button
                      href={caseStudy.link}
                      variant="secondary"
                    >
                      READ CASE STUDY <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  <div className="border-l border-black h-64 md:h-auto">
                    {caseStudy.id === "knowspace" ? (
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-n8aZl0hSpZRp7YVHKrJUMOxz4F79oY.png"
                        alt="Minimalist line drawing of a floor plan - representing Knowspace's assisted living facility monitoring system"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="bg-gray-200 h-full w-full"></div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </div>
  )
}

