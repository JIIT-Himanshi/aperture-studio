import React from 'react'
import Navbar from './Navbar.jsx'
import Page1Content from './Page1Content.jsx'

const Section1 = (props) => {
  return (
    <div className='min-h-screen w-full overflow-visible md:overflow-hidden bg-(--bg)' >
      
      <Page1Content users={props.users} introComplete={props.introComplete} />
    </div>
  )
}

export default Section1
