import React from 'react'
import Image from 'next/image'
import image1 from '/public/Ellipse 11.png'
import image2 from '/public/Ellipse 12.png'
import { Button } from '../ui/button'
/
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
  // const router=useRouter()
  return (
  <>
<div className="w-11/12 mx-auto flex flex-col justify-center gap-8">
  <h1 className="text-secondary text-center text-lg md:text-xl lg:text-2xl w-full md:w-6/12 lg:w-3/12 mx-auto py-4 md:py-6 lg:py-8 font-semibold">
    <span className="text-primary">Merchant</span> Opportunities
  </h1>
  

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 w-full md:w-11/12 mx-auto">
    {data.map((val, i) => (
      <div
        key={i}
        className="flex flex-col md:flex-row gap-4 md:gap-6 bg-[#FEEFEF] px-4 md:px-6 py-6 md:py-8 rounded-xl shadow-2xl"
      >

        <div className="flex flex-col gap-3 md:gap-5 w-full md:w-6/12 lg:w-7/12">
          <p className="text-md md:text-lg lg:text-xl font-semibold text-secondary">
            {val.title}
          </p>
          <p className="text-sm md:text-base">
            {val.text}
          </p>
          <Button className="w-fit text-xs md:text-sm">
            {val.btn}
          </Button>
        </div>


        <div className="flex justify-center md:justify-end items-center w-full md:w-5/12 lg:w-4/12">
          <Image
            src={val.image}
            alt="image"
            width={400}
            height={400}
            className="w-24 h-auto md:w-64 lg:w-72 object-cover rounded-md"
          />
        </div>
      </div>
    ))}
  </div>


  <div className="h-auto flex justify-center items-center shadow-2xl w-full md:w-10/12 lg:w-9/12 mx-auto my-6 md:my-8 lg:my-10">
    <video
      className="w-full h-56 md:h-72 lg:h-80 rounded-lg shadow-lg object-contain"
      controls
      poster="/image 48.png"
      autoPlay
      loop
    >
      <source src="/path-to-your-video.mp4" type="video/mp4" />
    </video>
  </div>
</div>


  
  </>
  )
}

export default Merchant