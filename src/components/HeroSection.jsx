import React from "react";
import Image from "next/image";
import Link from "next/link";
import backgroundImage from "../assets/heropage/bg_hero.svg";
import overlayImage from "../assets/heropage/Overlay .svg";
import chatIcon from "../assets/heropage/Phone Message.svg";

const HeroSection = () => {
  return (
    <div className="relative w-full h-[600px]">
      <Image
        src={backgroundImage}
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="z-0"
      />

      {/* Img Overlay */}
      <Image
        src={overlayImage}
        alt="Overlay Image"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="z-10 opacity-40"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-40 z-20" />

      <div className="relative z-30 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">IPU</h1>
        <p className="text-3xl lg:text-5xl font-bold mb-4">
          INNOVATION & INCUBATION FOUNDATION
        </p>
        <p className="lg:w-[1190px] h-[24px]  text-[#f4f4f4] text-2xl font-bold font-['Helvetica'] leading-7">
          Empowering the transformation of Innovative concepts into Tangible
          Results
        </p>

        {/* Action Button */}
        <button className="bg-[#F4A300] text-white text-2xl font-bold font-['Helvetica']leading-7 lg:text-lg px-10 py-3 lg:w-[511px] h-[58px] rounded-[10px] hover:bg-[#f49800] focus:outline-none focus:ring-2 focus:ring-[#F4A300] focus:ring-opacity-50 mt-32">
          Pitch Us
        </button>

        <div className="absolute bottom-10 flex space-x-2">
          <span className="h-3 w-3 bg-white rounded-full"></span>
          <span className="h-3 w-3 bg-white opacity-50 rounded-full"></span>
          <span className="h-3 w-3 bg-white opacity-50 rounded-full"></span>
          <span className="h-3 w-3 bg-white opacity-50 rounded-full"></span>
        </div>
      </div>

      {/* WhatsApp Chat Button */}

      <div
        className="absolute bottom-10 right-10 bg-[#383838] text-white rounded-full p-4 shadow-lg hover:bg-[#128C7E] flex justify-center items-center cursor-pointer z-30"
        style={{ width: "64px", height: "64px" }} // Ensures proper button size
      >
        <Link
          href="https://wa.me/+917766924862"
          passHref
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={chatIcon}
            alt="Chat with us on WhatsApp"
            width={32}
            height={32}
          />
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
