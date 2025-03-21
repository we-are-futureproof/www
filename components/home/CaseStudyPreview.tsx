"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CaseStudyPreview() {
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
                <h3 className="text-2xl font-bold mb-4">KNOWSPACE</h3>
                <p className="text-sm md:text-lg mb-6">
                  In cooperation with Knowspace leadership, we designed, developed and deployed an advanced awareness
                  system for assisted living facilities (ALF) that monitors and protects seniors with cognitive
                  impairments.
                </p>
                <p className="text-sm md:text-lg mb-6">
                  During a 60-day pilot in late 2024, seniors were able to choose one or more wearable devices from a
                  broad catalog. This included wristwatches and pendants among other stylish, lightweight options.
                  Each device was automatically provisioned in seconds at the front desk by ALF staff using a custom,
                  secure mobile app.
                </p>
                <p className="text-sm md:text-lg mb-6">
                  30 million data points were collected at a rate of 1M per device per week with an operating cost of
                  under $300/mo and capacity for 1000 devices. Several interior and exterior receivers were enough to
                  track resident movement throughout the facility 24/7.
                </p>
                <ul className="text-xs md:text-base space-y-2 mb-8">
                  <li>• 1M data points per device per week</li>
                  <li>• 3-second latency from event to alert</li>
                  <li>• Deployment complexity reduced by 50%</li>
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
  )
}
