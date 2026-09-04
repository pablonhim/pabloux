import type { Variants } from 'framer-motion'

// Shared scroll-driven fade-in: opacity 0 -> 1, y 20px -> 0px. Restrained on
// purpose — this system's drama comes from type scale and light/dark
// section cuts, not motion.
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export const fadeInUpViewport = { once: true, margin: '-80px' }

// The one deliberate exception to "restrained motion": the Digital Asset
// Store cards fly and rotate in from below as they enter the viewport.
// Alternate the rotation direction by index (see productFlyIn) so the grid
// doesn't feel mechanically repetitive.
export function flyRotateIn(direction: 1 | -1): Variants {
  return {
    hidden: { opacity: 0, y: 140, rotate: 8 * direction, scale: 0.94 },
    visible: { opacity: 1, y: 0, rotate: 0, scale: 1 },
  }
}

export const flyRotateViewport = { once: true, margin: '-120px', amount: 0.3 }
