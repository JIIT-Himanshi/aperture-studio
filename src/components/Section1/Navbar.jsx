import React from 'react'
import { MoonStar, SunMedium } from 'lucide-react'

const Navbar = (props) => {
  const isDark = props.theme === 'dark'

  return (
    <div className='px-4 pt-4 md:px-8 lg:px-10'>
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
  )
}

export default Navbar
