import React, { useState } from 'react'
import { PROJECTS } from '../constants'
import { motion } from "framer-motion"
import { FaLink } from 'react-icons/fa'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

const Project = () => {
  const [showAll, setShowAll] = useState(false);

  const handleToggleShow = () => {
    setShowAll(!showAll);
  }

  const displayedProjects = showAll ? PROJECTS : PROJECTS.slice(0, 4);

  return (
    <div className='border-b border-slate-800'>
        <motion.h1 whileInView={{opacity: 1, y:0}} initial={{opacity: 0, y: -100}} transition={{duration:1}} className='my-20 text-center text-4xl'>Projects</motion.h1>
        <div>
          {displayedProjects.map((project, index)=>(
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
              <motion.div whileInView={{opacity: 1, x:0}} initial={{opacity: 0, x: -100}} transition={{duration:1}} className="w-full lg:w-1/4">
                <img 
                src={project.image}
                width={200}
                height={200} 
                alt={project.title}
                className='mb-6 rounded' />
              </motion.div>
              <motion.div whileInView={{opacity: 1, x:0}} initial={{opacity: 0, x: 100}} transition={{duration:1}} className="w-full max-w-xl lg:w-3/4">
                <h6 className='mb-2 font-semibold'>{project.title}</h6>
                <p className='mb-2 text-neutral-400'>{project.description}</p>
                <a href={project.link}><FaLink className='mb-2'/></a>
                {project.technologies.map((tech, index)=>(
                  <span key={index}
                  className='mr-2 rounded bg-slate-900 px-2 py-1 text-sm font-medium text-blue-900'>
                    {tech}
                  </span>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
        <motion.div whileInView={{opacity: 1, y:0}} initial={{opacity: 0, y: -100}} transition={{duration:1}} className='flex justify-center mt-8 mb-6'>
          <div className='rounded-2xl border-2 border-slate-800 p-2'>
            <div onClick={handleToggleShow} className='cursor-pointer'>
              {showAll ? <FaChevronUp size={24} /> : <FaChevronDown size={24} />}
            </div>
          </div>
        </motion.div>
    </div>
  )
}

export default Project
