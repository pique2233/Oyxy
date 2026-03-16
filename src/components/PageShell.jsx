import { motion } from 'framer-motion'

function PageShell({ eyebrow, title, description, children }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20"
    >
      {(eyebrow || title || description) && (
        <div className="mb-12 max-w-3xl">
          {eyebrow && (
            <p className="mb-4 text-sm uppercase tracking-[0.34em] text-apple-red/80">
              {eyebrow}
            </p>
          )}
          {title && <h1 className="font-serif-display text-4xl leading-tight text-ink md:text-6xl">{title}</h1>}
          {description && <p className="mt-5 text-lg leading-8 text-ink/68">{description}</p>}
        </div>
      )}
      {children}
    </motion.section>
  )
}

export default PageShell
