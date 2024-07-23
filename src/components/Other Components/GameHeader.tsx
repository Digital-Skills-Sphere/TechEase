import { SparklesPreview } from "../magicui/SparklePreview";

export const GameHeader = () => {
  return (
    <div className="relative text-white h-[80vh] pl-16 pt-28 flex flex-col gap-5">
      <div className="absolute inset-0 h-full w-full bg-[url(/src/assets/game.png)] bg-contain bg-right bg-no-repeat"/>
      <SparklesPreview text="Game Development" />
    </div>
  );
};