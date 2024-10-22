import React from "react";
import Image from "next/image";
import iif_logo from "../assets/logo/iif_logo.png";

const NavBar = () => {
  return (
    <div className="w-full bg-[#fffefb] h-14 border-b border-gray-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 lg:px-0">
        {/* Logo */}
        <a href="#">
          <Image
            className="w-[103px] h-[50px]"
            src={iif_logo}
            alt="IIF Logo"
          />
        </a>
        
        {/* Navbar Links in a Single Div */}
        <div className="hidden lg:flex space-x-8 ml-16">
          <a href="#" className="flex flex-col items-center text-[#171a1f] hover:text-black cursor-pointer">
            <div className="text-base font-bold font-['Helvetica'] leading-snug">Home</div>
            <div className="bg-[#171a1f] h-1 w-full" />
          </a>
          <a href="#" className="text-[#565e6d] hover:text-black cursor-pointer">
            <div className="text-base font-normal font-['Helvetica Light'] leading-snug">Programs</div>
          </a>
          <a href="#" className="text-[#565e6d] hover:text-black cursor-pointer">
            <div className="text-base font-normal font-['Helvetica Light'] leading-snug">Team</div>
          </a>
          <a href="#" className="text-[#565e6d] hover:text-black cursor-pointer">
            <div className="text-base font-normal font-['Helvetica Light'] leading-snug">Start ups</div>
          </a>
          <a href="#" className="text-[#565e6d] hover:text-black cursor-pointer">
            <div className="text-base font-normal font-['Helvetica Light'] leading-snug">Gallery</div>
          </a>
          <a href="#" className="text-[#565e6d] hover:text-black cursor-pointer">
            <div className="text-base font-normal font-['Helvetica Light'] leading-snug">News</div>
          </a>
        </div>

        {/* Login and Register Buttons */}
        <div className="flex space-x-4">
          <a href="#" className="border border-black rounded-[5px] w-[111px] h-9 flex items-center justify-center cursor-pointer hover:bg-gray-100">
            <div className="text-[#0b0000] text-sm font-normal font-['Helvetica'] leading-snug">Login</div>
          </a>
          <a href="#" className="border border-black rounded-[5px] w-28 h-9 flex items-center justify-center cursor-pointer hover:bg-gray-100">
            <div className="text-[#0c0000] text-sm font-normal font-['Helvetica'] leading-snug">Register</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;