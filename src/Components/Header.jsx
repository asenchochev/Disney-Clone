import React from 'react'
import logo from '../../src/assets/images/logo.png'

const Header = () => {
  return (
    <div>
      <img src={logo} className='w-[80px] md:w-[115px] object-cover' alt="logo" />
    </div>
  )
}

export default Header
