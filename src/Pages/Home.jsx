
export default function Home() {
  return (
    <section id="home" className="flex flex-col justify-center items-center lg:mb-30 md:my-10 md:gap-8 scroll-mt-40">
        <img src="/Profile.jpg" className="rounded-full lg:w-90 lg:h-90 md:w-70 md:h-70 w-80 aspect-square p-10 md:p-0 -mb-8 -mt-5 md:my-0"/>
        <div className="flex flex-col md:gap-5 px-5 md:px-0 text-center md:w-3/4">
            <h4 className="lg:text-5xl md:text-4xl text-lg">
              Hi, 
              <span className="name"> I'm Renz Harvey J. Sunico,</span>
              <br/> 
              Frontend developer based in Iloilo PH.
            </h4>
            <p className="lg:text-3xl md:text-2xl text-gray-500 self-center desc">Web Developer  | Problem Solver</p>
            <div className="mt-5 md:mt-10">
                <a href="/Sunico, Resume.pdf" target="_blank" rel="noopener noreferrer" className="lg:px-8 lg:py-5 px-5 py-3 text-sm bg-[#00ADB5] rounded-3xl cursor-pointer button">
                  My Resume
                </a>
            </div>
        </div>
    </section>
  )
}
