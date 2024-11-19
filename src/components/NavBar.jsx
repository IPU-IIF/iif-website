"use client";
import React, { useState } from "react";
import Image from "next/image";
import { HiMenuAlt4, HiOutlineX } from "react-icons/hi";

import iif_logo from "../assets/logo/iif_logo.png";
import Link from "next/link";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Programs", link: "#programs" },
    { name: "Team" },
    { name: "Start ups", link: "#featured-startups" },
    { name: "Gallery" },
    { name: "News", link: "#news-and-updates" },
  ];

  return (
    <div className="w-full fixed bg-white h-14 border-b border-gray-300 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 lg:px-0">
        {/* Logo */}
        <a href="#">
          <Image className="w-[103px] h-[50px]" src={iif_logo} alt="IIF Logo" />
        </a>

        {/* Navbar Links - Hidden on mobile */}
        <div className="hidden lg:flex scroll-smooth items-center space-x-8 ml-16 relative">
          {links.map(({ name, link }) => {
            return (
              <a
                key={link}
                href={link || "/maintenance"}
                className={`flex flex-col items-center cursor-pointer transition-all ${
                  activeLink === link
                    ? "text-black font-bold"
                    : "text-[#565e6d] font-normal"
                } hover:text-black`}
                onMouseEnter={() => setActiveLink(link)}
              >
                <div className="text-base leading-snug">{name}</div>
              </a>
            );
          })}
        </div>

        {/* Hamburger Menu Icon - Visible on mobile */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
          >
            {menuOpen ? <HiOutlineX size={28} /> : <HiMenuAlt4 size={28} />}
          </button>
        </div>

        {/* Side Drawer for Mobile */}
        <div
          className={`lg:hidden fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-40 transform ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out`}
        >
          <div className="flex flex-col p-6 space-y-6">
            {links.map(({ name, link }) => (
              <a
                key={link}
                href={link}
                className={`text-lg cursor-pointer transition-all ${
                  activeLink === link
                    ? "text-black font-bold"
                    : "text-[#565e6d] font-normal"
                } hover:text-black`}
                onClick={() => {
                  setActiveLink(link);
                  setMenuOpen(false);
                }}
              >
                {name}
              </a>
            ))}

            {/* Login and Register Buttons in Mobile Menu */}
            <div className="flex flex-col space-y-4 mt-6">
              <a
                href="/login"
                className="border border-black rounded-[5px] w-full h-9 flex items-center justify-center cursor-pointer hover:bg-gray-100 hover:font-bold transition-all"
              >
                <div className="text-[#0b0000] text-sm leading-snug">Login</div>
              </a>
              <a
                href="/maintenance"
                className="border border-black rounded-[5px] w-full h-9 flex items-center justify-center cursor-pointer hover:bg-gray-100 hover:font-bold transition-all"
              >
                <div className="text-[#0c0000] text-sm leading-snug">
                  Register
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Login and Register Buttons for Desktop */}
        <div className="hidden lg:flex space-x-4">
          <a
            href="/login"
            className="border border-black rounded-[5px] w-[111px] h-9 flex items-center justify-center cursor-pointer hover:bg-gray-100 hover:font-bold transition-all"
          >
            <div className="text-[#0b0000] text-sm leading-snug">Login</div>
          </a>
          <a
            href="/maintenance"
            className="border border-black rounded-[5px] w-28 h-9 flex items-center justify-center cursor-pointer hover:bg-gray-100 hover:font-bold transition-all"
          >
            <div className="text-[#0c0000] text-sm leading-snug">Register</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
