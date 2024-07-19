const HomeHeader = () => {
  return (
    <div
      className="bg-primaryColor relative h-screen flex flex-col justify-center items-center"
      style={{
        background: "linear-gradient(#000,#000),url(src/assets/web20.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute w-full z-0 shadow-[0px 0px 10px -5px rgba(0,0,0,0.5)]"></div>
      <div className="text-white relative z-10 flex flex-col gap-2">
        <h1 className="text-6xl font-bold max-w-[1100px] leading-[80px]">
          Transform Your Vision with TechEase: Building Tomorrow's Solutions
          Today
        </h1>
        <p className="max-w-[700px] text-[#dadada]">
          We specialize in transforming your digital ideas into reality. With
          expertise in innovative IT solutions, we empower businesses to thrive
          in the digital age.
        </p>
      </div>
      <div
        className="absolute w-full inset-0 h-full"
        style={{
          background:
            "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5), rgba(0,0,0,0.9)),url(src/assets/web20.png)",
          backgroundPosition:"center",
          backgroundSize:"cover"
        }}
      ></div>
    </div>
  );
};

export default HomeHeader;
