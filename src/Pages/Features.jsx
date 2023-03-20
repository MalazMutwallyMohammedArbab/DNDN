import React from 'react'

export default function Features() {
  return (
    <div dir='rtl' className='text-center mt-16 container w-[80%] rounded-[40px] py-7 m-auto shadow bg-gradient-to-r from-orange via-pink to-pink shadow shadow-[#999]'>
      <div className='text-[#FFFFFF] text-2xl md:text-4xl mb-7'>مميزات الخدمات المقدمة للبقالات/ السوبرماركت:</div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-7 px-7 text-[#555]'>
      <div className='bg-[#FFFFFF] p-3 rounded-[40px] shadow'>
          <div className='text-xl md:text-2xl'>مشتريات بسعر الجملة من المستودع وحتى مقر نشاطك</div>
        </div>
        <div className='bg-gray p-3 rounded-[40px] shadow'>
          <div className='text-xl md:text-2xl'>توفير/ تقليل تكاليف المشتريات</div>
        </div>
        <div className='bg-[#FFFFFF] p-3 rounded-[40px] shadow'>
          <div className='text-xl md:text-2xl'>إضافة منتجات متعددة الأنواع</div>
        </div>
        <div className='bg-gray p-3 rounded-[40px] shadow'>
          <div className='text-xl md:text-2xl'>زيادة الإيرادات والأرباح الخاصة للمشترك والذي يعمل تحت مظلة العلامة التجارية "دندن"</div>
        </div>
        <div className='bg-[#FFFFFF] p-3 rounded-[40px] shadow'>
          <div className='text-xl md:text-2xl'>برنامج محاسبي تقنية سحابية متطورة</div>
        </div>
      </div>
    </div>
  )
}
