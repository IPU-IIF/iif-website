import React from "react";
import Image from "next/image";
import imageleft from "../assets/NewsAndUpdates/imageleft.png";
import imageright from "../assets/NewsAndUpdates/imageright.png";

const NewsAndUpdates = () => {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <div className="relative text-center mt-8 md:mt-36 px-4">
        <h1 className="text-[#171A1F] text-3xl md:text-5xl font-bold leading-tight md:leading-[84px]">
          News And Updates
        </h1>
        <div className="hidden md:block w-[355px] h-[26px] bg-[#383838] absolute right-40 top-8"></div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row mt-8 md:mt-16 mb-12 md:mb-24 px-4 md:px-8 gap-8">
        {/* Left Image - Hidden on mobile */}
        <div className="hidden md:block">
          <Image src={imageleft} alt="left image" className="ml-8 md:ml-32" />
        </div>

        {/* Center Content */}
        <div className="flex flex-col md:ml-[71.42px] md:mr-[110px] space-y-8 md:space-y-[66px]">
          {/* First News Item */}
          <div className="relative flex flex-col">
            <h2 className="text-[#171A1F] text-2xl font-bold leading-7 mb-3">
              Ideathon
            </h2>
            <p className="text-[#171A1F] text-sm leading-[22px] mb-4 max-w-[363px]">
              It invites innovators, entrepreneurs, and students to pitch their
              start-ups in front of our board to get mentorship, investment and
              more. <br />
              25 September 2024 <br />
              GGSIPU EDC
            </p>
            <a
              href="#"
              className="self-start md:absolute md:top-0 md:right-0 border border-[#F79F1A] rounded-[10px] px-4 py-2 hover:bg-[#fdf4e4]"
            >
              <span className="text-[#F79F1A] text-sm leading-[22px]">
                Read More
              </span>
            </a>
          </div>

          {/* Second News Item */}
          <div className="relative flex flex-col">
            <h2 className="text-[#171A1F] text-2xl font-bold leading-7 mb-3">
              Call for Start-ups
            </h2>
            <p className="text-[#171A1F] text-sm leading-[22px] mb-4 max-w-[363px]">
              It invites innovators, entrepreneurs, and students to pitch their
              start-ups in front of our board to get mentorship, investment and
              more. <br />
              13 May 2024 <br />
              GGSIPU EDC
            </p>
            <a
              href="#"
              className="self-start md:absolute md:top-0 md:right-0 border border-[#F79F1A] rounded-[10px] px-4 py-2 hover:bg-[#fdf4e4]"
            >
              <span className="text-[#F79F1A] text-sm leading-[22px]">
                Read More
              </span>
            </a>
          </div>
        </div>

        {/* Right Image - Hidden on mobile */}
        <div className="hidden md:block">
          <Image src={imageright} alt="right image" className="ml-8 md:ml-32" />
        </div>
      </div>
    </div>
  );
};

export default NewsAndUpdates;
