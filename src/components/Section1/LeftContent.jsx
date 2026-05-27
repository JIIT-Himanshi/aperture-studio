import React from 'react'

function LeftContent() {
    return (
        <div className='flex h-full w-full flex-col justify-between lg:w-[22%]'>
            <div className='max-w-80 pt-1 lg:pt-3'>
                <div className='max-w-[14ch] flex flex-col gap-3'>
                    <span className='font-mono text-[0.62rem] uppercase tracking-[0.36em] text-(--accent-gold)'>[ THE PHOTOGRAPHERS ]</span>
                    <h3 className='font-display text-[clamp(2rem,6.8vw,3.2rem)] font-bold leading-none text-(--text-primary)'>Six worlds.</h3>
                    <h4 className='font-serif italic text-[1.1rem] text-(--accent-gold)'>Six stories.</h4>
                    <p className='mt-3 text-[0.86rem] leading-6 text-(--text-secondary)'>Every camera finds<br/>its person eventually.</p>
                </div>

                <button className='aperture-cta mt-8 md:mt-16 lg:mt-33 inline-flex items-center justify-center rounded-full border px-4 py-2 sm:px-5 sm:py-3 font-body text-[0.62rem] md:text-[0.64rem] font-medium uppercase tracking-[0.24em] transition-all duration-500 ease-out'>
                    Explore Archive
                </button>
            </div>
        </div>
    )
}

export default LeftContent
