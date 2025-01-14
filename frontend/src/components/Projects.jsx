import React from 'react'
import { motion } from 'framer-motion'
import bg from '../assets/images/bg.jpg'

const projects = [
  {
    id: 1,
    title: 'E-Commerce Website',
    description: 'A fully scalable online store.',
    images: [
      bg,
      'https://via.placeholder.com/300',
      'https://via.placeholder.com/300',
      'https://via.placeholder.com/300'
    ]
  },
  {
    id: 2,
    title: 'Portfolio Website',
    description: 'A creative and modern portfolio.',
    images: [
      'https://via.placeholder.com/300',
      'https://via.placeholder.com/300',
      'https://via.placeholder.com/300'
    ]
  },
  {
    id: 3,
    title: 'Mobile App',
    description: 'A user-friendly mobile solution.',
    images: [
      'https://via.placeholder.com/300',
      'https://via.placeholder.com/300',
      'https://via.placeholder.com/300'
    ]
  }
]

const Projects = () => {
  return (
    <div id='projects' className='max-md:px-0 p-16 text-[#2124B1]'>
      <h6 className='font-semibold text-center max-md:text-[0.8rem]'>
        Our Projects
      </h6>
      <h2 className='font-[600] text-4xl text-black text-center max-md:text-[1.2rem]'>
        Recently Launced Projects
      </h2>
      <div className='gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 m-12'>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className='relative shadow-lg rounded-lg cursor-pointer overflow-hidden group'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className='group-hover:scale-150 absolute transition-transform duration-500'></div>
            <img
              src={project.images}
              alt={project.title}
              className='w-full h-40 object-cover'
            />
            <div className='relative z-10 p-6'>
              <h3 className='group-hover:text-[#2124B1] mb-2 font-semibold text-black text-xl max-md:text-base transition-colors duration-300'>
                {project.title}
              </h3>
              <p className='group-hover:text-[#2124B1] text-black max-md:text-sm transition-colors duration-300'>
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Projects
