import { useEffect, useRef, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import SparklesText from "../ui/sparkles-text";

const Accordian2 = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const [bgPercent, setBgPercent] = useState(100);
  const [bgReversePercent, setBgReversePercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (divRef.current) {
        const rect = divRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight && rect.bottom > 0) {
          const percentInView = Math.min(
            1,
            Math.max(
              0,
              (windowHeight - rect.top) / (windowHeight + rect.height)
            )
          );

          setBgPercent(100 - percentInView * 100);
          setBgReversePercent(percentInView * 100);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="relative px-20 py-28 text-white flex flex-col gap-10 overflow-hidden"
    >
    <div
      ref={divRef}
      className="absolute w-full h-full top-20 left-1/2 -translate-x-1/2"
      style={{
        background: `conic-gradient(from 90deg at ${bgPercent}% 0%, rgba(97, 106, 115, .12), transparent 180deg) 0% 0% / 50% 100% no-repeat, conic-gradient(from 270deg at ${bgReversePercent}% 0%, transparent 180deg, rgba(97, 106, 115, .12)) 100% 0% / 50% 100% no-repeat`,
      }}
    />
      <div className="flex flex-col gap-5">
        <h2 className="text-xl text-[#b9b9b9]">FAQ</h2>
        <SparklesText
          text="Frequently ask Questions"
          sparklesCount={2}
          isBig={true}
        />
      </div>
      <div className="">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <span className="text-3xl">
                How much time does it usually take to develop a website?{" "}
              </span>
            </AccordionTrigger>
            <AccordionContent className="max-w-[80vw] leading-[35px]">
              The terms of web solution development may vary a lot from project
              to project. Based on the complexity, scope of functionality, and
              general purpose of your website, it may take from 3-6 weeks to
              several months to complete. The fastest results without a bit of
              sacrificed quality can be achieved with a savvy development
              provider backing up the project.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              <span className="text-3xl">
                How much time does it usually take to develop a website?{" "}
              </span>
            </AccordionTrigger>
            <AccordionContent className="max-w-[80vw] leading-[35px]">
              The terms of web solution development may vary a lot from project
              to project. Based on the complexity, scope of functionality, and
              general purpose of your website, it may take from 3-6 weeks to
              several months to complete. The fastest results without a bit of
              sacrificed quality can be achieved with a savvy development
              provider backing up the project.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              <span className="text-3xl">
                How much time does it usually take to develop a website?{" "}
              </span>
            </AccordionTrigger>
            <AccordionContent className="max-w-[80vw] leading-[35px]">
              The terms of web solution development may vary a lot from project
              to project. Based on the complexity, scope of functionality, and
              general purpose of your website, it may take from 3-6 weeks to
              several months to complete. The fastest results without a bit of
              sacrificed quality can be achieved with a savvy development
              provider backing up the project.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              <span className="text-3xl">
                How much time does it usually take to develop a website?{" "}
              </span>
            </AccordionTrigger>
            <AccordionContent className="max-w-[80vw] leading-[35px]">
              The terms of web solution development may vary a lot from project
              to project. Based on the complexity, scope of functionality, and
              general purpose of your website, it may take from 3-6 weeks to
              several months to complete. The fastest results without a bit of
              sacrificed quality can be achieved with a savvy development
              provider backing up the project.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              <span className="text-3xl">
                How much time does it usually take to develop a website?{" "}
              </span>
            </AccordionTrigger>
            <AccordionContent className="max-w-[80vw] leading-[35px]">
              The terms of web solution development may vary a lot from project
              to project. Based on the complexity, scope of functionality, and
              general purpose of your website, it may take from 3-6 weeks to
              several months to complete. The fastest results without a bit of
              sacrificed quality can be achieved with a savvy development
              provider backing up the project.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Accordian2;
