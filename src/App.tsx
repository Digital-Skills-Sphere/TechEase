import { Outlet, useLocation } from "react-router-dom";
import HomeHeader from "./components/Other Components/Header";
import Footer from "./components/Other Components/Footer";
import Navbar from "./components/Other Components/Navbar";
import LocomotiveScroll from "locomotive-scroll";
// import { FloatingNavDemo } from "./components/Other Components/FloatingNavDemo";
import { NavbarDemo } from "./components/Other Components/NavbarDemo";

const App: React.FC = () => {
  const locomotiveScroll = new LocomotiveScroll();
  const location = useLocation();
  const curPage: string = location.pathname;

  return (
    <div className="overflow-x-hidden font-[Adamina] bg-[#000]">
      <Navbar />
      {/* <FloatingNavDemo /> */}
      <NavbarDemo />
      {curPage === "/" ? <HomeHeader /> : <>Other Page Headers</>}
      <main className="w-full mx-auto flex flex-col gap-[100px] py-12 my-[50px] bg-black z-30 relative">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
