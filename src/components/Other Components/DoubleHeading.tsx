type DoubleHeadingProps = {
  heading: string;
  subHeading: string;
};

const DoubleHeading: React.FC<DoubleHeadingProps> = ({ heading, subHeading }) => {

  return (
    <>
      <h1 className="text-titleSize font-[500] flex gap-1 text-white">
        {heading}
        <span className="font-thin">
          {subHeading}
        </span>
      </h1>
    </>
  );
};

export default DoubleHeading;
