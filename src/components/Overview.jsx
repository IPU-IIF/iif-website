import React from 'react';

const Overview = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center bg-gradient-to-b from-[#f79f1a] to-[#f79f1a] h-[335px] text-gray px-4 md:px-6 lg:px-8">
            
            
            <h2 className="text-darkslategray text-3xl font-bold mb-4">
                IPU-IIF Overview
            </h2>

        
            <p className="text-center text-base leading-7 max-w-3xl px-4 lg:px-0 lg:text-lg">
                The IPU Innovation & Incubation Foundation (IIF) is dedicated to nurturing and funding startups. 
                It provides resources, mentorship, and support to help innovative ideas grow into successful businesses.
            </p>

            
            <button 
                type="button"
                className="mt-6 bg-[#383838] text-white py-3 px-8 md:py-4 md:px-12 lg:py-[20px] lg:px-[136px] w-full max-w-[354px] h-auto rounded-[10px] hover:bg-opacity-90 transition-all duration-200 inline-flex items-center justify-center gap-[20px]">
                Read More
            </button>
        </div>
    );
};

export default Overview;