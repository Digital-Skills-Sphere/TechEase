import WCU_Home from "../components/Other Components/WCU";
import TimelineAndProcess from "../components/Other Components/TimelineAndProcess";
import WhatMakesDifferent from "../components/Other Components/WhatMakesDifferent";
import Testimonial from "../components/Other Components/Testimonial";
import ServiceWeOffer from "../components/Other Components/ServiceWeOffer";


const Home = () => {
  return (
    <>
      <WCU_Home />
      <ServiceWeOffer />
      
      <TimelineAndProcess />
      <WhatMakesDifferent />
      <Testimonial />
    </>
  );
};

export default Home;
