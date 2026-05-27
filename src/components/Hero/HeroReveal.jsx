import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '../Section1/Navbar'

const easing = [0.16, 1, 0.3, 1]

export default function HeroReveal({ theme = 'dark', cameraSrc = '/camera-hero.png', onToggleTheme, introComplete = true }) {
  return (
    <section className='min-h-screen w-full flex flex-col items-center justify-start bg-(--bg)'>
      {/* Fixed navbar on top for HeroReveal (desktop + mobile) */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: easing }} className='fixed inset-x-0 top-4 md:top-2 z-50 flex justify-center pointer-events-auto'>
        <div className='w-full px-4 md:px-2 lg:px-10' style={{ maxWidth: '90rem' }}>
          <Navbar theme={theme} onToggleTheme={onToggleTheme} introComplete={introComplete} />
        </div>
      </motion.div>

      <div className='mx-auto flex w-full max-w-360 flex-col items-center justify-center gap-8 px-4 pt-20 pb-12 sm:px-6 md:gap-6 md:pt-16 lg:pt-20'>
        {/* spacer to avoid content being covered by fixed navbar */}
        <div className='h-10 md:h-4' aria-hidden='true' />
        {/* <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: easing }} className='font-mono text-[0.62rem] uppercase tracking-[0.42em] text-(--accent-gold)'>APERTURE — VISUAL ARCHIVE</motion.p> */}

        <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, ease: easing }} className='font-display text-[clamp(2rem,6.4vw,4.6rem)] leading-tight text-center font-semibold text-(--text-primary)'>
          <span className='block'>Frames shaped</span>
          <span className='block'>by light.</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: easing, delay: 0.12 }} className='max-w-[60ch] text-center text-(--text-secondary)'>A quiet collection of frames and atmospheres — minimal, editorial, calm.</motion.p>

        <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, ease: easing, delay: 0.22 }} className='relative mb-10 flex items-center justify-center md:mb-14 lg:mb-16'>
          <div className='radial-glow' />
          <motion.img
            src={cameraSrc}
            alt='Hero camera'
            className='cinematic-camera max-h-[48vh] w-auto'
            style={{ zIndex: 2, transformOrigin: 'center center' }}
            initial={{ opacity: 0, scale: 0.38, filter: 'blur(14px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.55, delay: 0.28, ease: easing }}
          />
        </motion.div>

        {/* <motion.button initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: easing, delay: 0.36 }} className='aperture-cta mt-4 inline-flex items-center justify-center rounded-full border px-6 py-3 font-body text-[0.72rem] font-medium uppercase tracking-[0.28em]'>
          ENTER ARCHIVE
        </motion.button> */}
      </div>
    </section>
  )
}
