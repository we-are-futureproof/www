"use client"

import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { handleColorHoverEffect } from "../lib/colorUtils"
import { services } from "../lib/data/services"

interface ServicesMegaMenuProps {
  isVisible: boolean;
  onClose: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export default function ServicesMegaMenu({
  isVisible,
  onClose,
  onMouseEnter,
  onMouseLeave
}: ServicesMegaMenuProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!isVisible || !mounted) return null;

  return createPortal(
    <div
      className="fixed top-[72px] left-0 right-0 w-full bg-gray-200 border-b border-black z-50 shadow-lg services-mega-menu"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="container mx-auto px-4 py-8">
        {/* Responsive grid layout - 2 columns for md, 3 columns for lg+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {/* All services displayed in a responsive grid */}
          {services.map((service) => (
            <Link
              href={service.link}
              key={service.id}
              className="border border-black py-4 px-3 md:p-5 lg:p-6 lg:pl-4 hover:shadow-md group transition-all duration-200 bg-white block"
              onClick={onClose}
              onMouseEnter={handleColorHoverEffect.onMouseEnter}
              onMouseLeave={handleColorHoverEffect.onMouseLeave}
            >
              <div className="flex items-start">
                {/* Responsive icon sizing - much smaller on mobile/tablet */}
                <div className="text-black mr-2 md:mr-3 lg:mr-4 flex-shrink-0 pt-1">
                  {/* Significantly reduce icon size on smaller screens */}
                  <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-12 lg:h-12 relative">
                    {service.icon()}
                  </div>
                </div>
                <div className="flex flex-col overflow-hidden w-full">
                  <div className="flex items-center mb-1 md:mb-2 whitespace-nowrap">
                    <span className="text-gray-500 mr-1 text-xs sm:text-sm md:text-base">STAGE {service.stage} -</span>
                    <span className="text-xs sm:text-sm md:text-base lg:text-lg mr-1">{service.title}</span>
                    <ArrowRight className="h-2 w-2 sm:h-3 sm:w-3 md:h-4 md:w-4 flex-shrink-0" />
                  </div>
                  {/* Show description with appropriate sizing */}
                  <p className="text-[10px] sm:text-xs md:text-sm lg:text-base font-sans truncate">{service.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>,
    document.body
  );
}
