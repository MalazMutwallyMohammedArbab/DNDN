import React from 'react'
import Image from '../Components/Images'

export default function Products() {
  return (
    <div dir='rtl' className='text-center mt-16 container w-[80%] rounded-[40px] py-8 m-auto shadow bg-gradient-to-r from-orange via-pink to-pink'>
      <div className='text-[#FFFFFF] text-2xl md:text-4xl mb-8'>المنتجات الخاصة بالسوبرماركت "دندن"</div>

      <div className='grid grid-cols-2 lg:grid-cols-4 gap-8 px-8'>
        <div className='bg-[#FFFFFF] p-3 rounded-[40px] shadow'>
          <Image className='rounded-full w-40 m-auto h-20' src='images/food/bread.jpeg' alt='' />
          <div className='text-xl md:text-2xl'>السكر والخبز المنزلي</div>
        </div>

        <div className='bg-gray p-3 rounded-[40px] shadow'>
          <Image className='rounded-full w-40 m-auto h-20' src='images/food/rice.jpeg' alt='' />
          <div className='text-xl md:text-2xl'>الأرز والمعكرونة والبقوليات</div>
        </div>

        <div className='bg-gray p-3 rounded-[40px] shadow'>
          <Image className='rounded-full w-40 m-auto h-20' src='images/food/trademarks.jpeg' alt='' />
          <div className='text-xl md:text-2xl'>منتجات من كل أنحاء العالم</div>
        </div>

        <div className='bg-[#FFFFFF] p-3 rounded-[40px] shadow'>
          <Image className='rounded-full w-40 m-auto h-20' src='images/food/souce.jpeg' alt='' />
          <div className='text-xl md:text-2xl'>مكونات الطبخ</div>
        </div>

        <div className='bg-[#FFFFFF] p-3 rounded-[40px] shadow'>
          <Image className='rounded-full w-40 m-auto h-20' src='images/food/chocolate.jpeg' alt='' />
          <div className='text-xl md:text-2xl'>الشوكولاتة والحلويات</div>
        </div>

        <div className='bg-gray p-3 rounded-[40px] shadow'>
          <Image className='rounded-full w-40 m-auto h-20' src='images/food/cake.jpeg' alt='' />
          <div className='text-xl md:text-2xl'>بسكويت، كراكرز وكيك</div>
        </div>

        <div className='bg-gray p-3 rounded-[40px] shadow'>
          <Image className='rounded-full w-40 m-auto h-20' src='images/food/spices.jpeg' alt='' />
          <div className='text-xl md:text-2xl'>توابل، صلصات ومخللات</div>
        </div>

        <div className='bg-[#FFFFFF] p-3 rounded-[40px] shadow'>
          <Image className='rounded-full w-40 m-auto h-20' src='images/food/chips.jpeg' alt='' />
          <div className='text-xl md:text-2xl'>شيبس ومقبلات</div>
        </div>

        <div className='bg-[#FFFFFF] p-3 rounded-[40px] shadow'>
          <Image className='rounded-full w-40 m-auto h-20' src='images/food/canned.jpeg' alt='' />
          <div className='text-xl md:text-2xl'>معلبات ومرطبانات وغيرها</div>
        </div>

        <div className='bg-gray p-3 rounded-[40px] shadow'>
          <Image className='rounded-full w-40 m-auto h-20' src='images/food/cerials.jpeg' alt='' />
          <div className='text-xl md:text-2xl'>منتجات الفطور الغذائية</div>
        </div>

        <div className='bg-gray p-3 rounded-[40px] shadow'>
          <Image className='rounded-full w-40 m-auto h-20' src='images/food/honey.jpeg' alt='' />
          <div className='text-xl md:text-2xl'>المربيات، العسل وغيرها</div>
        </div>

        <div className='bg-[#FFFFFF] p-3 rounded-[40px] shadow'>
          <Image className='rounded-full w-40 m-auto h-20' src='images/food/dates.jpeg' alt='' />
          <div className='text-xl md:text-2xl'>المكسرات والتمور والفواكه المجففة</div>
        </div>
      </div>

    </div>
  )
}
