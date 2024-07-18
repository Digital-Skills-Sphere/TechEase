import { VelocityScroll } from "../components/ui/scroll-based-velocity";
import Accordian from "../components/Other Components/Accordian";
import BoxComponent from "../components/Other Components/BoxComponent";
import GetInTouch from "../components/Other Components/GetInTouch";

const Home = () => {
  return (
    <>
      <BoxComponent/>
      <VelocityScroll
        text="TechEase - Lets Create Something Awesume"
        default_velocity={1}
        className="text-6xl font-bold leading-[70px]"
      />
      <Accordian />
      <GetInTouch/>
    </>
  );
};

export default Home;
