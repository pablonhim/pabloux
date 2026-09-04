import type { Variants } from 'framer-motion'

// Shared scroll-driven fade-in: opacity 0 -> 1, y 20px -> 0px. Restrained on
// purpose — this system's drama comes from type scale and light/dark
// section cuts, not motion.
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export const fadeInUpViewport = { once: true, margin: '-80px' }
