import Particles from "../ui/Particles";

const HomeHeader = () => {
  return (
    <div className="bg-primaryColor relative h-screen flex flex-col justify-center items-center">
      <div className="absolute w-full z-0 shadow-[0px 0px 10px -5px rgba(0,0,0,0.5)]"></div>
      <div className="text-white relative z-10 flex flex-col gap-2">
        <h1
          className="text-6xl font-bold max-w-[1100px] leading-[80px]"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,1) 6%, rgba(179,176,176,1) 46%, rgba(179,176,176,1) 99%)",
            color: "transparent",
            backgroundClip: "text",
          }}
        >
          Transform Your Vision with TechEase: Building Tomorrow's Solutions
          Today
        </h1>
        <p className="max-w-[700px] text-[#dadada]">
          We specialize in transforming your digital ideas into reality. With
          expertise in innovative IT solutions, we empower businesses to thrive
          in the digital age.
        </p>
      </div>
      <div className="absolute w-[300px] right-20 after:h-full after:w-full after:absolute after:bg-[#00000093] after:top-0 after:left-0">
        <img
          className="w-full"
          src="https://demo.themetorium.net/html/tank/assets/img/page-header/ph-6.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default HomeHeader;
