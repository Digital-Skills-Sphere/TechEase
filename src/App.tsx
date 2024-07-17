import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./components/Other Components/Footer";

const App: React.FC = () => {
  const location = useLocation();
  const curPage: string = location.pathname;

  const [cursorPosition, setCursorPosition] = useState<{
    left: number;
    top: number;
  }>({ left: 0, top: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ left: e.clientX - 20, top: e.clientY - 20 });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="overflow-x-hidden font-[roboto] bg-[#ffffff1]">
      <div
        className="cursor h-5 w-5 rounded-full bg-black fixed top-0 left-0 z-50 opacity-90 duration-100"
        style={{
          left: `${cursorPosition.left}px`,
          top: `${cursorPosition.top}px`,
          pointerEvents: "none",
        }}
      />
      <nav>Navbar</nav>
      {curPage === "/" ? <>Homa Page Header</> : <>Other Page Headers</>}
      <main className="w-full mx-auto flex flex-col gap-[100px] my-[50px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
