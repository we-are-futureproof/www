"use client"

import { ArrowRight, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import Footer from "../components/Footer"
import Button from "../components/Button"
import Link from "next/link"
import TestimonialCarousel from "../components/TestimonialCarousel"
import { getQuotesBySection } from "../lib/quotes"

// Color palette
const colors = [
  "bg-pink-200",      // Light pink - playful
  "bg-yellow-200",    // Soft yellow - sunny
  "bg-blue-200",      // Sky blue - cheerful
  "bg-green-200",     // Light green - fresh
  "bg-orange-200",    // Soft orange - warm
  "bg-purple-200",    // Lavender - whimsical
  "bg-red-200",       // Light red - energetic
  "bg-teal-200",      // Seafoam - unexpected
  "bg-lime-200",      // Bright lime - vibrant
  "bg-fuchsia-200",   // Bright pink - fun
];

// Helper function to get a random color
// Use a specific color for server-side rendering to avoid hydration mismatch
// For client-side interactions, we'll still use random colors
const getRandomColor = () => {
  // This ensures consistent initial render between server and client
  return "bg-blue-200";
};

// This function is safe to use in client-side event handlers
const getRandomColorClientSide = () => colors[Math.floor(Math.random() * colors.length)];


export default function HomePage() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showImage, setShowImage] = useState(true)
  
  // Get hero quotes
  const heroQuotes = getQuotesBySection('hero')
  
  // Effect to handle the image fade out after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(false)
    }, 3000) // 3 seconds
    
    return () => clearTimeout(timer)
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

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
      <section className="border-b border-black">
        <div className="container mx-auto px-4 py-20 md:py-20">
          <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
            <div className="w-full md:w-3/5">
              <h1 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                From AI Complexity
                <br />
                to Competitive Advantage
              </h1>
              <p className="text-xl md:text-2xl mb-12 max-w-2xl">
                Start seeing results <span className='bg-green-200'>within days</span>.
                <br />
                Stop feeling overwhelmed.
              </p>
              <Button
                href="https://cal.com/amgando/free-strategy-call"
                variant="primary"
                size="large"
              >
                BOOK A (free) STRATEGY CALL
                <ArrowRight className="ml-2" />
              </Button>
              <p className="mt-4 text-xl text-gray-700 py-8 pl-2">
                <strong>28 years</strong> building automation solutions
                <br />
                <strong>80+ enterprise clients</strong> including six of the Fortune 100
                <br />
                <strong>4 SMBs</strong> achieved implementation within 3 weeks
              </p>
              <p className="text-xl text-gray-700 py-4 pl-2">
              AI is transforming your industry now. <br />We can help you turn disruption into your competitive edge.
              </p>
            </div>
            <div className="w-full md:w-2/5 h-70 md:h-[530px] border border-gray-400 overflow-hidden relative">
              {/* Hero testimonial section */}
              <div className="w-full h-full relative">
                <div 
                  className={`absolute inset-0 z-10 transition-opacity duration-1000 bg-white flex items-center justify-center ${showImage ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                >
                  <img
                    src="/oneline-geopath.png"
                    alt="Minimalist line drawing of two connected location pins - symbolizing guidance and direction"
                    className="w-full h-full object-contain bg-white p-8 pt-4"
                  />
                </div>
                <div 
                  className={`absolute inset-0 transition-opacity duration-1000 ${showImage ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                >
                  <TestimonialCarousel quotes={heroQuotes} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="border-b border-black bg-gray-100">
        <div className="container mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">THE PROBLEM</h2>
              <ul className="space-y-6 text-lg">
                {[
                  {
                    number: "01",
                    title: "Information overload",
                    description: "It's difficult to distinguish between practical application and unrealistic hype.",
                  },
                  {
                    number: "02",
                    title: "Lack of internal expertise",
                    description: "Vendor incentives do not always align with yours.   That means more risk for you.",
                  },
                  {
                    number: "03",
                    title: "Limited bandwidth",
                    description: "Evaluating, implementing, and monitoring new technology is always a challenge.",
                  },
                  {
                    number: "04",
                    title: "Fear of making costly mistakes",
                    description:
                      "AI investments deliver large outcomes quickly. Right now, hesitation means missed opportunities.",
                  },
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start cursor-pointer border-b border-transparent hover:border-black transition-all duration-100"
                    onMouseEnter={() => setHoveredItem(index)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <span className="font-bold mr-4 mb-20">{item.number}</span>
                    <div>
                      <span className="font-bold block mb-1">{item.title}</span>
                      <span
                        className={`font-normal text-gray-700 block overflow-hidden transition-all duration-200 ${
                          hoveredItem === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        {item.description}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">OUR SOLUTION</h2>
              <ul className="space-y-6 text-lg">
                {[
                  {
                    number: "01",
                    descriptionPart1: "We use a structured, phase-based approach",
                    descriptionPart2:
                      "developed over 20+ years of building custom solutions for clients around the world.",
                  },
                  {
                    number: "02",
                    descriptionPart1: "We choose practical, jargon-free communication",
                    descriptionPart2:
                      "through each stage of AI adoption -- from initial planning to pilot and handoff.",
                  },
                  {
                    number: "03",
                    descriptionPart1: "We adopt a vendor-neutral stance to your business",
                    descriptionPart2:
                      'outcomes.  More than any specific technology, we understand "no tech" may be the "right tech".',
                  },
                  {
                    number: "04",
                    descriptionPart1: "We provide comprehensive, personalized support",
                    descriptionPart2: "including change management and employee training.",
                  },
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start cursor-pointer border-b border-transparent hover:border-black transition-all duration-200"
                    onMouseEnter={() => setHoveredItem(index + 4)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <span className="font-bold mr-4 mb-20">{item.number}</span>
                    <div
                      className={`overflow-hidden transition-all duration-100 ${
                        hoveredItem === index + 4 ? "max-h-96 opacity-100" : "max-h-8 opacity-70"
                      }`}
                    >
                      <p>
                        {item.descriptionPart1}
                        {hoveredItem === index + 4 ? <span>{" " + item.descriptionPart2}</span> : <span>...</span>}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="border-b border-black">
        <div className="container mx-auto px-4 py-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-12">SERVICES</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Opportunity",
                description:
                  "Pinpoint where automation and intelligence can deliver immediate ROI for specific operational workflows and business challenges.",
                link: "/services/ai-opportunity-assessment",
              },
              {
                title: "Readiness",
                description:
                  "Evaluate your company's current capabilities, infrastructure, and business processes to determine optimal starting points for AI adoption.",
                link: "/services/ai-readiness-assessment",
              },
              {
                title: "Roadmap",
                description:
                  "Develop comprehensive, customized implementation plans that sequence AI initiatives based on business impact and technical feasibility.",
                link: "/services/ai-implementation-roadmap",
              },
              {
                title: "Evaluation",
                description:
                  "Evaluate AI vendors against customized criteria that reflect actual business requirements rather than trending technologies.",
                link: "/services/ai-vendor-evaluation",
              },
              {
                title: "Pilot",
                description:
                  "Test AI solutions through controlled, measurable pilot projects that minimize risk while demonstrating practical value.",
                link: "/services/phased-ai-pilot-execution",
              },
              {
                title: "Education",
                description:
                  "Bridge the knowledge gap between technical AI concepts and practical business applications through personalized educational frameworks.",
                link: "/services/ai-education-simplification",
              },
            ].map((service, index) => (
            <div
              key={index}
              className="border border-black p-6 cursor-pointer group relative flex flex-col h-full"
              onClick={() => (window.location.href = service.link)}
              onMouseEnter={(e) => {
                // Use the client-side version for interactions
                const randomColor = getRandomColorClientSide();

                // Remove any existing color classes and transition classes
                const currentClasses = e.currentTarget.className.split(" ")
                const newClasses = currentClasses.filter((cls) => !cls.match(/bg-\w+-\d+/) && !cls.match(/transition-/))

                // Add the new random color with fast transition in
                e.currentTarget.className = [...newClasses, randomColor, "transition-colors", "duration-500", "ease-in"].join(" ")
              }}
              onMouseLeave={(e) => {
                // When mouse leaves, set a slow transition out
                const currentClasses = e.currentTarget.className.split(" ")
                // Remove existing transition classes first
                const baseClasses = currentClasses.filter((cls) => !cls.match(/transition-/) && !cls.match(/duration-/) && !cls.match(/ease-/))
                // Add slow transition out classes
                const newClasses = [...baseClasses, "transition-colors", "duration-[5000ms]", "ease-out"]
                // Remove color classes
                const finalClasses = newClasses.filter((cls) => !cls.match(/bg-\w+-\d+/))
                e.currentTarget.className = finalClasses.join(" ")
              }}
            >
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="mb-6">{service.description}</p>
              <div className="mt-auto inline-flex items-center font-bold group-hover:underline">
                LEARN MORE <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button
              href="/services"
              variant="secondary"
              size="large"
            >
              VIEW ALL SERVICES <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Case Study Preview */}
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
              <div className="p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-4">KNOWSPACE</h3>
                  <p className="text-lg mb-6">
                    In cooperation with Knowpsace leadership, we designed, developed and deployed an advanced awareness
                    system for assisted living facilities (ALF) that monitors and protects seniors with cognitive
                    impairments.
                  </p>
                  <p className="text-lg mb-6">
                    During a 60-day pilot in late 2024, seniors were able to choose one or more wearable devices from a
                    broad catelog. This included wristwatches and pendants among other stylish, lightweight options.
                    Each device was automatically provisioned in seconds at the front desk by ALF staff using a custom,
                    secure mobile app.
                  </p>
                  <p className="text-lg mb-6">
                    30 million data points were collected at a rate of 1M per device per week with an operating cost of
                    under $300/mo and capacity for 1000 devices. Severral interior and exterior receivers were enough to
                    track resident movement throughout the facility 24/7.
                  </p>
                  <ul className="space-y-2 mb-8">
                    <li>• 1M data points per device per week</li>
                    <li>• 3-second latency from event to alert</li>
                    <li>• MQTT deployment complexity reduced by 50%</li>
                    <li>• Data pipeline costs reduced by 90%</li>
                  </ul>
                </div>
                <Link href="/case-studies/knowspace" className="inline-flex items-center font-bold hover:underline">
                  READ CASE STUDY <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              <div className="border-l border-black h-64 md:h-auto">
                <img
                  src="/oneline-oldhands.png"
                  alt="Minimalist line drawing of a floor plan - representing Knowspace's assisted living facility monitoring system"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
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
                SCHEDULE A CONSULTATION
                <ArrowRight className="ml-2" />
              </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

