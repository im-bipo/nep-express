import React from "react";
import Image from "next/image";
import images from '/public/image 47 (1).png'
import image1 from "/public/Rectangle 96.png";
import image2 from "/public/image 48.png";
import image3 from "/public/Rectangle 97.png";
import { Button } from "../ui/button";
import Placerecozmmandate from "./Placerecozmmandate";
import Happy from "./Happy";
import Merchant from "./Merchant";
import Subscribe from "./Subscribe";
import Link from "next/link";


const HeroLander = () => {
  return (
    <>
      {" "}
     
      <div className="flex flex-col gap-10 ">
        <div className="bg-gray-200 ">
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 pt-20 ">
            <div className="flex flex-col gap-12">
              <h1 className="  w-11/12 mx-auto  text-xl font-medium">
                Welcome to <span className="text-primary">Nep</span>
                <span className="text-secondary">express...</span>
              </h1>
              <p className="  w-11/12 mx-auto  text-md text-textcolor">
                Discover the enchanting beauty and rich culture of Nepal with
                Nepexpress, your ultimate destination for authentic Nepalese
                experiences. Embrace the magic of this captivating nation with
                Nepexpress and let Nepal&apos;s beauty and charm unfold before your
                eyes.
              </p>
              <div className="flex  flex-col items-start gap-8">
                <div className="w-5/12 mx-auto md:w-11/12">
              <Button className="w-full md:w-fit">
                <Link href='destination'>Explore</Link>
              </Button>
              </div>
                <div className="w-60 md:w-full ">
                  <Image
                    src={images}
                    alt="landing image1"
                    width={400}
                    height={400}
                    className="-my-14"
                  />
                </div>
              </div>
            </div>

            <div className=" hidden w-11/12 mx-auto md:flex flex-col md:flex-row gap-9">
              <div>
                <Image src={image1} alt="image1" width={400} height={400} />
              </div>
              <div className="flex flex-col gap-10">
                <Image
                  src={image2}
                  alt="image2"
                  width={400}
                  height={400}
                  className="w-full md:w-40"
                />
                <Image
                  src={image3}
                  alt="image3"
                  width={400}
                  height={400}
                  className="w-full md:w-72 pt-10 md:pt-20"
                />
              </div>
            </div>
          </div>
         
        </div>
        
        <div>
          <Placerecozmmandate />
        </div>
        <div>
          <Merchant/>
        </div>
        <div>
          <Happy/>
        </div>
        <div>
          <Subscribe/>
        </div>
      </div>
      
    </>
  );
};

export default HeroLander;
