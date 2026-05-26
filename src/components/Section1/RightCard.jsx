import React from 'react'
import { ArrowRight } from 'lucide-react'

const RightCard = (props) => {
  return (
    <div className='group relative shrink-0 overflow-hidden rounded-4xl border border-(--border-soft) bg-(--surface) shadow-[0_20px_60px_rgba(0,0,0,0.28)] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] md:hover:-translate-y-1 snap-center w-[82vw] min-w-[82vw] sm:w-[80vw] sm:min-w-[80vw] md:w-68 md:min-w-0 h-[min(92vh,calc(100vh-5.5rem))] sm:h-[min(68vh,calc(100vh-5.5rem))] md:h-full'>
      <img src={props.img} alt="Card Image" className='h-full w-full object-cover object-center brightness-[0.72] saturate-[0.9] transition-[transform,filter] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:brightness-[0.9] md:group-hover:scale-[1.02] active:scale-95' />
      <div className='absolute inset-0 flex flex-col justify-between bg-linear-to-t from-black/88 via-black/45 to-transparent p-6'> 
      <h1 className='flex h-9 w-9 items-center justify-center rounded-full border border-(--border-soft) bg-black/25 font-mono text-[0.72rem] font-medium text-(--overlay-text) backdrop-blur-sm'> {props.index} </h1>
        <div> 
        <p className='max-w-[15ch] md:max-w-[15ch] text-[clamp(0.78rem,3.2vw,0.88rem)] leading-6 text-(--overlay-text)/90'> {props.intro} </p>
            <div className='mt-4 md:mt-5 flex items-center justify-between gap-3' > 
          <button className='rounded-full border border-(--border-soft) bg-white/5 px-3 py-2 sm:px-4 sm:py-2 font-mono text-[0.58rem] uppercase tracking-[0.26em] text-(--overlay-text)/85 transition-colors duration-500 ease-out hover:bg-white/10'> {props.tag} </button>
          <button className='flex h-10 w-10 items-center justify-center rounded-full border border-(--border-soft) bg-transparent text-(--overlay-text) transition-colors duration-500 ease-out hover:bg-white/8'> <ArrowRight size={16} strokeWidth={1.8} /> </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default RightCard

