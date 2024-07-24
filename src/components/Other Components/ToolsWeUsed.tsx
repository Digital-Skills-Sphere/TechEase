import googleAnalyticsImg from "../../assets/google-analytics.png";
import ahrefsImg from "../../assets/ahrefs.png";
import hootsuiteImg from "../../assets/Hootsuite.png";
import mailchimpImg from "../../assets/mailchimp.png";
import googleAdsImg from "../../assets/googleAd.png";
import hubspotImg from "../../assets/HubSpot.png";
import SparklesText from "../ui/sparkles-text";

const toolsWeUsed = [
  {
    imgUrl: googleAnalyticsImg,
    heading: "Google Analytics",
  },
  {
    imgUrl: ahrefsImg,
    heading: "Ahrefs",
  },
  {
    imgUrl: hootsuiteImg,
    heading: "Hootsuite",
  },
  {
    imgUrl: mailchimpImg,
    heading: "Mailchimp",
  },
  {
    imgUrl: googleAdsImg,
    heading: "Google Ads",
  },
  {
    imgUrl: hubspotImg,
    heading: "HubSpot",
  },
];

interface SingleToolProps {
  imgUrl: string;
  heading: string;
}

const SingleTool: React.FC<SingleToolProps> = ({ imgUrl, heading }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <img
        className="h-[120px] w-[120px] max-[850px]:h-[100px] max-[850px]:w-[100px] max-[500px]:h-[80px] max-[500px]:w-[80px]  max-[400px]:h-[60px] max-[400px]:w-[60px] object-contain drop-shadow-lg"
        src={imgUrl}
        alt=""
      />
      <h1 className="text-2xl font-bold max-[850px]:text-xl max-[500px]:text-lg max-[400px]:text-[16px]">
        {heading}
      </h1>
    </div>
  );
};

const ToolsWeUsed: React.FC = () => {
  return (
    <div className="flex flex-col gap-8 bg-white text-black py-20 px-20">
      <div className="flex gap-2 items-end">
        <SparklesText text="Tools We" sparklesCount={2} />
        <SparklesText text="Used" sparklesCount={2} isBig={true} />
      </div>
      <div className="grid grid-cols-3 gap-y-12 place-items-center">
        {toolsWeUsed.map(({ imgUrl, heading }, ind) => {
          return <SingleTool key={ind} imgUrl={imgUrl} heading={heading} />;
        })}
      </div>
    </div>
  );
};

export default ToolsWeUsed;
