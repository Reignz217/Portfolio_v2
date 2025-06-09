
export default function Home() {
  return (
    <section id="home" className="flex flex-col md:justify-center items-center md:h-screen md:gap-5 scroll-mt-40 object-cover">
        <img src="/Profile.webp" alt="Profile Picture" className="rounded-full lg:w-100 lg:h-100 md:w-70 md:h-70 w-60 mt-5 md:-mt-20 aspect-square"/>
        <div className="flex flex-col md:gap-5 px-5 md:px-0 text-center md:w-3/4">
            <h4 className="lg:text-5xl md:text-4xl text-lg">
              Hi, 
              <span className="name"> I'm Renz Harvey J. Sunico,</span>
              <br/> 
              Frontend developer based in Iloilo PH.
            </h4>
            <p className="lg:text-3xl md:text-2xl text-gray-500 self-center desc">Web Developer  | Problem Solver</p>
            <div className="mt-5 md:mt-5">
                <a href="/Sunico, Resume.pdf" target="_blank" rel="noopener noreferrer" className="lg:px-8 lg:py-5 px-5 py-3 text-sm bg-[#00ADB5] rounded-3xl cursor-pointer button">
                  My Resume
                </a>
            </div>
        </div>
    </section>
  )
}
