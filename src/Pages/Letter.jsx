import React from 'react'

export default function Letter() {
  return (
    <div dir='rtl' className='container text-center m-auto mt-16'>
      <div className='border border-orange w-[80%] lg:w-[50%] rounded-[40px] py-5 m-auto shadow bg-gradient-to-r from-orange via-pink to-pink'>
        <div className='text-[#FFFFFF] text-4xl md:text-6xl mb-5'>رسالتنا</div>
        <div className='px-4'>
          <div className='bg-[#FFFFFF] p-3 rounded-[40px] shadow w-[80%] m-auto'>
          <div className='text-[#444] text-xl md:text-2xl'>تقديم خدمات متميزة لتشجيع ودعم أصحاب البقالات الصغيرة والمتوسطة من الشباب السعودي على تبني الفكر الريادي، والمساهمة في تطوير وتسريع قطاع الأعمال في الداخل</div>
          </div>
        </div>
      </div>
    </div>
  )
}
