import React from 'react'

function LeftContent() {
    return (
        <div className='flex h-full w-full flex-col justify-between lg:w-[22%]'>
            <div className='max-w-80 pt-1 lg:pt-3'>
                <h3 className='max-w-[12ch] flex flex-col gap-1.4 text-[clamp(1.6rem,6.5vw,3rem)] md:text-[2.2rem] lg:text-[2.45rem] font-semibold uppercase leading-none tracking-[-0.03em] text-(--text-primary)'>
                    <span className='Syne Bold'>Aperture</span>
                    <span className='font-serif text-[1.02em] italic font-medium normal-case tracking-[-0.02em] text-(--accent-gold)'>Through light</span>
                    <span className='pt-0.5'>& motion</span>
                </h3>
                <p className='mt-5 max-w-72 text-[clamp(0.72rem,3.2vw,0.86rem)] leading-6 text-(--text-secondary) md:text-[0.86rem]'>
                    A quiet collection of visual atmospheres,  modern creators, moments shaped through light.
                </p>

                <button className='aperture-cta mt-8 md:mt-16 lg:mt-44 inline-flex items-center justify-center rounded-full border px-4 py-2 sm:px-5 sm:py-3 font-body text-[0.62rem] md:text-[0.64rem] font-medium uppercase tracking-[0.24em] transition-all duration-500 ease-out'>
                    Explore Archive
                </button>
            </div>
        </div>
    )
}

export default LeftContent
