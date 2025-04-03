"use client"

import Link from "next/link"
import { services } from "../lib/data/services"

interface MobileMenuProps {
  isVisible: boolean;
  servicesMenuOpen: boolean;
  onClose: () => void;
  onToggleServices: () => void;
}

export default function MobileMenu({
  isVisible,
  servicesMenuOpen,
  onClose,
  onToggleServices
}: MobileMenuProps) {
  if (!isVisible) return null;

  return (
    <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-black z-10">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex flex-col space-y-4">
          <div className="py-2">
            <Link
              href="/services"
              className="font-bold hover:underline w-full text-left block"
              onClick={() => {
                onClose();
              }}
            >
              SERVICES
            </Link>
            {servicesMenuOpen && (
              <div className="pl-4 mt-4 space-y-4 border-t border-gray-200 pt-3">
                {services.map(service => (
                  <Link
                    key={service.id}
                    href={service.link}
                    className="block py-2 hover:underline text-sm font-sans flex items-center"
                    onClick={() => {
                      onClose();
                    }}
                  >
                    <div className="mr-3 flex-shrink-0">{service.icon()}</div>
                    <span><span className="text-gray-500">Stage {service.stage} -</span> {service.title}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link
            href="/case-studies"
            className="py-2 hover:underline font-bold"
            onClick={onClose}
          >
            CASE STUDIES
          </Link>
        </nav>
      </div>
    </div>
  );
}
