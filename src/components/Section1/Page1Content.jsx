import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className='mx-auto flex h-auto w-full max-w-360 flex-col gap-10 px-4 pt-20 pb-8 sm:px-6 md:h-[calc(100vh-5.5rem)] md:gap-8 md:px-8 md:pt-6 lg:flex-row lg:gap-12 lg:px-10 lg:py-10' >
      <LeftContent introComplete={props.introComplete} />
      <RightContent users={props.users} introComplete={props.introComplete} />
    </div>
  )
}

export default Page1Content