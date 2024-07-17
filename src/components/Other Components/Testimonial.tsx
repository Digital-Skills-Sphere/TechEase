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
          <span className="font-semibold text-[50px]">Customer</span> Voices
          :
        </h1>
        <h1>
          <span className="font-semibold text-[50px]">Hear What</span> They
          Say !
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
          className="cursor-pointer flex justify-center items-center text-[30px] h-[30px] w-[30px] p-[10px] select-none duration-200 hover:scale-125 absolute -left-10 top-16"
          onClick={() => {
            if (isTextVisible > 0) setIsTextVisible(isTextVisible - 1);
          }}
        >
          {isTextVisible > 0 && <i className="fa-solid fa-arrow-left text-primaryColor"></i>}
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
            className="cursor-pointer flex justify-center items-center text-[30px] h-[30px] w-[30px] p-[10px] select-none duration-200 text-primaryColor hover:scale-125  absolute -right-10 top-16"
            onClick={() => {
              if (isTextVisible < testimonials.length - 1)
                setIsTextVisible(isTextVisible + 1);
            }}
          >
            <i className="fa-solid fa-arrow-right"></i>
          </div>
        )}
      </div>
    </div>
  );
};

export default Testimonial;
