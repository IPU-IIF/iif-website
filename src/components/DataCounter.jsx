"use client";
import React from 'react'
import dynamic from 'next/dynamic';

// Dynamically import the AnimatedNumbers component
const AnimatedNumbers = dynamic(
  () => import("react-animated-numbers"),
  { ssr: false }
);

// Array of counter data
const counterData = [
  {
    end: 450,
    duration: 2000,
    PlusSign: true,
    label: "Aspiring Entrepreneurs",
    prefix: "",
    postfix: "",
  },
  {
    end: 25,
    duration: 2000,
    PlusSign: true,
    label: "Start-ups Incubated",
    prefix: "",
    postfix: "",
  },
  {
    end: 60,
    duration: 2000,
    PlusSign: true,
    label: "Jobs Created",
    prefix: "",
    postfix: "",
  },
  {
    end: 500,
    duration: 2000,
    moneySign: true,
    PlusSign: true,
    label: "Fund raised by Start-ups",
    prefix: "",
    postfix: "K", // Assuming you want a K for thousands
  },
];

const AchievementSection = () => {
  return (
    <div className='py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
      <div className='py-8 px-16 flex flex-col sm:flex-row items-center justify-between'>
        {counterData.map((achievement, index) => {
          return (
            <div key={index} className='flex flex-col items-center justify-center mx-4 my-4 sm:my-0'>
              <h2 className='text-black text-4xl font-bold flex flex-row'>
                {achievement.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={achievement.end}
                  locale='en-US'
                  className='text-black font-bold text-4xl'
                  config={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tension: 140 * (index + 1),
                    };
                  }}
                />
                {achievement.postfix}+
              </h2>
              <p className='text-black text-center text-base '>{achievement.label}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AchievementSection;