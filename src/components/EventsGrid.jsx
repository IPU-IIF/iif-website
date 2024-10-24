import React from "react";
import Image from "next/image";
import pastimg1 from "../assets/PastEvents/pastevents1.png";
import pastimg2 from "../assets/PastEvents/pastevents2.png";
import pastimg3 from "../assets/PastEvents/pastevents3.png";
import pastimg4 from "../assets/PastEvents/pastevents4.png";
import pastimg5 from "../assets/PastEvents/pastevents5.png";
import pastimg6 from "../assets/PastEvents/pastevents6.png";

const EventsGrid = () => {
  const events = [
    {
      id: 1,
      image: pastimg1,
      title: "Call For Start-ups",
      className:
        "h-[300px] md:h-[400px] lg:h-[465px] w-full md:w-[500px] lg:w-[581px]",
      wrapperClass: "w-full md:w-auto lg:absolute lg:top-0 lg:left-0",
      titleClass: "top-[220px] md:top-[300px] lg:top-[372px]",
    },
    {
      id: 2,
      image: pastimg2,
      title: "IEEE Week",
      className:
        "h-[200px] md:h-[180px] lg:h-[223px] w-full md:w-[500px] lg:w-[581px]",
      wrapperClass: "w-full md:w-auto lg:absolute lg:top-0 lg:left-[600px]",
      titleClass: "top-[100px] md:top-[90px] lg:top-[132px]",
    },
    {
      id: 3,
      image: pastimg3,
      title: "Skill Up",
      className:
        "h-[200px] md:h-[180px] lg:h-[223px] w-full md:w-[500px] lg:w-[581px]",
      wrapperClass:
        "w-full md:w-auto lg:absolute lg:top-[243px] lg:left-[600px]",
      titleClass: "top-[100px] md:top-[90px] lg:top-[132px]",
    },
    {
      id: 4,
      image: pastimg4,
      title: "MATLAB",
      className:
        "h-[200px] md:h-[250px] lg:h-[305px] w-full md:w-[320px] lg:w-[381px]",
      wrapperClass: "w-full md:w-auto lg:absolute lg:top-[485px] lg:left-0",
      titleClass: "top-[100px] md:top-[160px] lg:top-[212px]",
    },
    {
      id: 5,
      image: pastimg5,
      title: "Abhyudaya",
      className:
        "h-[200px] md:h-[250px] lg:h-[305px] w-full md:w-[320px] lg:w-[381px]",
      wrapperClass:
        "w-full md:w-auto lg:absolute lg:top-[485px] lg:left-[400px]",
      titleClass: "top-[100px] md:top-[160px] lg:top-[212px]",
    },
    {
      id: 6,
      image: pastimg6,
      title: "View All",
      className:
        "h-[200px] md:h-[250px] lg:h-[305px] w-full md:w-[320px] lg:w-[381px]",
      wrapperClass:
        "w-full md:w-auto lg:absolute lg:top-[485px] lg:left-[800px]",
      titleClass: "top-[100px] md:top-[160px] lg:top-[212px]",
    },
  ];

  return (
    <div className="mb-10 lg:mb-[201px]">
      <div className="text-center mb-8 mt-10 lg:mb-[47px] lg:mt-[143px] text-[#171A1F] text-3xl lg:text-[48px] font-bold leading-normal lg:leading-[84px]">
        Past Events
      </div>

      <div className="relative flex items-center justify-center content-center">
        <div className="w-full max-w-[1200px] lg:h-[810px] px-4 lg:px-0 relative">
          <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center md:gap-4 lg:block">
            {events.map((event) => (
              <div
                key={event.id}
                className={`relative cursor-pointer mb-4 md:mb-4 ${event.wrapperClass}`}
              >
                <div className="relative">
                  <Image
                    src={event.image}
                    alt={event.title}
                    width={1000}
                    height={500}
                    className={`object-cover ${event.className}`}
                  />
                  <p
                    className={`absolute ${event.titleClass} left-[32px] text-white text-2xl md:text-[2.5rem] lg:text-[3rem] font-normal leading-normal lg:leading-[5.25rem] font-sans`}
                  >
                    {event.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          type="button"
          className="mt-6 bg-[#383838] text-white py-3 px-8 md:py-4 md:px-12 lg:py-[20px] lg:px-[136px] w-full max-w-[354px] h-auto rounded-[10px] hover:bg-opacity-90 transition-all duration-200 gap-[20px]"
        >
          View All
        </button>
      </div>
    </div>
  );
};

export default EventsGrid;
