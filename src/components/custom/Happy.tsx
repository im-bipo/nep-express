import React from 'react'
import Image from 'next/image'
import image from '/public/Ellipse 7.png'
import image1 from '/public/Ellipse 8.png'
import image2 from '/public/Ellipse 9.png'
const data=[
  {
img:image,
title:'CLARA POTTER',
text:" Nepexpress is such  an amazing application for roamers like us, love Nepal ."
  },
  {
    img:image1,
    title:'CLARA POTTER',
    text:" Nepexpress is such  an amazing application for roamers like us, love Nepal ."
      },
      {
        img:image2,
        title:'CLARA POTTER',
        text:" Nepexpress is such  an amazing application for roamers like us, love Nepal ."
          },
]

const Happy = () => {
  return (
   <>
   <h1 className='text-xl font-semibold w-9/12  md:w-3/12 mx-auto py-10'>Happy <span className='text-primary'>Travellers</span> <span className='text-secondary'>Expression</span></h1>
   <div className='w-10/12 grid mx-auto md:grid md:grid-cols-3 gap-8 '>
{
  data.map((val,i)=>{
    return(
      <div key={i} className='shadow-lg px-4 py-6'>
        <div className='flex gap-10 items-center'>
          <Image src={val.img} alt='happy image' width={500} height={500} className='w-32 object-cover'/>
          <div className='flex flex-col gap-4'>
            <p className='text-xl font-semibold text-secondary'>{val.title}</p>
            <p>{val.text}</p>
          </div>
          </div>
      </div>
    )
  })
}
   </div>
   </>
  )
}

export default Happy