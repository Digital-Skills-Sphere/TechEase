import { SparklesPreview } from "../magicui/SparklePreview";

export const DigitalHeader = () => {
  return (
    <div className="relative text-white h-[60vh] pl-16 pt-28 flex flex-col gap-5">
        <div className="absolute w-full h-full top-0 right-0 bg-[url(/src/assets/digitalHeadBg.png)] bg-contain bg-no-repeat bg-right"/>
      <SparklesPreview text="Digital Marketing" />
    </div>
  );
};
