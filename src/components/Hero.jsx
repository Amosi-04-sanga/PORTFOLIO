'use client'
import React from 'react'
import { friend, herobg } from '../assets'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '../utils/motion'
import { styles } from '../styles'


const Hero = () => {
  return (
    <section className={`flex h-[90vh] relative text-white`}>
      <div className="absolute h-full w-full top-0">
        <Image
          alt='bgimage'
          src={herobg}
          className='block w-full h-full object-cover'
          priority
        />
      </div>
      <div className="flex flex-start gap-5 absolute left-4 top-[30%] -translate-y-0.5 md:w-[40vw] xs:w-[80vw] w-[60vw]">
        <div className="flex flex-col justify-center items-center">
          <div
            className='w-[15px] h-[15px] bg-[#915eff] rounded-full'
          />
          <div
            className='w-1 md:h-80 sm:h-40 bg-[#915eff] -mt-px violet-gradient'
          />
        </div>
        <motion.div
          variants={fadeIn('', '', 0.4, 1)}
          className={`md:text-[25px] ${styles.heroSubText}`}
        >
          Hello, i am <span className='text-blue-500'>AMOSI SANGA</span>, a enthusiast full stack developer specializes in websites
          and applications. I use modern technologies such as react js, next js, react native etc.
        </motion.div>
        

      </div>

      <div className="absolute left-[70vw] top-8 ml-2 h-[70vh]">
        <Image
          className='block w-full h-full sm:hidden'
          alt='myphoto'
          src={friend}
        />
      </div>

      <div className="flex justify-center items-center w-full absolute bottom-4">
        <Link
          href="#about"
        >
          <div className="rounded-3xl w-[32px] h-[60px] border-4 border-blue-800 p-2 flex items-center">
            <motion.div
              className="w-3 h-3 rounded-full bg-slate-50 mb-6"
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            ></motion.div>
          </div>
        </Link>
      </div>

    </section>
  )
}

export default Hero

