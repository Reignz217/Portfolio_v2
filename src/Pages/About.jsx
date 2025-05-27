
export default function About() {
  return (
    <section id="about"  className="my-10 p-5 flex flex-col justify-center items-center md:gap-10 gap-2 scroll-mt-20">
        <h4 className="lg:text-5xl md:text-3xl text-xl">About Me</h4>
        <div className="flex lg:flex-row flex-col md:justify-center items-center lg:items-start lg:gap-20 gap-10">
            <img src="/Profile (1).jpg" alt="Profile Picture" className="lg:w-120 lg:h-120 md:w-90 md:h-90 w-60 aspect-square rounded-xl"></img>
            <div className="flex flex-col lg:gap-5 gap-3">
                <p className="lg:text-2xl md:text-xl">
                    I'm a front-end web developer focused on building responsive and maintainable websites using React, Tailwind CSS, and JavaScript.
                     I specialize in turning Figma designs into clean and functional UIs to create dynamic user experiences.
                </p>
                <ul className="flex flex-col gap-2 list-disc">
                    <li className="uppercase list-none lg:text-2xl md:text-xl"><strong>I'm confident with:</strong></li>
                    <li className="lg:ml-20 ml-10 lg:text-2xl md:text-xl"> React (Hooks, JSX, React Router)</li>
                    <li className="lg:ml-20 ml-10 lg:text-2xl md:text-xl">Tailwind CSS, HTML, CSS</li>
                    <li className="lg:ml-20 ml-10 lg:text-2xl md:text-xl">JavaScript</li>
                    <li className="lg:ml-20 ml-10 lg:text-2xl md:text-xl">Git & GitHub</li>
                    <li className="lg:ml-20 ml-10 lg:text-2xl md:text-xl">Responsive design and mobile-first layouts</li>
                </ul>
                <p className="lg:text-2xl md:text-xl">
                    I'm continuously learning backend basics to become a more complete developer.
                </p>
            </div>
        </div>
    </section>
  )
}
