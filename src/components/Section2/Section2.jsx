import React from 'react'

const Section2 = () => {
  return (
    <section className='w-full px-3 pb-6 sm:px-4 md:px-8 lg:px-12'>
      <div className='mx-auto max-w-360 overflow-hidden rounded-t-4xl border border-(--border-soft) bg-(--surface)/55 backdrop-blur-md'>
        <div className='min-h-[44vh] px-4 py-6 sm:px-6 md:min-h-[52vh] md:px-10 lg:px-12 lg:py-10'>
          <div className='flex flex-col gap-3 border-b border-(--border-soft) pb-5 text-center md:flex-row md:items-end md:justify-between md:text-left'>
            <p className='font-mono text-[0.54rem] uppercase tracking-[0.34em] text-(--accent-gold) sm:text-[0.62rem] sm:tracking-[0.42em]'>Selected Frames</p>
            <p className='mx-auto max-w-[20rem] text-[0.82rem] leading-6 text-(--text-secondary) md:mx-0 md:max-w-[16rem] md:text-right'>A floating chapter panel with rounded edges and a quieter visual rhythm.</p>
          </div>

          <div className='mt-6 grid gap-4 md:mt-8 lg:grid-cols-[1.2fr_0.8fr]'>
            <div className='min-h-44 rounded-3xl border border-(--border-soft) bg-[radial-gradient(circle_at_top_left,color-mix(in_srgb,var(--text-primary)_5%,transparent),transparent_55%),linear-gradient(180deg,color-mix(in_srgb,var(--text-primary)_2.5%,transparent),transparent)] sm:min-h-56 md:min-h-64' />
            <div className='min-h-44 rounded-3xl border border-(--border-soft) bg-[linear-gradient(180deg,color-mix(in_srgb,var(--text-primary)_3%,transparent),transparent),radial-gradient(circle_at_50%_0%,color-mix(in_srgb,var(--accent-gold)_14%,transparent),transparent_60%)] sm:min-h-56 md:min-h-64' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section2
