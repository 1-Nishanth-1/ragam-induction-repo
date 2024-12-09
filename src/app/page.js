"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [data, setData] = useState([]);
  const [timeframe, setTimeframe] = useState("daily");
  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div className="flex sm:flex-row flex-col lg:gap-x-4 gap-2 my-[25vh] lg:w-[1100px] sm:w-[800px] w-[350px] ">
        <div className="flex bg-[hsl(235,46%,20%)] rounded-xl text-white lg:w-[25%] sm:w-[35%] w-[100%] overflow-hidden flex-col lg:h-[570px]">
          <div className="sm:block flex bg-blue-800 rounded-xl relative z-10 lg:-translate-y-[230px] sm:-translate-y-[300px] translate-y-[-470px] lg:pt-[200px] pt-[350px] w-full sm:pb-[50px] h-full">
            <img
              src="images/image-jeremy.png"
              className="border-white border border-[5px] lg:scale-[0.4] sm:scale-[0.45] scale-[0.35] rounded-full sm:-mx-9 sm:translate-y-[0] translate-y-[55px] sm:translate-x-[0] translate-x-[-65px]"
              alt="Jeremy Robson"
            />
            <div className=" lg:translate-y-[-50px] sm:translate-y-[0] translate-y-[150px] sm:translate-x-[0] translate-x-[-160px]">
              <div className="text-md px-7 opacity-70">Report For</div>
              <div className="text-3xl px-7 sm:text-wrap text-nowrap">
                Jeremy Robson
              </div>
            </div>
          </div>
          <div className="text-xl flex sm:gap-5 gap-10 justify-evenly p-7 sm:flex-col flex-row sm:my-[-280px] lg:my-[-200px] mt-[-470px] ">
            <div
              onClick={() => setTimeframe("daily")}
              className={`cursor-pointer ${
                timeframe === "daily" ? "" : "opacity-70"
              }`}
            >
              Daily
            </div>
            <div
              onClick={() => setTimeframe("weekly")}
              className={`cursor-pointer z-[100] ${
                timeframe === "weekly" ? "" : "opacity-70"
              }`}
            >
              Weekly
            </div>
            <div
              onClick={() => setTimeframe("monthly")}
              className={`cursor-pointer z-[100] ${
                timeframe === "monthly" ? "" : "opacity-70"
              }`}
            >
              Monthly
            </div>
          </div>
        </div>

        <div className="flex lg:w-[75%] w-[100%] lg:h-[550px] sm:h-[800px] h-[1000px] sm:flex-row flex-col sm:flex-wrap justify-around lg:gap-y-7 gap-y-2 transform transition-transform duration-500">
          {data.map((item, index) => {
            const { current, previous } = item.timeframes[timeframe];

            return (
              <div
                key={index}
                className="flex rounded-xl text-white lg:w-[30%] sm:w-[47%] w-[100%] overflow-hidden hover:scale-105 transform transition-transform duration-500"
                style={{ backgroundColor: item.color }}
              >
                <div className="relative w-full h-full">
                  <div className="absolute top-0 right-5 w-[50px] h-[50px]">
                    <img
                      src={`images/${item.icon}.svg`}
                      alt={item.title}
                      className="w-full h-full object-contain scale-150"
                    />
                  </div>
                  <div className="bg-[hsl(235,46%,20%)] pl-7 pr-7 rounded-xl relative z-10 h-full translate-y-10 pt-7">
                    <div className="text-lg flex items-center justify-between">
                      <span>{item.title}</span>
                      <img
                        src="./images/icon-ellipsis.svg"
                        alt="Options"
                        className="cursor-pointer"
                      />
                    </div>
                    <div className="flex justify-between  sm:flex-col pb-9">
                      <div className="lg:text-6xl sm:text-5xl text-4xl sm:mt-2 sm:pt-5">
                        {current}hrs
                      </div>
                      <div className="text-sm opacity-70 sm:py-9 py-4">
                        Last {timeframe} - {previous} hrs
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
