
export default function About() {
  return (
    <section id="about"  className="my-10 p-5 flex flex-col justify-center items-center md:gap-10 gap-2 scroll-mt-20">
        <h4 className="lg:text-7xl md:text-4xl text-xl">About Me</h4>
        <div className="flex lg:flex-row flex-col md:justify-center items-center lg:gap-20 gap-10">
            <img src="/Profile.jpg" className="lg:w-120 lg:h-120 md:w-90 md:h-90 w-60 aspect-square rounded-xl "></img>
            <div className="flex flex-col justify-center lg:gap-20 gap-10">
                <p className="lg:text-3xl md:text-xl">
                    I'm a front-end developer who brings web designs to life using HTML, CSS, and JavaScript. My role focuses on building user-friendly, 
                    interactive websites that look great and function smoothly across all devices. 
                    I work closely with designers to ensure the user experience is seamless and visually appealing.
                </p>
                <div className="flex flex-col gap-5">
                    <div className="flex md:flex-row flex-col gap-5 md:items-center hover:scale-105 transition-all duration-500 cursor-pointer">
                        <p className="min-w-40 lg:text-2xl md:text-xl">HTML & CSS</p>
                        <hr className="md:w-[65%] w-[80%] md:border-4 border-2 rounded-3xl text-[#00ADB5]"/>
                    </div>
                    <div className="flex md:flex-row flex-col gap-5 md:items-center hover:scale-105 transition-all duration-500 cursor-pointer">
                        <p className="min-w-40 lg:text-2xl md:text-xl">React JS</p>
                        <hr className="md:w-[55%] w-[65%] md:border-4 border-2 rounded-3xl text-[#00ADB5]"/>
                    </div>
                    <div className="flex md:flex-row flex-col gap-5 md:items-center hover:scale-105 transition-all duration-500 cursor-pointer">
                        <p className="min-w-40 lg:text-2xl md:text-xl">Tailwind Css</p>
                        <hr className="md:w-[60%] w-[70%] md:border-4 border-2 rounded-3xl text-[#00ADB5]"/>
                    </div>
                    <div className="flex md:flex-row flex-col gap-5 md:items-center hover:scale-105 transition-all duration-500 cursor-pointer">
                        <p className="min-w-40 lg:text-2xl md:text-xl">JavaScript</p>
                        <hr className="md:w-[50%] w-[60%] md:border-4 border-2 rounded-3xl text-[#00ADB5]"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
