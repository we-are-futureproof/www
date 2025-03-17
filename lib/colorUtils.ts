/**
 * Color Hover Effect Implementation
 * 
 * Behavior: Fast color in (300ms), slow color out (3000ms) for EVERY hover
 */


// Shared color palette for interactive elements
const colors = [
   "#fbcfe8", // Light pink - playful   "bg-pink-200"
   "#fef08a", // Soft yellow - sunny    "bg-yellow-200"
   "#bfdbfe", // Sky blue - cheerful    "bg-blue-200"
   "#bbf7d0", // Light green - fresh    "bg-green-200"
   "#fed7aa", // Soft orange - warm     "bg-orange-200"
   "#e9d5ff", // Lavender - whimsical   "bg-purple-200"
   "#fecaca", // Light red - energetic  "bg-red-200"
   "#99f6e4", // Seafoam - unexpected   "bg-teal-200"
   "#d9f99d", // Bright lime - vibrant  "bg-lime-200"
   "#f5d0fe"  // Bright pink - fun      "bg-fuchsia-200
];

// Function to get a random color from the palette
export const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

// Apply CSS classes safely
const applyClasses = (element: HTMLElement, newClasses: string[]) => {
  // Remove existing color and transition classes
  const baseClasses = element.className.split(' ').filter(cls => 
    !cls.match(/bg-\w+-\d+/) && 
    !cls.match(/transition-colors/) && 
    !cls.match(/duration-[\w\[\]]+/) && 
    !cls.match(/ease-\w+/)
  );
  
  // Set the new combined classes
  const combinedClasses = [...baseClasses, ...newClasses];
  element.className = combinedClasses.join(' ');
};

// Utility to handle color hover effects
export const handleColorHoverEffect = {
  // Apply random color on mouse enter
  onMouseEnter: (e: React.MouseEvent<HTMLElement>) => {
    const element = e.currentTarget;
    
    // Get the hex value for the selected Tailwind color
    const bgColor = getRandomColor();
    
    // Apply color change synchronously to background only
    element.style.backgroundColor = bgColor;
    
    // Then apply classes to handle the transition
    requestAnimationFrame(() => {
      // Apply fast in transition
      applyClasses(element, [
        'transition-colors',
        'duration-300',
        'ease-in-out'
      ]);
    });
  },
  
  // Remove color with slow transition on mouse leave
  onMouseLeave: (e: React.MouseEvent<HTMLElement>) => {
    const element = e.currentTarget;
    
    // Set the transition properties for background color only
    element.style.transition = 'background-color 3000ms ease-out';
    
    // Then clear the inline background color with the transition
    setTimeout(() => {
      // Only clear the background color, preserve all other styles
      element.style.backgroundColor = 'transparent';
    }, 10);
    
    // Apply class-based transition as a backup approach
    requestAnimationFrame(() => {
      // Remove any color classes but keep the transition properties
      const currentClasses = element.className.split(' ').filter(cls => !cls.match(/bg-\w+-\d+/));
      element.className = [
        ...currentClasses,
        'transition-colors', 
        'duration-[3000ms]', 
        'ease-out'
      ].join(' ');
    });
  }
};
