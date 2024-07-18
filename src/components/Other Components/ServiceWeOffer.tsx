import { serviceData } from "../../utils/utilities";
// import { useEffect, useState } from "react";

type ServiceCardProps = {
  // imgUrl: string;
  serviceName: string;
  text: string;
  // ind: number;
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  // imgUrl,
  serviceName,
  text,
  // ind,
}) => (
  <div className="service-box bg-[#000] border-[1px] border-[#ffffff33] flex relative flex-col max-w-[400px] gap-2 rounded-md p-5">
    {/* <img
      src={imgUrl}
      alt=""
      className="w-[35px] h-[35px] object-cover bg-secPrimary rounded-lg p-1 "
    /> */}
    <h1 className="text-xl font-semibold">{serviceName}</h1>
    <p className="text-sm text-[#ddd]">{text}</p>
    {/* {ind === 2 && (
      <div
        className="bg-red-500 h-[105%] w-[105%] top-0 left-0 absolute -z-[2]"
        style={{ left: "50%", transform: "translateX(50%)" }}
      />
    )} */}
  </div>
);

const ServiceWeOffer = () => {
  // const [data, setData] = useState<Event | null>(null);
  // const [size, setSize] = useState({ w: 0, h: 0 });
  // useEffect(() => {
  //   data?.target?.addEventListener("mousemove", (e: any) => {
  //     if (e.target.classList.contains("service-box")) {
  //       setSize({ ...size, w: e.target.clientWidth, h: e.target.clientHeight });
  //     }
  //   });
  // }, [data]);
  return (
    <div className="relative bg-black text-white">
      <div
        className={`absolute h-full w-full z-[1]`}
        style={{
          background: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='12' height='12' fill='none' stroke='rgb(255 255 255 / 0.1)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e`,
        }}
      ></div>
      <div className="flex flex-col gap-7 py-7 px-2">
        <div className="flex flex-col gap-3 max-w-[650px] mx-auto text-center">
          <h1 className="text-5xl font-bold">
            Your Vision with
            <span className="text-secondary"> Expertise and Creativity</span>
          </h1>
          <p className="text-[#dadada]">
            Elevating Your Vision Through Innovation Design Solutions that
            Enhance User Experience and Define Brand Identities Bringing Your
            Ideas to Life
          </p>
        </div>
        <div
          className="flex flex-col justify-center items-center relative z-[3]"
          // onMouseOver={(e: any) => setData(e)}
        >
          <div className="grid grid-cols-3 gap-4 mb-4">
            {serviceData.slice(0, 3).map(({ serviceName, text }, index) => (
              <ServiceCard
                key={index}
                // imgUrl={imgUrl}
                serviceName={serviceName}
                text={text}
                // ind={index}
              />
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4">
            {serviceData.slice(3).map(({ serviceName, text }, index) => (
              <ServiceCard
                key={index}
                // imgUrl={imgUrl}
                serviceName={serviceName}
                text={text}
                // ind={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceWeOffer;
