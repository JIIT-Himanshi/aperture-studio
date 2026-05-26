import React, { useState } from 'react'
import { MoonStar, SunMedium, X } from 'lucide-react'

const Navbar = (props) => {
  const isDark = props.theme === 'dark'

  return (
    <div className='px-4 pt-4 md:px-8 lg:px-10'>
      {/* Desktop / Tablet navbar (keeps original layout unchanged for md and up) */}
      <div className='hidden md:block'>
        <div className='mx-auto flex w-full max-w-[1440px] items-center justify-between rounded-full border border-[color:var(--border-soft)] bg-[color:var(--surface)]/40 px-5 py-3 backdrop-blur-xl md:px-6 lg:px-8'>
          <div className='flex items-center gap-3'>
            <span className='hidden h-6 w-6 rounded-full border border-[color:var(--border-soft)] bg-[color:var(--text-primary)]/5 md:block' />
            <h4 className='font-display text-[0.68rem] font-bold uppercase tracking-[0.38em] text-[color:var(--text-primary)] md:text-[0.74rem]'>APERTURE</h4>
          </div>
          <nav className='flex items-center gap-3 text-[0.68rem] uppercase tracking-[0.22em] text-[color:var(--text-secondary)] md:gap-5'>
            <a className='transition-colors duration-500 ease-out hover:text-[color:var(--text-primary)]' href='#about'>About</a>
            <a className='transition-colors duration-500 ease-out hover:text-[color:var(--text-primary)]' href='#gallery'>Gallery</a>
            <a className='transition-colors duration-500 ease-out hover:text-[color:var(--text-primary)]' href='#archive'>Archive</a>
            <a className='transition-colors duration-500 ease-out hover:text-[color:var(--text-primary)]' href='#journal'>Journal</a>
          </nav>
          <button
            type='button'
            onClick={props.onToggleTheme}
            className='flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--border-soft)] bg-[color:var(--bg)]/35 text-[color:var(--text-primary)] transition duration-500 ease-out hover:bg-[color:var(--bg)]/55 hover:text-[color:var(--accent-gold)]'
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
          >
            {isDark ? <SunMedium size={18} strokeWidth={1.75} /> : <MoonStar size={15} strokeWidth={1.75} />}
          </button>
        </div>
      </div>

      {/* Mobile navbar (only visible below md) */}
      <div className='md:hidden'>
        <MobileMenu />
      </div>
    </div>
  )
}

function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className='mx-auto flex w-full max-w-[980px] items-center justify-between rounded-full border border-(--border-soft) bg-(--surface)/30 px-4 py-2 backdrop-blur-sm'>
        <div className='flex items-center gap-3'>
          <span className='h-6 w-6 rounded-full border border-(--border-soft) bg-(--text-primary)/5' />
          <h4 className='font-display text-[0.72rem] font-bold uppercase tracking-[0.32em] text-(--text-primary)'>APERTURE</h4>
        </div>
        <button
          type='button'
          aria-label='Open menu'
          className='h-10 w-10 flex items-center justify-center rounded-full border border-(--border-soft) bg-(--bg)/30 text-(--text-primary)'
          onClick={() => setOpen(true)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18M3 12h18M3 18h18"></path></svg>
        </button>
      </div>

      {open && (
        <div className='fixed inset-0 z-40 flex items-center justify-center bg-black/70 backdrop-blur-sm'>
          <div className='absolute inset-0' onClick={() => setOpen(false)} />
          <div className='relative z-50 mx-6 w-[calc(100%-48px)] max-w-md transform-gpu rounded-2xl bg-(--surface)/70 p-8 shadow-2xl'>
            <button className='absolute right-4 top-4 rounded-full p-2 text-(--text-primary)' onClick={() => setOpen(false)} aria-label='Close menu'>
              <X size={18} />
            </button>
            <nav className='flex flex-col items-center gap-6 text-center'>
              <a className='uppercase tracking-[0.28em] text-[0.95rem] text-(--text-primary) transition-transform duration-300' href='#about' onClick={() => setOpen(false)}>About</a>
              <a className='uppercase tracking-[0.28em] text-[0.95rem] text-(--text-primary)' href='#gallery' onClick={() => setOpen(false)}>Gallery</a>
              <a className='uppercase tracking-[0.28em] text-[0.95rem] text-(--text-primary)' href='#archive' onClick={() => setOpen(false)}>Archive</a>
              <a className='uppercase tracking-[0.28em] text-[0.95rem] text-(--text-primary)' href='#journal' onClick={() => setOpen(false)}>Journal</a>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
