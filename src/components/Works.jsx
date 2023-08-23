import React from 'react'
import { projects } from '../constants'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import Link from 'next/link';
import Image from 'next/image';


const ProjectCard = ({ name, date, description, tags, image, source_code_link, icon }) => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work block"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date={date}
        iconStyle={{ background: 'rgb(33, 150, 243)', color: 'blue-500' }}
        lineColor = 'rgb(33, 150, 243)'
        layout='2-columns'
        icon={
          <div className='w-full h-full flex justify-center items-center'>
            <Image
              alt={name}
              src={icon}
              className='object-contain w-[60%] h-[60%]'
            />
          </div>
        }
      >
        <h3 className="vertical-timeline-element-title uppercase"> {name} </h3>
        <div className='w-full h-full flex justify-center items-center'>
            <Image
              alt={name}
              src={image}
              className='object-contain w-full h-[30vh] block mx-auto'
            />
          </div>
        <p>
          {description}
        </p>
        <div className="flex justify-between mt-2">
          <Link href={source_code_link} className="vertical-timeline-element-subtitle bg-blue-700 rounded-md p-1"> visit a website </Link>
          <Link href={source_code_link} className="vertical-timeline-element-subtitle bg-blue-700 rounded-md p-1"> source codes </Link>
        </div>
      </VerticalTimelineElement>
    </VerticalTimeline>
  )
}

const Works = () => {
  return (
    <div className='mt-16 bg-orange-500'>
      <motion.h3
        variants={fadeIn('up', 'spring', '.2', '1')}
        className='uppercase font-bold text-center'
      >
        Works
      </motion.h3>
      <div className="mt-8">
        {
          projects.map((project) => (
            < ProjectCard key={project.name} {...project} />
          ))
        }
      </div>
    </div>
  )
}

export default Works
