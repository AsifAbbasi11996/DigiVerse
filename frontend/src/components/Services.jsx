import React from 'react'
import { motion } from 'framer-motion'
import { FaHome } from 'react-icons/fa'
import icon from '../assets/images/icon-shape-primary.png'

const services = [
  {
    title: 'Web Applications',
    description: 'Modern and scalable web solutions.'
  },
  {
    title: 'Web Applications',
    description: 'Modern and scalable web solutions.'
  },
  {
    title: 'Mobile Applications',
    description: 'Intuitive and robust mobile apps.'
  },
  {
    title: 'Mobile Applications',
    description: 'Intuitive and robust mobile apps.'
  },
  { title: 'UI/UX Design', description: 'Futuristic user interfaces.' },
  { title: 'UI/UX Design', description: 'Futuristic user interfaces.' }
]

const Services = () => {
  return (
    <div id='services' className='p-16 max-md:p-6 text-[#2124B1]'>
      <h6 className='font-semibold text-[#2124B1] text-center max-md:text-[0.8rem]'>
        Our Services
      </h6>
      <h2 className='font-[600] text-4xl text-black text-center max-md:text-[1.2rem]'>
        What Solutions We Provide
      </h2>
      <div className='gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 m-12 max-md:m-6'>
        {services.map((service, index) => (
          <motion.div
            key={index}
            className='relative flex flex-col items-center hover:bg-[#2124B1] shadow-lg p-6 rounded-lg transition-all duration-700 group'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div
              className='relative flex justify-center items-center max-md:bg-cover bg-no-repeat bg-center w-[90px] max-md:w-[70px] h-[90px] max-md:h-[70px] transition-colors duration-300'
              style={{ backgroundImage: `url(${icon})` }}
            >
              <FaHome className='group-hover:text-[#2124B1] text-[2rem] text-white max-md:text-[1.5rem]' />
            </div>
            <h3 className='group-hover:text-white my-4 max-md:my-2 font-semibold text-2xl text-black max-md:text-xl transition-colors duration-300'>
              {service.title}
            </h3>
            <p className='group-hover:text-white text-black max-md:text-sm transition-colors duration-300'>
              {service.description}
            </p>
            <button class='bg-gray-200 my-4 max-md:my-2 px-4 py-[0.3rem] rounded-[30px] text-[#2124B1] max-md:text-sm'>
              Read more
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Services
