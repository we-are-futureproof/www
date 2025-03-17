// Shared color palette for interactive elements
export const colors = [
  "bg-pink-200",      // Light pink - playful
  "bg-yellow-200",    // Soft yellow - sunny
  "bg-blue-200",      // Sky blue - cheerful
  "bg-green-200",     // Light green - fresh
  "bg-orange-200",    // Soft orange - warm
  "bg-purple-200",    // Lavender - whimsical
  "bg-red-200",       // Light red - energetic
  "bg-teal-200",      // Seafoam - unexpected
  "bg-lime-200",      // Bright lime - vibrant
  "bg-fuchsia-200",   // Bright pink - fun
];

// Function to get a random color from the palette
export const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

// Utility to handle color hover effects
export const handleColorHoverEffect = {
  // Apply random color on mouse enter
  onMouseEnter: (e: React.MouseEvent<HTMLElement>) => {
    const randomColor = getRandomColor();
    
    // Remove any existing color classes and transition classes
    const currentClasses = e.currentTarget.className.split(" ");
    const newClasses = currentClasses.filter(
      (cls) => !cls.match(/bg-\w+-\d+/) && !cls.match(/transition-/)
    );
    
    // Add the new random color with fast transition in
    e.currentTarget.className = [
      ...newClasses, 
      randomColor, 
      "transition-colors", 
      "duration-500", 
      "ease-in"
    ].join(" ");
  },
  
  // Remove color with slow transition on mouse leave
  onMouseLeave: (e: React.MouseEvent<HTMLElement>) => {
    const currentClasses = e.currentTarget.className.split(" ");
    
    // Remove existing transition classes first
    const baseClasses = currentClasses.filter(
      (cls) => !cls.match(/transition-/) && !cls.match(/duration-/) && !cls.match(/ease-/)
    );
    
    // Add slow transition out classes
    const newClasses = [
      ...baseClasses, 
      "transition-colors", 
      "duration-[5000ms]", 
      "ease-out"
    ];
    
    // Remove color classes
    const finalClasses = newClasses.filter(
      (cls) => !cls.match(/bg-\w+-\d+/)
    );
    
    e.currentTarget.className = finalClasses.join(" ");
  }
};
