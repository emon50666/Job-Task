"use client"
import React, { useState } from "react";
import { TfiSearch,TfiHeart } from "react-icons/tfi";
import { FaRegUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from 'next/image';
import MobileCategory from "../components/MobileCategory";


const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="relative lg:pb-6">
      {/* Desktop Header */}
      <div className="hidden md:flex items-center justify-center gap-14 w-full mx-auto px-4 py-2 bg-white ">
        <div className="flex text-start space-x-4 ">
        <Image
      src="/logo.png"
      width={120}
      height={38}
      alt="logo"
    />
        </div>
        <div className="flex items-center w-full max-w-lg">
          <input
            type="text"
            placeholder="Search Product"
            className="flex-grow border bg-[#EEF1F5] rounded-l-md px-4 py-2 focus:outline-none"
          />
          <button className="bg-[#F97217] text-white relative px-4 py-3 rounded-r-md">
            <TfiSearch size={18} />
          </button>
        </div>
        <div className="flex items-center space-x-2 relative ">
          <FaRegUser className=" bg-[#F4F5F4] rounded-lg  text-gray-500 font-normal p-2" size={37} />
          <TfiHeart className=" bg-[#F4F5F4] rounded-lg  text-gray-500 font-normal p-2" size={37} />
          <FiShoppingCart className=" bg-[#F4F5F4] rounded-lg  text-gray-500 font-normal p-2" size={37} />
          <Image
          className="pl-2 lg:block md:hidden"
      src="/cloud.png"
      width={130}
      height={24}
      alt="cloud image"
    />
        </div>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between px-4 py-2 bg-white shadow-md">
            <Image
      src="/logo.png"
      width={129}
      height={38}
      alt="logo"
    />
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="text-gray-600"
        >
          <GiHamburgerMenu size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-full bg-white pb-10  shadow-md z-50">
          <div className="flex items-center justify-between px-2 py-2">
      
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-600 border  border-[#F68D20] rounded-md "
            >
              <MdClose size={24} />
            </button>
          </div>
          <div className="flex flex-col bg-white items-center space-y-4  mt-2">
            <div className="w-full px-1">
            <div className="flex items-center w-full max-w-md">
          <input
            type="text"
            placeholder="Search Product"
            className="flex-grow border bg-[#EEF1F5] rounded-l-md px-4 py-2 focus:outline-none"
          />
          <button className="bg-[#F97217] text-white  px-4 py-3 rounded-r-md">
            <TfiSearch size={17} />
          </button>
        </div>
            </div>
           
          </div>
        <div className="py-3 px-2">
        <MobileCategory/>
        </div>
        </div>
         
      )}
     
    </header>
  );
};

export default Header;
