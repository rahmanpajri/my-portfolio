import React from 'react'
import { EXPERIENCES } from '../constants' 
import { motion } from "framer-motion"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
};

const Experience = () => {
  return (
    <div className='border-b border-slate-800'>
        <motion.h1 whileInView={{opacity: 1, y:0}} initial={{opacity: 0, y: -100}} transition={{duration:1.5}} className='my-20 text-center text-4xl'>Experience</motion.h1>
        <Slider {...settings}>
          {EXPERIENCES.map((experience, index) => (
            <div key={index} className="px-2"> 
              <div className="mb-8 lg:justify-center rounded-2xl border-4 border-slate-800 px-3 py-4">
                <motion.div whileInView={{opacity: 1, y:0}} initial={{opacity: 0, y: -100}} transition={{duration:1.5}} className="w-full max-w-md">
                  <p className='px-2 mb-2 text-neutral-400'>{experience.year}</p>
                  <p className='px-2 font-semibold text-sm'>{experience.role} - {experience.company}</p>
                  <p className='px-2 mb-2 text-sm'>{experience.description}</p>
                  <div className='px-2 flex flex-wrap'>
                    {experience.technologies.map((tech, index) => (
                      <span key={index}
                        className='mr-2 mb-2 rounded bg-slate-500 px-2 py-1 text-sm font-medium text-blue-800'>
                          {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </Slider>
    </div>
  )
}

export default Experience
