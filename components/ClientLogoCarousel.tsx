"use client"

import { useEffect, useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Helper function similar to the cn function from utils
function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

// Federal client logos ordered by significance
const federalClientLogos = [
  '/clients/fed-dhs.png',     // Department of Homeland Security
  '/clients/fed-faa.png',     // Federal Aviation Administration
  '/clients/fed-edu.png',     // Department of Education
  '/clients/fed-labor.png',   // Department of Labor
  '/clients/fed-loc.png'      // Library of Congress
];

// Commercial client logos ordered by brand recognition
const commercialClientLogos = [
  '/clients/microsoft.png',    // Most recognized tech brand
  '/clients/verizon.png',     // Major telecom
  '/clients/homedepot.png',   // Major retailer
  '/clients/caterpillar.png', // Major industrial brand
  '/clients/nationwide.png',  // Large insurance company
  '/clients/stripe.png',      // Tech/payments company
  '/clients/marykay.png',     // Consumer products
  '/clients/kaplan.png'       // Education services
];

// Helper function to generate logo slides (2x2 grid), displaying commercial clients first, then federal
const generateLogoSlides = () => {
  const slides = [];

  // Use logos in their pre-defined order (no randomization)
  // Commercial clients first (most recognizable brands first)
  // Generate commercial client slides (4 per slide)
  for (let i = 0; i < commercialClientLogos.length; i += 4) {
    const remaining = commercialClientLogos.slice(i, Math.min(i + 4, commercialClientLogos.length));
    // If we need to fill the grid with more logos
    if (remaining.length < 4) {
      const fillCount = 4 - remaining.length;
      const additional = commercialClientLogos.slice(0, fillCount);
      slides.push([...remaining, ...additional]);
    } else {
      slides.push(remaining);
    }
  }

  // Federal clients at the end
  // Generate federal client slides (4 per slide)
  for (let i = 0; i < federalClientLogos.length; i += 4) {
    const remaining = federalClientLogos.slice(i, Math.min(i + 4, federalClientLogos.length));
    // If we need to fill the grid with more logos
    if (remaining.length < 4) {
      const fillCount = 4 - remaining.length;
      const additional = federalClientLogos.slice(0, fillCount);
      slides.push([...remaining, ...additional]);
    } else {
      slides.push(remaining);
    }
  }


  return slides;
};

interface ClientLogoCarouselProps {
  autoScrollInterval?: number; // in milliseconds
}

const ClientLogoCarousel: React.FC<ClientLogoCarouselProps> = ({
  autoScrollInterval = 8000
}) => {
  // Generate the slides once when the component mounts
  // Generate slides without randomization to avoid hydration errors
  const [slides] = useState(generateLogoSlides());
  
  // No need to shuffle slides anymore since we're using a fixed order
  // based on brand recognition
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Function to move to the next slide
  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  // Function to move to the previous slide
  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // No need for client-side shuffle effect anymore since we're using a fixed order

  // Handle auto-scrolling
  useEffect(() => {
    if (slides.length <= 1 || isPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, autoScrollInterval);

    return () => clearInterval(interval);
  }, [slides.length, autoScrollInterval, isPaused]);

  // Scroll to the active slide when activeIndex changes
  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const activeElement = container.children[activeIndex] as HTMLElement;

      if (activeElement) {
        container.scrollTo({
          left: activeElement.offsetLeft,
          behavior: 'smooth'
        });
      }
    }
  }, [activeIndex]);

  // If no slides, return nothing
  if (!slides.length) return null;

  return (
    <div className="w-full h-full relative overflow-hidden">
      {/* Navigation arrows - only show on devices that likely have hover */}
      <div className="hidden md:block">
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-1 shadow-sm transition-all duration-200 hover:scale-150"
          aria-label="Previous logos"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-1 shadow-sm transition-all duration-200 hover:scale-150"
          aria-label="Next logos"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Dots navigation - improved for mobile */}
      <div className="absolute bottom-2 sm:bottom-3 left-0 right-0 flex justify-center z-10 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={cn(
              "w-4 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full transition-all",
              index === activeIndex ? "bg-orange-400" : "bg-gray-300"
            )}
            aria-label={`Go to logo set ${index + 1}`}
          />
        ))}
      </div>

      {/* Logo slides container - improved touch behavior */}
      <div
        className="w-full h-full"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="flex-none w-full h-full flex flex-col justify-center">
          <div className="bg-white border border-gray-50 m-0 p-0 rounded-sm shadow-sm h-full flex flex-col justify-center">
            <div className="grid grid-cols-2 h-full w-full">
              {slides[activeIndex].map((logo, logoIndex) => (
                <div key={logoIndex} className="flex items-center justify-center h-full">
                  <img
                    src={logo}
                    alt={`Client logo ${logoIndex + 1}`}
                    className="h-[150px] sm:h-[200px] md:h-[250px] w-auto max-w-full p-2 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientLogoCarousel;
