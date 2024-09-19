import { RiReactjsLine, RiTailwindCssLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiBootstrap, DiCss3, DiGit, DiGithub, DiJavascript, DiMysql, DiPython, DiRedis } from "react-icons/di";
import { FaGithub, FaJava, FaNodeJs } from "react-icons/fa6";
import { motion } from 'framer-motion';

const iconVariants = (d) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: d,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse'
    }
  },
})

const Skills = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl ">
        Technologies
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          variants={iconVariants(2.5)}
          initial='initial'
          animate='animate'
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial='initial'
          animate='animate' className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandNextjs className="text-7xl text-slate-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial='initial'
          animate='animate' className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial='initial'
          animate='animate' className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiRedis className="text-7xl text-red-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial='initial'
          animate='animate' className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaNodeJs className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(8)}
          initial='initial'
          animate='animate' className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiBootstrap className="text-7xl text-cyan-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(4.5)}
          initial='initial'
          animate='animate' className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiCss3 className="text-7xl text-red-500" />
        </motion.div>

        <motion.div
          variants={iconVariants(6)}
          initial='initial'
          animate='animate' className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaGithub className="text-7xl text-gray-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial='initial'
          animate='animate' className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiJavascript className="text-7xl text-yellow-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(3.5)}
          initial='initial'
          animate='animate' className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiGit className="text-7xl text-red-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial='initial'
          animate='animate' className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiMysql className="text-7xl text-orange-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial='initial'
          animate='animate' className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiPython className="text-7xl text-yellow-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial='initial'
          animate='animate' className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiTailwindCssLine className="text-7xl text-cyan-500" />
        </motion.div>

      </div>
    </div>
  )
}

export default Skills
