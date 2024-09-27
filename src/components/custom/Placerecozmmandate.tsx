import Image from 'next/image'
import React from 'react'
import image1 from '/public/OIP 1.png'
import image2 from '/public/R 1.png'
import image3 from '/public/Rectangle 97.png'

const Placerecozmmandate = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-11/12 lg:w-10/12 mx-auto">
    <div className="flex  md:flex-row gap-4">
      <div className="flex flex-col gap-6 mt-10 md:mt-20">
        <Image
          src={image1}
          alt=""
          width={400}
          height={400}
          className="w-40 md:w-56 rounded-xl object-cover"
        />
        <Image
          src={image2}
          alt=""
          width={400}
          height={400}
          className="w-40 md:w-56 rounded-xl object-cover"
        />
      </div>
      <div className="flex flex-col gap-6">
        <Image
          src={image3}
          alt=""
          width={400}
          height={400}
          className="w-40 md:w-60 rounded-xl object-cover"
        />
        <Image
          src={image2}
          alt=""
          width={400}
          height={400}
          className="w-40 md:w-60 rounded-xl object-cover"
        />
      </div>
    </div>
    <div className="flex flex-col gap-8 mt-8 md:mt-16">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold">
        Places Recommended By <span className="text-primary">Nep</span>
        <span className="text-secondary">express</span>
      </h1>
      <p className="text-sm md:text-md lg:text-lg">
        Explore through the places recommended by Nepexpress and also ask our AI trained model ASKBUDDHA about any information about Nepal. See some of the hot destinations to visit at this time of year shown in picturesque views.
      </p>
      <div className="flex flex-wrap gap-6 lg:gap-14">
        <p className="flex flex-col text-xl lg:text-2xl text-secondary">
          <span className="text-primary text-2xl lg:text-3xl">50+</span>
          Guides
        </p>
        <p className="flex flex-col text-xl lg:text-2xl text-secondary">
          <span className="text-primary text-2xl lg:text-3xl">50+</span>
          Domestic Products
        </p>
        <p className="flex flex-col text-xl lg:text-2xl text-secondary">
          <span className="text-primary text-2xl lg:text-3xl">50+</span>
          Trip Package
        </p>
      </div>
    </div>
  </div>
  
  )
}

export default Placerecozmmandate