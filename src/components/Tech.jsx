import React from 'react'
import { RiFirebaseLine, RiReactjsLine, RiTailwindCssFill } from 'react-icons/ri'
import { SiMysql } from 'react-icons/si'
import { RiFlutterFill } from 'react-icons/ri'
import { DiLaravel } from 'react-icons/di'
import { SiJetpackcompose } from 'react-icons/si'
import { SiCodeigniter } from 'react-icons/si'
import { TbBrandKotlin } from 'react-icons/tb'
import { motion } from "framer-motion"
import { FaBootstrap } from 'react-icons/fa'

const iconVariants = (duration) => ({
    initial: {y:-10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})

const Tech = () => {
  return (
    <div className='border-b border-slate-800'>
        <motion.h1 whileInView={{opacity: 1, y:0}} initial={{opacity: 0, y: -100}} transition={{duration:1.5}} className='my-20 text-center text-4xl'>Technologies</motion.h1>
        <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x: -100}} transition={{duration: 1.5}} className="flex flex-wrap items-center justify-center gap-4">

            <motion.div variants={iconVariants(5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-slate-800 px-4 pt-3 pb-2">
                <TbBrandKotlin className='text-7xl text-violet-500'/>
                <p className='px-2 pt-2 text-sm font-medium text-center max-w-20'>Kotlin</p>
            </motion.div>
            <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-slate-800 px-4 pt-3 pb-2">
                <SiJetpackcompose className='text-7xl text-green-400'/>
                <p className='px-2 pt-2 text-sm font-medium text-center max-w-20'>Jetpack Compose</p>
            </motion.div>
            <motion.div variants={iconVariants(6)} initial="initial" animate="animate" className="rounded-2xl border-4 border-slate-800 px-4 pt-3 pb-2">
                <RiFlutterFill className='text-7xl text-cyan-400'/>
                <p className='px-2 pt-2 text-sm font-medium text-center max-w-20'>Flutter</p>
            </motion.div>
            <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className="rounded-2xl border-4 border-slate-800 px-4 pt-3 pb-2">
                <RiFirebaseLine className='text-7xl text-orange-400'/>
                <p className='px-2 pt-2 text-sm font-medium text-center max-w-20'>Firebase</p>
            </motion.div>
            <motion.div variants={iconVariants(5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-slate-800 px-4 pt-3 pb-2">
                <SiMysql className='text-7xl text-sky-800'/>
                <p className='px-2 pt-2 text-sm font-medium text-center max-w-20'>MySQL</p>
            </motion.div>
            <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-slate-800 px-4 pt-3 pb-2">
                <DiLaravel className='text-7xl text-red-400'/>
                <p className='px-2 pt-2 text-sm font-medium text-center max-w-20'>Laravel</p>
            </motion.div>
            <motion.div variants={iconVariants(5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-slate-800 px-4 pt-3 pb-2">
                <SiCodeigniter className='text-7xl text-red-500'/>
                <p className='px-2 pt-2 text-sm font-medium text-center max-w-20'>Code Igniter</p>
            </motion.div>
            <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className="rounded-2xl border-4 border-slate-800 px-4 pt-3 pb-2">
                <FaBootstrap className='text-7xl text-purple-500'/>
                <p className='px-2 pt-2 text-sm font-medium text-center max-w-20'>Bootstrap</p>
            </motion.div>
            <motion.div variants={iconVariants(6)} initial="initial" animate="animate" className="rounded-2xl border-4 border-slate-800 px-4 pt-3 pb-2">
                <RiTailwindCssFill className='text-7xl text-cyan-400'/>
                <p className='px-2 pt-2 text-sm font-medium text-center max-w-20'>Tailwind</p>
            </motion.div>
            <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-slate-800 px-4 pt-3 pb-2">
                <RiReactjsLine className='text-7xl text-cyan-300'/>
                <p className='px-2 pt-2 text-sm font-medium text-center max-w-20'>React</p>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Tech