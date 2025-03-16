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
      
      {/* Dots navigation */}
      <div className="absolute bottom-2 left-0 right-0 flex justify-center z-10 gap-2">
        {quotes.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={cn(
              "w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all",
              index === activeIndex ? "bg-orange-400 scale-125" : "bg-gray-300"
            )}
            aria-label={`Go to quote ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Quotes container */}
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-hidden snap-x snap-mandatory w-full h-full"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {quotes.map((quote, index) => (
          <div 
            key={index}
            className="flex-none w-full h-full snap-center p-3 sm:p-4 md:p-6 flex flex-col justify-center"
          >
            <div className="bg-white border border-gray-200 p-4 sm:p-6 md:p-6 m-4 rounded-sm shadow-sm h-full flex flex-col">
              <div className="text-gray-700 italic flex-grow text-sm sm:text-base">
                {
                  getQuoteParagraphs(quote).map((paragraph, paragraphIndex) => (
                    <p key={paragraphIndex} className="mb-3 md:mb-4">
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
              <div className="mt-3 md:mt-4">
                <p className="font-bold text-sm md:text-base">{quote.author}</p>
                <p className="text-gray-600 text-xs md:text-sm">{quote.company}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
