import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import icon from '../assets/images/icon-shape-primary.png'
import { TfiWrite } from "react-icons/tfi";
import { FaLaptop, FaGlobe, FaMobile, FaGlobeAsia } from 'react-icons/fa' // Import your icons here
import { RiAdvertisementFill } from "react-icons/ri";
import { getAllServices } from '../api/serviceApi'

// Mapping of icon names to React Icons
const iconMapping = {
  TfiWrite: TfiWrite,
  FaGlobeAsia: FaGlobeAsia,
  FaLaptop: FaLaptop,
  FaGlobe: FaGlobe,
  FaMobile: FaMobile,
  RiAdvertisementFill: RiAdvertisementFill
}

const Services = () => {
  const [services, setServices] = useState([])

  // Fetch the services data from the backend API
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await getAllServices() // Your API endpoint to get services
        setServices(response) // Set services data from the API
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    }

    fetchServices()
  }, [])

  return (
    <div id='services' className='p-14 max-md:p-6 text-[#2124B1]'>
      <h6 className='mb-4 font-semibold text-[#2124B1] text-center max-md:text-[0.8rem]'>
        Our Services
      </h6>
      <h2 className='font-[600] text-4xl text-black text-center max-md:text-[1.2rem]'>
        What We Offer
      </h2>
      <div className='gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 m-12 max-md:m-6'>
        {services.map((service, index) => {
          // Get the corresponding icon component dynamically
          const IconComponent = iconMapping[service.logo]

          return (
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
                {/* Dynamically render the icon component */}
                {IconComponent && (
                  <IconComponent className='text-[2rem] text-white max-md:text-[1.5rem]' />
                )}
              </div>
              <h3 className='group-hover:text-white my-4 max-md:my-2 font-semibold text-[18px] text-black max-md:text-[0.85rem] transition-colors duration-300'>
                {service.title}
              </h3>
              <p className='group-hover:text-white text-[0.85rem] text-black max-md:text-[0.7rem] transition-colors duration-300'>
                {service.description}
              </p>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default Services
