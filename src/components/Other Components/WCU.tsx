import React from "react";
import { WCU_DATA } from "../../utils/utilities";
import DoubleHeading from "./DoubleHeading";
import Btn from "./Btn";
import wcu_image from "../../assets/wcu-image.svg";


type WCU_HOME_SecProps = {
    percentage: number;
    heading: string;
    para: string;
};

const WCU_HOME_Sec: React.FC<WCU_HOME_SecProps> = (props) => {
    return (
        <>
            <div className="flex gap-[20px] justify-center items-center">
                <div className="rounded-[50%] p-[10px] flex text-center justify-center bg-secondary shadow-custom">
                    <p className="rounded-[50%] p-[20px] h-[60px] w-[60px] flex text-center justify-center items-center bg-white font-bold">
                        <span>{props.percentage}</span>
                        <span>%</span>
                    </p>
                </div>
                <div className="max-w-[190px] flex flex-col gap-[5px] max-[1000px]:max-w-none">
                    <h6 className="font-[600] text-[19px] max-[550px]:text-[17px]">{props.heading}</h6>
                    <p className="leading-[22px] text-[16px] text-[#939393] max-[550px]:text-sm">{props.para}</p>
                </div>
            </div>
        </>
    );
};


const WCU_Home: React.FC = () => {
    return (
        <>
            <section className="flex flex-col gap-8 px-[50px]">
                <DoubleHeading heading="Why Choose" subHeading="Us" />
                <div className="flex justify-between items-center gap-[30px] relative max-[900px]:flex-col-reverse max-[900px]:max-w-none max-[900px]:w-full ">
                    <div className="flex flex-col gap-[25px] max-w-[740px] max-[900px]:max-w-none max-[900px]:w-full max-[600px]:gap-[15px]">
                        <h3 className="text-[33px] font-[600] max-w-[640px] leading-[43px] max-[1200px]:text-[36px] max-[600px]:leading-[33px] max-[600px]:text-[26px]">More Than <span>5+ Years</span> Experience We Provide IT Services</h3>
                        <p className="max-w-[740px] text-[16px] text-[#939393] max-[900px]:text-[17px] max-[600px]:text-sm">Welcome to SkillsYard, we're passionate about empowering businesses with the power of technology. We're a team of skilled IT professionals offering a comprehensive suite of services, including web and app development, game creation, video editing, and digital marketing solutions.</p>
                        <div className="flex justify-between max-w-[680px] max-[1000px]:flex-col max-[1000px]:items-start max-[1000px]:gap-[20px]" >
                            {
                                WCU_DATA.map((items, index) => (
                                    <WCU_HOME_Sec key={index} percentage={items.percentage} heading={items.heading} para={items.para} />
                                ))
                            }
                        </div>
                        <Btn heading={"Know more"} />
                    </div>
                    <div className="w-fit">
                        <img src={wcu_image} alt="Teaching" className="w-[500px] max-[1200px]:min-w-[400px] max-[1100px]:max-w-[350px] max-[900px]:w-[80vw] max-[900px]:max-w-none max-[900px]:min-w-[auto]" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default WCU_Home;
