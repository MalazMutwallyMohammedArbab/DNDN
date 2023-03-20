import React from 'react'
import Image from '../Components/Images'

export default function Contact() {
  return (
    <div dir='rtl' className='mt-16'>
      <div className='border border-orange w-[80%] lg:w-[50%] rounded-[40px] py-5 m-auto shadow bg-gradient-to-r from-orange via-pink to-pink'>
        <div className='text-[#FFFFFF] text-4xl md:text-6xl mb-5 text-center'>تواصل معنا</div>
        <div className='bg-[white] p-3 rounded-[40px] shadow w-[80%] m-auto'>
          <Image className='w-40 md:w-56 m-auto pt-4 md:pt-6' src='images/logo.jpg' alt='' />
          <div className='text-3xl md:text-6xl text-orange tracking-wider text-center'>أسواق دندن</div>
          <div className='text-3xl md:text-6xl text-pink text-center mb-6'>للمواد الغذائية</div>

          <a href="tel:+966500407080" className='flex justify-center'>
            <div className='mb-2 md:text-xl'>00966500407080</div>
            <Image className='h-5 md:h-6' src='images/contact/phone2.png' alt='img' />
          </a>

          <a href='mailto:Sultan@atmiid.com' target='_blank' rel='noopener noreferrer' className='flex justify-center'>
            <div className='mb-2 md:text-xl'>Sultan@atmiid.com</div>
            <Image className='h-5 md:h-6' src='images/contact/email.png' alt='img' />
          </a>

          <a href="http://Www.dndnksa.com/" rel="noreferrer noopener" target="_blank" className='flex justify-center'>
            <div className='mb-2 md:text-xl'>Www.dndnksa.com</div>
            <Image className='h-5 md:h-6' src='images/contact/web.png' alt='img' />
          </a>

          <div className='flex justify-center mx-6 mb-16'>
            <div className='md:text-xl'>الرياض- العليا تقاطع العروبة</div>
            <Image className='h-5 md:h-6' src='images/contact/location2.png' alt='img' />
          </div>
        </div>
      </div>
    </div>
  )
}
