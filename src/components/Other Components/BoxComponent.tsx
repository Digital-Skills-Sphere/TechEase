import React, { useState } from "react";
import GridPattern from "../ui/animated-grid-pattern";
import SparklesText from "../ui/sparkles-text";

interface StackData {
  stackName: string;
  imgUrl: string;
  bgColor: string;
}

const stackData: StackData[] = [
  {
    stackName: "Github",
    imgUrl:
      "https://infisical.com/_next/image?url=%2Fimages%2Flanding%2Fintegrations%2Fgithub-black.png&w=256&q=75",
    bgColor: "#000000",
  },
  {
    stackName: "aws",
    imgUrl:
      "https://infisical.com/_next/image?url=%2Fimages%2Flanding%2Fintegrations%2Faws-black.png&w=256&q=75",
    bgColor: "#ff9900",
  },
  {
    stackName: "Kubernetes",
    imgUrl:
      "https://infisical.com/_next/image?url=%2Fimages%2Flanding%2Fintegrations%2Fkubernetes-black.png&w=256&q=75",
    bgColor: "#326ce5",
  },
  {
    stackName: "Docker",
    imgUrl:
      "https://infisical.com/_next/image?url=%2Fimages%2Flanding%2Fintegrations%2Fdocker-black.png&w=256&q=75",
    bgColor: "#1d63ed",
  },
  {
    stackName: "Azure Key Vault",
    imgUrl:
      "https://infisical.com/_next/image?url=%2Fimages%2Flanding%2Fintegrations%2Fazure-black.png&w=256&q=75",
    bgColor: "#3cc8f3",
  },
  {
    stackName: "Terraform",
    imgUrl:
      "https://infisical.com/_next/image?url=%2Fimages%2Flanding%2Fintegrations%2Fterraform-black.png&w=256&q=75",
    bgColor: "#623ce4",
  },
  {
    stackName: "Gitlab",
    imgUrl:
      "https://infisical.com/_next/image?url=%2Fimages%2Flanding%2Fintegrations%2Fgitlab-black.png&w=256&q=75",
    bgColor: "#fc6b26",
  },
  {
    stackName: "Ansible",
    imgUrl:
      "https://infisical.com/_next/image?url=%2Fimages%2Flanding%2Fintegrations%2Fansible-black.png&w=256&q=75",
    bgColor: "#000000",
  },
  {
    stackName: "GCP Secret Manager",
    imgUrl:
      "https://infisical.com/_next/image?url=%2Fimages%2Flanding%2Fintegrations%2Fgcp-black.png&w=256&q=75",
    bgColor: "#34a853",
  },
  {
    stackName: "Vercel",
    imgUrl:
      "https://infisical.com/_next/image?url=%2Fimages%2Flanding%2Fintegrations%2Fvercel-black.png&w=256&q=75",
    bgColor: "#000000",
  },
  {
    stackName: "Heroku",
    imgUrl:
      "https://infisical.com/_next/image?url=%2Fimages%2Flanding%2Fintegrations%2Fheroku-black.png&w=256&q=75",
    bgColor: "#430098",
  },
  {
    stackName: "Cloudflare",
    imgUrl:
      "https://infisical.com/_next/image?url=%2Fimages%2Flanding%2Fintegrations%2Fcloudflare-black.png&w=256&q=75",
    bgColor: "#f48120",
  },
  {
    stackName: "Jenkins",
    imgUrl:
      "https://infisical.com/_next/image?url=%2Fimages%2Flanding%2Fintegrations%2Fjenkins-black.png&w=256&q=75",
    bgColor: "#e4251f",
  },
  {
    stackName: "Bitbucket",
    imgUrl:
      "https://infisical.com/_next/image?url=%2Fimages%2Flanding%2Fintegrations%2Fbitbucket-black.png&w=256&q=75",
    bgColor: "#2684ff",
  },
  {
    stackName: "Render",
    imgUrl:
      "https://infisical.com/_next/image?url=%2Fimages%2Flanding%2Fintegrations%2Frender-black.png&w=256&q=75",
    bgColor: "#000000",
  },
];

interface SingleStackProps {
  bgColor: string;
  stackName: string;
  imgUrl: string;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const SingleStack: React.FC<SingleStackProps> = ({
  bgColor,
  stackName,
  imgUrl,
  isHovered,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <div
      className={`relative border-[1px] border-[#333] grid place-items-center py-8 px-10`}
      style={{ backgroundColor: `${isHovered ? bgColor : "black"}` }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {isHovered && (
        <GridPattern
          height={15}
          width={15}
          maxOpacity={0.1}
          numSquares={50}
          className="absolute"
        />
      )}
      <img
        src={imgUrl}
        className="relative h-auto invert-[100] w-[50px]"
        alt={stackName}
      />
      <p className="relative text-center mt-2">{stackName}</p>
    </div>
  );
};

const BoxComponent: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col justify-center gap-[50px] pl-[70px]">
      <div className="grid grid-cols-2 w-fit">
        <SparklesText
          text="We’ve got"
          className="text-white"
          sparklesCount={2}
        />
        <SparklesText
          text="your back"
          className="text-white font-thin"
          sparklesCount={2}
        />
        <SparklesText
          text="no matter"
          className="text-white"
          sparklesCount={2}
        />
        <SparklesText
          text="your stack."
          className="text-white font-thin"
          sparklesCount={2}
        />
      </div>
      <div className="text-white grid grid-cols-5 w-fit">
        {stackData.map(({ bgColor, imgUrl, stackName }, index) => {
          return (
            <SingleStack
              key={index}
              bgColor={bgColor}
              imgUrl={imgUrl}
              stackName={stackName}
              isHovered={index === hoveredIndex}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BoxComponent;
