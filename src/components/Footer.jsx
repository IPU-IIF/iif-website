import React from "react";
import Image from "next/image";
import mapsvg from "../assets/helpimg/map.svg";
import iif_logo from "../assets/logo/iif_logo.png";
import {
  TiSocialFacebookCircular,
  FaTwitter,
  TiSocialInstagram,
  TiSocialLinkedinCircular,
} from "react-icons/ti";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <div className="mb-6 md:mb-0">
            <div className="flex flex-row ">
              {/*logo*/}
              <div className="flex flex-col items-center">
                <Image className="h-[54px] w-[75px] pb-2" src={iif_logo} />
              </div>
              <div className="leading-tight">
                <p className="m-0 text-[12px] font-[700]">IPU IIF</p>
                <p className="m-0 text-[12px] font-[700]">Innovation and</p>
                <p className="m-0 text-[12px] font-[700]">
                  Incubation Foundation
                </p>
              </div>
            </div>

            <span>Subscribe to our newslatter</span>
            <form className="flex">
              <input
                type="email"
                placeholder="Input your email"
                className="bg-white text-gray-800 px-4 py-2 rounded-l-md"
              />
              <button className="bg-gray-600 px-4 py-2 rounded-r-md">
                Subscribe
              </button>
            </form>
            <nav className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-bold mb-2">Home</h3>
                <ul>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Directors</a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-2">Start-ups</h3>
                <ul>
                  <li>
                    <a href="#">Incubated Start-ups</a>
                  </li>
                  <li>
                    <a href="#">Collaborations</a>
                  </li>
                  <li>
                    <a href="#">Call for startups</a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-2">News</h3>
                <ul>
                  <li>
                    <a href="#">Recent Updates</a>
                  </li>
                  <li>
                    <a href="#">Digital Coverage</a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-2">Contact Us</h3>
                <ul>
                  <li>
                    <a href="#">Gallery</a>
                  </li>
                  <li>
                    <a href="#">Our Team</a>
                  </li>
                  <li>
                    <a href="#">Apply Now</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="flex flex-col md:flex-col justify-between items-start mb-8">
            <div>
              <Image src={mapsvg} alt="map" width={500} height={500} />
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0  ">
              <a href="#" aria-label="LinkedIn ">
                <TiSocialLinkedinCircular className="text-white size-10" />
              </a>
              <a href="#" aria-label="Instagram">
                <TiSocialInstagram className="text-white size-10" />
              </a>
              <a href="#" aria-label="Facebook">
                <TiSocialFacebookCircular className="text-white size-10" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-700">
          <p>&copy; 2024 IPU IIF Inc. • Privacy • Terms • Sitemap</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
