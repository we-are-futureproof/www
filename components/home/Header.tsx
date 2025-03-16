"use client"

import { Menu, X } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header className="border-b border-black relative z-20">
      <div className="container mx-auto px-4 py-4 sm:py-6 flex justify-between items-center">
        <Link href="/" className="text-xl sm:text-2xl font-bold">
          WE ARE FUTUREPROOF
        </Link>
        <nav className="hidden md:flex space-x-6 lg:space-x-8">
          <Link href="/services" className="hover:underline text-sm lg:text-base">
            SERVICES
          </Link>
          <Link href="/case-studies" className="hover:underline text-sm lg:text-base">
            CASE STUDIES
          </Link>
        </nav>
        <button className="md:hidden p-1" onClick={toggleMobileMenu} aria-label="Toggle menu">
          {mobileMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-black z-10">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-3">
              <Link
                href="/services"
                className="py-2 hover:underline font-bold text-sm sm:text-base"
                onClick={() => setMobileMenuOpen(false)}
              >
                SERVICES
              </Link>
              <Link
                href="/case-studies"
                className="py-2 hover:underline font-bold text-sm sm:text-base"
                onClick={() => setMobileMenuOpen(false)}
              >
                CASE STUDIES
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
