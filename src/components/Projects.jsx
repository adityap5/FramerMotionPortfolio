import { PROJECTS } from '../constants/index'
import { motion } from 'framer-motion';

const Projects = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <h1 className="my-20 text-center text-4xl ">Projects</h1>
            {PROJECTS.map((project, index) => (
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                    <div className="w-full lg:w-1/4">
                        <motion.img
                            whileInView={{ x: 0, opacity: 1 }}
                            initial={{ x: -100, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            src={project.image}
                            width={150}
                            height={150}
                            alt={project.title}
                        />
                    </div>
                    <div className="w-full max-w-xl lg:3/4">
                        <div className="flex gap-4">
                        <motion.h6
                            whileInView={{ x: 0, opacity: 1 }}
                            initial={{ x: 100, opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="mb-2 font-semibold ">
                            {project.title}
                        </motion.h6>
                        <motion.a href={project.link} 
                        className='font-thin text-neutral-400'
                        target='blank'>link</motion.a>
                        </div>
                        <motion.p
                            whileInView={{ x: 0, opacity: 1 }}
                            initial={{ x: 100, opacity: 0 }}
                            transition={{ duration: 0.8 }}
                            className="mb-4 text-neutral-400">{project.description}</motion.p>
                        {project.technologies.map((tech, i) => (
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
    )
}

export default Projects
