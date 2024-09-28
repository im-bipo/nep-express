import Image from 'next/image'
import React from 'react'
import img from '/public/image.png'
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown';
import SubComponents from './SubComponents';

const Start = () => {
  return (
    <>
    <div className='grid grid-cols-2 w-11/12  gap-8 mx-auto'>
<Image src={img} alt='nepmarket start' width={400} height={400} className='w-full'/>
    <div className='flex flex-col gap-10'>
        <div>Counter</div>
        <div>
            <SubComponents/>
        </div>
    </div>
    </div>
    </>
  )
}

export default Start