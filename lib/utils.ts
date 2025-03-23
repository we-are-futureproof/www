import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateCVCVCId(): string {
  const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z'];
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const getRandomItem = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];
  
  return [
    getRandomItem(consonants),
    getRandomItem(vowels),
    getRandomItem(consonants),
    getRandomItem(vowels),
    getRandomItem(consonants)
  ].join('');
}
