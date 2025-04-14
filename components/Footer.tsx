"use client"

import Link from "next/link"
import { Linkedin, Youtube, Twitter } from "lucide-react"
import { usePostHog } from "posthog-js/react"

export default function Footer() {
  const posthog = usePostHog()
  return (
    <footer className="border-b border-black bg-black text-white">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          <div className="col-span-2 md:col-span-1 mb-4 md:mb-0">
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">we are futureproof</h3>
            <p className="mb-3 md:mb-4 text-sm md:text-base">and you should be too</p>
            <p className="text-sm md:text-base mt-10 py-3 border-y border-white/50 border-y-[0.5px]">AI strategy for business performance.</p>
            <div className="flex items-center space-x-4 mt-12">
              <a
                href="https://www.linkedin.com/in/sherifabushadi/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/80 transition-colors"
                aria-label="LinkedIn"
                onClick={() => posthog.capture("social_link_click", { platform: "linkedin" })}
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.youtube.com/@we-are-futureproof"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/80 transition-colors"
                aria-label="YouTube"
                onClick={() => posthog.capture("social_link_click", { platform: "youtube" })}
              >
                <Youtube size={20} />
              </a>
              <a
                href="https://x.com/amgando"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/80 transition-colors"
                aria-label="Twitter/X"
                onClick={() => posthog.capture("social_link_click", { platform: "twitter" })}
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-3 md:mb-4 text-base md:text-base">SERVICES</h4>
            <ul className="space-y-1 md:space-y-2 text-sm md:text-base">
              <li>
                <Link href="/services/ai-opportunity-assessment" className="hover:underline inline-block py-0.5">
                  Opportunity
                </Link>
              </li>
              <li>
                <Link href="/services/ai-readiness-assessment" className="hover:underline inline-block py-0.5">
                  Readiness
                </Link>
              </li>
              <li>
                <Link href="/services/ai-implementation-roadmap" className="hover:underline inline-block py-0.5">
                  Roadmap
                </Link>
              </li>
              <li>
                <Link href="/services/ai-vendor-selection" className="hover:underline inline-block py-0.5">
                  Selection
                </Link>
              </li>
              <li>
                <Link href="/services/phased-ai-pilot-execution" className="hover:underline inline-block py-0.5">
                  Pilot
                </Link>
              </li>
              <li>
                <Link href="/services/ai-impact-assessment" className="hover:underline inline-block py-0.5">
                  Impact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3 md:mb-4 text-base md:text-base">CASE STUDIES</h4>
            <ul className="space-y-1 md:space-y-2 text-sm md:text-base">
              <li>
                <Link href="/case-studies" className="hover:underline inline-block py-0.5 mb-2">
                  All Case Studies
                </Link>
              </li>
              <li>
                <Link href="/case-studies/peak-sensor-systems" className="hover:underline inline-block py-0.5">
                  PEAK Sensor Systems
                </Link>
              </li>
              <li>
                <Link href="/case-studies/johnreid" className="hover:underline inline-block py-0.5">
                  John Reid Companies
                </Link>
              </li>
              <li>
                <Link href="/case-studies/knowspace" className="hover:underline inline-block py-0.5">
                  Knowspace
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-4 md:mt-12 pt-4 md:pt-8 border-t border-gray-800 text-xs md:text-sm">
          <p>© {new Date().getFullYear()} futureproof. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
