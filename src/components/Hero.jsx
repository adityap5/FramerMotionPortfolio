import { HERO_CONTENT } from '../constants/index';
import { motion } from 'framer-motion';
import profilePic from '../assets/profile.jpg';


const container = (d) => ({
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: d } },

})
const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                            variants={container(0)}
                            initial="hidden"
                            animate='visible'

                            className="pb-16 text-6xl font-thin tracking-tighter lg:mt-16 lg:text-8xl">
                            Aditya Pippal
                        </motion.h1>
                        <motion.span
                            variants={container(0.5)}
                            initial="hidden"
                            animate='visible'
                            className="bg-gradient-to-r from-red-300 via-slate-500 tp bg-green-500 bg-clip-text text-4xl tracking-tighter text-transparent">
                            Full Stack Developer
                        </motion.span>
                        <motion.p
                            variants={container(1)}
                            initial="hidden"
                            animate='visible'
                            className='my-2 max-w-xl py-6 font-light tracking-tighter'>
                            {HERO_CONTENT}
                        </motion.p>
                        
                    <motion.a
                    href='https://drive.google.com/file/d/1HHIa8Xw9rDAN0MKGO6rBONHj67DWUJzd/view?usp=sharing'
                    target='_blank'
                     variants={container(1.3)}
                     initial="hidden"
                     animate='visible'
                    className="px-4 py-2  rounded-2xl from-green-300 bg-slate-800 hover:text-black hover:bg-slate-600">
                        Hire Me</motion.a>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 lg:p-8'>
                    <div className='flex justify-center'>
                        <motion.img
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 1 }}
                            width={400}
                            height={400}
                            src={profilePic} alt="Aditya Pippal profile picture" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero
