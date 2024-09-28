import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import esewa from "/public/Esewa_logo.webp";
import fonepay from "/public/fonepay.png";
import khalti from "/public/khalti.png";
import Image from "next/image";
import imagess from '/public/image 45.png'
import imepay from '/public/IMEPAY copy.jpg'

const Footer = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-11/12 mx-auto py-10 gap-8">
        <div className="flex flex-col gap-5">
          <h1 className="text-lg lg:text-xl font-semibold text-secondary">
            Connect With Us
          </h1>
          <div className="flex gap-4">
            <FaFacebook className="text-lg lg:text-xl font-medium text-primary" />
            <FaInstagram className="text-lg lg:text-xl font-medium text-primary" />
            <FaYoutube className="text-lg lg:text-xl font-medium text-primary" />
            <FaWhatsapp className="text-lg lg:text-xl font-medium text-primary" />
            <FaTwitter className="text-lg lg:text-xl font-medium text-primary" />
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="text-lg lg:text-xl font-semibold text-secondary">
            About Nepexpress
          </h1>
          <div className="text-gray-400 flex flex-col gap-3">
            <p>About Us</p>
            <p>Blog</p>
            <p>Contact us</p>
            <p>Terms of Condition</p>
            <p>Awards & Recognizations</p>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="text-lg lg:text-xl font-semibold text-secondary">
            Partner With Nepexpress
          </h1>
          <div className="text-gray-400 flex flex-col gap-3">
            <p>Register as Guide</p>
            <p>Add Your Product</p>
          </div>
          <h1 className="text-lg lg:text-xl font-semibold text-secondary">
            Help & Support
          </h1>
          <div className="text-gray-400 flex flex-col gap-3">
            <p>Phone: 9845455112</p>
            <p>Email: info@nepexpress@gmail.com</p>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="text-lg lg:text-xl font-semibold text-secondary">
            Payment Method
          </h1>
          <div className="flex flex-col sm:flex-row gap-6">
            <div>
            <Image
              src={khalti}
              alt="Khalti Logo"
              width={500}
              height={500}
              className="w-44 lg:w-44"
            />
             <Image
                src={imepay}
                alt="Esewa Logo"
                width={500}
                height={500}
                className="w-36 lg:w-44"
              />
            
           </div>
            <div className="flex flex-col gap-4 pt-5">
           
               <Image
                src={esewa}
                alt="Esewa Logo"
                width={500}
                height={500}
                className="w-36 lg:w-44"
              />
              <Image
                src={fonepay}
                alt="FonePay Logo"
                width={500}
                height={500}
                className="w-36 lg:w-44"
              />
            </div>
          </div>
        </div>
      </div>
      <div className='relative'>
            <Image src={imagess} alt='footer image' width={400} height={400} className='w-full'/>
            <div className='absolute bottom-0 left-[500px] py-3'>
                <p className='text-white'>© 2023 Nepexpress ® Pvt. Ltd. All Rights Reserved</p>
            </div>
        </div>
    </>
  );
};

export default Footer;
