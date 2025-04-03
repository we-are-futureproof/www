"use client"

import { ReactNode, RefObject, forwardRef } from "react"

interface HeaderNavItemProps {
  label: string;
  isActive?: boolean;
  hasSubmenu?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClick?: () => void;
  children?: ReactNode;
  withBackground?: boolean;
}

export default function HeaderNavItem({
  label,
  isActive = false,
  hasSubmenu = false,
  onMouseEnter,
  onMouseLeave,
  onClick,
  children,
  withBackground = false
}: HeaderNavItemProps) {
  return (
    <div 
      className={`relative ${isActive && withBackground ? 'bg-gray-200' : ''}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <button 
        className={`hover:underline focus:outline-none px-4 py-3 ${isActive ? 'underline' : ''}`}
        onClick={onClick}
        aria-expanded={isActive}
        aria-haspopup={hasSubmenu ? "true" : undefined}
      >
        {label}
      </button>
      {children}
    </div>
  );
}
