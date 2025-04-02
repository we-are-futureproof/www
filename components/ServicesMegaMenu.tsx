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
        <div className="flex gap-6">
          {/* Left column (stages 1-3) */}
          <div className="flex-1 flex flex-col gap-6">
            {services.slice(0, 3).map((service) => (
              <Link 
                href={service.link} 
                key={service.id}
                className="border border-black p-6 hover:shadow-md group transition-all duration-200 bg-white block"
                onClick={onClose}
                onMouseEnter={handleColorHoverEffect.onMouseEnter}
                onMouseLeave={handleColorHoverEffect.onMouseLeave}
              >
                <div className="flex">
                  <div className="text-black mr-6 flex-shrink-0">
                    {service.icon()}
                  </div>
                  <div className="flex flex-col">
                    <div className="text-xl flex items-center mb-2">
                      <span className="text-gray-500 mr-2">Stage {service.stage} -</span> {service.title} <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                    <p className="text-lg font-sans">{service.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          {/* Right column (stages 4-6) */}
          <div className="flex-1 flex flex-col gap-6">
            {services.slice(3, 6).map((service) => (
              <Link 
                href={service.link} 
                key={service.id}
                className="border border-black p-6 hover:shadow-md group transition-all duration-200 bg-white block"
                onClick={onClose}
                onMouseEnter={handleColorHoverEffect.onMouseEnter}
                onMouseLeave={handleColorHoverEffect.onMouseLeave}
              >
                <div className="flex">
                  <div className="text-black mr-6 flex-shrink-0">
                    {service.icon()}
                  </div>
                  <div className="flex flex-col">
                    <div className="text-xl flex items-center mb-2">
                      <span className="text-gray-500 mr-2">Stage {service.stage} -</span> {service.title} <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                    <p className="text-lg font-sans">{service.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
