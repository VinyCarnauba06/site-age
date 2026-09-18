import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '../lib/motion'

export default function SectionHead({ title, description, center = false, light = false }) {
  return (
    <motion.div
      className={`section-head${center ? ' section-head--center' : ''}${light ? ' section-head--light' : ''}`}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </motion.div>
  )
}
