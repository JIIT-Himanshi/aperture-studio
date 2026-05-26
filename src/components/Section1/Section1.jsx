import React from 'react'
import Navbar from './Navbar.jsx'
import Page1Content from './Page1Content.jsx'

const Section1 = (props) => {
  return (
    <div className='min-h-screen w-full overflow-visible md:overflow-hidden bg-(--bg)' >
      <Navbar theme={props.theme} onToggleTheme={props.onToggleTheme} />
      <Page1Content  users={props.users} />
    </div>
  )
}

export default Section1
