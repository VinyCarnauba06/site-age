const ease = [0.16, 1, 0.3, 1]

export const viewportOnce = { once: true, margin: '-60px' }

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
}

export const stagger = (delay = 0.1, delayChildren = 0) => ({
  hidden: {},
  visible: { transition: { staggerChildren: delay, delayChildren } },
})
