import React from 'react'
import { projects } from '../constants'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import Link from 'next/link';
import Image from 'next/image';
import { SectionWrapper } from "../hoc";


const ProjectCard = ({ name, date, description, tags, image, source_code_link, icon }) => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work block"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date={date}
        iconStyle={{ background: 'rgb(33, 150, 243)', color: 'blue-500' }}
        lineColor='black'
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
        
        <p>
          {description}
        </p>
        <div className='flex justify-center items-center'>
          {
            tags.map(tag => (
              <p key={tag.name} className={`font-bold`} > #{tag.name} </p>
            ))
          }
        </div>
        
      </VerticalTimelineElement>
    </VerticalTimeline>
  )
}

const Works = () => {
  return (
    <div className='mt-16 text-center'>
      <motion.h3
        variants={fadeIn('up', 'spring', '.2', '1')}
        className='uppercase font-bold inline-block relative half-underline text-lg'
      >
        Works
      </motion.h3>
      <div className="mt-8 bg-blue-300 py-2">
        {
          projects.map((project) => (
            < ProjectCard key={project.name} {...project} />
          ))
        }
      </div>
    </div>
  )
}

export default SectionWrapper(Works, 'projects')
