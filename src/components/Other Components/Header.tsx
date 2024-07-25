const HomeHeader = () => {
  return (
    <div
      data-scroll
      data-scroll-speed="-2"
      className="relative h-screen flex flex-col"
    >
      <div className="text-white relative z-[100] flex flex-col my-auto ml-auto mr-5 gap-4 pl-20 w-fit max-w-[600px] max-550:w-full max-550:items-center max-550:pl-0 px-1">
        <h1 className="text-6xl font-bold leading-[80px] flex flex-col text-right max-900:text-5xl max-550:text-4xl">
          <span>Transform Your</span>
          <p className="flex items-center gap-5 justify-end">
            <img
              className="w-[70px] invert-[100]"
              src="https://cdn-icons-png.flaticon.com/128/10434/10434244.png"
            />
            <span>Vision</span>
          </p>
          <span> with TechEase</span>
        </h1>
        <p className="text-[#eee] text-right max-900:text-[15px] max-550:text-sm max-550:text-center">
          We specialize in transforming your digital ideas into reality. With
          expertise in innovative IT solutions, we empower businesses to thrive
          in the digital age.
        </p>
      </div>
      <div
        // className="absolute h-screen top-0 right-0 w-[100%] bg-[url(src/assets/temp-1.png)] bg-center bg-contain bg-no-repeat"
        className="absolute h-screen inset-0 w-[100%] bg-[url(https://img.freepik.com/free-vector/realistic-technology-background_52683-73672.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1720483200&semt=ais_user)] bg-cover bg-center bg-no-repeat"
      />
        {/* <img src="" className="h-full w-full"/> */}
        {/* <div className="absolute bg-[#00000025] h-full w-full inset-0"/>
      </div> */}
    </div>
  );
};

export default HomeHeader;
