import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { getAllHowWorks } from '../api/howWorkApi'

const HowWeWork = () => {
  const [steps, setSteps] = useState([])

  // Fetch the services data from the backend API
      useEffect(() => {
        const fetchSteps = async () => {
          try {
            const response = await getAllHowWorks() // Your API endpoint to get services
            setSteps(response) // Set services data from the API
          
          } catch (error) {
            console.log(error)
          }
        }
    
        fetchSteps()
      }, [])


  return (
    <div id='howwework' className='p-16 max-md:p-6 text-[#2124B1]'>
      <h6 className='font-semibold text-[#2124B1] text-center max-md:text-[0.8rem]'>
        How We Work
      </h6>
      {/* <h2 className='font-[600] text-4xl text-black text-center max-md:text-[1.2rem]'>
        Our Simple Process
      </h2> */}
      <div className='gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 m-12 max-md:m-6'>
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className='relative flex flex-col items-start hover:bg-[#2124B1] shadow-lg p-6 rounded-lg transition-all duration-700 group'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className='group-hover:text-white my-4 max-md:my-2 font-semibold text-[18px] text-black max-md:text-[16px] transition-colors duration-300'>
              {step.title}
            </h3>
            <p className='group-hover:text-white text-black max-md:text-sm transition-colors duration-300'>
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default HowWeWork
