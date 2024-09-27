import React from 'react'
import { Button } from '../ui/button'

const Subscribe = () => {
  return (
    
    <>
    <div className="flex flex-col justify-center items-center gap-6 md:gap-10 py-10 md:py-16 bg-gray-200">
  <h1 className="text-lg md:text-xl font-semibold text-gray-400 text-center">
    Subscribe to our newsletter
  </h1>
  <div className="flex flex-col gap-6 md:gap-8 w-full px-4 md:px-0">
    <input
      type="text"
      name="email"
      placeholder="Enter your Email"
      className="border-2 border-white w-full md:w-[400px] mx-auto lg:w-[652px] py-3 md:py-4 lg:py-6 px-4 md:px-6 lg:px-8 shadow-2xl focus:outline-none l rounded-lg"
    />
    <div className="flex justify-center">
      <Button className="w-full md:w-auto">Submit</Button>
    </div>
  </div>
</div>
    </>
  )
}

export default Subscribe