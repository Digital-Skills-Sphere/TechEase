import { PinContainer } from "../ui/3d-pin";
import DotPattern from "../ui/dot-pattern";
import SparklesText from "../ui/sparkles-text";
import Btn from "./Btn";
import { Link } from "react-router-dom";

export function AnimatedPinDemo() {
  return (
    <div className="w-full relative bg-white py-20">
      <div>
        <DotPattern />
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex items-center pl-24 gap-5">
          <SparklesText
            className="font-bold"
            text="Our"
            sparklesCount={2}
            isBig={true}
          />
          <SparklesText
            className="font-thin text-4xl"
            text="Projects"
            sparklesCount={2}
            isBig={false}
          />
        </div>
        <div className="flex justify-center gap-5">
          <PinContainer
            title="/ui.aceternity.com"
            href="https://cancerheal.co.in/index.html"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                Cancer Heal
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                </span>
              </div>
              <img
                className="flex flex-1 w-full rounded-lg mt-4 object-contain"
                src="https://skillsyard.com/public/images/cancer-heal-img5.png"
                alt=""
              />
            </div>
          </PinContainer>
          <PinContainer
            title="/ui.aceternity.com"
            href="https://hotelswale.com/"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                Hotelswale
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500 ">
                  Customizable Tailwind CSS and Framer Motion Components.
                </span>
              </div>
              <img
                className="flex flex-1 w-full rounded-lg mt-4 object-contain"
                src="https://skillsyard.com/public/images/inept-studio-show-img1.png"
                alt=""
              />
            </div>
          </PinContainer>
          <PinContainer
            title="/ui.aceternity.com"
            href="https://ineptstudio.com/"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                Inept Stuio
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500 ">
                  Customizable Tailwind CSS and Framer Motion Components.
                </span>
              </div>
              <img
                className="flex flex-1 w-full rounded-lg mt-4 object-contain"
                src="https://skillsyard.com/public/images/inept-studio-show-img1.png"
                alt=""
              />
            </div>
          </PinContainer>
        </div>
        <Link
          to="/projects"
          className="bg-black w-fit relative z-10 ml-auto mr-32 mt-10"
        >
          <Btn heading="More Projects" />
        </Link>
      </div>
    </div>
  );
}
