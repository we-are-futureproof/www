"use client"

import { useState, use } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"
import Footer from "../../../components/Footer"
import Header from "../../../components/Header"
import CTASection from "../../../components/CTASection"

interface CaseStudyPageProps {
  params: Promise<{
    slug: string
  }>
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)

  const caseStudies = {
    knowspace: {
      title: "Knowspace",
      subtitle: "AI-Powered Senior Care Monitoring System",
      description:
        "Knowspace developed an advanced awareness system for assisted living facilities that helps monitor and protect seniors with cognitive impairments. Their technology combines Bluetooth beacons, gateways, and AI analytics to provide real-time location tracking and behavioral insights without invasive cameras.",
      challenge:
        "Knowspace needed to navigate the complex technical landscape of developing their real-time monitoring platform that processes millions of data points from IoT devices. They faced challenges in selecting appropriate technologies for their data pipeline, including MQTT brokers, stream processing frameworks, and indoor positioning algorithms. Additionally, they needed guidance on hardware options, system architecture optimization, and implementing practical machine learning approaches for behavior recognition and fall detection.",
      solution:
        "Futureproof provided structured guidance on selecting appropriate technologies for Knowspace's data pipeline, including MQTT brokers, stream processing frameworks, and indoor positioning algorithms. We helped them evaluate hardware options, optimize their system architecture, and implement practical machine learning approaches for behavior recognition and fall detection. Our advisory services included technical architecture reviews, vendor evaluation for IoT components, and implementation planning for their AI analytics pipeline.",
      results: [
        "Accelerated development timeline by avoiding costly experimentation with inappropriate technologies",
        "Reduced EMQX deployment complexity by 50% and costs by 90%",
        "Gained confidence in technical decisions through expert validation of their approach to indoor positioning",
        "Developed a scalable architecture capable of handling anticipated growth while maintaining critical 10-second system response time KPI for emergency events",
      ],
      testimonial: {
        quote:
          "Futureproof helped us navigate the complex technical landscape of IoT and AI, saving us months of trial and error. Their structured approach to technology selection and architecture design was invaluable in helping us build a scalable, reliable system that meets our critical performance requirements.",
        author: "Jack Burden, Founder and CEO, Knowspace",
      },
      services: ["AI Opportunity Assessment (free)", "AI Evaluation", "AI Roadmap", "AI Pilot"],
      technologies: [
        "Bluetooth Low Energy (BLE)",
        "MQTT",
        "Kafka Stream Processing",
        "Data Cleaning and Device Positioning",
        "AI for Pattern Recognition",
      ],
    },
  }

  // Unwrap params using React.use()
  const resolvedParams = use(params)
  const slug = resolvedParams.slug
  const caseStudy = caseStudies[slug as keyof typeof caseStudies]

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

              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-n8aZl0hSpZRp7YVHKrJUMOxz4F79oY.png"
                alt="Minimalist line drawing of a floor plan - representing Knowspace's assisted living facility monitoring system"
                className="w-full h-64 md:h-96 object-cover mb-8 border border-black"
              />

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

              <div className="border-l-4 border-black pl-6 py-4 mb-8 bg-gray-100">
                <p className="text-xl italic mb-4">"{caseStudy.testimonial.quote}"</p>
                <p className="font-bold">— {caseStudy.testimonial.author}</p>
              </div>
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

