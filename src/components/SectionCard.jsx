import { motion } from 'framer-motion'

function SectionCard({ children, className = '' }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.24, ease: 'easeOut' }}
      className={`rounded-[30px] border border-white/60 bg-white/80 p-7 shadow-soft backdrop-blur-sm ${className}`}
    >
      {children}
    </motion.div>
  )
}

export default SectionCard
