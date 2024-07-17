import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"

const Footer = () => {
    return (
        <footer className="flex flex-col justify-center items-center gap-16 bg-primaryColor text-white pt-16">
            <div className="flex gap-12 px-5 w-[90vw] max-[1120px]:gap-6 max-[1120px]:px-3 max-[930px]:flex-col ">
                <div className="w-[40vw] flex flex-col gap-6 pr-7 py-1 max-[1020px]:pr-2 max-[930px]:border-none">
                    <img className="w-[200px]" src={logo} alt="" />
                    <p className="max-w-[350px] max-[500px]:text-sm leading-[30px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea eveniet alias incidunt exercitationem vel sapiente exercitationem vel sapiente</p>
                    <div className ="group grid grid-cols-2 w-[200px] gap-0 hover:gap-2 duration-500 relative shadow-sm">
                        <h1
                            className ="absolute z-10 group-hover:hidden duration-200 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                height="1"
                                width="4"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                className ="w-7 h-7 text-secondaryColor"
                            >
                                <path
                                    d="M5 7h14M5 12h14M5 17h14"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    stroke="currentColor"
                                ></path>
                            </svg>
                        </h1>
                        <a href="#">
                            <svg
                                className="group-hover:rounded-lg group-hover:opacity-1 hover:bg-[#cc39a4] backdrop-blur-md group-hover:shadow-xl rounded-tl-lg flex justify-center items-center w-full h-full text-[#cc39a4] hover:text-white duration-200"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="1"
                                fill="n4e"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    className="opacity-0 group-hover:opacity-100 duration-200"
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </a>
                        <a href="#">
                            <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                height="1"
                                width="4"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                className="group-hover:rounded-lg group-hover:opacity-1 hover:bg-blue-500 backdrop-blur-md group-hover:shadow-xl flex justify-center items-center w-full h-full text-blue-500 hover:text-white duration-200"
                            >
                                <path
                                    clipRule="evenodd"
                                    d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z"
                                    fillRule="evenodd"
                                    className="opacity-0 group-hover:opacity-100 duration-200"
                                ></path>
                            </svg>
                        </a>
                        <a href="#">
                            <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                height="1"
                                width="4"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                className="group-hover:rounded-lg group-hover:opacity-1 hover:bg-blue-600 backdrop-blur-md group-hover:shadow-xl flex justify-center items-center w-full h-full text-blue-600 hover:text-white duration-200"
                            >
                                <path
                                    clipRule="evenodd"
                                    d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                                    fillRule="evenodd"
                                    className="opacity-0 group-hover:opacity-100 duration-200"
                                ></path>
                            </svg>
                        </a>
                        <a href="#">
                            <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                height="1"
                                width="4"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                className="group-hover:rounded-lg group-hover:opacity-1 hover:bg-red-500 backdrop-blur-md group-hover:shadow-xl rounded-br-lg flex justify-center items-center w-full h-full text-red-500 hover:text-white duration-200"
                            >
                                <path
                                    clipRule="evenodd"
                                    d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z"
                                    fillRule="evenodd"
                                    className="opacity-0 group-hover:opacity-100 duration-200"
                                ></path>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="flex gap-10 w-[50vw] justify-evenly max-[1120px]:gap-6 max-[930px]:gap-12 max-[500px]:flex-col ">
                    <div className="flex flex-col gap-3">
                        <h1 className="text-xl font-semibold border-b-[2.5px] pb-1 text-secondaryColor w-fit border-secondarytext-secondaryColor max-[500px]:w-fit max-[500px]:text-lg">Quick Links</h1>
                        <ul className="flex flex-col gap-2 text-[16px] text-[#eee] max-[500px]:text-[15px]">
                            <li className="hover:text-secondaryColor duration-200"><Link to="/">Home</Link></li>
                            <li className="hover:text-secondaryColor duration-200"><Link to="/about">About</Link></li>
                            <li className="hover:text-secondaryColor duration-200"><Link to="/projects">Projects</Link></li>
                            <li className="hover:text-secondaryColor duration-200"><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h1 className="text-xl font-semibold border-b-[2.5px] pb-1 text-secondaryColor w-fit border-secondarytext-secondaryColor max-[500px]:w-fit max-[500px]:text-lg">More Links</h1>
                        <ul className="flex flex-col gap-2 text-[16px] text-[#eee] max-[500px]:text-[15px]">
                            <li className="hover:text-secondaryColor duration-200"><Link to="/services/web">Web Developement</Link></li>
                            <li className="hover:text-secondaryColor duration-200"><Link to="/services/game">Game Development</Link></li>
                            <li className="hover:text-secondaryColor duration-200"><Link to="/services/app">App Development</Link></li>
                            <li className="hover:text-secondaryColor duration-200"><Link to="/services/graphic">Graphic Designing</Link></li>
                            <li className="hover:text-secondaryColor duration-200"><Link to="/services/digital">Digital Marketing</Link></li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-3">
                        <h1 className="text-xl font-semibold border-b-[2.5px] pb-1 text-secondaryColor w-fit border-secondarytext-secondaryColor max-[500px]:w-fit max-[500px]:text-lg">Resourses</h1>
                        <ul className="flex flex-col gap-2 text-[16px] text-[#eee] max-[500px]:text-[15px]">
                            <li className="hover:text-secondaryColor duration-200">FAQ</li>
                            <li className="hover:text-secondaryColor duration-200">Privacy Policy</li>
                            <li className="hover:text-secondaryColor duration-200">Terms of Service</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-secondaryColor  w-full text-[#000]">
                <p className="py-4 pl-20 max-[500px]:text-sm">Copyright &copy; 2024 IT Solutions All Rights Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer