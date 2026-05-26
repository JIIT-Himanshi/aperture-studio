import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id='right' className='flex h-full w-full gap-6 overflow-x-auto snap-x snap-mandatory touch-pan-x md:snap-none bg-transparent px-1 pb-2 pt-1 lg:w-[78%] lg:pl-2 lg:pr-0' style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }} >
      {props.users.map(function(elem, index){
        return <RightCard key={index} index={index} img={elem.img} tag={elem.tag} intro={elem.intro} introComplete={props.introComplete} />
      })}  
    </div>
  )
}

export default RightContent
