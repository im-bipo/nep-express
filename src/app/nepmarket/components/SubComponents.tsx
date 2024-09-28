import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import imggs from '/public/image 57.png'
import images from '/public/image 17.png'

const SubComponents = () => {
  return (
    <>
    <div className='grid grid-cols-2 gap-3'>
        <div className='flex  bg-secondary w-fit px-6 rounded-xl py-4'>
            <div className='flex flex-col gap-4 text-white'>

<h1 className='text-xl font-medium '>Palpali Dhaka Topi</h1>
<p>Symbol of Nepali Braveness</p>
<Button className='w-fit px-4'>Buy Now</Button>
            </div>
             <Image src={imggs} alt='nepmarket' width={400} height={400} className='w-40'/>

        </div>
        <div className='flex  bg-primary w-fit px-6 rounded-xl py-4'>
            <div className='flex flex-col gap-4 text-white'> 

<h1 className='text-xl font-medium '>Palpali Dhaka Topi</h1>
<p>Symbol of Nepali Braveness</p>
<Button className='w-fit px-4 bg-white text-black'>Buy Now</Button>
            </div>
             <Image src={images} alt='nepmarket' width={400} height={400} className='w-40'/>

        </div>
    </div>
    </>
  )
}

export default SubComponents