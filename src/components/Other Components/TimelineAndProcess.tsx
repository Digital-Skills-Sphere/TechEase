const TimelineAndProcess = () => {
    return (
        <div className="flex flex-col gap-10 px-[50px] mx-auto">
            <h1 className="text-4xl text-center font-bold">Process & Timeline</h1>
            <div>
                <div className="grid grid-cols-4 text-primary font-semibold">
                    <div className="pl-2">Week 1</div>
                    <div className="pl-2">Week 2</div>
                    <div className="pl-2">Week 3</div>
                    <div className="pl-2">Week 4</div>
                </div>
                <div className="grid grid-cols-8 h-[400px]">
                    <div className="relative border-l-2 border-[#e6e6e6] h-full border-dashed grid grid-rows-8 ">
                        <div className="group relative row-start-2 bg-[#f4f4f4] p-3 z-10 cursor-pointer before:content-[''] before:absolute before:inline-block before:w-[4px] before:h-[70%] before:left-1 before:top-2 before:bg-secondaryColor before:py-2 before:rounded-md hover:before:w-[93%] before:duration-200 hover:text-white">
                            <span className="relative z-20">Consultation</span>
                            <section className="absolute left-0 top-16 w-[190%] text-[13px] bg-primaryColor p-3 text-white scale-x-0 duration-200 origin-left group-hover:scale-100">
                            We begin by understanding your business needs and objectives. Our team conducts thorough discussions to identify the best IT solutions tailored to your requirements.
                            </section>
                        </div>
                    </div>
                    <div className="border-l-2 border-[#e6e6e6] h-full border-dashed"></div>
                    <div className="border-l-2 border-[#e6e6e6] h-full border-dashed grid grid-rows-8">
                        <div className="group relative row-start-3 bg-[#f4f4f4] p-3 z-10 cursor-pointer before:content-[''] before:absolute before:inline-block before:w-[4px] before:h-[70%] before:left-1 before:top-2 before:bg-secondaryColor before:py-2 before:rounded-md hover:before:w-[93%] before:duration-200 hover:text-white">
                            <span className="relative z-20">Planning</span>
                            <section className="absolute left-0 top-16 w-[190%] text-[13px] bg-primaryColor p-3 text-white scale-x-0 duration-200 origin-left group-hover:scale-100">
                            After the initial consultation, we develop a comprehensive IT strategy. This plan outlines the steps, resources, and timeline required to achieve your business goals.
                            </section>
                        </div>
                    </div>
                    <div className="border-l-2 border-[#e6e6e6] h-full border-dashed"></div>
                    <div className="border-l-2 border-[#e6e6e6] h-full border-dashed grid grid-rows-8">
                        <div className="group relative row-start-4 bg-[#f4f4f4] p-3 z-10 cursor-pointer before:content-[''] before:absolute before:inline-block before:w-[4px] before:h-[70%] before:left-1 before:top-2 before:bg-secondaryColor before:py-2 before:rounded-md hover:before:w-[93%] before:duration-200 hover:text-white">
                            <span className="relative z-20">Implementation</span>
                            <section className="absolute left-6 top-16 w-[160%]  text-[16px] bg-primaryColor p-[10px] text-white scale-x-0 duration-200 origin-left group-hover:scale-100">
                            With a clear strategy in place, we move to the implementation phase. Our experts ensure seamless integration of IT solutions, minimizing disruption to your operations.
                            </section>
                        </div>
                    </div>
                    <div className="border-l-2 border-[#e6e6e6] h-full border-dashed"></div>
                    <div className="border-l-2 border-[#e6e6e6] h-full border-dashed grid grid-rows-8">
                        <div className="group relative row-start-5 bg-[#f4f4f4] p-3 z-10 cursor-pointer before:content-[''] before:absolute before:inline-block before:w-[4px] before:h-[70%] before:left-1 before:top-2 before:bg-secondaryColor before:py-2 before:rounded-md hover:before:w-[93%] before:duration-200 hover:text-white">
                            <span className="relative z-20">Support</span>
                            <section className="absolute left-0 top-16 w-[190%] text-[13px] bg-primaryColor p-3 text-white scale-x-0 duration-200 origin-left group-hover:scale-100">
                            Post-implementation, we provide continuous support and maintenance. Our team is dedicated to ensuring your IT systems run smoothly and efficiently, offering assistance whenever needed.
                            </section>
                        </div>
                    </div>
                    <div className="border-l-2 border-[#e6e6e6] h-full border-dashed"></div>
                </div>
            </div>
        </div>
    )
}

export default TimelineAndProcess