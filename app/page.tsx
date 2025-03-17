"use client"

import { useState } from "react"
import Footer from "../components/Footer"
import { getQuotesBySection } from "../lib/quotes"

// Import homepage section components
import Header from "../components/Header"
import HeroSection from "../components/home/HeroSection"
import ProblemSection from "../components/home/ProblemSection"
import SolutionSection from "../components/home/SolutionSection"
import ServicesPreview from "../components/home/ServicesPreview"
import CaseStudyPreview from "../components/home/CaseStudyPreview"
import CTASection from "../components/CTASection"

export default function HomePage() {
  // Get hero quotes
  const heroQuotes = getQuotesBySection('hero')
  
  // Shared hovered item state for Problem and Solution sections
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-white text-black font-mono">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection heroQuotes={heroQuotes} />

      {/* Problem and Solution Section */}
      <section className="border-b border-black bg-gray-100">
        <div className="container mx-auto pl-4 pr-8 py-12 sm:py-16 md:py-20">
          <div className="grid md:grid-cols-2 gap-8 md:gap-24">
            <ProblemSection 
              hoveredItem={hoveredItem} 
              setHoveredItem={setHoveredItem} 
            />
            <SolutionSection 
              hoveredItem={hoveredItem} 
              setHoveredItem={setHoveredItem} 
            />
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <ServicesPreview />

      {/* Case Study Preview */}
      <CaseStudyPreview />

      {/* Call to Action */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </div>
  )
}
