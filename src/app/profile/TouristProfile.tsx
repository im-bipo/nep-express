import Image from "next/image";
import React from "react";
import image from "/public/Rectangle 60.png";

import { Button } from "@/components/ui/button";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server";

const TouristProfile = () => {
  return (
<>
<h1 className="flex justify-center text-2xl font-semibold pt-8 pb-14">
        Guide Profile
      </h1>
      <div className="grid grid-cols-12 w-10/12 mx-auto ">
        <div className="col-span-5">
          <div className="flex flex-col gap-4">
            <Image
              src={image}
              alt="guideprofile"
              width={500}
              height={500}
              className="w-72 object-cover"
            />
            <div className="flex flex-col gap-1">
              <h1 className="text-2xl text-[#003794] font-semibold items-center px-4">
                PRATEEK ARYAL
              </h1>
              <p className="text-gray-400 px-4">aryalpratik057@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="col-span-7 flex flex-col gap-8 py-8 shadow-sm px-8">
        <div className="flex justify-end">
            <Button className="bg-secondary">Add new Places</Button>
          </div>
          <div className=" border-2 boeder-black w-full flex justify-between rounded-md py-4 px-8">
            Fewa Lake ,Kaski 
          </div>
          <div className=" border-2 boeder-black w-full flex justify-between rounded-md py-4 px-8">
            Resunga Temple ,Gulmi 
          </div>
          <div className="flex justify-end">
          <Button className="w-fit px-4 ">  <LogoutLink>
        Logout
        </LogoutLink></Button>
          </div>
        </div>
      </div>
</>
  )
}

export default TouristProfile