import React from 'react'
import Image from "next/image";
import image1 from '/public/image 62.png'
import image2 from '/public/madal.png'
import image3 from '/public/yarsagumba.png'
import image4 from '/public/apple.png'
import { Button } from '@/components/ui/button';
const data = [
    {
      off: "20%off",
      image:image4,
      title: "Mustang Apple",
      discountprice: "RS 160",
      btn: "Book Now",
      Actual: "RS 200",
    },
  
    {
      off: "20%off",
      image:image2,
      title: "Madal",
      discountprice: "RS 1320",
      btn: "Book Now",
      Actual: "RS 1600",
    },
    {
      off: "20%off",
      image:image3,
      title: "YarsaGumba",
      discountprice: "RS 1320",
      btn: "Book Now",
      Actual: "RS 1600",
    },
    {
      off: "20%off",
      image: image1,
      title: "Dhaka Topi",
      discountprice: "RS 160",
      btn: "Book Now",
      Actual: "RS 200",
    },
  
    {
      off: "20%off",
      image: image2,
      title: "Madal",
      discountprice: "RS 1320",
      btn: "Book Now",
      Actual: "RS 1600",
    },
    
  ];
const ShopProducts = () => {
  return (
    <>
  <div>
      <h1 className='w-11/12 mx-auto text-2xl font-semibold'>Shop Products</h1>
    </div>
    <div className='grid grid-cols-5 gap-4 w-11/12 mx-auto'>
{
  data.map((val,i)=>{
    return(
      <div key={i} className='flex flex-col pt-5 gap-5 rounded-md shadow-xl py-4 px-2 w-full'>
        <div className='flex justify-end'>
        <p className='flex justify-end text-white bg-primary rounded-md w-fit  px-6'>{val.off}</p>

        </div>
<Image src={val.image} alt='card img' width={500} height={500} className='w-56 object-contain'/>
<div className='px-4 flex flex-col gap-2' >
<p className='text-xl font-semibold text-secondary'>{val.title}</p>
<p>{val.discountprice}</p>
<Button className='w-fit'>{val.btn}</Button>
<p className='line-through  text-secondary'>{val.Actual}</p>
      </div>

      </div>
    )
  })
}

    </div>
    </>
  )
}

export default ShopProducts