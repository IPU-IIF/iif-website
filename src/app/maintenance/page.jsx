import React from "react";
import Image from "next/image";
import maintanenceImage from "../../assets/maintenance/maintenanceImg.png";

const Maintenance = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      {/* Illustration Image */}
      <div className="mb-8">
        <Image
          src={maintanenceImage} // Update the path if necessary
          alt="Under Maintenance Illustration"
          width={400}
          height={300}
          priority // Ensures faster loading
        />
      </div>

      {/* Maintenance Message */}
      <h1 className="text-2xl font-bold text-gray-800 mb-2">Sorry! We Are Under Maintenance</h1>
      <p className="text-center text-gray-600 mb-4">
        Sorry for the inconvenience, but we are performing some maintenance at the moment.
      </p>
      <p className="text-center text-gray-600">
        If you need to reach us, you can always contact us at{" "}
        <a href="mailto:ipuiif.webteam@gmail.com" className="text-purple-500 font-semibold underline">
        ipuiif.webteam@gmail.com
        </a>.
      </p>
    </div>
  );
};

export default Maintenance;