"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Menu, X } from "lucide-react"

export default function ServicesPage() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

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
      <header className="border-b border-black relative z-20">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            WE ARE FUTUREPROOF
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link href="/services" className="hover:underline">
              SERVICES
            </Link>
            <Link href="/case-studies" className="hover:underline">
              CASE STUDIES
            </Link>
          </nav>
          <button className="md:hidden" onClick={toggleMobileMenu} aria-label="Toggle menu">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-black z-10">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                <Link
                  href="/services"
                  className="py-2 hover:underline font-bold"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  SERVICES
                </Link>
                <Link
                  href="/case-studies"
                  className="py-2 hover:underline font-bold"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  CASE STUDIES
                </Link>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="border-b border-black bg-gray-100">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">OUR SERVICES</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl">
              We offer a comprehensive suite of AI advisory services designed specifically for small and medium
              businesses. Each service is tailored to address specific challenges in the AI adoption journey.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section>
        <div className="container mx-auto px-4 py-12">
          <div className="space-y-12">
            {services.map((service, index) => (
              <div key={index} className="border-b border-black pb-12 last:border-b-0">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                    <p className="text-lg mb-6">{service.description}</p>
                    <Link
                      href={service.link}
                      className="inline-flex items-center bg-black text-white px-6 py-3 font-bold hover:bg-gray-800"
                    >
                      LEARN MORE <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">BENEFITS</h3>
                    <ul className="space-y-4">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start">
                          <span className="font-bold mr-4">{i + 1}.</span>
                          <p>{benefit}</p>
                        </li>
                      ))}
                    </ul>
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
            <Link
              href="https://cal.com/amgando/free-strategy-call"
              className="inline-flex items-center bg-black text-white px-8 py-4 text-lg font-bold hover:bg-gray-800"
            >
              SCHEDULE A CONSULTATION <ArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-b border-black bg-black text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">FUTUREPROOF</h3>
              <p>AI strategy for business performance.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">SERVICES</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/services/ai-opportunity-assessment" className="hover:underline">
                    Opportunity
                  </Link>
                </li>
                <li>
                  <Link href="/services/ai-readiness-assessment" className="hover:underline">
                    Readiness
                  </Link>
                </li>
                <li>
                  <Link href="/services/ai-implementation-roadmap" className="hover:underline">
                    Roadmap
                  </Link>
                </li>
                <li>
                  <Link href="/services/ai-vendor-evaluation" className="hover:underline">
                    Evaluation
                  </Link>
                </li>
                <li>
                  <Link href="/services/phased-ai-pilot-execution" className="hover:underline">
                    Pilot
                  </Link>
                </li>
                <li>
                  <Link href="/services/ai-education-simplification" className="hover:underline">
                    Education
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">CASE STUDIES</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/case-studies" className="hover:underline">
                    All Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="/case-studies/knowspace" className="hover:underline">
                    Knowspace
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-sm">
            <p>© {new Date().getFullYear()} FUTUREPROOF. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

