"use client"

import { useEffect, useState, useRef } from 'react';
import { Quote, getQuoteParagraphs, QuoteSegment } from '@/lib/quotes';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface TestimonialCarouselProps {
  quotes: Quote[];
  autoScrollInterval?: number; // in milliseconds
}

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ 
  quotes, 
  autoScrollInterval = 8000 
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  // Function to move to the next quote
  const nextQuote = () => {
    setActiveIndex((prev) => (prev + 1) % quotes.length);
  };

  // Function to move to the previous quote
  const prevQuote = () => {
    setActiveIndex((prev) => (prev === 0 ? quotes.length - 1 : prev - 1));
  };

  // Handle auto-scrolling
  useEffect(() => {
    if (quotes.length <= 1 || isPaused) return;
    
    const interval = setInterval(() => {
      nextQuote();
    }, autoScrollInterval);
    
    return () => clearInterval(interval);
  }, [quotes.length, autoScrollInterval, isPaused]);

  // Scroll to the active quote when activeIndex changes
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

  // If no quotes, return nothing
  if (!quotes.length) return null;

  return (
    <div className="w-full h-full relative overflow-hidden">
      {/* Navigation arrows - only show on devices that likely have hover */}
      <div className="hidden md:block">
        <button
          onClick={prevQuote}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-1 shadow-sm transition-all duration-200 hover:scale-150"
          aria-label="Previous quote"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={nextQuote}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-1 shadow-sm transition-all duration-200 hover:scale-150"
          aria-label="Next quote"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
      
      {/* No mobile swipe indicators as requested */}
      
      {/* Dots navigation - improved for mobile */}
      <div className="absolute bottom-2 sm:bottom-3 left-0 right-0 flex justify-center z-10 gap-2">
        {quotes.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={cn(
              "w-4 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full transition-all",
              index === activeIndex ? "bg-orange-400" : "bg-gray-300"
            )}
            aria-label={`Go to quote ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Quotes container - improved touch behavior */}
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-hidden snap-x snap-mandatory w-full h-full touch-pan-x"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => {
          // Resume auto-scroll after a delay when touch ends
          setTimeout(() => setIsPaused(false), 5000);
        }}
      >
        {quotes.map((quote, index) => (
          <div 
            key={index}
            className="flex-none w-full h-full snap-center p-1 sm:p-2 md:p-5 flex flex-col justify-center"
          >
            <div className="bg-white border border-gray-200 m-4 p-2 sm:p-4 md:p-6 rounded-sm shadow-sm h-auto sm:h-full flex flex-col max-h-full">
              <div className="text-gray-700 italic flex-grow text-sm sm:text-base overflow-hidden">
                {
                  getQuoteParagraphs(quote).map((paragraph, paragraphIndex) => (
                    <p key={paragraphIndex} className="mb-1.5 sm:mb-2 md:mb-4">
                      {paragraph.segments.map((segment: QuoteSegment, segmentIndex: number) => (
                        <span 
                          key={segmentIndex}
                          className={cn(
                            segment.highlight ? "bg-orange-200" : ""
                          )}
                        >
                          {segment.text}
                        </span>
                      ))}
                    </p>
                  ))
                }
              </div>
              <div className="mt-2 sm:mt-3 md:mt-4">
                <p className="font-bold text-sm sm:text-base">{quote.author}</p>
                <p className="text-gray-600 text-xs sm:text-sm">{quote.company}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
