
"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Tourist from "./TouristForm";
import GuideForm from "./GuideForm";
import Vender from "./VenderForm";
import image1 from '/public/image 48.png'
import image2 from '/public/image 47 (2).png'

import Image from "next/image";
const Guest = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index: React.SetStateAction<number>) => {
    setToggleState(index);
  };
  return (
    <>
      <div className="grid grid-cols-12 pt-8 w-11/12 mx-auto">
        <div className="col-span-6 w-full">
        <div className="flex flex-col gap-4">
<div className="flex justify-end ">
  <Image src={image1} alt="login photos" width={500} height={500} className="w-40 object-cover"/>
  
</div>

<div className="flex flex-col gap-4 justify-center items-center">
  <h1 className="text-3xl font-semibold text-secondary">नमस्कार</h1>
  <h1 className="text-3xl font-semibold">Welcome To <span className="text-primary">Nep</span><span className="text-secondary">express</span></h1>
</div>

<div className="flex justify-between">
<Image src={image1} alt="login photos" width={500} height={500} className="w-40 object-contain "/>
<Image src={image2} alt="login photos" width={500} height={500} className="w-60 object-cover"/>


</div>


      </div>
        </div>
        
<div className="col-span-6">
          {toggleState !== 1 && toggleState !== 2 && toggleState !== 3 && (
          <div className="bg-gray-100 rounded-md my-10 w-full py-24 mx-auto">
            <div className="py-5 text-center  font-medium text-2xl text-secondary">Join as</div>
            <div className="flex gap-4 justify-center items-center pt-10 pb-14">
              <Button
                className="text-md font-medium bg-red-500 py-2 px-8 rounded-md text-white"
                onClick={() => toggleTab(1)}
              >
                GUIDE
              </Button>
              <Button
                className="text-md font-medium bg-red-500 py-2 px-8 rounded-md text-white"
                onClick={() => toggleTab(2)}
              >
                Tourist
              </Button>
              <Button
                className="text-md font-medium bg-red-500 py-2 px-8 rounded-md text-white"
                onClick={() => toggleTab(3)}
              >
                Vender
              </Button>
            </div>
          </div>
        )}


        <div>
          {toggleState === 1 && (
            <>
              <div>
                <GuideForm />
              </div>
            </>
          )}


          {toggleState === 2 && (
            <>
              <div>
              
                <Tourist />
              </div>
            </>
          )}

          {toggleState === 3 && (
            <>
              <div>
                <Vender />
              </div>
            </>
          )}
        </div>
      </div>
      </div>

    </>
  );
};

export default Guest;
