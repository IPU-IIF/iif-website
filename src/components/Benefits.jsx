import React from "react";
import Image from "next/image";
import mentorship from "../assets/Benefits/mentorship.svg";
import designed from "../assets/Benefits/designedWorkspace.svg"
import specialised from "../assets/Benefits/specialisedWorkshop.svg"
import networking from "../assets/Benefits/networkingnexus.svg"

const Benefits = () => {
  return (
    <div className="w-full relative bg-white h-[577px] overflow-hidden text-left text-29xl text-gray font-h5">
      <b className="absolute top-[49px] left-[calc(50%_-_88px)] leading-[84px]">
        Benefits
      </b>
      <div className="absolute top-[430px] left-[134px] w-[1173px] h-[125px] text-center text-sm text-darkslategray">
        <div className="absolute top-[1px] left-[0px] w-[254px] h-[124px]">
          <div className="absolute top-[36px] left-[0px] leading-[22px] inline-block w-[254px]">
            <p className="m-0">
              Build high-value connections with industry leaders, potential
              investors, and fellow entrepreneurs to forge strategic partnerships and opportunities.
            </p>
          </div>
          <b className="absolute top-[0px] left-[33px] text-xl leading-[28px] inline-block w-[187px]">
            Networking Nexus
          </b>
        </div>
        <div className="absolute top-[1px] left-[969px] w-[204px] h-[124px]">
          <div className="absolute top-[36px] left-[0px] leading-[22px] inline-block w-[204px]">
            Leverage the expertise of industry professionals to receive
            insightful guidance and informed perspectives
          </div>
          <b className="absolute top-[0px] left-[calc(50%_-_54px)] text-xl leading-[28px] text-left">
            Mentorship
          </b>
        </div>
        <div className="absolute top-[0px] left-[654px] w-[260px] h-[125px]">
          <div className="absolute top-[37px] left-[0px] leading-[22px] inline-block w-[260px]">
            Participate in expert-led workshops covering advanced business
            strategies and industry best practices to enhance your
            entrepreneurial skills.
          </div>
          <b className="absolute top-[0px] left-[calc(50%_-_125px)] text-xl leading-[28px] inline-block w-[228px]">
            Specialized Workshops
          </b>
        </div>
        <div className="absolute top-[0px] left-[346px] w-[222px] h-[125px]">
          <div className="absolute top-[37px] left-[20px] leading-[22px] inline-block w-[182px]">
            Access state-of-the-art office environments designed to foster
            productivity and innovation.
          </div>
          <b className="absolute top-[0px] left-[calc(50%_-_111px)] text-xl leading-[28px] inline-block w-[222px] h-[30px]">
            Designated workspace
          </b>
        </div>
      </div>
      <div className="absolute top-[78px] left-[123px] bg-darkslategray w-[484px] h-[26px]" />
      <Image
        className="absolute top-[215px] left-[185px] overflow-hidden"
        alt="Networking"
        src={networking}
        width={146}
        height={146}
      />
      <Image
        className="absolute top-[223px] left-[833px] overflow-hidden"
        alt="Presentation"
        src={designed}
        width={130}
        height={130}
      />
      <Image
        className="absolute top-[220px] left-[514px] overflow-hidden"
        alt="Desk Computer"
        src={specialised}
        width={136}
        height={136}
      />
      <Image
        className="absolute top-[221px] left-[1146px] overflow-hidden"
        alt="Guide"
        src={mentorship}
        width={122}
        height={122}
      />
    </div>
  );
};

export default Benefits;
