import { motion } from "framer-motion"
import React, { useState } from "react"
import { fadeIn } from "../utils/motion"
import SectionWrapper from "../hoc/sectionWrapper"
import { styles } from "../styles"
// import { Tilt } from "react-tilt"
import { services } from "../constants";
import Image from "next/image"


const ServiceCard = ({ title, icon, index }) => {
  const [hovered, setHovered] = useState(false)

  return (
    // <Tilt className='xs:w-[250px] w-full' >
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      onHoverStart={() => setHovered(!hovered)}
      onHoverEnd={() => setHovered(!hovered)}
      className={`w-[250px] p-[1px] green-pink-gradient rounded-[20px] shadow-card bg-[#4b76af] `}
    >
      <div
        className="py-5 px-12 bg-tertiary rounded-[20px] min-h-[228px] flex justify-evenly items-center flex-col"
      >

        <Image
          width={64}
          height={64}
          alt={title}
          src={icon}
          className={`${!hovered ? 'rotate-180 duration-300' : '-rotate-180 duration-500'}`}
        />
        <h1 className="text-white font-bold text-20px text-center"> {title} </h1>
      </div>
    </motion.div>
    //  </Tilt>
  )
}

const About = () => {
  return (
    <section className='text-center'>
      <div>
        <motion.p
          variants={fadeIn('left', 'tween', '0.1', '1')}
          className={`${styles.sectionSubText}`}
        >
          Introduction
        </motion.p>
        <motion.h3
          variants={fadeIn('right', 'tween', '0.1', '1')}
          className={`${styles.sectionSubText} font-bold`}
        >
          overview.
        </motion.h3>
      </div>
      <div>

        <motion.p
          variants={fadeIn('up', 'tween', '1', '1')}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] mx-auto"
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
        variants={fadeIn('down', 'tween', '0.1', '1')}
        className={`${styles.sectionSubText} font-bold mt-20`}
      >
        services.
      </motion.h3>
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





