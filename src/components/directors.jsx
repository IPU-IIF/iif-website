import React from 'react';
import Summit from "../assets/directors/SumitChoudhary.svg";
import Nikhil from "../assets/directors/Nikhilesh.svg"
import NC from "../assets/directors/NC.svg"
import Ajay from "../assets/directors/Ajay.svg"
import Summant from "../assets/directors/Sumant.svg"
import Image from 'next/image';

const Directors = () => {
  // Array of directors with names and the same image path
  const directors = [
    { name: 'Prof. Ajay Singh Singholi', image: Ajay },
    { name: 'Dr. Sumit Chaudhary', image: Summit },
    { name: 'Dr. Nikhilesh Sharma', image: Nikhil },
    { name: 'Prof. N C Gupta', image:  NC},
    { name: 'Ar. Sumant Sharma', image: Summant },
  ];

  return (
    <div className="grid place-items-center h-[50vh] gap-8">
      <h2 className="text-4xl font-bold">Board of Directors</h2>
      <div className="grid grid-cols-5 gap-8">
        {directors.map((director, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="text-black font-bold text-md mb-2">{director.name}</div> {/* Displaying the name */}
            <div className="relative w-48 h-64 bg-[#FCE1B8] rounded-b-full overflow-hidden">
              <div className="absolute inset-0 h-3/4 bg-[#FCE1B8] rounded-b-full" />
              <Image
                src={director.image} // Use the image for each director
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
