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
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          we are futureproof
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link href="/services" className="hover:underline">
            SERVICES
          </Link>
          <Link href="/case-studies" className="hover:underline">
            CASE STUDIES
          </Link>
        </nav>
        <button className="md:hidden" onClick={toggleMobileMenu} aria-label="Toggle menu">
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-black z-10">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/services"
                className="py-2 hover:underline font-bold"
                onClick={() => setMobileMenuOpen(false)}
              >
                SERVICES
              </Link>
              <Link
                href="/case-studies"
                className="py-2 hover:underline font-bold"
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
