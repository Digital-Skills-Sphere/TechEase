import TechStack from "../components/Other Components/TechStack";
import SparklesText from "../components/ui/sparkles-text";

const webStack = [
  {
    stack: "Frontend",
    stackFeatures: ["React", "Angular", "Vue", "Svelte"],
  },
  {
    stack: "Backend",
    stackFeatures: ["Node.js", "Express", "Django", "Flask"],
  },
  {
    stack: "Database",
    stackFeatures: ["MongoDB", "PostgreSQL", "MySQL", "SQLite"],
  },
  {
    stack: "DevOps",
    stackFeatures: ["Docker", "Kubernetes", "AWS", "Azure"],
  },
];

const Web = () => {
  return (
    <>
      <div className="bg-white text-black py-20 px-16">
        <div className="flex justify-between items-center gap-3">
          <div className="flex flex-col gap-4">
            <div>
              <div className="flex gap-2 items-center">
                <SparklesText sparklesCount={2} text="Web" />
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
              src="https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg?ga=GA1.1.1836250673.1720700641&semt=ais_user"
              alt=""
            />
          </div>
        </div>
        <div className="mt-16">
          <TechStack myStack={webStack} stackName="Web" />
        </div>
      </div>
    </>
  );
};

export default Web;
