import React from 'react'

const Section2 = () => {
  return (
    <section className='w-full px-4 pb-6 md:px-8 lg:px-12'>
      <div className='mx-auto max-w-360 overflow-hidden rounded-t-4xl border border-(--border-soft) bg-(--surface)/55 backdrop-blur-md'>
        <div className='min-h-[52vh] px-6 py-8 md:px-10 lg:px-12 lg:py-10'>
          <div className='flex items-end justify-between border-b border-(--border-soft) pb-5'>
            <p className='font-mono text-[0.62rem] uppercase tracking-[0.42em] text-(--accent-gold)'>Selected Frames</p>
            <p className='max-w-[16rem] text-right text-[0.8rem] leading-6 text-(--text-secondary)'>A floating chapter panel with rounded edges and a quieter visual rhythm.</p>
          </div>

          <div className='mt-8 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]'>
            <div className='min-h-64 rounded-4xl border border-(--border-soft) bg-[radial-gradient(circle_at_top_left,color-mix(in_srgb,var(--text-primary)_5%,transparent),transparent_55%),linear-gradient(180deg,color-mix(in_srgb,var(--text-primary)_2.5%,transparent),transparent)]' />
            <div className='min-h-64 rounded-4xl border border-(--border-soft) bg-[linear-gradient(180deg,color-mix(in_srgb,var(--text-primary)_3%,transparent),transparent),radial-gradient(circle_at_50%_0%,color-mix(in_srgb,var(--accent-gold)_14%,transparent),transparent_60%)]' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section2
