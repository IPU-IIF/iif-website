"use client";

import React from "react";
import Head from "next/head";
import { useEffect, useState } from "react";

function DataCounter() {
  const Counter = ({ end, duration, PlusSign, moneySign }) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
      let start = 0;
      const increament = end / ((duration / 1000) * 60);

      const timer = setInterval(() => {
        start += increament;
        if (start > end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }, [end, duration]);
    return (
      <div className="text-3xl text-gray-800">
        {count}
        {moneySign && "K"}
        {PlusSign && "+"}
      </div>
    );
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Counter Animation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-row items-center justify-center flex-1 w-full px-20 text-center">
        <div className="p-6">
          <Counter
            id="Aspiring Entrepreneurs"
            end={450}
            duration={2000}
            PlusSign={true}
          />
          <div className="text-xl text-gray-500">Aspiring Entrepreneurs</div>
        </div>
        <div className="p-6">
          <Counter id="St-Incubated" end={25} duration={2000} PlusSign={true} />
          <div className="text-xl text-gray-500">Start-ups Incubated</div>
        </div>
        <div className="p-6">
          <Counter id="Jbs-created" end={60} duration={2000} PlusSign={true} />
          <div className="text-xl text-gray-500">Jobs Created</div>
        </div>
        <div className="p-6">
          <Counter
            id="fund raised"
            end={500}
            duration={2000}
            moneySign={true}
            PlusSign={true}
          />
          <div className="text-xl text-gray-500">Fund raised by Start-ups</div>
        </div>
      </main>
    </div>
  );
}

export default DataCounter;
