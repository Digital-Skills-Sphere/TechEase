import { useEffect, useRef, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import SparklesText from "../ui/sparkles-text";

const Accordian = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const [bgPercent, setBgPercent] = useState(100);
  const [bgReversePercent, setBgReversePercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (divRef.current) {
        const rect = divRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight && rect.bottom > 0) {
          // Calculate how much the component is in view
          const percentInView = Math.min(
            1,
            Math.max(
              0,
              (windowHeight - rect.top) / (windowHeight + rect.height)
            )
          );

          // Update the background percentages based on scroll position
          setBgPercent(100 - percentInView * 100);
          setBgReversePercent(percentInView * 100);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative px-28 py-20 text-white flex flex-col gap-10">
      <div
        ref={divRef} className="absolute z-10 w-full h-full left-1/2 top-20 -translate-x-1/2"
        style={{
          background: `conic-gradient(from 90deg at ${bgPercent}% 0%, rgba(97, 106, 115, .12), transparent 180deg) 0% 0% / 50% 100% no-repeat, conic-gradient(from 270deg at ${bgReversePercent}% 0%, transparent 180deg, rgba(97, 106, 115, .12)) 100% 0% / 50% 100% no-repeat`,
        }}
      />
      <div className="flex flex-col gap-5">
        <h2 className="text-xl text-[#b9b9b9]">What We Do</h2>
        <SparklesText text="Services" sparklesCount={2} isBig={true} />
      </div>
      <div className="">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <span>Web Development</span>
            </AccordionTrigger>
            <AccordionContent>
              Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam.
              Integer ut neque. Vivamus nisi metus, molestie vel, gravida in,
              condimentum sit amet, nunc. Nam a nibh. Donec suscipit eros. Nam
              mi. Proin viverra leo ut odio. Curabitur malesuada. Vestibulum a
              velit eu ante scelerisque vulputate.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              <span>Game Development</span>
            </AccordionTrigger>
            <AccordionContent>
              Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam.
              Integer ut neque. Vivamus nisi metus, molestie vel, gravida in,
              condimentum sit amet, nunc. Nam a nibh. Donec suscipit eros. Nam
              mi. Proin viverra leo ut odio. Curabitur malesuada. Vestibulum a
              velit eu ante scelerisque vulputate.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              <span>App Development</span>
            </AccordionTrigger>
            <AccordionContent>
              Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam.
              Integer ut neque. Vivamus nisi metus, molestie vel, gravida in,
              condimentum sit amet, nunc. Nam a nibh. Donec suscipit eros. Nam
              mi. Proin viverra leo ut odio. Curabitur malesuada. Vestibulum a
              velit eu ante scelerisque vulputate.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              <span>Graphic Designing</span>
            </AccordionTrigger>
            <AccordionContent>
              Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam.
              Integer ut neque. Vivamus nisi metus, molestie vel, gravida in,
              condimentum sit amet, nunc. Nam a nibh. Donec suscipit eros. Nam
              mi. Proin viverra leo ut odio. Curabitur malesuada. Vestibulum a
              velit eu ante scelerisque vulputate.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              <span>Digital Marketing</span>
            </AccordionTrigger>
            <AccordionContent>
              Mauris mauris ante, blandit et, ultrices a, suscipit eget, quam.
              Integer ut neque. Vivamus nisi metus, molestie vel, gravida in,
              condimentum sit amet, nunc. Nam a nibh. Donec suscipit eros. Nam
              mi. Proin viverra leo ut odio. Curabitur malesuada. Vestibulum a
              velit eu ante scelerisque vulputate.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Accordian;
