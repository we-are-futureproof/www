"use client"

import { useEffect, useState, useRef } from 'react';
import { Quote, getQuoteParagraphs, QuoteSegment } from '@/lib/quotes';
import { cn } from '@/lib/utils';

interface TestimonialCarouselProps {
  quotes: Quote[];
  autoScrollInterval?: number; // in milliseconds
}

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ 
  quotes, 
  autoScrollInterval = 8000 
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  // Function to move to the next quote
  const nextQuote = () => {
    setActiveIndex((prev) => (prev + 1) % quotes.length);
  };

  // Handle auto-scrolling
  useEffect(() => {
    if (quotes.length <= 1) return;
    
    const interval = setInterval(() => {
      nextQuote();
    }, autoScrollInterval);
    
    return () => clearInterval(interval);
  }, [quotes.length, autoScrollInterval]);

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
    <div className="w-full h-full relative overflow-hidden pb-4">
      {/* Dots navigation */}
      <div className="absolute bottom-2 left-0 right-0 flex justify-center z-10 gap-2">
        {quotes.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={cn(
              "w-2 h-2 rounded-full transition-all",
              index === activeIndex ? "bg-orange-300 scale-125" : "bg-gray-200"
            )}
            aria-label={`Go to quote ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Quotes container */}
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-hidden snap-x snap-mandatory w-full h-full"
      >
        {quotes.map((quote, index) => (
          <div 
            key={index}
            className="flex-none w-full h-full snap-center p-6 flex flex-col justify-center"
          >
            <div className="bg-white border border-gray-200 p-8 rounded-sm shadow-sm h-full flex flex-col">
              <div className="text-gray-700 italic flex-grow">
                {
                  getQuoteParagraphs(quote).map((paragraph, paragraphIndex) => (
                    <p key={paragraphIndex} className="mb-4">
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
              <div className="mt-4">
                <p className="font-bold">{quote.author}</p>
                <p className="text-gray-600 text-sm">{quote.company}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
