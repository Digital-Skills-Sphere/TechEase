import { useState, useEffect } from "react";
import DoubleHeading from "./DoubleHeading";
import { whatMakesDifferentData } from "../../utils/utilities";

const WhatMakesDifferent = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const intervalTime = 4000;
    const updateInterval = intervalTime / 100;

    const interval = setInterval(() => {
      setActiveIndex(
        (prevIndex) => (prevIndex + 1) % whatMakesDifferentData.length
      );
      setProgress(0);
    }, intervalTime);

    const progressInterval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) return 0;
        return prevProgress + 1;
      });
    }, updateInterval);

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <div className="flex flex-col gap-8 px-[50px]">
      <DoubleHeading
        subHeading="What makes Us Different"
        heading="IT Solutions"
      />
      <div className="flex justify-between items-center gap-3 max-[1000px]:flex-col-reverse">
        <div className="grid grid-cols-1 gap-5 my-3 max-[1000px]:grid-cols-2 max-[730px]:grid-cols-1">
          {whatMakesDifferentData.map(({ text, para }, index) => (
            <div
              key={index}
              className="flex flex-col gap-2"
              style={{ opacity: index === activeIndex ? 1 : 0.5 }}
            >
              <h2 className="text-xl font-semibold max-[500px]:text-lg">
                {text}
              </h2>
              <p className="text-sm text-[#333] max-w-[600px] max-[500px]:text-xs">
                {para}
              </p>
              <div className="h-[5px] bg-[#ddd] w-[95%] rounded-[5px] overflow-hidden mt-[5px]">
                <div
                  className="h-full bg-secondary rounded-[5px]"
                  style={{
                    width: `${index === activeIndex ? progress + 7 : 0}%`,
                    transition: "width 0.3s",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-auto h-[500px] max-[500px]:h-[300px]">
          <img
            className="w-full h-full"
            src={whatMakesDifferentData[activeIndex].image}
            alt={whatMakesDifferentData[activeIndex].text}
          />
        </div>
      </div>
    </div>
  );
};

export default WhatMakesDifferent;
