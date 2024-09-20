import React from 'react'
import { EXPERIENCES } from '../constants/index'
import { motion } from 'framer-motion';


const Education = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Education</h1>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <motion.p
                whileInView={{ x: 0, opacity: 1 }}
                initial={{ x: -100, opacity: 0 }}

                transition={{ duration: 0.5 }}
                className="mb-2 text-sm text-neutral-400">{experience.year}</motion.p>
            </div>
            <div className='w-full max-w-xl lg:w-3/4'>
              <motion.h6
                whileInView={{ x: 0, opacity: 1 }}
                initial={{ x: 100, opacity: 0 }}

                transition={{ duration: 0.5 }}
                className="mb-2 font-semibold ">
                {experience.role} -{" "}
                <span className='text-xl text-purple-100'>{experience.company} </span>
              </motion.h6>
              <motion.p
                whileInView={{ x: 0, opacity: 1 }}
                initial={{ x: 100, opacity: 0 }}

                transition={{ duration: 0.8 }}
                className="mb-4 text-neutral-400">{experience.description}</motion.p>
              {experience.technologies.map((tech, i) => (
                <motion.span
                  whileInView={{ x: 0, opacity: 1 }}
                  initial={{ x: 100, opacity: 0 }}
                  transition={{ duration: 1 }}
                  key={index} className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-green-800' >{tech}</motion.span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Education
