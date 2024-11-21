"use client"
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";

const Category = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex absolute pl-24 ">
    <div className="flex">
      {/* Main Vertical Menu */}
      <ul className="bg-gray-100 w-60 p-4 shadow-md space-y-2">
        <li className="relative group">
          <span className="block cursor-pointer hover:text-blue-600">
            Watches, Bags, Jewellery
          </span>
          {/* Submenu Level 1 */}
          <ul className="absolute hidden group-hover:block bg-white shadow-lg left-full top-0 mt-0 w-60">
            <li className="relative group p-4 hover:bg-gray-100">
              <span className="block cursor-pointer hover:text-blue-600">
                Women's Bag
              </span>
              {/* Submenu Level 2 */}
              <ul className="absolute  group-hover:block bg-white shadow-lg left-full top-0 mt-0 w-60">
                <li className="p-4 hover:bg-gray-100 hover:text-blue-600">
                  Tote Bags
                </li>
                <li className="p-4 hover:bg-gray-100 hover:text-blue-600">
                  Clutches
                </li>
                <li className="p-4 hover:bg-gray-100 hover:text-blue-600">
                  Backpacks
                </li>
              </ul>
            </li>
            <li className="p-4 hover:bg-gray-100 hover:text-blue-600">
              Men's Watches
            </li>
            <li className="p-4 hover:bg-gray-100 hover:text-blue-600">
              Women's Watches
            </li>
            <li className="p-4 hover:bg-gray-100 hover:text-blue-600">
              Kids Watches
            </li>
          </ul>
        </li>
        <li className="hover:text-blue-600 cursor-pointer">
          Women's & Girls' Fashion
        </li>
        <li className="hover:text-blue-600 cursor-pointer">Health & Beauty</li>
        <li className="hover:text-blue-600 cursor-pointer">Electronics Devices</li>
      </ul>
    </div>
  </div>
  );
};

export default Category;
