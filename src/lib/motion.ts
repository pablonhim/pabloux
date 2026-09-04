import { useScroll, useTransform, type MotionValue, type Variants } from 'framer-motion'
import type { RefObject } from 'react'

// Shared scroll-driven fade-in: opacity 0 -> 1, y 20px -> 0px. Restrained on
// purpose — this system's drama comes from type scale and light/dark
// section cuts, not motion.
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export const fadeInUpViewport = { once: true, margin: '-80px' }

export interface FlyRotateScroll {
  y: MotionValue<number>
  rotate: MotionValue<number>
  opacity: MotionValue<number>
  scale: MotionValue<number>
}

// The one deliberate exception to "restrained motion": the Digital Asset
// Store cards fly and rotate in from below, scrubbed directly to scroll
// position — not a one-shot animation that plays once the card appears.
// Scroll a little, the card moves a little; stop scrolling, it stops;
// scroll back up, it reverses. Alternate `direction` per card index so the
// grid doesn't feel mechanically repetitive.
export function useFlyRotateScroll(
  ref: RefObject<HTMLElement | null>,
  direction: 1 | -1,
): FlyRotateScroll {
  const { scrollYProgress } = useScroll({
    target: ref,
    // Progress 0 when the card's top edge enters the bottom of the
    // viewport, progress 1 once it's scrolled about 45% up the screen —
    // the animation is "done" well before the card reaches center.
    offset: ['start 100%', 'start 55%'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [140, 0])
  const rotate = useTransform(scrollYProgress, [0, 1], [8 * direction, 0])
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])
  const scale = useTransform(scrollYProgress, [0, 1], [0.94, 1])

  return { y, rotate, opacity, scale }
}
