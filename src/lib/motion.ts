import type { Variants } from 'framer-motion'

// Shared scroll-driven fade-in: opacity 0 -> 1, y 20px -> 0px.
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export const fadeInUpViewport = { once: true, margin: '-80px' }

// Immersive-but-minimal scroll reveal for the gallery: a subtle 3D tilt
// settling flat, not a heavy parallax. Needs a `perspective` ancestor.
export const revealTilt: Variants = {
  hidden: { opacity: 0, y: 40, rotateX: 8, scale: 0.96 },
  visible: { opacity: 1, y: 0, rotateX: 0, scale: 1 },
}

export const revealTiltViewport = { once: true, margin: '-100px' }
