import React from 'react';
import { IoIosArrowUp } from "react-icons/io";


const HeaderTopBar = () => {
    return (
        <div>
         <div className='flex justify-between text-[12px]'>
            {/* left side content */}
            <div className='flex'>
                <h3 className='flex gap-2 text-[#F68D20] items-center '>English  <IoIosArrowUp/> </h3>
                <div>
                    <p>Help Center </p>
                    <p>Helpline: 0964781656 </p>

                </div>
            </div>
             {/* right side content */}
             <div>
   h3llo
             </div>
         </div>
        </div>
    );
};

export default HeaderTopBar;