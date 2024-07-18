import WCU_Home from "../components/Other Components/WCU";
import TimelineAndProcess from "../components/Other Components/TimelineAndProcess";
import WhatMakesDifferent from "../components/Other Components/WhatMakesDifferent";
import Testimonial from "../components/Other Components/Testimonial";
import { VelocityScroll } from "../components/ui/scroll-based-velocity";
import Accordian from "../components/Other Components/Accordian";

const Home = () => {
  return (
    <>
      <WCU_Home />
      <VelocityScroll
        text="TechEase - Lets Create Something Awesume"
        default_velocity={1}
        className="text-6xl font-bold leading-[70px]"
      />
      <Accordian />
      <TimelineAndProcess />
      <WhatMakesDifferent />
      <Testimonial />
    </>
  );
};

export default Home;
