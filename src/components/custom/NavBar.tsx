'use client'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import image from '/public/NEPEXPRESS-01.png'
import { Button } from '../ui/button'
import { useState } from 'react';

import { FaBars, FaTimes } from 'react-icons/fa'; 
const data=[
  {
  title:"Home",
  to:"/#"
},
{
  title:"About",
  to:"/#"
},
{
  title:"Guides",
  to:"/#"
},
{
  title:"Nepmarket",
  to:"/#"
},
{
  title:"Contact",
  to:"/#"
},
]

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <> 
     {/* const { getUser } = useKindeBrowserClient(); */}
  {/* const user = getUser(); */}


  <div className="bg-white shadow-xl h-24 flex items-center">
      <div className="flex justify-between w-11/12 mx-auto items-center gap-20">
        {/* Logo Section */}
        <Link href="/">
          <Image src={image} alt="logo" width={400} height={400} className="w-24" />
        </Link>

        {/* Desktop Menu */}
        <div className="gap-10 hidden lg:flex">
          {data.map((val, i) => (
            <ul key={i}>
              <Link href={val.to}>
                <li>{val.title}</li>
              </Link>
            </ul>
          ))}
        </div>

        {/* Profile/Login Section */}
        <div className="hidden lg:flex">
          {/* {user ? ( */}
          <Link href="/profile">
            <Button>PROFILE</Button>
          </Link>
          {/* ) : ( */}
          <Link href="/login">
            <Button>LOGIN</Button>
          </Link>
          {/* )} */}
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden flex flex-col items-center bg-white shadow-lg w-full absolute top-24 left-0 z-50">
          {data.map((val, i) => (
            <ul key={i} className="w-full border-b border-gray-200">
              <Link href={val.to}>
                <li className="text-center py-4">{val.title}</li>
              </Link>
            </ul>
          ))}
          {/* Profile/Login Section */}
          <div className="w-full py-4 border-t border-gray-200">
            {/* {user ? ( */}
            <Link href="/profile">
              <Button>PROFILE</Button>
            </Link>
            {/* ) : ( */}
            <Link href="/login">
              <Button>LOGIN</Button>
            </Link>
            {/* )} */}
          </div>
        </div>
      )}
    </div>
 
    </>
  )
}

export default NavBar