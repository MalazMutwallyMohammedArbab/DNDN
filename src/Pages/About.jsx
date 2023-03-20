import React from 'react'

export default function About() {
  return (
    <div dir='rtl' className='container text-center m-auto bg-gradient-to-r from-orange via-pink to-pink py-4 border border-orange shadow w-[80%] lg:w-[85%] rounded-[40px]'>
      <div className='text-[#FFFFFF] text-4xl md:text-6xl mb-12'>نبذة عنا</div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols3 gap-4 px-4 text-[#555]'>
        <div className='bg-[#FFFFFF] p-3 rounded-[40px] shadow shadow-orange'>
          <div className='text-3xl'>1</div>
          <div className='text-xl lg:text-2xl'>شركة سعودية قائمة ولديها علامة تجارية مميزة، وتعمل في مجال التموينات والبقالات، حيث اكتسبت ثقة واحترام العملاء في محيطها خلال فترة قصيرة</div>
        </div>
        <div className='bg-gray p-3 rounded-[40px] shadow'>
          <div className='text-3xl'>2</div>
          <div className='text-xl lg:text-2xl'>وهي شركة متخصصة في إنشاء وتطوير التموينات الصغيرة والمتطورة ومنح فرنشايز للشباب والشابات السعوديين لدخول مجال التموينات ودعمهم للنجاح</div>
        </div>
        <div className='bg-[#FFFFFF] p-3 rounded-[40px] shadow shadow-orange'>
          <div className='text-3xl'>3</div>
          <div className='text-xl lg:text-2xl'>تستهدف الشركة جميع البقالات الصغيرة والمتوسطة بشكل عام سواء كانت قائمة أو جديدة، بهدف تحويلها إلى العمل بنظام الامتياز التجاري "الفرنشايز" وتحت اسم تجاري وعلامة تجارية واحدة "دندن"</div>
        </div>
        <div className='bg-gray p-3 rounded-[40px] shadow'>
          <div className='text-3xl'>4</div>
          <div className='text-xl lg:text-2xl'>وذلك من أجل أن تكتسب الأسواق المركزية "دندن" ثقة واحترام العملاء في محيطها من خلال تلبية أصحاب البقالات من مشتريات المواد الغذائية بالإضافة إلى تقديم حلول تطويرية شاملة وتكاملية لجميع المتعاملين معها</div>
        </div>
        <div className='bg-[#FFFFFF] p-3 rounded-[40px] shadow shadow-orange'>
          <div className='text-3xl'>5</div>
          <div className='text-xl lg:text-2xl'>تبيع جملة وتجزئة في المواد الغذائية ولديها منتجاتها الحصرية</div>
        </div>
      </div>
    </div>
  )
}
