import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Default to the local public asset so dropping the PNG into `public/camera-hero.png` works immediately.
const DEFAULT_CAMERA_SRC = '/camera-hero.png'

export default function CinematicLoader({ theme = 'dark', onComplete, cameraSrc }) {
  const [percent, setPercent] = useState(0)
  const CAMERA_SRC = cameraSrc || DEFAULT_CAMERA_SRC

  function LoadingDots({ text = 'Loading' }) {
    const [dots, setDots] = useState('...')
    useEffect(() => {
      const id = setInterval(() => setDots((d) => (d.length >= 3 ? '.' : d + '.')), 450)
      return () => clearInterval(id)
    }, [])
    return (
      <span className='flex items-center gap-2'>
        <span>{text}</span>
        <span className='opacity-90'>{dots}</span>
      </span>
    )
  }

  useEffect(() => {
    let raf = null
    const duration = 2600 // ms (within 2200-3200ms)
    const start = performance.now()

    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration)
      // easeOutCubic
      const eased = 1 - Math.pow(1 - t, 3)
      const value = Math.round(eased * 100)
      setPercent(value)
      if (t < 1) raf = requestAnimationFrame(tick)
      else {
        // small pause before completing to let final frame settle
        setTimeout(() => onComplete && onComplete(), 220)
      }
    }

    raf = requestAnimationFrame(tick)
    return () => raf && cancelAnimationFrame(raf)
  }, [onComplete])

  return (
    <AnimatePresence>
      <motion.div
        key='cinematic-loader'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, filter: 'blur(6px)', transition: { duration: 0.6 } }}
        transition={{ duration: 0.45 }}
        className={`fixed inset-0 z-50 flex items-center justify-center cinematic-loader`}
        aria-hidden='true'
      >
        <div className='relative flex flex-col items-center gap-6'>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className='text-center'
          >
            <div className='text-[clamp(2.2rem,6.5vw,4rem)] font-display font-semibold tracking-tight text-(--text-primary)'>
              {percent}
            </div>
          </motion.div>

          <motion.img
            src={CAMERA_SRC}
            alt='Cinematic camera'
            className='cinematic-camera pointer-events-none select-none'
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: [1, 1.015, 1.01] }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          />

          <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16,1,0.3,1], delay: 0.22 }} className='text-(--text-secondary) text-[0.86rem] font-body opacity-70'>
            <LoadingDots text='Visual system loading' />
          </motion.div>

          <div className='absolute inset-0 pointer-events-none'>
            <div className='grain' />
            <div className='vignette' />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
