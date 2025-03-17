"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import Footer from "../../components/Footer"
import Button from "../../components/Button"
import Header from "../../components/Header"

export default function CaseStudiesPage() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)

  const caseStudies = [
    {
      id: "knowspace",
      title: "Knowspace",
      description:
        "How we helped Knowspace develop an advanced awareness system for assisted living facilities that monitors and protects seniors with cognitive impairments.",
      results: [
        "Reduced EMQX deployment complexity by 50%",
        "Cut infrastructure costs by 90%",
        "Maintained critical 10-second system response time",
      ],
      services: ["AI Implementation Roadmap", "AI Vendor Evaluation"],
      link: "/case-studies/knowspace",
    },
    {
      id: "case-study-2",
      title: "Manufacturing Co.",
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
      <section className="border-b border-black bg-gray-100">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">CASE STUDIES</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl">
              Real-world examples of how we've helped businesses navigate the complex AI landscape and implement
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
                      <p className="text-lg mb-6">{caseStudy.description}</p>

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
      <section className="border-b border-black">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">READY TO MAKE SOME MOVES?</h2>
            <p className="text-xl mb-12">
              Schedule a free 20-minute consultation to discuss your specific business challenges and how our AI
              advisory services can help you navigate the complex AI landscape.
            </p>
            <Button
              href="https://cal.com/amgando/free-strategy-call"
              variant="primary"
              size="large"
            >
              SCHEDULE A CONSULTATION <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

