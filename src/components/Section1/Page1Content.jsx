import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className='mx-auto flex h-[calc(100vh-5.5rem)] w-full max-w-360 flex-col gap-8 px-4 sm:px-6 md:px-8 py-6 lg:flex-row lg:gap-12 lg:px-10 lg:py-10' >
      <LeftContent />
      <RightContent users={props.users} />
    </div>
  )
}

export default Page1Content