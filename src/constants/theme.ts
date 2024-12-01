// This file now serves as documentation for our color and spacing values
export const COLORS = {
  primary: 'orange-500',
  primaryHover: 'orange-600',
  background: 'gray-900',
  card: 'gray-800',
  cardHover: 'gray-700',
  text: {
    primary: 'white',
    secondary: 'gray-300'
  }
} as const;

export const SPACING = {
  section: {
    x: 'px-4 sm:px-6 lg:px-8',
    y: 'py-24'
  }
} as const;