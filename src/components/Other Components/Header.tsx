import Particles from "../ui/Particles";

const HomeHeader = () => {
  return (
    <div className="bg-primaryColor relative h-screen flex flex-col justify-center items-center">
  <div className="absolute w-full z-0 shadow-[0px 0px 10px -5px rgba(0,0,0,0.5)]">
        <Particles vx={.2} vy={.2} />
      </div>
      <div className="text-white relative z-10 text-center flex flex-col gap-2">
        <h1
          className="text-7xl font-bold max-w-[1100px] leading-[80px]"
          style={{ background: "linear-gradient(180deg, rgba(255,255,255,1) 6%, rgba(179,176,176,1) 46%, rgba(179,176,176,1) 99%)",color:"transparent",backgroundClip:"text" }}
        >
          Transform Your Vision with TechEase: Building Tomorrow's Solutions
          Today
        </h1>
        <p className="max-w-[700px] mx-auto text-[#dadada]">
          We specialize in transforming your digital ideas into reality. With
          expertise in innovative IT solutions, we empower businesses to thrive
          in the digital age.
        </p>
      </div>
    </div>
  );
};

export default HomeHeader;
