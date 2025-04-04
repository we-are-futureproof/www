"use client"

import { ArrowRight } from "lucide-react"
import { useState } from "react"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import CTASection from "../../components/CTASection"
import Button from "../../components/Button"
import { handleColorHoverEffect } from "../../lib/colorUtils"
import { services as serviceData } from "../../lib/data/services"

export default function ServicesPage() {

  // Combine the service data from the central services file with additional details for this page
  const services = serviceData.map(serviceItem => {
    // Find matching detailed service from the original services array
    const detailedService = [
      {
        id: "ai-opportunity-assessment",
        benefits: [
          "Clear visibility into actionable, high-impact AI implementation opportunities.",
          "Confidence in technology investment decisions backed by evidence-based analysis.",
          "Prevention of wasted resources through early identification of realistic, relevant AI use-cases tailored to your operations.",
        ],
        fullDescription: "Structured analysis that clearly identifies high-value AI opportunities where automation and intelligence can deliver immediate ROI for specific operational workflows and business challenges."
      },
      {
        id: "ai-readiness-assessment",
        benefits: [
          "Clearly prioritized AI opportunities mapped to specific business objectives with realistic implementation timelines.",
          "Detailed understanding of readiness gaps with actionable recommendations, ensuring successful AI implementations.",
          "Aligned leadership expectations and clear consensus on resource allocation and success metrics.",
        ],
        fullDescription: "Detailed evaluation of your organization's current capabilities and processes to clearly define optimal starting points and realistic pathways for successful AI adoption."
      },
      {
        id: "ai-implementation-roadmap",
        benefits: [
          "Accelerated ROI through strategic sequencing of AI initiatives for rapid value creation.",
          "Reduced implementation failures by identifying and addressing potential technical challenges.",
          "Enhanced budget efficiency by establishing clear decision criteria for technology investments.",
        ],
        fullDescription: "Development of comprehensive, customized implementation plans that sequence AI initiatives based on business impact, technical feasibility, and organizational readiness factors."
      },
      {
        id: "ai-vendor-selection",
        benefits: [
          "Confident vendor selection decisions through transparent, business-aligned evaluation criteria.",
          "Accelerated implementation through early identification of integration and operational requirements.",
          "Stronger negotiating position with vendors through detailed understanding of feature relevance.",
        ],
        fullDescription: "Structured evaluation of AI vendors against business-driven criteria to ensure strategic alignment and maximum value."
      },
      {
        id: "phased-ai-pilot-execution",
        benefits: [
          "Data-driven validation of AI investments through controlled pilot projects demonstrating clear operational improvements.",
          "Refined implementation strategies informed by real-world testing.",
          "Strong stakeholder buy-in and organizational confidence generated by visible, measurable pilot successes.",
        ],
        fullDescription: "Controlled, measurable pilot projects to minimize risk, validate practical AI value, and establish a strong foundation for broader adoption."
      },
      {
        id: "ai-impact-assessment",
        benefits: [
          "Clear confirmation of AI project outcomes through structured ROI and performance metric assessments.",
          "Empowered internal teams equipped with knowledge and tools for sustainable AI operation and continuous improvement.",
          "Strategically positioned to build upon demonstrated successes with clear pathways for future innovation.",
        ],
        fullDescription: "Ensure sustainable success of AI initiatives with structured ROI validation, comprehensive outcome reviews, and empowering knowledge transfer."
      },
    ].find(s => s.id === serviceItem.id);

    return {
      ...serviceItem,
      benefits: detailedService?.benefits || [],
      fullDescription: detailedService?.fullDescription || ""
    };
  });

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
              We offer a <span className='bg-green-200'>comprehensive suite of AI advisory services</span> designed specifically for small and medium
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
                {/* Row 1: Header with title and icon */}
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-xl font-bold">{service.title}</h2>
                  <div className="w-14 h-14 relative mb-2">
                    {service.icon()}
                  </div>
                </div>

                {/* Row 2: Learn More link aligned below the icon */}
                <div className="flex justify-end -mt-2 mb-3">
                  <div className="inline-flex items-center font-bold group-hover:underline text-sm">
                    <span className="hidden md:inline">LEARN MORE </span><ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </div>

                {/* Row 3: TLDR with charcoal background */}
                <div className="bg-gray-600 p-3 mb-4">
                  <p className="font-bold text-white text-md">{service.description}</p>
                </div>

                {/* Row 4: Full Description */}
                <div className="mb-6">
                  <p className="font-sans">{service.fullDescription}</p>
                </div>

                {/* Row 5: Benefits */}
                <div className="flex-grow">
                  <h3 className="text-sm font-bold mb-4 font-sans">BENEFITS</h3>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="text-sm flex items-start">
                        <span className="font-bold mr-2">{i + 1}.</span>
                        <p className="font-sans">{benefit}</p>
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

