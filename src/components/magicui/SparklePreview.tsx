import { SparklesCore } from "../ui/sparkles";

export function SparklesPreview({ text }: { text: string }) {
  return (
    <div className="h-[40rem] w-fit bg-black flex flex-col justify-center overflow-hidden rounded-md">
      <h1 className="md:text-5xl text-3xl text-center lg:text-7xl font-bold text-white relative z-20">
        {text}
      </h1>
      <div className="w-[40rem] h-20 relative">
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        <SparklesCore
          background="transparent"
          minSize={0.1}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full flex"
          particleColor="#FFFFFF"
        />

        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_100px_at_top,transparent_20%,white)]"/>
      </div>
    </div>
  );
}
