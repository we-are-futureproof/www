"use client"

import { use } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"
import Footer from "../../../components/Footer"
import Header from "../../../components/Header"
import CTASection from "../../../components/CTASection"

interface ServicePageProps {
  params: Promise<{
    slug: string
  }>
}
export default function ServicePage({ params }: ServicePageProps) {

  const services = {
    "ai-opportunity-assessment": {
      title: "AI Opportunity Assessment",
      description:
        "Structured analysis that clearly identifies high-value AI opportunities where automation and intelligence can deliver immediate ROI for specific operational workflows and business challenges. This collaborative assessment creates a prioritized opportunity map that matches AI capabilities to business goals while accounting for implementation complexity, resource requirements, and organizational readiness.",
      benefits: [
        "Clear visibility into actionable, high-impact AI implementation opportunities ranked by potential ROI, implementation complexity, and alignment with strategic business objectives.",
        "Confidence in technology investment decisions backed by evidence-based analysis of specific operational workflows rather than generic industry trends or competitive pressure.",
        "Prevention of wasted resources through early identification of realistic, relevant AI use-cases tailored to your operations, including prerequisites, technical constraints, and organizational readiness factors.",
      ],
      scenarios: [
        "Business leaders are bombarded with competing AI vendor claims and industry success stories but lack a framework to evaluate which applications are genuinely relevant to their specific operational bottlenecks, causing decision paralysis or rushed investments into trendy solutions that fail to address core business needs.",
        "Mid-sized companies with limited technical staff are struggling to distinguish between AI applications that require significant data science expertise versus those that can be implemented with existing resources, leading to abandoned initiatives when implementation complexity exceeds internal capabilities.",
        "Operations managers recognize efficiency gaps that could potentially benefit from AI but cannot articulate these opportunities in technical terms to vendors or IT teams, resulting in misaligned solutions that solve theoretical rather than actual business problems.",
      ],
      process: [
        "Comprehensive review of current business processes, operational workflows, and strategic objectives.",
        "Identification of potential AI application areas based on business impact, technical feasibility, and organizational readiness.",
        "Analysis of data availability, quality, and accessibility for each potential application area.",
        "Development of prioritized opportunity map with clear implementation pathways and resource requirements.",
        "Creation of business cases for high-priority opportunities with projected ROI and implementation considerations.",
      ],
    },
    "ai-readiness-assessment": {
      title: "AI Readiness",
      description:
        "Detailed evaluation of your organization's current capabilities and processes to clearly define optimal starting points and realistic pathways for successful AI adoption. This assessment establishes baseline readiness metrics and prioritizes potential AI initiatives based on implementation feasibility, resource requirements, and projected business impact.",
      benefits: [
        "Clearly prioritized AI opportunities mapped to specific business objectives with realistic implementation timelines that maximize early wins and build organizational momentum.",
        "Detailed understanding of readiness gaps with actionable recommendations, ensuring successful AI implementations.",
        "Aligned leadership expectations and clear consensus on resource allocation, success metrics, and governance frameworks.",
      ],
      scenarios: [
        "Business leaders feel paralyzed by conflicting AI information and vendor claims, leading to decision fatigue, missed competitive opportunities, and anxiety about technological lag.",
        "Internal IT teams lack specialized AI knowledge, causing failed pilots, wasted investments, and skepticism about AI's practical value.",
        "Leadership makes impulsive AI purchases based on industry buzz, leading to underutilized tools, employee resistance, and diminished innovation appetite.",
      ],
      process: [
        "Initial discovery session to clarify business objectives, technical capabilities, and industry challenges.",
        "Comprehensive assessment of data infrastructure, technical systems, and organizational processes.",
        "Prioritized analysis of potential AI use cases based on impact, feasibility, and resource needs.",
        "Detailed readiness report with specific gap-closing recommendations.",
        "Leadership presentation with actionable next steps and implementation roadmap.",
      ],
    },
    "ai-implementation-roadmap": {
      title: "AI Roadmap",
      description:
        "Customized strategic implementation plans that prioritize AI initiatives for maximum impact, feasibility, and organizational readiness. Tailored roadmaps establish clear milestones, resource requirements, and success metrics, while proactively identifying potential obstacles and mitigation strategies.",
      benefits: [
        "Accelerated ROI through strategic sequencing of AI initiatives for rapid value creation.",
        "Reduced risks and enhanced implementation success by proactively identifying technical and organizational challenges.",
        "Enhanced budget efficiency through clear decision criteria for technology investments, aligning immediate needs with long-term strategic direction.",
      ],
      scenarios: [
        "Manufacturers lacking internal expertise face stalled AI adoption, losing competitive ground.",
        "Professional services firms experience integration failures leading to workflow disruptions and lost productivity.",
        "Retailers make uncoordinated AI investments, resulting in wasted resources and inconsistent customer experiences.",
      ],
      process: [
        "Review of business objectives, technical infrastructure, and organizational capabilities.",
        "Prioritization of AI initiatives based on impact, feasibility, and readiness.",
        "Development of phased implementation plans with milestones, resources, and success metrics.",
        "Creation of risk mitigation strategies for technical, organizational, and change management challenges.",
        "Governance frameworks and decision criteria for sustained AI investment.",
      ],
    },
    "ai-vendor-selection": {
      title: "AI Vendor Selection",
      description:
        "Structured evaluation of AI vendors against business-driven criteria to ensure strategic alignment and maximum value. This framework turns vendor selection into a strategic business decision with clear metrics for measuring fit, feasibility, and long-term value.",
      benefits: [
        "Confident vendor selection through transparent, business-aligned evaluation criteria.",
        "Accelerated implementation through early identification of integration and operational requirements.",
        "Stronger vendor negotiations through detailed feature relevance analysis and realistic performance expectations.",
      ],
      scenarios: [
        "Leaders facing vendor-induced decision paralysis due to confusing AI claims.",
        "Previous vendor disappointments leading to skepticism and rigorous selection requirements.",
        "Internal teams unable to discern essential AI features, leading to overspending or underpowered solutions.",
      ],
      process: [
        "Customized vendor evaluation criteria aligned with business and technical needs.",
        "Structured vendor assessments across technical, operational, and financial dimensions.",
        "Targeted vendor demonstrations based on specific business use cases.",
        "Analysis of integration requirements, timelines, and total cost of ownership.",
        "Detailed comparative reports with implementation recommendations.",
      ],
    },
    "phased-ai-pilot-execution": {
      title: "AI Pilot",
      description:
        "Controlled, measurable pilot projects to minimize risk, validate practical AI value, and establish a strong foundation for broader adoption. This structured process enables organizations to gather evidence, refine implementation strategies, and build organizational confidence before expanding AI initiatives.",
      benefits: [
        "Data-driven validation of AI investments through controlled pilot projects demonstrating clear operational improvements.",
        "Refined implementation strategies informed by real-world testing that address integration challenges, workflow adjustments, and employee training needs before broader deployment.",
        "Strong stakeholder buy-in and organizational confidence generated by visible, measurable pilot successes.",
      ],
      scenarios: [
        "A retail business owner has identified inventory management as a potential AI application area but fears wasting resources on an enterprise-wide rollout that might disrupt existing operations or fail to deliver promised efficiency gains.",
        "A professional services firm recognizes the potential of AI-powered client communication tools but lacks a framework for testing these solutions with a subset of clients to measure impact without risking their broader client relationships.",
        "A manufacturing company's leadership team is divided on AI investment priorities, with no clear consensus on which operational area would benefit most, creating decision paralysis and preventing any meaningful progress toward adoption.",
      ],
      process: [
        "Identification of high-potential, low-risk pilot opportunities based on business impact and implementation feasibility.",
        "Development of clear success metrics and evaluation criteria aligned with specific business objectives.",
        "Design of controlled pilot parameters including scope, timeline, resource requirements, and participant selection.",
        "Implementation support including technical integration, workflow adjustment, and participant training.",
        "Comprehensive evaluation of pilot results with recommendations for refinement, expansion, or alternative approaches.",
      ],
    },
    "ai-impact-assessment": {
      title: "AI Impact & ROI",
      description:
        "The AI Impact & ROI phase validates AI outcomes, quantifies ROI, and ensures knowledge transfer, positioning your team for sustained success and confident future innovation.",
      benefits: [
        "Clear ROI validation ensuring transparency and accountability.",
        "Comprehensive knowledge transfer empowering internal teams.",
        "Structured support frameworks for sustained momentum and future advisory engagements.",
      ],
      scenarios: [
        "Stakeholders uncertain of AI investment value, risking future innovation budgets.",
        "Operational teams struggling post-consultant departure, resulting in stalled AI initiatives.",
        "Organizations lacking follow-up strategies post-implementation, leading to dependency and knowledge gaps.",
      ],
      process: [
        "Retrospective ROI assessments aligned with business objectives.",
        "Structured handoff workshops and comprehensive documentation.",
        "Outcome-validation checkpoints post-implementation.",
        "Recommendations for continuous improvement and future scaling.",
        "Frameworks for ongoing advisory engagements to ensure sustained value.",
      ],
    },
  }


  // Unwrap params using React.use()
  const resolvedParams = use(params)
  const slug = resolvedParams.slug
  const service = services[slug as keyof typeof services]

  if (!service) {
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
            <Link href="/services" className="hover:underline">
              Services
            </Link>
            <span>/</span>
            <span className="font-bold">{service.title}</span>
          </div>
        </div>
      </div>

      {/* Service Content */}
      <section>
        <div className="container mx-auto px-4 py-12">
          <Link href="/services" className="inline-flex items-center mb-8 hover:underline">
            <ArrowLeft className="mr-2 h-4 w-4" /> BACK TO SERVICES
          </Link>

          <h1 className="text-4xl md:text-6xl font-bold mb-8">{service.title}</h1>

          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div className="md:col-span-2">
              <p className="text-xl mb-8">{service.description}</p>

              <h2 className="text-2xl font-bold mb-4">COMMON SCENARIOS</h2>
              <ul className="space-y-4 mb-8">
                {service.scenarios.map((scenario, index) => (
                  <li key={index} className="flex items-start">
                    <span className="font-bold mr-4">{index + 1}.</span>
                    <p className="font-sans">{scenario}</p>
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold mb-4">OUR PROCESS</h2>
              <ul className="space-y-4 mb-8">
                {service.process.map((step, index) => (
                  <li key={index} className="flex items-start">
                    <span className="font-bold mr-4">{index + 1}.</span>
                    <p className="font-sans">{step}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-100 p-8 border border-black h-fit">
              <h2 className="text-2xl font-bold mb-4">BENEFITS</h2>
              <ul className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="font-bold mr-4">•</span>
                    <p className="font-sans">{benefit}</p>
                  </li>
                ))}
              </ul>
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

