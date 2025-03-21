"use client"

import { useState, use } from "react"
import Link from "next/link"
import { ArrowRight, ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"
import Footer from "../../../components/Footer"
import Header from "../../../components/Header"
import CTASection from "../../../components/CTASection"
import { getCaseStudy } from "@/lib/data/case-studies"

interface CaseStudyPageProps {
  params: Promise<{
    slug: string
  }>
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)

  // Unwrap params using React.use()
  const resolvedParams = use(params)
  const slug = resolvedParams.slug
  
  // Get the case study from our centralized data store
  const caseStudy = getCaseStudy(slug)

  if (!caseStudy) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white text-black font-mono">
      {/* Header */}
      <Header />

      {/* Breadcrumb */}
      <div className="border-b border-black bg-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span>/</span>
            <Link href="/case-studies" className="hover:underline">
              Case Studies
            </Link>
            <span>/</span>
            <span className="font-bold">{caseStudy.title}</span>
          </div>
        </div>
      </div>

      {/* Case Study Content */}
      <section>
        <div className="container mx-auto px-4 py-12">
          <Link href="/case-studies" className="inline-flex items-center mb-8 hover:underline">
            <ArrowLeft className="mr-2 h-4 w-4" /> BACK TO CASE STUDIES
          </Link>

          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div className="md:col-span-2">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">{caseStudy.title}</h1>
              <h2 className="text-2xl mb-8">{caseStudy.subtitle}</h2>

              {caseStudy.image ? (
                <>
                  <img
                    src={caseStudy.image.src}
                    alt={caseStudy.image.alt}
                    className="w-full h-64 md:h-96 object-cover mb-8 border border-black"
                    style={caseStudy.image.detailPosition ? { objectPosition: caseStudy.image.detailPosition.default } : undefined}
                  />
                  <style jsx>{`
                    @media (min-width: 640px) {
                      img {
                        object-position: ${caseStudy.image.detailPosition?.sm || caseStudy.image.detailPosition?.default};
                      }
                    }
                    @media (min-width: 768px) {
                      img {
                        object-position: ${caseStudy.image.detailPosition?.md || caseStudy.image.detailPosition?.default};
                      }
                    }
                  `}</style>
                </>
              ) : (
                <div className="w-full h-64 md:h-96 bg-gray-200 mb-8 border border-black"></div>
              )}

              <p className="text-xl mb-8">{caseStudy.description}</p>

              <h3 className="text-2xl font-bold mb-4">THE CHALLENGE</h3>
              <p className="mb-8">{caseStudy.challenge}</p>

              <h3 className="text-2xl font-bold mb-4">OUR SOLUTION</h3>
              <p className="mb-8">{caseStudy.solution}</p>

              <h3 className="text-2xl font-bold mb-4">RESULTS</h3>
              <ul className="space-y-4 mb-8">
                {caseStudy.results.map((result, index) => (
                  <li key={index} className="flex items-start">
                    <span className="font-bold mr-4">•</span>
                    <p>{result}</p>
                  </li>
                ))}
              </ul>

              {caseStudy.testimonial && (
                <div className="border-l-4 border-black pl-6 py-4 mb-8 bg-gray-100">
                  <p className="text-xl italic mb-4">"{caseStudy.testimonial.quote}"</p>
                  <p className="font-bold">— {caseStudy.testimonial.author}</p>
                </div>
              )}
            </div>

            <div>
              <div className="bg-gray-100 p-8 border border-black mb-8">
                <h3 className="text-xl font-bold mb-4">SERVICES USED</h3>
                <ul className="space-y-2">
                  {caseStudy.services.map((service, index) => (
                    <li key={index} className="flex items-start">
                      <span className="font-bold mr-4">•</span>
                      <p>{service}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-100 p-8 border border-black">
                <h3 className="text-xl font-bold mb-4">TECHNOLOGIES</h3>
                <ul className="space-y-2">
                  {caseStudy.technologies.map((tech, index) => (
                    <li key={index} className="flex items-start">
                      <span className="font-bold mr-4">•</span>
                      <p>{tech}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
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

