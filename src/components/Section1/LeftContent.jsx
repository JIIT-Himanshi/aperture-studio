import React from 'react'

function LeftContent() {
    return (
        <div className='flex h-full w-full flex-col justify-between lg:w-[22%]'>
            <div className='max-w-80 pt-1 text-center lg:pt-3 lg:text-left'>
                <div className='mx-auto flex max-w-[18ch] flex-col gap-2 sm:max-w-[16ch] lg:mx-0 lg:max-w-[14ch] lg:gap-3'>
                    <span className='font-mono text-[0.55rem] uppercase tracking-[0.34em] text-(--accent-gold) sm:text-[0.62rem]'>[ THE PHOTOGRAPHERS ]</span>
                    <h3 className='font-display text-[clamp(1.85rem,10vw,3.2rem)] font-bold leading-[0.95] text-(--text-primary) sm:text-[clamp(2rem,6.8vw,3.2rem)]'>Six worlds.</h3>
                    <h4 className='font-serif italic text-[0.98rem] text-(--accent-gold) sm:text-[1.1rem]'>Six stories.</h4>
                    <p className='mt-2 text-[0.82rem] leading-6 text-(--text-secondary) sm:text-[0.86rem]'>Every camera finds<br/>its person eventually.</p>
                </div>

                <button className='aperture-cta mx-auto mt-5 inline-flex w-full max-w-38 items-center justify-center rounded-full border px-3 py-2.5 font-body text-[0.54rem] font-medium uppercase tracking-[0.2em] transition-all duration-500 ease-out sm:mt-8 sm:w-auto sm:max-w-none sm:px-5 sm:py-3 sm:text-[0.62rem] md:mt-16 md:text-[0.64rem] lg:mt-33'>
                    Explore Archive
                </button>
            </div>
        </div>
    )
}

export default LeftContent
