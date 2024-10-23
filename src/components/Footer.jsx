import React from "react";
import Image from "next/image";
import iif_logo from "../assets/logo/iif_logo.png";
import {
  TiSocialFacebookCircular,
  TiSocialInstagram,
  TiSocialLinkedinCircular,
} from "react-icons/ti";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <div className="mb-6 md:mb-0">
            <div className="flex flex-row">
              {/* Logo */}
              <div className="flex flex-col items-center">
                <Image
                  className="h-[54px] w-[75px] pb-2"
                  src={iif_logo}
                  alt="IIF Logo"
                />
              </div>
              <div className="leading-tight ml-2">
                <p className="m-0 text-[12px] font-[700]">IPU IIF</p>
                <p className="m-0 text-[12px] font-[700]">Innovation and</p>
                <p className="m-0 text-[12px] font-[700]">
                  Incubation Foundation
                </p>
              </div>
            </div>

            <span className="block mt-4">Subscribe to our newsletter</span>
            <form className="flex flex-col md:flex-row mt-2">
              <input
                type="email"
                placeholder="Input your email"
                className="bg-white text-gray-800 px-4 py-2 rounded-l-md mb-2 md:mb-0 md:rounded-l-none"
              />
              <button className="bg-gray-600 px-4 py-2 rounded-md md:rounded-l-none">
                Subscribe
              </button>
            </form>

            <nav className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-4">
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

          <div className="flex flex-col justify-between items-start mb-8">
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18252.741245101875!2d77.29014588697625!3d28.659326677519502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb2d97ff9653%3A0xa236359e084edd43!2sGuru%20Gobind%20Singh%20Indraprastha%20University%20(East%20Delhi%20Campus)!5e0!3m2!1sen!2sin!4v1709991933563!5m2!1sen!2sin"
                className="w-full h-64 border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" aria-label="LinkedIn">
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
          <p className="text-center md:text-left">
            &copy; 2024 IPU IIF Inc. • Privacy • Terms • Sitemap
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
