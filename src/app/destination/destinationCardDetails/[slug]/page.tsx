/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { BsPersonStanding } from "react-icons/bs";
import { FaMapLocationDot } from "react-icons/fa6";
import CopyToClipboard from "../../../components/CopyToClipboard";
import { IoGift } from "react-icons/io5";
import {getPlaceByName } from "@/actions/place";

const DestinationDetailPage = async ({ params }: { params :{slug: string} }) => {
  const destination = await getPlaceByName(params.slug);
  if (!destination) {
    return <p>Destination not found.</p>;
  }

  return (
    <div className="px-10 py-5">
      <nav>
        <ul className="flex gap-5 border-b-2 pb-2">
          <Link href="/guides" passHref>
            <li className="bg-primary px-4 py-2 text-white flex gap-2 items-center w-44 cursor-pointer">
              <BsPersonStanding className="scale-125" /> BOOK A GUIDE
            </li>
          </Link>
          <Link href="/destination" passHref>
            <li className="bg-[#A4D57D] px-4 py-2 text-white flex gap-4 items-center w-44 cursor-pointer">
              <FaMapLocationDot className="scale-125" /> PLAN A TRIP
            </li>
          </Link>
          <Link href="/nepmarket" passHref>
            <li className="bg-secondary px-4 py-2 text-white flex gap-4 items-center w-44 cursor-pointer">
              <IoGift className="scale-125" /> NEPMARKET
            </li>
          </Link>
        </ul>
      </nav>

      <div className="py-8 lg:flex-row gap-4 flex flex-col justify-center items-center">
        
        <img src={destination.thumbnail[0]} alt={destination.name} className="w-52"/>
        <div className="shadow-md w-full mt-8 lg:mt-0 p-8 bg-[#f5f5f5] lg:mx-24">
          <h1 className="text-secondary font-semibold flex items-center gap-2">
            {destination.name}
            <CopyToClipboard />
          </h1>
          <p className="text-sm mt-4">{destination.description}</p>
          <div className="flex gap-20 mt-4">
            <div className="mt-4 flex items-center gap-4">
              <h2 className="font-semibold text-primary">Ticket</h2>
              <p className="bg-[#A4D57D] px-4 rounded-sm py-1 text-white">
                Free
              </p>
            </div>
            <div className="mt-4 flex items-center gap-4">
              <h2 className="font-semibold text-primary">Status</h2>
              <p className="bg-[#A4D57D] px-4 rounded-sm py-1 text-white">
                Available
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        hello
      </div>
    </div>
  );
};

export default DestinationDetailPage;
