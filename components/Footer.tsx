import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-b border-black bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">WE ARE FUTUREPROOF</h3>
            <p className="mb-4">And you should be too</p>
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
  )
}
