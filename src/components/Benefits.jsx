// ExampleUsage.js
import React from "react";
import Card from "./BenefitCard"; // Ensure this is the correct import for your Card component
import mentorship from "../assets/Benefits/mentorship.svg"; // Replace with your actual image path
import designed from "../assets/Benefits/designedWorkspace.svg";
import specialised from "../assets/Benefits/specialisedWorkshop.svg";
import networking from "../assets/Benefits/networkingnexus.svg";

const benefitsData = [
  {
    imageSrc: networking,
    title: "Networking Nexus",
    description:
      "Build high-value connections with industry leaders, potential investors, and fellow entrepreneurs to forge strategic partnerships and opportunities.",
  },
  {
    imageSrc: mentorship,
    title: "Mentorship",
    description:
      "Leverage the expertise of industry professionals to receive insightful guidance and informed perspectives.",
  },
  {
    imageSrc: specialised,
    title: "Specialized Workshops",
    description:
      "Participate in expert-led workshops covering advanced business strategies and industry best practices to enhance your entrepreneurial skills.",
  },
  {
    imageSrc: designed,
    title: "Designated Workspace",
    description:
      "Access state-of-the-art office environments designed to foster productivity and innovation.",
  },
];

const Benefits = () => {
  return (
    <div className="grid place-items-center py-12 gap-16">
      <div className="grid md:grid-cols-2 gap-6 place-content-center md:place-content-start">
      <div className="h-3 my-auto hidden md:block bg-black w-[35vw] mb-4"></div>
      <h2 className="text-4xl font-bold">Benefits</h2>
      </div>
      <div className="flex flex-wrap justify-center gap-16">
        {benefitsData.map((benefit, index) => (
          <Card
            key={index} // Use a unique key for each card, index is used here but consider using a unique ID if available
            title={benefit.title}
            imageSrc={benefit.imageSrc}
            description={benefit.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Benefits;