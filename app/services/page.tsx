"use client"

import { ArrowRight } from "lucide-react"
import { useState } from "react"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import CTASection from "../../components/CTASection"
import Button from "../../components/Button"
import { handleColorHoverEffect } from "../../lib/colorUtils"

export default function ServicesPage() {

  const services = [
    {
      id: "ai-opportunity-assessment",
      title: "Opportunity",
      description:
        "Systematic analysis that cuts through AI hype to pinpoint where automation and intelligence can deliver immediate ROI for specific operational workflows and business challenges.",
      benefits: [
        "Clear visibility into the highest-impact, lowest-risk AI implementation opportunities.",
        "Confidence in technology investment decisions backed by evidence-based analysis.",
        "Elimination of wasted resources on inappropriate AI applications.",
      ],
      link: "/services/ai-opportunity-assessment",
    },
    {
      id: "ai-readiness-assessment",
      title: "Readiness",
      description:
        "Comprehensive diagnostic process that evaluates a company's current capabilities, infrastructure, and business processes to determine optimal starting points for AI adoption.",
      benefits: [
        "Clearly prioritized AI opportunities mapped to specific business objectives with realistic implementation timelines.",
        "Accurate understanding of technical and organizational readiness gaps with specific remediation plans.",
        "Calibrated expectations across leadership teams with consensus on resource allocation and success metrics.",
      ],
      link: "/services/ai-readiness-assessment",
    },
    {
      id: "ai-implementation-roadmap",
      title: "Roadmap",
      description:
        "Development of comprehensive, customized implementation plans that sequence AI initiatives based on business impact, technical feasibility, and organizational readiness factors.",
      benefits: [
        "Accelerated time-to-value through strategically sequenced implementation priorities.",
        "Reduced implementation failures by identifying and addressing potential technical integration challenges.",
        "Enhanced budget efficiency by establishing clear decision criteria for technology investments.",
      ],
      link: "/services/ai-implementation-roadmap",
    },
    {
      id: "ai-vendor-evaluation",
      title: "Evaluation",
      description:
        "Systematic approach for evaluating AI vendors against customized criteria that reflect actual business requirements rather than trending technologies.",
      benefits: [
        "Confident investment decisions backed by transparent evaluation criteria.",
        "Accelerated implementation timelines through early identification of integration requirements.",
        "Stronger negotiating position with vendors through detailed understanding of feature relevance.",
      ],
      link: "/services/ai-vendor-evaluation",
    },
    {
      id: "phased-ai-pilot-execution",
      title: "Pilot",
      description:
        "A structured approach to testing AI solutions through controlled, measurable pilot projects that minimize risk while demonstrating practical value in specific business contexts.",
      benefits: [
        "Evidence-based confidence in AI investment decisions backed by quantifiable results.",
        "Refined implementation strategies informed by real-world testing.",
        "Organizational momentum and stakeholder buy-in generated through visible wins.",
      ],
      link: "/services/phased-ai-pilot-execution",
    },
    {
      id: "ai-education-simplification",
      title: "Education",
      description:
        "Bridging the knowledge gap between technical AI concepts and practical business applications through personalized educational frameworks.",
      benefits: [
        "Confident leadership discussions about AI strategy grounded in practical understanding.",
        "Accelerated evaluation processes where decision-makers can quickly distinguish between relevant AI capabilities and marketing hype.",
        "Seamless translation between business challenges and technical AI capabilities.",
      ],
      link: "/services/ai-education-simplification",
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
              Our Services
              <br />
              <span className="font-sans font-bold tracking-wide text-gray-800">for AI Transformation</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-10 md:mb-14 max-w-2xl">
              We offer a comprehensive suite of <span className='bg-green-200'>AI advisory services</span> designed specifically for small and medium
              businesses. Each service is tailored to address specific challenges in the AI adoption journey.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section>
        <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="border border-black p-6 flex flex-col h-full cursor-pointer group relative"
                onClick={() => window.location.href = service.link}
                onMouseEnter={handleColorHoverEffect.onMouseEnter}
                onMouseLeave={handleColorHoverEffect.onMouseLeave}
              >
                {/* Row 1: Header with title and learn more link */}
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-xl font-bold">{service.title}</h2>
                  <div className="inline-flex items-center font-bold group-hover:underline text-sm">
                    LEARN MORE <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </div>
                
                {/* Row 2: Description - fixed height */}
                <div className="min-h-[160px]">
                  <p>{service.description}</p>
                </div>
                
                {/* Row 3: Benefits - grows to fill remaining space */}
                <div className="flex-grow">
                  <h3 className="text-sm font-bold mb-4">BENEFITS</h3>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="text-sm flex items-start">
                        <span className="font-bold mr-2">{i + 1}.</span>
                        <p>{benefit}</p>
                      </li>
                    ))}
                  </ul>
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

