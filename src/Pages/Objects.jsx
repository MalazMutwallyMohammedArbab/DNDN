import React from 'react'

export default function Objects() {
  return (
    <div dir='rtl' className='text-center mt-16 container w-[80%] rounded-[40px] py-7 m-auto shadow bg-gradient-to-r from-orange via-pink to-pink shadow shadow-[#999]'>
      <div className='text-[#FFFFFF] text-3xl md:text-5xl mb-7'>الأهداف الاستراتيجية:</div>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-7 lg:py-7 px-9 text-[#555]'>
        <div className='bg-[#FFFFFF] p-3 rounded-[40px] shadow'>
          <div className='text-xl md:text-2xl'>تلبية احتياجات العملاء من أصحاب البقالات الصغيرة والمتوسطة</div>
        </div>
        <div className='bg-gray p-3 rounded-[40px] shadow'>
          <div className='text-xl md:text-2xl'>تقديم حلول تطويرية تنافسية لعملائنا من أصحاب البقالات الصغيرة والمتوسطة</div>
        </div>
        <div className='bg-[#FFFFFF] p-3 rounded-[40px] shadow'>
          <div className='text-xl md:text-2xl'>تقديم الخدمات الاستشارية التطويرية للمنشآت الصغيرة والمتوسطة حسب الاحتياج</div>
        </div>
      </div>
    </div>
  )
}
