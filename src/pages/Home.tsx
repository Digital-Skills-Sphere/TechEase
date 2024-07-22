import { VelocityScroll } from "../components/ui/scroll-based-velocity";
import Accordian from "../components/Other Components/Accordian";
import BoxComponent from "../components/Other Components/BoxComponent";
import GetInTouch from "../components/Other Components/GetInTouch";
import { AnimatedPinDemo } from "../components/Other Components/AnimatedPinDemo";


const Home = () => {
  return (
    <>
      <VelocityScroll
        text="TechEase - Lets Create Something Awesome"
        default_velocity={1}
        className="text-[100px] font-semibold min-h-max"
      />
      <BoxComponent />
      <Accordian />
      <AnimatedPinDemo/>
      <GetInTouch />
    </>
  );
};

export default Home;