"use client"

import { useState } from "react"

interface ProblemItem {
  number: string
  title: string
  description: string
}

interface ProblemSectionProps {
  hoveredItem?: number | null
  setHoveredItem?: (index: number | null) => void
}

const PROBLEM_ITEMS: ProblemItem[] = [
  {
    number: "01",
    title: "Information overload",
    description: "It's difficult to distinguish between practical application and unrealistic hype.",
  },
  {
    number: "02",
    title: "Lack of internal expertise",
    description: "Vendor incentives do not always align with yours. That means more risk for you.",
  },
  {
    number: "03",
    title: "Limited bandwidth",
    description: "Evaluating, implementing, and monitoring new technology is always a challenge.",
  },
  {
    number: "04",
    title: "Fear of making costly mistakes",
    description:
      "AI investments deliver large outcomes quickly. Right now, hesitation means missed opportunities.",
  },
]

export default function ProblemSection({ hoveredItem, setHoveredItem }: ProblemSectionProps = {}) {
  // This handles both local and parent-provided state management
  const [localHoveredItem, setLocalHoveredItem] = useState<number | null>(null)
  
  // Use the provided state functions or fall back to local state
  const currentHoveredItem = hoveredItem !== undefined ? hoveredItem : localHoveredItem
  const handleSetHoveredItem = setHoveredItem || setLocalHoveredItem

  return (
    <div>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-thin mb-5 sm:mb-6 md:mb-8">THE PROBLEM</h2>
      <ul className="space-y-4 sm:space-y-5 md:space-y-6 text-base sm:text-lg px-2">
        {PROBLEM_ITEMS.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start border-b border-transparent md:cursor-pointer md:hover:border-black md:transition-all md:duration-100"
                  onMouseEnter={() => handleSetHoveredItem(index)}
                  onMouseLeave={() => handleSetHoveredItem(null)}
                  onClick={() => handleSetHoveredItem(currentHoveredItem === index ? null : index)}
                >
                  <span className="font-bold mr-3 sm:mr-4 text-sm sm:text-base md:text-lg mb-14 sm:mb-16 md:mb-20">{item.number}</span>
                  <div className="flex-1">
                    <span className="font-thin block mb-1 text-sm sm:text-base md:text-lg">{item.title}</span>
                    <span
                      className={`font-normal text-gray-700 block overflow-hidden transition-all duration-200 text-sm sm:text-base md:text-lg ${
                        currentHoveredItem === index ? "max-h-96 opacity-100" : "md:max-h-0 md:opacity-0 max-h-96 opacity-100"
                      }`}
                    >
                      {item.description}
                    </span>
                  </div>
                </li>
              ))}
      </ul>
    </div>
  )
}
