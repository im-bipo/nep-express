import React from "react";
import Link from "next/link";
import { BsPersonStanding } from "react-icons/bs";
import { IoGift } from "react-icons/io5";
import { FaMapLocationDot } from "react-icons/fa6";
import Image from "next/image";
import img1 from "/public/Badimalika - Himalayan Connection photo1663135614 1.png";
import CopyToClipboard from "../../components/CopyToClipboard";

const page = () => {
  return (
    <div className="px-10 py-5">
      <ul className="flex gap-5 border-b-2 pb-2">
        <Link href="/guides">
          <li className="bg-primary px-4 py-2 text-white flex gap-2 items-center w-44">
            <BsPersonStanding className="scale-125" /> BOOK A GUIDE
          </li>
        </Link>
        <Link href="/destination">
          <li className="bg-[#A4D57D] px-4 py-2 text-white flex gap-4 items-center w-44">
            <FaMapLocationDot className="scale-125" /> PLAN A TRIP
          </li>
        </Link>
        <Link href="/nepmarket">
          <li className="bg-secondary px-4 py-2 text-white flex gap-4 items-center w-44">
            <IoGift className="scale-125" /> NEPMARKET
          </li>
        </Link>
      </ul>

      <div className="py-8 lg:flex-row gap-4 flex flex-col justify-center items-center">
        <Image src={img1} alt="" />
        <div className="bg-white shadow-lg w-full mt-8 p-8">
          <h1 className="text-secondary font-semibold flex items-center gap-2">
            Siddhabaa Temple
            <p>
              <CopyToClipboard />
            </p>
          </h1>
          <p className="text-sm mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            veniam nostrum nisi alias doloremque ab impedit quasi ullam
            assumenda, molestias magnam accusamus tempore modi magni iusto
            consequatur ratione ut quos.
          </p>
          <div className="flex gap-20">
            <div className="mt-4 flex items-center gap-4">
              <h1 className="font-semibold text-primary">Ticket</h1>
              <p className="bg-[#A4D57D] px-4 rounded-sm py-1 text-white flex gap-4 items-center">
                Free
              </p>
            </div>
            <div className="mt-4 flex items-center gap-4">
              <h1 className="font-semibold text-primary">Status</h1>
              <p className="bg-[#A4D57D] px-4 rounded-sm py-1 text-white flex gap-4 items-center">
                Available
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
