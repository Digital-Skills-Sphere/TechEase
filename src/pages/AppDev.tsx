import SparklesText from "../components/ui/sparkles-text";
import TechStack from "../components/Other Components/TechStack";
import Accordian2 from "../components/Other Components/Accordian2";
import Price from "../components/Other Components/Price";

const appStack = [
  {
    stack: "Frontend",
    stackFeatures: ["React Native", "Flutter", "SwiftUI", "Jetpack Compose"],
  },
  {
    stack: "Backend",
    stackFeatures: ["Node.js", "Django", "Ruby on Rails", "Firebase"],
  },
  {
    stack: "Database",
    stackFeatures: [
      "Firebase Realtime Database",
      "SQLite",
      "Realm",
      "Core Data",
    ],
  },
  {
    stack: "DevOps",
    stackFeatures: ["Fastlane", "CircleCI", "Jenkins", "GitHub Actions"],
  },
];

const AppDev = () => {
  return (
    <>
      <div className="bg-white text-black py-20 px-16">
        <div className="flex justify-between items-center gap-3">
          <div className="flex flex-col gap-4">
            <div>
              <div className="flex gap-2 items-center">
                <SparklesText sparklesCount={2} text="App" />
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
              className="rounded-full h-[450px] w-[450px]"
              src="https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149065783.jpg?ga=GA1.1.1836250673.1720700641&semt=ais_user"
              alt=""
            />
          </div>
        </div>
        <div className="mt-16">
          <TechStack myStack={appStack} stackName="Web" />
        </div>
      </div>
      <Accordian2 />
      <Price/>
    </>
  );
};

export default AppDev;
