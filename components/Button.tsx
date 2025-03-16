import React, { ReactNode } from "react";
import Link from "next/link";
import { cn } from "../lib/utils";

type ButtonVariant = "primary" | "secondary";
type ButtonSize = "default" | "large";

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
  ariaLabel?: string;
  fullWidth?: boolean;
}

export default function Button({
  variant = "secondary",
  size = "default",
  href,
  className = "",
  children,
  onClick,
  ariaLabel,
  fullWidth = false,
}: ButtonProps) {
  // Define base styles common to all buttons
  const baseStyles = "inline-flex items-center border border-black font-bold transition-colors";

  // Define variant-specific styles
  const variantStyles = {
    // Light blue background → darker blue on hover (used for CTAs)
    primary: "bg-blue-200 text-black hover:bg-blue-800 hover:text-white",
    // White background → black on hover (used for regular buttons)
    secondary: "bg-white text-black hover:bg-black hover:text-white",
  };

  // Define size-specific styles with responsive adjustments
  const sizeStyles = {
    default: "px-4 py-2 text-sm sm:px-5 sm:py-2.5 md:px-6 md:py-3 md:text-base",
    large: "px-6 py-3 text-base sm:px-7 sm:py-3.5 md:px-8 md:py-4 md:text-lg",
  };

  // Full width style
  const widthStyle = fullWidth ? "w-full justify-center" : "";

  // Combine all styles
  const buttonStyles = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    widthStyle,
    className
  );

  // If an href is provided, render as a Link
  if (href) {
    return (
      <Link 
        href={href} 
        className={buttonStyles}
        aria-label={ariaLabel}
      >
        {children}
      </Link>
    );
  }

  // Otherwise render as a button
  return (
    <button 
      className={buttonStyles} 
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
