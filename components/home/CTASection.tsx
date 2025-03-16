"use client"

import { ArrowRight } from "lucide-react"
import Button from "../Button"

export default function CTASection() {
  return (
    <section className="border-b border-black">
      <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8">
            Ready to transform your business?
          </h2>
          <p className="text-lg sm:text-xl mb-8 sm:mb-10">
            No sales pitch. No vendor lock-in. Just practical, actionable advice from experienced professionals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <Button href="https://cal.com/amgando/free-strategy-call" variant="primary" size="large">
              BOOK A STRATEGY CALL <ArrowRight className="ml-2" />
            </Button>
            <Button href="/services" variant="secondary" size="large">
              EXPLORE OUR SERVICES <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
