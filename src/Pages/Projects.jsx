import { useState } from 'react'
import { ArrowRight, Link, X } from 'lucide-react'
import proj from './Proj_Data/Proj.js'


export default function Projects() {

    const [view, setView] = useState(null);
    // Find the project that matches the selected view image
  const selectedProject = proj.find((project) => project.p_img === view);

  return (
    <section id="projects"  className='flex flex-col justify-center items-center my-20 px-5 md:gap-10 gap-3 lg:m-auto lg:w-2/3 scroll-mt-20 lg:scroll-mt-30'>
        <h4 className='lg:text-5xl md:text-3xl text-xl'>My Latest Work</h4>
        <div className='grid md:grid-cols-2 lg:gap-10 gap-5'>
            {proj.map((proj) =>
            {
            return  <img onClick={() => setView(proj.p_img)} key={proj.p_no} loading='lazy' alt={`Project ${proj.p_name}`} className='hover:scale-105 transition-all duration-500 cursor-pointer w-full' src={proj.p_img}></img>
            })}
        </div>
            <button className='bg-[#00ADB5] lg:px-8 lg:py-4 px-5 py-3 rounded-3xl flex gap-2 cursor-pointer text-sm items-center button'>Show All <ArrowRight /> </button>
      {/* MODAL */}
        {view && selectedProject && (
          <div onClick={()=>setView(null)} className='fixed inset-0 bg-gray-800/75 flex justify-center items-center lg:p-20 z-50'>
            <div onClick={(e) => e.stopPropagation()} className='lg:w-4/5 h-full bg-[#393E46] lg:rounded-2xl px-3 pb-10 overflow-y-auto relative'>
              <div className='flex items-center sticky top-0'>
                <button onClick={()=>setView(null)} className='absolute lg:top-5 top-3 right-0 p-2 text-black bg-white rounded-full cursor-pointer '><X className='size-4 lg:size-6'/></button>
              </div>
              <div className='flex justify-center lg:w-2/3 m-auto'>
                <img className='mt-20' loading='lazy' alt={`Project ${selectedProject.p_no}`} src={selectedProject.p_img}/>
              </div>
              <div className='mt-2 mb-5 text-center'>
                <h4 className='lg:text-3xl md:text-2xl text-lg font-bold'>{selectedProject.p_name}</h4>
                <p className='lg:text-xl text-sm md:text-lg mb-3 text-gray-300'>{selectedProject.p_tag}</p>
                <p className='lg:text-xl text-sm md:text-lg'>
                  {selectedProject.p_data}
                </p>
                <ul key={selectedProject.p_no} className='text-start mt-5'>
                  <li className='px-5 my-1 lg:text-xl text-sm md:text-lg'><span className='lg:text-2xl md:text-xl text-lg'>Role:</span> {selectedProject.p_role}</li>
                  <li className='px-5 my-1 lg:text-2xl md:text-xl text-lg'><span>Tech Stack:</span></li>
                  {selectedProject.p_tech.map((tech, index) => (
                    <li key={index} className='list-disc md:mx-30 mx-20 lg:text-xl text-sm md:text-lg'>{tech}</li>
                  ))}
                </ul>
              </div>
              <div className='flex justify-center'>
                <a href={selectedProject.p_link} target='_blank' className='text-center lg:text-xl text-sm md:text-lg px-5 py-3 cursor-pointer button'>
                  Visit Project
                </a>
              </div>
            </div>
          </div>
        )}
    </section>
  )
}
