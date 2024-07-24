import SparklesText from "../components/ui/sparkles-text";
import TechStack from "../components/Other Components/TechStack";
import Accordian2 from "../components/Other Components/Accordian2";

const appStack = [
  {
    stack: "Game Engines",
    stackFeatures: ["Unity", "Unreal Engine", "Godot", "CryEngine"],
  },
  {
    stack: "Programming Languages",
    stackFeatures: ["C#", "C++", "Python", "JavaScript"],
  },
  {
    stack: "Graphics",
    stackFeatures: ["Blender", "Maya", "3ds Max", "Substance Painter"],
  },
  {
    stack: "Audio",
    stackFeatures: ["FMOD", "Wwise", "Audacity", "Pro Tools"],
  },
];

const Game = () => {
  return (
    <>
      <div className="bg-white text-black py-20 px-16">
        <div className="flex justify-between items-center gap-3">
          <div className="flex flex-col gap-4">
            <div>
              <div className="flex gap-2 items-center">
                <SparklesText sparklesCount={2} text="Game" />
                <SparklesText
                  sparklesCount={2}
                  text="Development"
                  isBig={true}
                />
              </div>
              <div className="flex gap-2 items-center">
                <SparklesText sparklesCount={2} text="Tech" />
                <SparklesText sparklesCount={2} text="Stack" isBig={true} />
              </div>
            </div>
            <p className="max-w-[700px] leading-[30px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              quasi ratione consequatur error! Laboriosam, voluptatum harum?
              Accusamus, tempora dignissimos? Voluptatum odit mollitia nemo
              tenetur officia quasi numquam, temporibus assumenda sunt.
            </p>
          </div>
          <div>
            <img
              className="rounded-full h-[450px] w-[450px] object-cover"
              src="/src/assets/gameStack.png"
              alt=""
            />
          </div>
        </div>
        <div className="mt-16">
          <TechStack myStack={appStack} stackName="Web" />
        </div>
      </div>
      <Accordian2/>
    </>
  );
};

export default Game;
