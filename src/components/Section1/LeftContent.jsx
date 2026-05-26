import React from 'react'
import { motion } from 'framer-motion'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } }
}

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } }
}

function LeftContent({ introComplete = false }) {
    return (
        <motion.div className='flex h-full w-full flex-col justify-between lg:w-[22%]' variants={container} initial='hidden' animate={introComplete ? 'show' : 'hidden'}>
            <div className='max-w-80 pt-1 lg:pt-3'>
                <motion.h3 variants={item} className='max-w-[12ch] flex flex-col gap-1.4 text-[clamp(1.6rem,6.5vw,3rem)] md:text-[2.2rem] lg:text-[2.45rem] font-semibold uppercase leading-none tracking-[-0.03em] text-(--text-primary)'>
                    <span className='Syne Bold'>Aperture</span>
                    <span className='font-serif text-[1.02em] italic font-medium normal-case tracking-[-0.02em] text-(--accent-gold)'>Through light</span>
                    <span className='pt-0.5'>& motion</span>
                </motion.h3>

                <motion.p variants={item} className='mt-5 max-w-72 text-[clamp(0.72rem,3.2vw,0.86rem)] leading-6 text-(--text-secondary) md:text-[0.86rem]'>
                    A quiet collection of visual atmospheres, modern creators, moments shaped through light.
                </motion.p>

                <motion.div variants={item} className='mt-8 md:mt-16 lg:mt-44'>
                    <button className='aperture-cta inline-flex items-center justify-center rounded-full border px-4 py-2 sm:px-5 sm:py-3 font-body text-[0.62rem] md:text-[0.64rem] font-medium uppercase tracking-[0.24em] transition-all duration-500 ease-out'>
                        Explore Archive
                    </button>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default LeftContent
