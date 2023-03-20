import React from 'react'
import Image from './Images'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <div className='text-center w-[100%] m-auto h-[540px] font-regu shadow shadow-gray mb-12'>
        <Image className='w-40 md:w-56 m-auto pt-16 md:pt-6' src='images/logo.jpg' alt='' />
        <div className='text-3xl md:text-6xl text-orange tracking-wider'>أسواق دندن</div>
        <div className='text-3xl md:text-6xl text-pink'>للمواد الغذائية</div>
        <NavLink to="/forms" className="flex justify-center mt-7">
            <button className='font-semibold text-[#FFFFFF] bg-gradient-to-r from-orange via-pink to-pink hover:bg-gradient-to-br rounded-lg text-xl md:text-3xl py-3 px-5'>اشترك في السلة</button>
        </NavLink>
        <div className='text-3xl md:text-4xl text-orange mt-3'>أو</div>
        <NavLink to="/forms" className="flex justify-center mt-3">
            <button className='font-semibold text-gray bg-gradient-to-r from-orange via-pink to-pink hover:bg-gradient-to-br rounded-lg text-xl md:text-3xl py-3 px-5'>جدد اشتراكك</button>
        </NavLink>
    </div>
  )
}
