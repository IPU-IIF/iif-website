import React from "react";
import Summit from "../assets/directors/SumitChoudhary.svg";
import Nikhil from "../assets/directors/Nikhilesh.svg";
import NC from "../assets/directors/NC.svg";
import Ajay from "../assets/directors/Ajay.svg";
import Summant from "../assets/directors/Sumant.svg";
import Image from "next/image";

const Directors = () => {
  // Array of directors with names and the same image path
  const directors = [
    { name: "Prof. Ajay Singh Singholi", image: Ajay },
    { name: "Dr. Sumit Chaudhary", image: Summit },
    { name: "Dr. Nikhilesh Sharma", image: Nikhil },
    { name: "Prof. N C Gupta", image: NC },
    { name: "Ar. Sumant Sharma", image: Summant },
  ];

  return (
    <div className="grid place-items-center py-12 gap-24 " id="directors">
      <h2 className="text-4xl font-bold text-center">Board of Directors</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12">
        {directors.map((director, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="text-black font-bold text-lg mb-2 text-center">
              {director.name}
            </div>
            <div className="relative w-32 h-48 sm:w-40 sm:h-56 md:w-48 md:h-64 lg:w-48 lg:h-64 bg-[#FCE1B8] rounded-b-full overflow-hidden">
              <div className="absolute inset-0 h-3/4 bg-[#FCE1B8] rounded-b-full" />
              <Image
                src={director.image}
                alt={director.name}
                width={500}
                height={500}
                className="absolute bottom-0 w-full h-3/4 object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Directors;
