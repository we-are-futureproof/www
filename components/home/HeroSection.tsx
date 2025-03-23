"use client"

import { ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"
import Button from "../Button"
import TestimonialCarousel from "../TestimonialCarousel"
import { Quote } from "../../lib/quotes"
import { heroHooks, HeroHook } from '@/lib/data/hero-hooks';

interface HeroSectionProps {
  heroQuotes: Quote[]
}

export default function HeroSection({ heroQuotes }: HeroSectionProps) {
  const [showImage, setShowImage] = useState(true)
  const [mobileTeaserText, setMobileTeaserText] = useState<HeroHook | null>(null);
  const [trackingId, setTrackingId] = useState<string | null>(null);

  // Effect to handle the image fade out after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Randomly select a teaser text on component mount
    const randomIndex = Math.floor(Math.random() * heroHooks.length);
    const selectedHook = heroHooks[randomIndex];
    setMobileTeaserText(selectedHook);
    setTrackingId(selectedHook.id);
  }, []);

  // Construct Cal.com booking URL with optional tracking parameter
  const calComBookingUrl = mobileTeaserText 
    ? `https://cal.com/amgando/free-strategy-call${window.innerWidth < 768 ? `?t=${trackingId}` : '?t=www'}` 
    : 'https://cal.com/amgando/free-strategy-call?t=www';

  return (
    <section className="border-b border-black">
      <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
        <div className="flex flex-col xl:flex-row items-start gap-6 sm:gap-8 md:gap-12">
          <div className="w-full xl:w-3/5">
            {/* Mobile headline */}
            <h1 className="block md:hidden text-2xl sm:text-3xl font-thin mb-4 sm:mb-6 leading-tight">
              From AI Complexity
              <br />
              to <span className="font-sans font-bold tracking-wide text-gray-800 font-thin text-4xl">ai simplicity</span>
            </h1>

            {/* Mobile teaser text */}
            {mobileTeaserText && (
              <p className="block md:hidden text-base text-gray-600 mb-6 leading-relaxed">
                {mobileTeaserText.text}
              </p>
            )}

            {/* Desktop headline */}
            <h1 className="hidden md:block text-4xl lg:text-5xl font-thin mb-6 md:mb-8 leading-tight">
              From AI Complexity
              <br />
              <span className="font-sans font-bold tracking-wide text-gray-800">to Competitive Advantage</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-10 md:mb-14 max-w-2xl">
              End the overwhelm. <br className="block md:hidden" />See results <span className='bg-green-200'>within days</span>.
            </p>
            <Button
              href={calComBookingUrl}
              variant="primary"
              size="large"
              fullWidth={true}
              className="rounded-md sm:w-auto sm:justify-start"
            >
              BOOK A <span className="hidden md:inline">&nbsp;(free)&nbsp;</span>STRATEGY CALL
              <ArrowRight className="ml-2" />
            </Button>
            <p className="mt-4 xl:mt-6 text-base sm:text-lg md:text-xl text-gray-700 py-4 sm:py-6 md:py-8 pl-0 sm:pl-2">
              <span className="hidden md:inline"> • </span><strong>28 years</strong> building automation solutions
              <br className="hidden md:block" /><span className="inline"> • </span>
              <strong>80+ enterprise clients</strong> including six of the Fortune 100
              <br className="hidden md:block" /><span className="inline"> • </span>
              <strong>4 Small / Medium Businesses (SMBs)</strong> achieved implementation within 3 weeks
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 py-2 sm:py-3 md:py-4 pl-0 sm:pl-2">
              AI is already transforming your industry. <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>It's time to take advantage of this disruption.
            </p>
          </div>
          <div className="w-full xl:w-2/5 h-[400px] md:h-[450px] lg:h-[530px] border border-gray-400 overflow-hidden relative mt-4 md:mt-0">
            {/* Hero testimonial section */}
            <div className="w-full h-full relative">
              <div 
                className={`absolute inset-0 z-10 transition-opacity duration-1000 bg-white flex items-center justify-center ${showImage ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
              >
                <img
                  src="/oneline-geopath.png"
                  alt="Minimalist line drawing of two connected location pins - symbolizing guidance and direction"
                  className="w-full h-full object-contain bg-white p-4 sm:p-6 md:p-8 pt-2 sm:pt-3 md:pt-4"
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
  )
}
