"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { CaseStudyPreview as CaseStudyPreviewType, getAllCaseStudyPreviews } from "@/lib/data/case-studies"

// Configure which case study to display here
const FEATURED_CASE_STUDY_ID = "peak-sensor-systems"; // Change this value to feature a different case study

export default function CaseStudyPreview() {
  // Get all case study previews
  const caseStudyPreviews = getAllCaseStudyPreviews();

  // Find the featured case study by ID
  const featuredCaseStudy = caseStudyPreviews.find(study => study.id === FEATURED_CASE_STUDY_ID);

  // Fallback to the first case study if the specified one isn't found
  const caseStudy = featuredCaseStudy || caseStudyPreviews[0];

  if (!caseStudy) {
    return null; // Handle the case where no case studies are available
  }

  return (
    <section className="border-b border-black bg-gray-100">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-0">CASE STUDIES</h2>
          <Link href="/case-studies" className="inline-flex items-center font-bold hover:underline">
            VIEW ALL CASE STUDIES <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
        <div className="border border-black bg-white">
          <div className="grid md:grid-cols-2">
            <div className="p-6 md:p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-4">{caseStudy.title}</h3>
                {caseStudy.subtitle && <h4 className="text-xl font-bold mb-4">{caseStudy.subtitle}</h4>}
                <ul className="text-xs md:text-base space-y-2 mb-8">
                  {caseStudy.results.map((result, index) => (
                    <li key={index}>• {result}</li>
                  ))}
                </ul>
                {caseStudy.description.map((paragraph, index) => (
                  <p key={index} className="text-sm md:text-lg mb-6">{paragraph}</p>
                ))}
              </div>
              <Link href={caseStudy.link} className="inline-flex items-center font-bold hover:underline">
                READ CASE STUDY <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="border-l border-black h-64 md:h-auto">
              <img
                src={caseStudy.image.src}
                alt={caseStudy.image.alt}
                className="w-full h-full object-cover"
                style={{ objectPosition: caseStudy.image.listPosition || 'center center' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
