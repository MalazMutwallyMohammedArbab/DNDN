import React from 'react'
import Image from './Images'
import Navigation from './Navigation'

export default function Navbar() {
  return (
    <div className=''>
      <div className='py-3 px-9 flex justify-between items-center'>
        <Image className='w-40 h-10' src='images/logo.jpg' alt='logo' />       
        <Navigation />
      </div>
    </div>
  )
}
