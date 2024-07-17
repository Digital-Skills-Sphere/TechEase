import { Outlet, useLocation } from "react-router-dom";
import HomeHeader from "./components/Other Components/Header";
import Footer from "./components/Other Components/Footer";
import Navbar from "./components/Other Components/Navbar";

const App: React.FC = () => {
  const location = useLocation();
  const curPage: string = location.pathname;

  return (
    <div className="overflow-x-hidden font-[roboto] bg-[#ffffff1]">
      <Navbar />
      {curPage === "/" ? <HomeHeader /> : <>Other Page Headers</>}
      <main className="w-full mx-auto flex flex-col gap-[100px] my-[50px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
