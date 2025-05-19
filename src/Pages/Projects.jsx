import Proj1 from '../assets/Proj1.png'
import Proj2 from '../assets/Proj2.png'
import { ArrowRight } from 'lucide-react'

export default function Projects() {

    const proj = [
        {p_no: 1, p_name:"Health Information System", p_img: Proj1},
        {p_no: 2, p_name:"iReply HRIS Pyroll System", p_img: Proj2},
    ]

  return (
    <section id="projects"  className='flex flex-col justify-center items-center my-20 px-5 md:gap-10 gap-3 lg:m-auto lg:w-2/3 scroll-mt-20 lg:scroll-mt-30'>
        <h4 className='lg:text-7xl md:text-4xl text-xl'>My Latest Work</h4>
        <div className='grid md:grid-cols-2 lg:gap-10 gap-5'>
            {proj.map((proj,index) =>
            {
            return  <img key={index} className='hover:scale-105 transition-all duration-500 cursor-pointer' src={proj.p_img}></img>
            })}
        </div>
            <button className='bg-[#00ADB5] lg:px-10 lg:py-5 px-5 py-3 rounded-3xl flex gap-2 cursor-pointer lg:text-xl text-sm items-center button'>Show All <ArrowRight /> </button>
    </section>
  )
}
