"use client";
import React from 'react';
import Image from 'next/image';
import LeftImage from '../assets/newsandupdates-image-left.png'
import RightImage from '../assets/newsandupdates-image-right.png'

const NewsAndUpdates = () => {
    return (
        <div className='mx-[121.12px]'>
            <div className="bg-white flex flex-col py-16 px-6 w-full">

                <div className="font-sans text-6xl font-bold flex mb-14 justify-center">
                    <div className="w-1/3"></div>

                    <div className='w-[40%] mt-1'>
                        <h1 className="text-[48px] font-bold p-0 font-helvetica text-[#171A1F]">News and Updates</h1>
                    </div>

                    <div className='w-[30%]'>
                        <hr className="bg-[#383838] h-[26px] mt-4" />
                    </div>
                </div>
                {/* News Section centre and middle */}
                <div className='flex flex-row  justify-around'>

                    <div>
                        <Image src={LeftImage} className='scale-105' />
                    </div>


                    <div className='flex flex-col w-1/2 mt-3'>
                        <div className='mb-[66px] mx-16 flex flex-row font-helvetica'>
                            <div className='mr-[34]'>
                                <h2 className="text-gray-800 text-2xl font-bold leading-7 mb-[13px]">ABHYUDAYA</h2>
                                <p className="text-gray-800 text-sm leading-6 font-normal">
                                    <span className="text-gray-800 text-sm font-bold leading-6">Love Babbar</span>, Founder of Code Help, shares insights and
                                    experiences, aiming to inspire and empower innovators,
                                    entrepreneurs, and students.
                                    <br />
                                    <br />
                                    • 11 September 2024, 10:30 am <br />
                                    • GGSIPU EDC Auditorium
                                </p>
                            </div>

                            <div className='flex justify-content-end'>
                                <button className='rounded-[10px] w-[95px] h-[36px] text-[14px] border border-[#F79F1A] text-[#F79F1A] py-[7px] px-[12px] relative top-[130px]'>
                                    View More
                                </button>
                            </div>

                        </div>

                        <div className='mb-[66px] mx-16 flex flex-row font-helvetica'>

                            <div className='mr-[34]'>
                                <h2 className="text-gray-800 text-2xl font-bold leading-7 mb-[13px]">Call for Start-ups</h2>
                                <p className="text-sm mt-2">
                                    It invites innovators, entrepreneurs, and students to pitch
                                    their start-ups in front of our board to get mentorship,
                                    investment, and more.
                                    <br />
                                    <br />
                                    • 13 May 2024 <br />
                                    • GGSIPU EDC
                                </p>
                            </div>

                            <div className='flex justify-content-end'>
                                <button className='rounded-[10px] w-[95px] h-[36px] text-[14px] border border-[#F79F1A] text-[#F79F1A] py-[7px] px-[12px] relative top-[130px]'>
                                    View More
                                </button>
                            </div>
                        </div>
                    </div>


                    <div className=''>
                        <Image src={RightImage} className='scale-105' />
                    </div>
                </div>

                {/* View All Button */}
                <div className="text-center ">
                    <button className="bg-[#383838] h-[62px] w-[333px] text-white py-3 px-8 rounded-md">
                        View All
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NewsAndUpdates;
