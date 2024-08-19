import React from 'react'
import { CONTACT } from '../constants'
import { motion } from "framer-motion"

const Contact = () => {
  return (
    <div className='border-b border-slate-800'>
        <motion.h1 whileInView={{opacity: 1, y:0}} initial={{opacity: 0, y: -100}} transition={{duration:1}} className='my-20 text-center text-4xl'>Contact</motion.h1>
        <div className="text-center tracking-tighter">
            <motion.a whileInView={{opacity: 1, x:0}} initial={{opacity: 0, x: -100}} transition={{duration:1}} href={`mailto:${CONTACT.email}`}  className='border-b'>
                {CONTACT.email}
            </motion.a>
            <motion.p whileInView={{opacity: 1, x:0}} initial={{opacity: 0, x: -100}} transition={{duration:1}} className="my-4">{CONTACT.phoneNo}</motion.p>
        </div>
    </div>
  )
}

export default Contact