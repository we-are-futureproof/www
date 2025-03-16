"use client"

import { useState } from "react"

interface SolutionItem {
  number: string
  descriptionPart1: string
  descriptionPart2: string
}

interface SolutionSectionProps {
  hoveredItem?: number | null
  setHoveredItem?: (index: number | null) => void
}

const SOLUTION_ITEMS: SolutionItem[] = [
  {
    number: "01",
    descriptionPart1: "We use a structured, phase-based approach",
    descriptionPart2:
      "developed over 20+ years of building custom solutions for clients around the world.",
  },
  {
    number: "02",
    descriptionPart1: "We choose practical, jargon-free communication",
    descriptionPart2:
      "through each stage of AI adoption -- from initial planning to pilot and handoff.",
  },
  {
    number: "03",
    descriptionPart1: "We adopt a vendor-neutral stance to your business",
    descriptionPart2:
      'outcomes.  More than any specific technology, we understand "no tech" may be the "right tech".',
  },
  {
    number: "04",
    descriptionPart1: "We provide comprehensive, personalized support",
    descriptionPart2: "including change management and employee training.",
  },
]

export default function SolutionSection({ hoveredItem, setHoveredItem }: SolutionSectionProps = {}) {
  // This handles both local and parent-provided state management
  const [localHoveredItem, setLocalHoveredItem] = useState<number | null>(null)
  
  // Use the provided state functions or fall back to local state
  const currentHoveredItem = hoveredItem !== undefined ? hoveredItem : localHoveredItem
  const handleSetHoveredItem = setHoveredItem || setLocalHoveredItem

  return (
    <div>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5 sm:mb-6 md:mb-8">OUR SOLUTION</h2>
      <ul className="space-y-4 sm:space-y-5 md:space-y-6 text-base sm:text-lg px-2">
        {SOLUTION_ITEMS.map((item, index) => (
          <li
            key={index}
            className="flex items-start border-b border-transparent md:cursor-pointer md:hover:border-black md:transition-all md:duration-200"
            onMouseEnter={() => handleSetHoveredItem(index + 4)}
            onMouseLeave={() => handleSetHoveredItem(null)}
          >
            <span className="font-bold mr-3 sm:mr-4 text-sm sm:text-base md:text-lg mb-14 sm:mb-16 md:mb-20">{item.number}</span>
            <div
              className={`overflow-hidden transition-all duration-100 ${
                currentHoveredItem === index + 4 ? "max-h-96 opacity-100" : "md:max-h-8 md:opacity-70 max-h-96 opacity-100"
              }`}
            >
              <p className="text-sm sm:text-base md:text-lg">
                {item.descriptionPart1}
                <span className="md:hidden">{" " + item.descriptionPart2}</span>
                <span className="hidden md:inline">{currentHoveredItem === index + 4 ? <span>{" " + item.descriptionPart2}</span> : <span>...</span>}</span>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
