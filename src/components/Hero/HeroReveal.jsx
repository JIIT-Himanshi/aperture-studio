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

      <div className='mx-auto flex w-full max-w-360 flex-col items-center justify-center gap-7 px-3 pt-18 pb-10 sm:px-5 sm:pt-20 md:gap-6 md:px-8 md:pt-16 lg:pt-20'>
        {/* spacer to avoid content being covered by fixed navbar */}
        <div className='h-8 md:h-4' aria-hidden='true' />
        {/* <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: easing }} className='font-mono text-[0.62rem] uppercase tracking-[0.42em] text-(--accent-gold)'>APERTURE — VISUAL ARCHIVE</motion.p> */}

        <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, ease: easing }} className='font-display text-[clamp(2.05rem,10vw,4.6rem)] leading-[0.95] text-center font-semibold text-(--text-primary) sm:text-[clamp(2.2rem,7vw,4.6rem)]'>
          <span className='block'>Frames shaped</span>
          <span className='block'>by light.</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: easing, delay: 0.12 }} className='max-w-[32ch] text-center text-[0.92rem] leading-7 text-(--text-secondary) sm:max-w-[60ch] sm:text-base'>A quiet collection of frames and atmospheres — minimal, editorial, calm.</motion.p>

        <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, ease: easing, delay: 0.22 }} className='relative mb-8 flex items-center justify-center md:mb-14 lg:mb-16'>
          <div className='radial-glow' />
          <motion.img
            src={cameraSrc}
            alt='Hero camera'
            className='cinematic-camera max-h-[28vh] w-auto sm:max-h-[38vh] md:max-h-[48vh]'
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
