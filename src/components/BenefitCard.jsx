// Card.js
import React from "react";
import Image from "next/image";

const Card = ({ title, imageSrc, description }) => {
  return (
    <div className="flex flex-col items-center p-4 border border-transparent hover:border-gray-300 rounded-lg hover:shadow-md w-64 gap-8 transition duration-700 ease-in-out">
      <Image
        src={imageSrc}
        alt={title}
        width={150} // Set width as needed
        height={150} // Set height as needed
        className="mb-2 rounded" // Adds some space below the image
      />
      <div>
        <h3 className="text-xl text-center font-semibold mb-2">{title}</h3>
        <p className="text-gray-700 text-center">{description}</p>
      </div>
    </div>
  );
};

export default Card;
