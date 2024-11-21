import React from 'react';
import { IoIosArrowUp } from "react-icons/io";


const HeaderTopBar = () => {
    return ( 
        <div className="container mx-auto py-2 hidden sm:block md:px-4 text-[#434343]">
        <div className="flex justify-between text-[12px] ">
          {/* Left side content */}
          <div className="flex gap-7">
            <h3 className="flex text-[#F68D20] items-center">
              English <IoIosArrowUp />
            </h3>
            <p>Help Center</p>
            <p>Helpline: 0964781656</p>
          </div>
          {/* Right side content */}
          <div>
            <div className="flex gap-7">
              <p>Become a Seller</p>
              <p>Order Track</p>
              <p className="text-[#F68D20]">Sign up / Login</p>
            </div>
          </div>
        </div>
      </div>
      
    );
};

export default HeaderTopBar;