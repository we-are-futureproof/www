"use client"

import { Menu, X } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import ServicesMegaMenu from "./ServicesMegaMenu"
import MobileMenu from "./MobileMenu"
import HeaderNavItem from "./HeaderNavItem"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false)
  const servicesMenuRef = useRef<HTMLDivElement>(null)
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Function to close the menu with a delay
  const closeMenuWithDelay = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    
    closeTimeoutRef.current = setTimeout(() => {
      setServicesMenuOpen(false);
      closeTimeoutRef.current = null;
    }, 300); // 300ms delay before closing
  };
  
  // Function to cancel the closing timeout
  const cancelCloseMenu = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };
  
  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  // Close mega menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (servicesMenuRef.current && !servicesMenuRef.current.contains(event.target as Node) && 
          !((event.target as HTMLElement).closest('.services-mega-menu'))) {
        setServicesMenuOpen(false);
      }
    }

    if (servicesMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [servicesMenuRef, servicesMenuOpen])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
    // Close services menu when toggling mobile menu
    if (!mobileMenuOpen) {
      setServicesMenuOpen(false)
    }
  }

  const toggleServicesMenu = () => {
    setServicesMenuOpen(!servicesMenuOpen);
  }

  return (
    <header className="border-b border-black relative z-20">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          we are futureproof
        </Link>
        <nav className="hidden md:flex space-x-8">
          <div 
            ref={servicesMenuRef}
            onMouseEnter={() => {
              cancelCloseMenu();
              setServicesMenuOpen(true);
            }}
            onMouseLeave={closeMenuWithDelay}
          >
            <HeaderNavItem 
              label="SERVICES" 
              isActive={servicesMenuOpen}
              hasSubmenu={true}
              onClick={toggleServicesMenu}
              withBackground={true}
            />
          </div>
          <Link href="/case-studies" className="hover:underline">
            <HeaderNavItem label="CASE STUDIES" />
          </Link>
        </nav>
        <button className="md:hidden" onClick={toggleMobileMenu} aria-label="Toggle menu">
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Services Mega Menu component is using a portal */}
      <ServicesMegaMenu 
        isVisible={servicesMenuOpen} 
        onClose={() => setServicesMenuOpen(false)}
        onMouseEnter={cancelCloseMenu}
        onMouseLeave={closeMenuWithDelay}
      />
      
      {/* Mobile Menu */}
      <MobileMenu 
        isVisible={mobileMenuOpen}
        servicesMenuOpen={servicesMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onToggleServices={() => setServicesMenuOpen(!servicesMenuOpen)}
      />
    </header>
  )
}
