import React from 'react'
import { EDUCATION } from '../constants/index'
import { motion } from 'framer-motion';


const Education = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Education</h1>
      <div>
        {EDUCATION.map((experience, index) => (
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
                {experience.company}
              </motion.h6>
              <motion.p 
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: 100, opacity: 0 }}

              transition={{ duration: 0.7 }}
              className="text-neutral-400">{experience.location}</motion.p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Education
