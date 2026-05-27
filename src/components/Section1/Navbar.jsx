import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MoonStar, SunMedium, X } from 'lucide-react'

const Navbar = (props) => {
  const isDark = props.theme === 'dark'

  return (
    <div className='px-4 pt-4 md:px-0 lg:px-0'>
      {/* Desktop / Tablet navbar (keeps original layout unchanged for md and up) */}
      <div className='hidden md:block'>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={props.introComplete ? { opacity: 1, y: 0 } : { opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className='mx-auto flex w-full items-center justify-between rounded-full border border-(--border-soft) bg-(--surface)/40 px-5 py-3 backdrop-blur-xl md:px-6 lg:px-8'
          style={{ maxWidth: '120rem' }}
        >
          <div className='flex items-center gap-3'>
            <span className='hidden h-6 w-6 rounded-full border border-(--border-soft) bg-(--text-primary)/5 md:block' />
            <h4 className='font-display text-[0.68rem] font-bold uppercase tracking-[0.38em] text-(--text-primary) md:text-[0.74rem]'>APERTURE</h4>
          </div>
          <nav className='flex items-center gap-3 text-[0.68rem] uppercase tracking-[0.22em] text-(--text-secondary) md:gap-5'>
            <a className='transition-colors duration-500 ease-out hover:text-(--text-primary)' href='#about'>About</a>
            <a className='transition-colors duration-500 ease-out hover:text-(--text-primary)' href='#gallery'>Gallery</a>
            <a className='transition-colors duration-500 ease-out hover:text-(--text-primary)' href='#archive'>Archive</a>
            <a className='transition-colors duration-500 ease-out hover:text-(--text-primary)' href='#journal'>Journal</a>
          </nav>
          <button
            type='button'
            onClick={props.onToggleTheme}
            className='flex h-10 w-10 items-center justify-center rounded-full border border-(--border-soft) bg-(--bg)/35 text-(--text-primary) transition duration-500 ease-out hover:bg-(--bg)/55 hover:text-(--accent-gold)'
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
          >
            {isDark ? <SunMedium size={18} strokeWidth={1.75} /> : <MoonStar size={15} strokeWidth={1.75} />}
          </button>
        </motion.div>
      </div>

      {/* Mobile navbar (only visible below md) */}
      <div className='md:hidden'>
        <MobileMenu onToggleTheme={props.onToggleTheme} isDark={isDark} />
      </div>
    </div>
  )
}

function MobileMenu({ onToggleTheme, isDark }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className='fixed left-3 right-3 top-3 z-50 mx-auto flex max-w-245 items-center justify-between rounded-full border border-(--border-soft) bg-(--surface)/60 px-3 py-2 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.22)]'>
        <div className='flex items-center gap-2'>
          <span className='h-5 w-5 rounded-full border border-(--border-soft) bg-(--text-primary)/5' />
          <h4 className='font-display text-[0.64rem] font-bold uppercase tracking-[0.28em] text-(--text-primary)'>APERTURE</h4>
        </div>
        <div className='flex items-center gap-2'>
          <button
            type='button'
            onClick={onToggleTheme}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            className='flex h-9 w-9 items-center justify-center rounded-full border border-(--border-soft) bg-black/10 text-(--text-primary) transition duration-300 ease-out'
          >
            {isDark ? <SunMedium size={16} strokeWidth={1.6} /> : <MoonStar size={16} strokeWidth={1.6} />}
          </button>

          <button
            type='button'
            aria-label='Open menu'
            className='flex h-9 w-9 items-center justify-center rounded-full border border-(--border-soft) bg-black/10 text-(--text-primary)'
            onClick={() => setOpen(true)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18M3 12h18M3 18h18"></path></svg>
          </button>
        </div>
      </div>

      {open && (
        <div className='fixed inset-0 z-40 flex items-center justify-center'>
          <div className='absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-400' onClick={() => setOpen(false)} />
          <div className='relative z-50 mx-4 w-[calc(100%-32px)] max-w-md transform-gpu rounded-2xl bg-(--surface)/75 p-6 shadow-2xl transition-transform duration-400 ease-out translate-y-2'>
            <button className='absolute right-4 top-4 rounded-full p-2 text-(--text-primary)' onClick={() => setOpen(false)} aria-label='Close menu'>
              <X size={18} />
            </button>
            <nav className='flex flex-col items-center gap-5 text-center'>
              <a className='uppercase tracking-[0.24em] text-[0.88rem] text-(--text-primary) transition-transform duration-300' href='#about' onClick={() => setOpen(false)}>About</a>
              <a className='uppercase tracking-[0.24em] text-[0.88rem] text-(--text-primary)' href='#gallery' onClick={() => setOpen(false)}>Gallery</a>
              <a className='uppercase tracking-[0.24em] text-[0.88rem] text-(--text-primary)' href='#archive' onClick={() => setOpen(false)}>Archive</a>
              <a className='uppercase tracking-[0.24em] text-[0.88rem] text-(--text-primary)' href='#journal' onClick={() => setOpen(false)}>Journal</a>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
