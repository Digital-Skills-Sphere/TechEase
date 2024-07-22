import { motion } from "framer-motion";


const HomeHeader = () => {
  return (
    <div data-scroll data-scroll-speed="-2" className="bg-primaryColor relative h-screen flex flex-col">
      <div className="text-white relative z-[100] flex flex-col my-auto gap-4 pl-20 w-fit max-w-[600px]">
        <h1 className="text-6xl font-bold leading-[80px] flex flex-col">
          <span>Transform Your</span>
          <p className="flex items-center gap-5">
            <img
              className="w-[70px] invert-[100]"
              src="https://cdn-icons-png.flaticon.com/128/10434/10434244.png"
            />
            <span>Vision</span>
          </p>
          <span> with TechEase</span>
        </h1>
        <p className="text-[#dadada]">
          We specialize in transforming your digital ideas into reality. With
          expertise in innovative IT solutions, we empower businesses to thrive
          in the digital age.
        </p>
      </div>
      <motion.div initial={{x:200}} animate={{x:0}} transition={{ease:[0.76, 0, 0.24, 1]}}  className="absolute h-screen top-0 right-0 w-[80%] bg-[url(src/assets/game.png)] bg-center bg-cover bg-no-repeat"></motion.div>
    </div>
  );
};

export default HomeHeader;
