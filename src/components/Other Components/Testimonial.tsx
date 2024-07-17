import React, { useState } from "react";
import { imageUrls, testimonials } from "../../utils/utilities";
import quotesImg from "../../assets/quote.png";

type TestimonialProps = {};

const Testimonial: React.FC<TestimonialProps> = () => {
  const [isTextVisible, setIsTextVisible] = useState<number>(0);

  const handleClick = (index: number) => {
    setIsTextVisible(index);
  };

  return (
    <div className="relative flex flex-col justify-center items-center gap-[30px] px-[30px]">
      <div className="text-[40px] flex flex-col leading-[54px]">
        <h1 className="font-light text-center">
          <span className="font-semibold text-[50px]">Customer</span> Voices :
        </h1>
        <h1>
          <span className="font-semibold text-[50px]">Hear What</span> They Say
          !
        </h1>
      </div>
      <div className="flex justify-center gap-[10px] w-full m-auto h-[200px]">
        {testimonials.map((test, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className={`relative flex justify-center items-center duration-300 cursor-pointer rounded-full h-[90px] w-[90px] ${
              index === isTextVisible
                ? "border-secondaryColor border-[3px]"
                : "border-[3px] border-primaryColor"
            } ${index % 2 === 0 ? "" : "translate-y-[90px]"}`}
          >
            <img
              className="w-full h-full object-cover max-w-[85px] rounded-full p-1"
              src={imageUrls[index % imageUrls.length]}
              alt="testimonial"
            />
          </div>
        ))}
      </div>
      <div>
        <img className="w-[65px]" src={quotesImg} alt="" />
      </div>
      <div className="relative flex items-center justify-center gap-[30px] w-[80%] m-auto">
        <div
          className="cursor-pointer flex justify-center items-center text-[30px] h-[30px] w-[30px] select-none duration-200 hover:scale-125 absolute -left-12 top-16"
          onClick={() => {
            if (isTextVisible > 0) setIsTextVisible(isTextVisible - 1);
          }}
        >
          {isTextVisible > 0 && (
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="1"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.854 4.646a.5.5 0 010 .708L3.207 8l2.647 2.646a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 01.708 0z"
                clipRule="evenodd"
              ></path>
              <path
                fillRule="evenodd"
                d="M2.5 8a.5.5 0 01.5-.5h10.5a.5.5 0 010 1H3a.5.5 0 01-.5-.5z"
                clipRule="evenodd"
              ></path>
            </svg>
          )}
        </div>

        <div className="relative flex flex-col justify-center items-center duration-500 w-full h-[30vh]">
          {testimonials.map(({ name, text }, ind) => (
            <div
              className={`absolute top-0 flex flex-col items-center w-full duration-200 ${
                isTextVisible === ind ? "opacity-100" : "opacity-0"
              }`}
              key={ind}
            >
              <h2 className="text-[26px] font-bold pb-5 text-primaryColor">
                {name}
              </h2>
              <p className="leading-[30px] text-center">{text}</p>
            </div>
          ))}
        </div>
        {isTextVisible < testimonials.length - 1 && (
          <div
            className="cursor-pointer flex justify-center items-center text-[30px] h-[30px] w-[30px] p-0 select-none duration-200 hover:scale-125  absolute -right-12 top-16"
            onClick={() => {
              if (isTextVisible < testimonials.length - 1)
                setIsTextVisible(isTextVisible + 1);
            }}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="1"
              viewBox="0 0 16 16"
              height="12em"
              width="12em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z"
                clipRule="evenodd"
              ></path>
              <path
                fillRule="evenodd"
                d="M2 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

export default Testimonial;
