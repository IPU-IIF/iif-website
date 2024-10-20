import React from 'react';

const Overview = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center bg-gradient-to-b from-[#f79f1a] to-[#f79f1a] h-[335px] text-gray">
            
            <h2 className="text-darkslategray text-3xl font-bold mb-4">IPU-IIF Overview</h2>

            
            <p className="text-center text-base leading-7 px-6 max-w-3xl">
                The IPU Innovation & Incubation Foundation (IIF) is dedicated to nurturing and funding startups.
                It provides resources, mentorship, and support to help innovative ideas grow into successful businesses.
            </p>

            
            <button
                type="button"
                className="mt-6 bg-darkslategray text-white py-3 px-8 rounded-[10px] hover:bg-opacity-90 transition-all duration-200"
            >
                Read More
            </button>
        </div>
    );
};

export default Overview;