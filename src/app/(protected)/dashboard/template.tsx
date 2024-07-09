'use client'

import { motion } from 'framer-motion'

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      transition={{
        duration: .4,
        ease: 'easeInOut',
      }}
      initial={{
        opacity: 0,
        filter: 'blur(2px)'
      }}
      animate={{
        opacity: 1,
        filter: 'blur(0px)'
      }}
    >
      {children}
    </motion.div>
  )
}