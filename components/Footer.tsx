import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-b border-black bg-black text-white">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          <div className="col-span-2 md:col-span-1 mb-4 md:mb-0">
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">WE ARE FUTUREPROOF</h3>
            <p className="mb-3 md:mb-4 text-sm md:text-base">And you should be too</p>
            <p className="text-sm md:text-base mt-10 py-3 border-y border-white/50 border-y-[0.5px]">AI strategy for business performance.</p>
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
                <Link href="/services/ai-vendor-evaluation" className="hover:underline inline-block py-0.5">
                  Evaluation
                </Link>
              </li>
              <li>
                <Link href="/services/phased-ai-pilot-execution" className="hover:underline inline-block py-0.5">
                  Pilot
                </Link>
              </li>
              <li>
                <Link href="/services/ai-education-simplification" className="hover:underline inline-block py-0.5">
                  Education
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3 md:mb-4 text-base md:text-base">CASE STUDIES</h4>
            <ul className="space-y-1 md:space-y-2 text-sm md:text-base">
              <li>
                <Link href="/case-studies" className="hover:underline inline-block py-0.5">
                  All Case Studies
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
          <p>© {new Date().getFullYear()} FUTUREPROOF. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
