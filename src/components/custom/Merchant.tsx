import React from 'react'
import Image from 'next/image'
import image1 from '/public/Ellipse 11.png'
import image2 from '/public/Ellipse 12.png'
import { Button } from '../ui/button'
const data=[
    {
title:'For Guides',
text:"Apply and list yourself as Nepexpress certified guide and get awesome employment opportunities.",
btn:"Apply Now",
image:image1
    },
    {
        title:'For Sellers',
        text:"Apply and list yourself as Nepexpress certified guide and get awesome employment opportunities.",
        btn:"Apply Now",
        image:image2
            },
]

const Merchant = () => {
  return (
  <>
  <div className='w-11/12 mx-auto flex flex-col justify-center gap-8'>
    <h1 className='text-secondary text-2xl w-3/12 mx-auto py-8 font-semibold'><span className='text-primary'>Merchant</span> opportunities</h1>
    <div className='grid grid-cols-2 gap-10 w-11/12 mx-auto'>
    {
        data.map((val,i)=>{
            return(
                
 <div
                  key={i}
                  className="flex gap-8 bg-[#FEEFEF] px-6 py-8  rounded-xl shadow-2xl"
                >
                  <div className="flex flex-col gap-5">
                    <p className='text-xl font-semibold text-secondary'>{val.title}</p>
                    <p>{val.text}</p>
                    <Button className='w-fit'>
                      {val.btn}
                    </Button>
                  </div>
                  <div className="flex items-center">
                    <Image
                      src={val.image}
                      alt="image"
                      width={400}
                      height={400}
                      className="w-64 object-cover"
                    />
                  </div>
                </div>
                
            )
        })
    }
    </div>
  </div>
  </>
  )
}

export default Merchant