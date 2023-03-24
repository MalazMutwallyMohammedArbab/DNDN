import React from 'react'
import Image from './Images'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <div className='text-center w-[100%] m-auto h-[590px] font-regu shadow shadow-gray mb-12 '>
        <Image className='w-52 md:w-72 m-auto pt-12 md:pt-4' src='images/logo.jpg' alt='' />
        <div className='text-4xl md:text-6xl text-orange tracking-wider'>أسـواق دنـدن</div>
        <div className='text-4xl md:text-6xl text-pink'>للمواد الغذائية</div>

        <NavLink to="/forms" className="flex justify-center mt-9">
          <button className='font-semibold text-[#FFFFFF] bg-gradient-to-r from-orange via-pink to-pink hover:bg-gradient-to-br rounded-lg text-2xl md:text-4xl py-3 px-5'>اشترك في السلة</button>
        </NavLink>

        <div className='text-3xl md:text-4xl text-orange mt-3'>أو</div>
        <NavLink to="/forms" className="flex justify-center mt-3">
            <button className='font-semibold text-[#FFFFFF] bg-gradient-to-r from-orange via-pink to-pink hover:bg-gradient-to-br rounded-lg text-2xl md:text-4xl py-3 px-5'>جدد اشتراكك</button>
        </NavLink>
    </div>
  )
}
