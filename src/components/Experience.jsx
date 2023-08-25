import React from 'react'
import { experiences } from '../constants'
import { fadeIn } from '../utils/motion'
import { motion } from 'framer-motion'
import Image from 'next/image'



const ExperienceCard = ({ title, company_name, icon, iconBg, date, points }) => {
  return (
    <div className='w-[90vw] p-4 mx-auto'>
      
      <h4 className='uppercase inline-block relative gradient_underline'> {title} </h4>
      <div className="flex justify-between mt-4">
      <div className={`flex justify-center items-center object-contain rounded-md p-[3px] bg-blue-300`}>
        <Image
          width={28}
          height={28}
          alt={title}
          src={icon}
        />
      </div>
      <div className="md:w-[50%] w-full text-right">
        <p>I worked in {company_name}</p>
        <p>On {date} </p>
      </div>
      </div>
      <div className="mt-4 text-left">
        {
          points.map((point, index) => (
            <p key={index} >{index + 1}. {point} </p>
          ))
        }
      </div>
    </div>
  )
}

const Experience = () => {
  return (
    <motion.div
      variants={fadeIn('', '', .1, 1)}
      className='mt-20 text-center'
    >
      <div className="mt-0 text-center">
        <h3 className='font-bold uppercase text-lg inline-block relative half-underline'>experiences</h3>
        <p className='mt-2 text-left max-w-3xl mx-auto'>I have been in technology industry for a while and i worked
          in a different places Lorem ipsum dolor sit, amet consectetur adipisicing. some of them are as follows.
        </p>
      </div>
      <div>
        <div className="mt-8">
          {
            experiences.map((experience) => (
              < ExperienceCard key={experience.title} {...experience} />
            ))
          }
        </div>
      </div>

    </motion.div>
  )
}

export default Experience