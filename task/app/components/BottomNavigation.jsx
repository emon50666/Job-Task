import React from 'react';
import { FaRegUser } from "react-icons/fa";
import { TfiHeart } from "react-icons/tfi";
import { FiShoppingCart } from "react-icons/fi";
import { MdClose } from "react-icons/md";

const BottomNavigation = () => {
    return (
        <div>
            <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg sm:hidden bg-white shadow-md border border-t">
  <div className="flex items-center justify-around w-full px-4 py-2">
    <FaRegUser
      className="bg-[#F4F5F4] rounded-lg text-gray-500 font-normal p-2"
      size={37}
    />
    <TfiHeart
      className="bg-[#F4F5F4] rounded-lg text-gray-500 font-normal p-2"
      size={37}
    />
    <FiShoppingCart
      className="bg-[#F4F5F4] rounded-lg text-gray-500 font-normal p-2"
      size={37}
    />
  </div>
</div>

        </div>
    );
};

export default BottomNavigation;