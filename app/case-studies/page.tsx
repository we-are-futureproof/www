"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Menu, X } from "lucide-react"

export default function CaseStudiesPage() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

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

                    <Link
                      href={caseStudy.link}
                      className="inline-flex items-center bg-black text-white px-6 py-3 font-bold hover:bg-gray-800"
                    >
                      READ CASE STUDY <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                  <div className="bg-gray-200 h-64 md:h-auto"></div>
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

