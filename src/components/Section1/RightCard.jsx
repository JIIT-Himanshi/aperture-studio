import React from 'react'
import { ArrowRight } from 'lucide-react'

const RightCard = (props) => {
  return (
    <div className='group relative shrink-0 overflow-hidden rounded-3xl border border-(--border-soft) bg-(--surface) shadow-[0_18px_48px_rgba(0,0,0,0.24)] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] md:hover:-translate-y-1 snap-center w-[88vw] min-w-[88vw] sm:w-[80vw] sm:min-w-[80vw] md:w-68 md:min-w-0 h-[min(64vh,calc(100vh-6rem))] sm:h-[min(68vh,calc(100vh-5.5rem))] md:h-full'>
      <img src={props.img} alt="Card Image" className='h-full w-full object-cover object-center brightness-[0.72] saturate-[0.9] transition-[transform,filter] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:brightness-[0.9] md:group-hover:scale-[1.02] active:scale-95' />
      <div className='absolute inset-0 flex flex-col justify-between bg-linear-to-t from-black/88 via-black/45 to-transparent p-5 sm:p-6'> 
      <h1 className='flex h-8 w-8 items-center justify-center rounded-full border border-(--border-soft) bg-black/25 font-mono text-[0.68rem] font-medium text-(--overlay-text) backdrop-blur-sm sm:h-9 sm:w-9 sm:text-[0.72rem]'> {props.index} </h1>
        <div> 
        <p className='max-w-[18ch] text-[0.76rem] leading-6 text-(--overlay-text)/90 sm:max-w-[15ch] sm:text-[clamp(0.78rem,3.2vw,0.88rem)]'> {props.intro} </p>
            <div className='mt-4 flex items-center justify-between gap-3 md:mt-5' > 
          <button className='rounded-full border border-(--border-soft) bg-white/5 px-3 py-2 font-mono text-[0.55rem] uppercase tracking-[0.22em] text-(--overlay-text)/85 transition-colors duration-500 ease-out hover:bg-white/10 sm:px-4 sm:py-2 sm:text-[0.58rem] sm:tracking-[0.26em]'> {props.tag} </button>
          <button className='flex h-9 w-9 items-center justify-center rounded-full border border-(--border-soft) bg-transparent text-(--overlay-text) transition-colors duration-500 ease-out hover:bg-white/8 sm:h-10 sm:w-10'> <ArrowRight size={15} strokeWidth={1.8} className='sm:size-4' /> </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default RightCard

