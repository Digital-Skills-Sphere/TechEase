import { serviceData } from "../../utils/utilities";

type ServiceCardProps = {
    imgUrl: string;
    serviceName: string;
    text: string;
  };
  
  const ServiceCard: React.FC<ServiceCardProps> = ({ imgUrl, serviceName, text }) => (
    <div className="bg-[#28373e] flex flex-col max-w-[400px] gap-2 rounded-md p-5">
      <img src={imgUrl} alt="" className="w-[35px] h-[35px] object-cover bg-secPrimary rounded-lg p-1" />
      <h1 className="text-xl font-semibold">{serviceName}</h1>
      <p className="text-sm text-[#ddd]">{text}</p>
    </div>
  );

const ServiceWeOffer = () => {
  return (
    <div className="bg-primaryColor text-white flex flex-col gap-8 py-16 px-10">
      <div className="flex flex-col gap-3 max-w-[650px] mx-auto text-center">
        <h1 className="text-5xl font-bold">
          Your Vision with{" "}
          <span className="text-secondary">Expertise and Creativity</span>
        </h1>
        <p className="text-[#eee]">
          Elevating Your Vision Through Innovation Design Solutions that Enhance
          User Experience and Define Brand Identities Bringing Your Ideas to
          Life
        </p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="grid grid-cols-3 gap-4 mb-4">
          {serviceData.slice(0, 3).map(({ imgUrl, serviceName, text }, index) => (
            <ServiceCard key={index} imgUrl={imgUrl} serviceName={serviceName} text={text} />
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4">
          {serviceData.slice(3).map(({ imgUrl, serviceName, text }, index) => (
            <ServiceCard key={index} imgUrl={imgUrl} serviceName={serviceName} text={text} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceWeOffer;
