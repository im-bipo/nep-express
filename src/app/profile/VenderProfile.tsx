import Image from "next/image";
import React from "react";
import image from "/public/Rectangle 60.png";
import { Button } from "@/components/ui/button";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server";

function VenderProfile() {
  return (
    <>
      <h2 className="text-2xl font-semibold flex justify-center pt-10">Vendor Profile</h2>
      <div className="grid grid-cols-12 w-10/12 mx-auto py-10">
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
        <div className="col-span-7">
          <form className=" mx-auto p-4  rounded-lg">
            <div className="mb-4">
              <label className="block text-gray-700 text-xl font-medium">Product</label>
              <input
                type="file"
                name="vendorfile"
                className="w-full px-3 py-2 border rounded-lg"
                placeholder="Enter items "
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-xl font-medium">Product Details</label>
              <textarea
                name="item details"
                className="w-full px-3 py-2 border rounded-lg"
                placeholder="Enter Any Additional Products Details"
              ></textarea>
            </div>
<div className="flex justify-between">
<Button className="bg-secondary" type="submit">Add Products</Button>
<Button><LogoutLink>Logout</LogoutLink></Button>
</div>

          </form>
        </div>
      </div>
    </>
  );
}

export default VenderProfile;
