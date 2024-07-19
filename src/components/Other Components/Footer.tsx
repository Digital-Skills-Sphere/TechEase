import logo from "../../assets/logo.png"

const Footer = () => {
  return (
    <>
      <div className="text-[#fff] p-[50px] px-[150px]">

        <div className="flex justify-between">
          <div className="w-fit">
            <img src={logo} className="w-[290px]" alt="" />
            <p className="text-[#ffffff66] text-[16px] ml-[50px] relative bottom-[18px] ">Subscribe our newsletter:</p>
            <div className="relative">
              <input type="text" className="w-[360px] ml-[30px] border-[1px] text-[12px] outline-none border-[#333] bg-[#1a1a1a] text-paraColor py-[18px] text-[#ffffff66] px-[30px] rounded-[35px]" placeholder="ENTER YOUR EMAIL" />
              <button className="absolute w-[40px] h-[40px] bg-[#fff] rounded-full flex justify-center items-center right-[10px] bottom-[9px]">
                <svg stroke="currentColor" fill="#000000" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z" clipRule="evenodd"></path><path fillRule="evenodd" d="M2 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 8z" clipRule="evenodd"></path></svg>
              </button>
            </div>
          </div>

          <div>
            <ul className="grid gap-[14px] w-[230px]">
              <li className="text-[33px]">Home</li>
              <li className="text-[33px]">About</li>
              <li className="text-[33px]">Service</li>
              <li className="text-[33px]">Blog</li>
              <li className="text-[33px]">Project</li>
            </ul>
          </div>
          <div>
            <ul className="w-[230px]">
              <li className="text-[18px] text-[#ffffff66]">Privacy Policy</li>
              <li className="text-[18px] text-[#ffffff66]">Terms and conditions</li>
              <li className="text-[18px] text-[#ffffff66]">Cookie Policy</li>
              <li className="text-[18px] text-[#ffffff66]">Career</li>

            </ul>
          </div>
        </div>

        <div className="flex justify-between mt-[70px]">
          <div>
            <div>
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
            </div>
            <p className="text-[16px] text-[#ffffff66]">© Copyright 2023 - Mil. All Rights Reserved.</p>
          </div>
          <div className="w-[215px]">
            <p className="text-[22px]">Canada</p>
            <p className="text-[14px] text-[#ffffff66]"> 71 South Los Carneros Road, California +51 174 705 812</p>
          </div>
          <div className="w-[215px]"><p className="text-[22px]">
            Germany</p>
            <p className="text-[14px] text-[#ffffff66]">Leehove 40, 2678 MC De Lier, Netherlands +31 174 705 811</p>
            </div>
        </div>
      </div>
    </>
  )
}

export default Footer