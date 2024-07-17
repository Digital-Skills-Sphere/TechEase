import Logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="absolute flex justify-between items-center z-20 text-white w-full px-10">
      <div className="w-[200px] pt-2">
        <img src={Logo} className="w-full object-contain" alt="" />
      </div>
      <div>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          height="1.5em"
          width="1.5em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path>
        </svg>
      </div>
    </nav>
  );
};

export default Navbar;
