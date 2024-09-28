import React from "react";
import Image from "next/image";
import logo from "/public/NEPEXPRESS-01.png";

const Navbar = () => {
  return (
    <nav className=" bg-white shadow-lg flex justify-around items-center">
      <Image src={logo} alt="logo" width={80} />
      <div className="flex gap-16">
        <div className="border-2 px-4 py-2 rounded-lg w-[40vw] flex items-cente">
          <input
            type="text"
            placeholder="Search For Products"
            className=" w-full outline-none"
          />
        </div>
        <div className="hidden lg:block">
          <p className="">24 hr support</p>
          <p className="text-purple-500">07154098</p>
        </div>
        <div className="hidden lg:block">
          <p className="font-medium ">All Nepal</p>
          <p className="text-purple-500">Free shipping</p>
        </div>
        <div>
          <Image
            src={logo}
            alt="profile"
            width={40}
            className="rounded-full border-2 border-purple-500"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
