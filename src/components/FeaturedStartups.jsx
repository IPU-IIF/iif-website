import React from "react";
import erg from "../assets/helpimg/erg.png";
import etec1 from "../assets/helpimg/etec1.png";
import Image from "next/image";

const FeaturedStartups = () => {
  return (
    <div
      className="bg-[#383838] py-8 md:py-12 rounded-3xl w-full max-w-[1380px] mx-auto mb-4 "
      id="startups"
    >
      <h1 className="text-3xl md:text-5xl font-bold text-white text-center mb-10 md:mb-20">
        Featured Startups
      </h1>

      <div className="mb-16 md:mb-32">
        <div className="flex flex-col md:flex-row-reverse items-center md:items-start justify-between gap-8">
          <div className="bg-white rounded-bl-2xl p-4 w-full md:w-80">
            <Image src={erg} alt="map" width={600} height={300} />
          </div>
          <div className="flex-1 text-center md:text-right">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              ErgEnomics
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              The objective of the project is to bridge the gap between design
              and analysis to guide
              <br /> Owners, Developers, Architects and Engineers to save
              operational energy and cost in <br />
              their buildings yet maximize occupant comfort and wellbeing.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-16 md:mb-20">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="bg-white rounded-br-2xl p-4 w-full h-full md:w-80">
            <Image
              className="h-[100px] w-[500px]"
              src={etec1}
              alt="etec"
              width={600}
              height={100}
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              DETEC Innovations
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              The objective of the project is to bridge the gap between design
              and analysis to guide
              <br /> Owners, Developers, Architects and Engineers to save
              operational energy and cost in
              <br /> their buildings yet maximize occupant comfort and
              wellbeing.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mt-8 md:mt-16">
        <button className="px-8 md:px-12 py-2 border border-orange-500 text-white rounded-md hover:bg-orange-500/10 transition-colors">
          View All
        </button>
      </div>
    </div>
  );
};

export default FeaturedStartups;
