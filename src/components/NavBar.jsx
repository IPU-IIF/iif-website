import React from "react";
import iif_logo from "../assets/logo/iif_logo.png";
 
const NavBar = () => {
  return (
    <div className="w-full bg-[#fffefb] h-14 border-b border-gray-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 lg:px-0">
        {/* Logo */}
        <img
          className="w-[103px] h-[50px]"
          src={iif_logo}
          alt="IIF Logo"
        />
        {/* Navbar Links */}
        <div className="hidden lg:flex space-x-8">
          {/* Home */}
          <div className="flex flex-col items-center text-[#171a1f] hover:text-black cursor-pointer">
            <div className="text-base font-bold font-['Helvetica'] leading-snug">Home</div>
            <div className="bg-[#171a1f] h-1 w-full" />
          </div>
          {/* Programs */}
          <div className="text-[#565e6d] hover:text-black cursor-pointer">
            <div className="text-base font-normal font-['Helvetica Light'] leading-snug">Programs</div>
          </div>
          {/* Team */}
          <div className="text-[#565e6d] hover:text-black cursor-pointer">
            <div className="text-base font-normal font-['Helvetica Light'] leading-snug">Team</div>
          </div>
          {/* Start ups */}
          <div className="text-[#565e6d] hover:text-black cursor-pointer">
            <div className="text-base font-normal font-['Helvetica Light'] leading-snug">Start ups</div>
          </div>
          {/* Gallery */}
          <div className="text-[#565e6d] hover:text-black cursor-pointer">
            <div className="text-base font-normal font-['Helvetica Light'] leading-snug">Gallery</div>
          </div>
          {/* News */}
          <div className="text-[#565e6d] hover:text-black cursor-pointer">
            <div className="text-base font-normal font-['Helvetica Light'] leading-snug">News</div>
          </div>
        </div>
        {/* Login and Register Buttons */}
        <div className="flex space-x-4">
          {/* Login */}
          <div className="border border-black rounded-[5px] w-[111px] h-9 flex items-center justify-center cursor-pointer hover:bg-gray-100">
            <div className="text-[#0b0000] text-sm font-normal font-['Helvetica'] leading-snug">
              Login
            </div>
          </div>
          {/* Register */}
          <div className="border border-black rounded-[5px] w-28 h-9 flex items-center justify-center cursor-pointer hover:bg-gray-100">
            <div className="text-[#0c0000] text-sm font-normal font-['Helvetica'] leading-snug">
              Register
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;