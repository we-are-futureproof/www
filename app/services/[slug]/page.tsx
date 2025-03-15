"use client"

import { useState, use } from "react"
import Link from "next/link"
import { ArrowRight, ArrowLeft, Menu, X } from "lucide-react"
import { notFound } from "next/navigation"

interface ServicePageProps {
  params: Promise<{
    slug: string
  }>
}

export default function ServicePage({ params }: ServicePageProps) {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const services = {
    "ai-opportunity-assessment": {
      title: "AI Opportunity Assessment",
      description:
        "Systematic analysis that cuts through AI hype to pinpoint where automation and intelligence can deliver immediate ROI for specific operational workflows and business challenges. This collaborative assessment creates a prioritized opportunity map that matches AI capabilities to business goals while accounting for implementation complexity, resource requirements, and organizational readiness.",
      benefits: [
        "Clear visibility into the highest-impact, lowest-risk AI implementation opportunities ranked by potential ROI, implementation complexity, and alignment with strategic business objectives.",
        "Confidence in technology investment decisions backed by evidence-based analysis of specific operational workflows rather than generic industry trends or competitive pressure.",
        "Elimination of wasted resources on inappropriate AI applications through early identification of prerequisites, technical constraints, and organizational readiness factors specific to each potential implementation area.",
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
        "Comprehensive diagnostic process that evaluates a company's current capabilities, infrastructure, and business processes to determine optimal starting points for AI adoption. This assessment establishes baseline readiness metrics and prioritizes potential AI initiatives based on implementation feasibility, resource requirements, and projected business impact.",
      benefits: [
        "Clearly prioritized AI opportunities mapped to specific business objectives with realistic implementation timelines that maximize early wins while building organizational momentum and confidence.",
        "Accurate understanding of technical and organizational readiness gaps with specific remediation plans that prevent costly implementation failures and ensure sustainable adoption.",
        "Calibrated expectations across leadership teams with consensus on resource allocation, success metrics, and governance frameworks that align AI initiatives with strategic business priorities.",
      ],
      scenarios: [
        "Business leaders feel paralyzed by conflicting AI information and vendor claims, leading to decision fatigue, missed competitive opportunities, and growing anxiety about falling behind more technologically advanced competitors in their industry segment.",
        "Internal IT teams lack specialized AI knowledge, causing failed pilot projects, wasted technology investments, and growing skepticism among department heads about the practical value of AI for their specific operational challenges.",
        "Leadership teams make impulsive AI purchasing decisions based on competitor announcements or industry buzz, resulting in underutilized tools, employee resistance, and diminished appetite for future innovation initiatives.",
      ],
      process: [
        "Initial discovery session to understand your business objectives, current technical capabilities, and specific industry challenges.",
        "Comprehensive assessment of your data infrastructure, technical systems, and organizational processes.",
        "Analysis of potential AI use cases specific to your business with prioritization based on impact, feasibility, and resource requirements.",
        "Development of a detailed readiness report with specific recommendations for addressing gaps and maximizing opportunities.",
        "Presentation of findings to leadership team with clear next steps and implementation roadmap.",
      ],
    },
    "ai-implementation-roadmap": {
      title: "AI Roadmap",
      description:
        "Development of comprehensive, customized implementation plans that sequence AI initiatives based on business impact, technical feasibility, and organizational readiness factors specific to mid-market companies. These tailored roadmaps establish clear milestones, resource requirements, and success metrics while identifying potential obstacles and mitigation strategies across each phase of adoption.",
      benefits: [
        "Accelerated time-to-value through strategically sequenced implementation priorities that deliver early wins, build organizational momentum, and fund subsequent initiatives through realized efficiency gains.",
        "Reduced implementation failures by identifying and addressing potential technical integration challenges, data quality issues, and change management requirements before significant resources are committed.",
        "Enhanced budget efficiency by establishing clear decision criteria for technology investments that prevent redundant purchases and ensure solutions align with both immediate needs and long-term strategic direction.",
      ],
      scenarios: [
        "A manufacturing company has identified several potential AI applications but lacks internal expertise to prioritize opportunities, resulting in stalled decision-making as leadership debates which initiatives to pursue first while competitors gain market advantage through more decisive action.",
        "A professional services firm implemented an AI-powered customer service solution without proper integration planning, creating data silos and workflow disruptions that decreased productivity and damaged client relationships, leaving management hesitant about further technology investments.",
        "A regional retailer's marketing team purchased multiple AI tools with overlapping capabilities based on individual department requests rather than coordinated strategy, creating budget waste, staff confusion, and inconsistent customer experiences across digital touchpoints.",
      ],
      process: [
        "Comprehensive review of business objectives, current technical infrastructure, and organizational capabilities.",
        "Identification and prioritization of potential AI initiatives based on business impact, technical feasibility, and organizational readiness.",
        "Development of a phased implementation plan with clear milestones, resource requirements, and success metrics.",
        "Creation of risk mitigation strategies for potential technical, organizational, and change management challenges.",
        "Establishment of governance frameworks and decision criteria for ongoing AI investment and expansion.",
      ],
    },
    "ai-vendor-evaluation": {
      title: "AI Evaluation",
      description:
        "Systematic approach for evaluating AI vendors against customized criteria that reflect actual business requirements rather than trending technologies. This framework transforms vendor selection from a confusing technical comparison into a strategic business decision process with clear metrics for measuring fit, implementation feasibility, and long-term value.",
      benefits: [
        "Confident investment decisions backed by transparent evaluation criteria that align vendor capabilities with specific operational needs rather than industry buzzwords or competitor actions.",
        "Accelerated implementation timelines through early identification of integration requirements, data readiness gaps, and necessary organizational changes during the vendor selection process.",
        "Stronger negotiating position with vendors through detailed understanding of feature relevance, actual implementation costs, and realistic performance expectations for your specific business context.",
      ],
      scenarios: [
        "Decision paralysis has set in as leadership reviews contradictory claims from multiple AI vendors, each promising transformative results but using technical jargon that obscures actual capabilities and implementation requirements for non-technical stakeholders.",
        "Previous technology investments have underdelivered after vendors overpromised capabilities, creating organizational skepticism about AI adoption and requiring extra diligence to rebuild confidence in the selection process.",
        "Internal teams lack specialized knowledge to distinguish between essential and premium AI features, resulting in either overspending on unnecessary capabilities or selecting underpowered solutions that fail to address core business challenges.",
      ],
      process: [
        "Development of customized evaluation criteria based on specific business requirements and technical constraints.",
        "Creation of a structured vendor assessment framework with weighted scoring across technical, operational, and financial dimensions.",
        "Facilitation of vendor demonstrations and technical evaluations focused on your specific use cases rather than generic capabilities.",
        "Analysis of integration requirements, implementation timelines, and total cost of ownership for each potential solution.",
        "Preparation of detailed comparison reports with clear recommendations and implementation considerations.",
      ],
    },
    "phased-ai-pilot-execution": {
      title: "AI Pilot",
      description:
        "A structured approach to testing AI solutions through controlled, measurable pilot projects that minimize risk while demonstrating practical value in specific business contexts. This methodical process enables businesses to gather evidence, refine implementation strategies, and build organizational confidence before expanding AI initiatives.",
      benefits: [
        "Evidence-based confidence in AI investment decisions backed by quantifiable results from controlled experiments that demonstrate specific operational improvements relevant to business objectives.",
        "Refined implementation strategies informed by real-world testing that address integration challenges, workflow adjustments, and employee training needs before broader deployment.",
        "Organizational momentum and stakeholder buy-in generated through visible wins from successful pilots that overcome skepticism and build enthusiasm for expanded AI initiatives.",
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
    "ai-education-simplification": {
      title: "AI Education",
      description:
        "Bridging the knowledge gap between technical AI concepts and practical business applications through personalized educational frameworks tailored to specific industry contexts and technical literacy levels. This structured approach transforms information overload into actionable insights, enabling business leaders to distinguish between practical AI applications and marketing hype.",
      benefits: [
        "Confident leadership discussions about AI strategy grounded in practical understanding rather than abstract concepts, enabling more productive conversations with technical teams, vendors, and stakeholders about specific implementation possibilities.",
        "Accelerated evaluation processes where decision-makers can quickly distinguish between relevant AI capabilities and marketing hype, focusing attention on solutions with genuine potential for their specific business context.",
        "Seamless translation between business challenges and technical AI capabilities, allowing organizations to precisely articulate requirements and evaluate proposed solutions based on substantive criteria rather than superficial features.",
      ],
      scenarios: [
        "Business owners spending countless hours sifting through contradictory online resources, vendor materials, and industry publications about AI, resulting in decision paralysis and missed competitive opportunities while their understanding remains fragmented and superficial.",
        "Leadership teams making uninformed judgments about AI technologies based on buzzwords rather than substance, leading to skepticism from technically-savvy employees and resistance to potentially valuable innovations that could address genuine operational challenges.",
        "Department heads unable to effectively communicate AI requirements to technical teams or vendors because they lack the vocabulary and conceptual framework to articulate business needs in terms that translate to appropriate technical solutions.",
      ],
      process: [
        "Assessment of current AI knowledge levels and specific learning objectives across key stakeholders.",
        "Development of customized educational frameworks tailored to your industry context and business priorities.",
        "Delivery of targeted learning sessions that connect technical concepts to practical business applications relevant to your specific challenges.",
        "Creation of reference materials and decision frameworks that support ongoing evaluation of AI opportunities and vendor claims.",
        "Establishment of common vocabulary and conceptual models that facilitate productive discussions between business and technical stakeholders.",
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
                    <p>{scenario}</p>
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold mb-4">OUR PROCESS</h2>
              <ul className="space-y-4 mb-8">
                {service.process.map((step, index) => (
                  <li key={index} className="flex items-start">
                    <span className="font-bold mr-4">{index + 1}.</span>
                    <p>{step}</p>
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
                    <p>{benefit}</p>
                  </li>
                ))}
              </ul>
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
            <Link
              href="https://cal.com/amgando/free-strategy-call"
              className="inline-flex items-center bg-blue-200 text-black border border-black px-8 py-4 text-lg font-bold transition-colors hover:bg-blue-800 hover:text-white"
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

