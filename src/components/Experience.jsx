import React from 'react'
import { experiences } from '../constants'
import { fadeIn } from '../utils/motion'
import { motion } from 'framer-motion'
import Image from 'next/image'



const ExperienceCard = ({ title, company_name, icon, iconBg, date, points }) => {
  return (
    <div className='w-[80vw] p-4 mx-auto'>
      <div className={`inline-block p-[3px] mx-auto rounded-full bg-orange-500`}>
        <Image
          width={40}
          height={40}
          alt={title}
          src={icon}
          className=''
        />
      </div>
      <h4 className='uppercase'> {title} </h4>
      <div className="md:w-[50%] w-full text-right">
        <p>I worked in {company_name}</p>
        <p>On {date} </p>
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
      <div className="mt-0">
        <h3 className='font-bold uppercase'>experiences</h3>
        <p className='mt-2'>i have been in technology industry for a while and i worked
          in a different places Lorem ipsum dolor sit, amet consectetur adipisicing. some of them are as follows.
        </p>
      </div>
      <div>
        <div className="mt-4">
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