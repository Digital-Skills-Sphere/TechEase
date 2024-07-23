import { SparklesPreview } from "../magicui/SparklePreview";

export const GraphicHeader = () => {
  return (
    <div className="relative text-white h-[60vh] pl-16 flex flex-col gap-5">
      <div className="absolute w-2/3 top-0 right-0 h-full bg-cover bg-no-repeat bg-right bg-[url(/src/assets/graphic.png)]" />
      <SparklesPreview text="Graphic Designing" />
    </div>
  );
};
