import { motion } from "framer-motion"
import React, { useState } from "react"
import { fadeIn, slideIn, textVariant } from "../utils/motion"
import SectionWrapper from "../hoc/sectionWrapper"
import { styles } from "../styles"
import { services, why_hire_dev } from "../constants";
import Image from "next/image"


const ServiceCard = ({ title, icon, index }) => {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      onHoverStart={() => setHovered(!hovered)}
      onHoverEnd={() => setHovered(!hovered)}
      className={`w-[250px] p-[1px] green-pink-gradient rounded-[20px] shadow-card bg-[#4b76af] `}
    >
      <div
        className="text-white py-5 px-12 bg-tertiary rounded-[20px] min-h-[228px] flex justify-evenly items-center flex-col"
      >

        <Image
          width={64}
          height={64}
          alt={title}
          src={icon}
          className={`${!hovered ? 'rotate-180 duration-300' : '-rotate-180 duration-500'}`}
        />
        <h1 className="font-bold text-20px text-center"> {title} </h1>
        <button className="p-2 bg-blue-700 mt-2 rounded-md cursor-pointer block mx-auto">view projects</button>
      </div>
    </motion.div>
  )
}

const About = () => {
  return (
    <section className='text-center mt-16'>
      <div>
        <motion.p
          variants={fadeIn('up', 'tween', '.1', '1')}
          className={`${styles.sectionSubText} font-bold text-lg inline-block relative half-underline`}
        >
          About.
        </motion.p>

      </div>
      <div>

        <motion.p
          variants={fadeIn('up', 'tween', '.3', '1')}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] mx-auto text-left indent-2"
        >
          I am skilled web developer with experience in JavaScript and Typescript,
          and expertise in modern frameworks like react js, next js and remix js
          for frontend, expresss js and mongoDB for back-end. I am quick learner
          and collaborate closely with clients to create effiency, scalable and
          user-friendly solution that can solve real world problem. Lets works
          together to bring ideas into life.
        </motion.p>
      </div>
      <motion.h3
        variants={fadeIn('', '', '.8', '1')}
        className={`${styles.sectionSubText} font-bold mt-20 inline-block relative gradient_underline`}
      >
        why hire a developer.
      </motion.h3>
      <div
        className="mt-4 max-w-3xl leading-[30px] mx-auto text-left indent-2"
      >
        {
          why_hire_dev.map((item, index) => (
            <motion.p
            key={item.point}
              variants={slideIn('up', 'tween', (index + 1) * .5 ,1)}
              className="py-2"
            >
              <span className="p-1 bg-blue-300 rounded-full mr-4" > {index + 1} </span> <span className="font-bold"> {item.point}: </span>{" "} <span> {item.explanation} </span>
            </motion.p>
          ))
        }
      </div>
      <div className="mt-16 text-center uppercase font-bold">
        <h3>Services.</h3>
      </div>
      <div className="mt-8 flex flex-wrap gap-10 xs:justify-center">

        {
          services.map((service, index) => (
            < ServiceCard key={index} index={index} {...service} />
          ))
        }
      </div>
    </section>
  )
}

export default SectionWrapper(About, 'about')


