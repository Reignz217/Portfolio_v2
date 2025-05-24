import { useState } from 'react'
import { ArrowRight, X } from 'lucide-react'
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
            return  <img onClick={() => setView(proj.p_img)} key={proj.p_no} alt={`Project ${proj.p_no}`} className='hover:scale-105 transition-all duration-500 cursor-pointer' src={proj.p_img}></img>
            })}
        </div>
            <button className='bg-[#00ADB5] lg:px-8 lg:py-4 px-5 py-3 rounded-3xl flex gap-2 cursor-pointer text-sm items-center button'>Show All <ArrowRight /> </button>
      {/* MODAL */}
        {view && selectedProject && (
          <div onClick={()=>setView(null)} className='fixed inset-0 bg-gray-800/75 flex justify-center items-center lg:p-20 z-50'>
            <div onClick={(e) => e.stopPropagation()} className='lg:w-4/5 h-full bg-[#393E46] lg:rounded-2xl px-3 pb-10 flex-col justify-center items-center overflow-y-auto relative'>
              <div className='flex items-center sticky top-0'>
                <button onClick={()=>setView(null)} className='absolute lg:top-5 top-3 right-0 p-2 text-black bg-white rounded-full cursor-pointer '><X className='size-4 lg:size-6'/></button>
              </div>
              <img className='lg:p-20 md:p-10 mt-20 lg:mt-0' src={selectedProject.p_img}/>
              <div className='lg:-mt-18 md:-mt-8 mt-2 text-center'>
                <h4 className='lg:text-3xl md:text-2xl text-lg'>{selectedProject.p_name}</h4>
                <p className='lg:text-xl text-sm md:text-lg mb-3 text-gray-300'>{selectedProject.p_tag}</p>
                <p className='lg:text-xl text-sm md:text-lg'>
                  {selectedProject.p_data}
                </p>
              </div>
            </div>
          </div>
        )}
    </section>
  )
}
