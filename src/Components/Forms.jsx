import React from 'react'
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { useNavigate } from 'react-router-dom';

export default function Forms() {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = (data) => {
        console.log(data);
        const serviceId = 'service_9aghdkh';
        const templateId = 'template_ti8zyyq';
        const userId = '_OPbVFezKxVd9qjce'

        emailjs.send(serviceId, templateId, data, userId)
          .then(response => {
            console.log(response);
            Route("/thanks");
          })
          .then(error => console.log(error));
    };
    const Route = useNavigate();
  return (
    <div dir='rtl' className='text-center m-auto bg-gradient-to-r from-orange via-pink to-pink py-4 border border-orange shadow w-[95%] lg:w-[85%] rounded-[40px]'>
        <div className='text-[#FFFFFF] text-2xl md:text-4xl mb-12'>نموذج اشتراك للبقالات في خدمة اعتمد للأسواق المركزية</div>
        <form onSubmit={handleSubmit(onSubmit)} className='bg-[#FFFFFF] p-3 rounded-[40px] shadow w-[95%] m-auto text-lg md:text-xl'>
          <div className='mt-9 form-control flex'>
            <div className='w-[31%] border-r pr-1 border-orange'>نوع الطلب</div>
            <div className='w-[40%]'>
              <input id='new' type='radio' value='جديد' name="requestType" {...register("requestType", {required: true} )} />
              <label htmlFor='new' className='mr-1 cursor-pointer'>جديد</label>
            </div>
            <div className='w-[30%]'>
              <input id='old' type='radio' value='تجديد' name="requestType" {...register("requestType", {required: true} )} />
              <label htmlFor='old' className='mr-1 cursor-pointer'>تجديد</label>
            </div>            
          </div>
          {errors.requestType && (<p className='text-center text-[#D30000] text-sm'>هذا السؤال مطلوب</p>)}

          <div className='text-center text-2xl md:text-3xl mt-4 mb-2'>بيانات المنشأة</div>

          <div className='grid grid-cols-2 py-2'>
            <div className='block'>
              <label htmlFor='company' className='block'>اسم المؤسسة</label>
              <input id='company' placeholder='اسم المؤسسة' className='border border-[#D30000] rounded outline-none w-[90%] mb-4' type='string' name='company' {...register("company", {required: true})} />

              <label htmlFor='owner' className='block'>اسم المالك</label>
              <input id='owner' placeholder='اسم المالك' className='border rounded outline-none w-[90%] mb-4' type='string' name='owner' {...register("owner")} />

              <label htmlFor='branches' className='block'>عدد الفروع</label>
              <input id='branches' placeholder='عدد الفروع' className='border rounded outline-none w-[90%] mb-4' type='string' name='branches' {...register("branches")} />

              <label htmlFor='address' className='block'>عنوان المنشأة</label>
              <input id='address' placeholder='عنوان المنشأة' className='border border-[#D30000] rounded outline-none w-[90%] mb-4' type='string' name='address' {...register("address", {required: true})} />

              <label htmlFor='person' className='block'>الشخص المسؤول</label>
              <input id='person' placeholder='الشخص المسؤول' className='border rounded outline-none w-[90%] mb-4' type='string' name='person' {...register("person")} />

              <label htmlFor='space' className='block'>مساحة المتجر</label>
              <input id='space' placeholder='مساحة المتجر' className='border rounded outline-none w-[90%] mb-4' type='string' name='space' {...register("space")} />

              <label htmlFor='monthlySales' className='text-[15px] md:text-xl block'>متوسط المبيعات الشهرية</label>
              <input id='monthlySales' placeholder='متوسط المبيعات الشهرية' className='border rounded outline-none w-[90%] mb-4' type='string' name='monthlySales' {...register("monthlySales")} />

              <label htmlFor='times' className='block'>مواعيد الفتح والإغلاق</label>
              <input id='times' placeholder='مواعيد الفتح والإغلاق' className='border rounded outline-none w-[90%] mb-4' type='string' name='times' {...register("times")} />

              <label htmlFor='refrigerators' className='block'>عدد الثلاجات بالفرع</label>
              <input id='refrigerators' placeholder='عدد الثلاجات بالفرع' className='border rounded outline-none w-[90%] mb-4' type='string' name='refrigerators' {...register("refrigerators")} />

              <label htmlFor='accounting' className='text-[15px] md:text-xl block'>هل يوجد نظام محاسبي؟</label>
              <input id='accounting' placeholder='هل يوجد نظام محاسبي؟' className='border rounded outline-none w-[90%] mb-4' type='string' name='accounting' {...register("accounting")} />
            </div>

            <div className=''>
              <label htmlFor='record' className='block'>السجل التجاري</label>
              <input id='record' placeholder='السجل التجاري' className='border rounded outline-none w-[90%] mb-4' type='string' name='record' {...register("record")} />

              <label htmlFor='recordDate' className='block'>تاريخ إصدار السجل</label>
              <input id='recordDate' placeholder='تاريخ إصدار السجل' className='border rounded outline-none w-[90%] mb-4' type='string' name='recordDate' {...register("recordDate")} />

              <label htmlFor='tax' className='block'>الرقم الضريبي</label>
              <input id='tax' placeholder='الرقم الضريبي' className='border rounded outline-none w-[90%] mb-4' type='string' name='tax' {...register("tax")} />

              <label htmlFor='street' className='block'>اسم الشارع</label>
              <input id='street' placeholder='اسم الشارع' className='border rounded outline-none w-[90%] mb-4' type='string' name='street' {...register("street")} />

              <label htmlFor='employment' className='block'>عدد العمالة</label>
              <input id='employment' placeholder='عدد العمالة' className='border rounded outline-none w-[90%] mb-4' type='string' name='employment' {...register("employment")} />

              <label htmlFor='phone' className='block'>رقم الجوال</label>
              <input id='phone' placeholder='رقم الجوال' className='border rounded outline-none w-[90%] mb-4' type='number' name='number' {...register("number")} />

              <label htmlFor='duration' className='block'>مدة عمل النشاط</label>
              <input id='duration' placeholder='مدة عمل النشاط' className='border rounded outline-none w-[90%] mb-4' type='string' name='duration' {...register("duration")} />

              <label htmlFor='dailySales' className='text-[15px] md:text-xl block'>متوسط المبيعات اليومية</label>
              <input id='dailySales' placeholder='متوسط المبيعات اليومية' className='border rounded outline-none w-[90%] mb-4' type='string' name='dailySales' {...register("dailySales")} />

              <label htmlFor='storehouse' className='text-[15px] md:text-xl block'>هل متوفر مستودع للمنشأة؟</label>
              <input id='storehouse' placeholder='هل متوفر مستودع للمنشأة؟' className='border rounded outline-none w-[90%] mb-4' type='string' name='storehouse' {...register("storehouse")} />

              <label htmlFor='points' className='block'>هل متوفر نقاط بيع؟</label>
              <input id='points' placeholder='هل متوفر نقاط بيع؟' className='border rounded outline-none w-[90%] mb-4' type='string' name='points' {...register("points")} />
            </div>
          </div>

          <div className='text-center text-2xl md:text-3xl mt-4 mb-2'>معلومات المستخدم الرئيسية</div>
          <div className='grid grid-cols-2 py-2'>
            <div>
              <label htmlFor='userName' className='block'>اسم المستخدم</label>
              <input id='userName' placeholder='اسم المستخدم ID' className='border border-[#D30000] rounded outline-none w-[90%] mb-4' type='string' name='userName' {...register("userName", {required: true})} />

              <label htmlFor='userPhone' className='block'>رقم الجوال</label>
              <input id='userPhone' placeholder='رقم الجوال' className='border border-[#D30000] rounded outline-none w-[90%] mb-4' type='number' name='userPhone' {...register("userPhone", {required: true})} />
            </div>

            <div>
              <label htmlFor='id' className='block'>رقم الهوية</label>
              <input id='id' placeholder='رقم الهوية' className='border rounded outline-none w-[90%] mb-4' type='number' name='id' {...register("id")} />

              <label htmlFor='userTelephon' className='block'>رقم الهاتف</label>
              <input id='userTelephon' placeholder='رقم الهاتف' className='border rounded outline-none w-[90%] mb-4' type='number' name='userTelephon' {...register("userTelephon")} />
            </div>
          </div>
          <div className='form-control flex text-[14px] md:text-xl'>
            <div className='w-[35%] border-r pr-1 border-orange'>اللغة المستخدمة</div>
            <div className='w-[40%]'>
              <input id='en' type='radio' value='arabic' name="language" {...register("language" )} />
              <label htmlFor='en' className='mr-1 cursor-pointer'>اللغة العربية</label>
            </div>
            <div className='w-[30%]'>
              <input id='ar' type='radio' value='english' name="language" {...register("language" )} />
              <label htmlFor='ar' className='mr-1 cursor-pointer'>اللغة الانجليزية</label>
            </div>            
          </div>

          <div className='text-center text-2xl md:text-3xl mt-4 mb-2'>اعتماد المنشأة</div>
          <div className='grid grid-cols-2 py-2'>
            <div>
              <label htmlFor='facilityName' className='block'>الاسم</label>
              <input id='facilityName' placeholder='الاسم' className='border rounded outline-none w-[90%] mb-4' type='string' name='facilityName' {...register("facilityName")} />
            </div>

            <div>
              <label htmlFor='workBook' className='block'>المصنف</label>
              <input id='workBook' placeholder='المصنف' className='border rounded outline-none w-[90%] mb-4' type='string' name='workBook' {...register("workBook")} />
            </div>
          </div>

          <button type='submit' className='rounded-xl px-6 py-2 mt-6 mb-2 bg-gradient-to-r from-orange via-pink to-pink text-[#ffffff]'>إرسال</button>         
        </form>
    </div>
  )
}
