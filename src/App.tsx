import { Outlet, useLocation } from "react-router-dom";
import HomeHeader from "./components/Other Components/Header";
import Footer from "./components/Other Components/Footer";
import Navbar from "./components/Other Components/Navbar";
import LocomotiveScroll from "locomotive-scroll";
import { AboutHeader } from "./components/Other Components/AboutHeader";
import { NavbarDemo } from "./components/Other Components/NavbarDemo";
import { WebHeader } from "./components/Other Components/WebHeader";
import { AppHeader } from "./components/Other Components/AppHeader";
import { GameHeader } from "./components/Other Components/GameHeader";
import { DigitalHeader } from "./components/Other Components/DigitalHeader";
import { GraphicHeader } from "./components/Other Components/GraphicHeader";

const App: React.FC = () => {
  const locomotiveScroll = new LocomotiveScroll();
  const location = useLocation();
  const curPage: string = location.pathname;

  return (
    <div className="overflow-x-hidden font-[Adamina] bg-[#000]">
      <Navbar />
      <NavbarDemo />
      {curPage === "/" ? (
        <HomeHeader />
      ) : curPage === "/about" ? (
        <AboutHeader />
      ) : curPage === "/services/web" ? (
        <WebHeader />
      ) : curPage === "/services/app" ? (
        <AppHeader />
      ) : curPage === "/services/game" ? (
        <GameHeader />
      ) : curPage === "/services/digital" ? (
        <DigitalHeader />
      ) : (
        <GraphicHeader />
      )}
      <main className="w-full mx-auto flex flex-col py-12 my-[50px] bg-black z-30 relative text-white">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
