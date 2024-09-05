"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa"; // Make sure to install react-icons package
import iif_logo from "@/assets/logo/iif_logo.png";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return (
    <footer className="bg-gray-800 text-white py-8 px-4">
      <div>
        <div className="py-[96px] px-[107px]">
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

          <div>
            <p className="font-[700] text-[20px] mb-2">
              Subscribe to our newsletter
            </p>
            <form onSubmit={handleSubmit} className="w-full flex">
              <div className="">
                <input
                  type="email"
                  className="w-full border border-gray-300"
                  placeholder="Enter your email.."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-[100px] bg-[#565E6D] text-white hover:bg-[#6c768a] font-[400] text-[14px]"
              >
                Subscribe
              </button>
            </form>
          </div>

          <div></div>

          <div></div>
        </div>

        {/* right */}
        <div>
          <div></div>

          <div></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
