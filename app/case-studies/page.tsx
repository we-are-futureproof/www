"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import Footer from "../../components/Footer"
import Button from "../../components/Button"
import Header from "../../components/Header"
import CTASection from "../../components/CTASection"
import { getAllCaseStudyPreviews } from "@/lib/data/case-studies"

export default function CaseStudiesPage() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)

  // Get case studies from our centralized data store
  const caseStudies = getAllCaseStudyPreviews()

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
              Real-world examples of how we've helped businesses <span className='bg-green-200'>navigate the complex AI landscape</span> and implement
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
                          <li key={i} className="font-sans">• {result}</li>
                        ))}
                      </ul>

                      <h3 className="text-xl font-bold mb-3">SERVICES USED</h3>
                      <ul className="space-y-2 mb-6">
                        {caseStudy.services.map((service, i) => (
                          <li key={i} className="font-sans">• {service}</li>
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
                    {caseStudy.image ? (
                      <img
                        src={caseStudy.image.src}
                        alt={caseStudy.image.alt}
                        className="w-full h-full object-cover"
                        style={caseStudy.image.listPosition ? { objectPosition: caseStudy.image.listPosition } : undefined}
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

