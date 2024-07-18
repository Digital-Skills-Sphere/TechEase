import Btn from "./Btn";

const GetInTouch = () => {
  return (
    <>
      <form className="text-white flex flex-col px-[200px] gap-12">
        <h2 className="text-xl text-[#b9b9b9]">Get in Touch</h2>
        <h1 className="text-5xl font-medium max-w-[200px] leading-[60px]">
          Drop Us a Line
        </h1>
        <div className="flex flex-col gap-16">
          <div className="flex gap-10">
            <div className="flex flex-col w-1/2">
              <label htmlFor="name" className="text-xl">
                Name *
              </label>
              <input
                id="name"
                className="bg-transparent border-b-[1px] border-[#333] outline-none h-[50px]"
                type="text"
              />
            </div>
            <div className="flex flex-col w-1/2">
              <label htmlFor="email" className="text-xl">
                Email Address *
              </label>
              <input
                id="email"
                className="bg-transparent border-b-[1px] border-[#333] outline-none h-[50px]"
                type="email"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="text-xl">
              Message *
            </label>
            <textarea
              id="message"
              rows={8}
              className="bg-transparent border-b-[1px] border-[#333] outline-none max-w-[800px] py-2"
            />
          </div>
        </div>
        <Btn heading="Send Message" />
      </form>
    </>
  );
};

export default GetInTouch;
