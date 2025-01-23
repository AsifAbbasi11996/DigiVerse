import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { getAllWorks } from '../api/workApi'

const WhyWork = () => {
  const [reasons, setReasons] = useState([])
  
    // Fetch the services data from the backend API
    useEffect(() => {
      const fetchReasons = async () => {
        try {
          const response = await getAllWorks() // Your API endpoint to get services
          setReasons(response) // Set services data from the API
        } catch (error) {
          console.log(error)
        }
      }
  
      fetchReasons()
    }, [])
 

  return (
    <div id='whywork' className='p-16 max-md:p-6 text-[#2124B1]'>
      <h6 className='mb-4 font-semibold text-[#2124B1] text-center max-md:text-[0.8rem]'>
        Why Work With Us?
      </h6>
      <h2 className='font-[600] text-black text-center text-xl max-md:text-[0.8rem]'>
      Because we're not just another digital agency - we're your partners in success! Here's what makes us stand out:
      </h2>
      <div className='gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 m-12 max-md:m-6'>
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            className='relative flex flex-col items-start hover:bg-[#2124B1] shadow-lg p-6 rounded-lg transition-all duration-700 group'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className='group-hover:text-white my-4 max-md:my-2 font-semibold text-[18px] text-black text-center max-md:text-[14px] transition-colors duration-300'>
              {reason.title}
            </h3>
            <p className='group-hover:text-white text-black max-md:text-sm transition-colors duration-300'>
              {reason.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default WhyWork
