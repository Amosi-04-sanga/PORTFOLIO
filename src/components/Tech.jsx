import { motion } from 'framer-motion'
import React from 'react'
import { technologies } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import Image from 'next/image'
import SectionWrapper from '../hoc/sectionWrapper'


const TechnologyCard = ({name, icon, index}) => {
  return (
     <motion.div
      variants={fadeIn('', '', .1 * index, .5)}
      className='rounded-full p-4 bg-blue-300 flex justify-center items-center'
     >
        <Image
          width={26}
          height={26}
          alt={name}
          src={icon}
          className='object-contain'
        />
     </motion.div>
  )
}

const Tech = () => {
  return (
    <motion.section
      variants={textVariant()}
      className='mt-16 text-center'
    >
      <h3 className='uppercase font-bold text-lg inline-block relative half-underline'>Technologies</h3>
      <div className="flex flex-wrap justify-center items-center gap-5 mt-8">
        {
          technologies.map((technology, index) => (
            < TechnologyCard key={index} index={index} {...technology} />
          ))
        }
      </div>
    </motion.section>
  )
}

export default SectionWrapper(Tech, 'tech')