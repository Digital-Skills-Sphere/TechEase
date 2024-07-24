import { SparklesPreview } from "../magicui/SparklePreview";
import { BackgroundBeams } from "../ui/background-beams";

export const AboutHeader = () => {
  return (
    <div className="text-white h-[60vh] pl-16 flex flex-col gap-5">
      <BackgroundBeams />
      <SparklesPreview text="About" />
    </div>
  );
};
