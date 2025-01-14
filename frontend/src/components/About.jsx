import React from 'react'
import about from '../assets/images/about.jpg'
import { FaCheck, FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.div
      id='about'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className='flex max-md:flex-col justify-center items-center gap-10 px-12 max-md:p-6 w-full h-[86vh]'>
        <motion.div
          className='w-2/4 max-md:w-full'
          data-wow-delay='0.1s'
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, type: 'spring' }}
        >
          <div className='relative pb-2'>
            <h6 className='relative font-semibold text-[#2124B1] max-md:text-[0.8rem]'>
              About Us
            </h6>
            <h2 className='mt-2 font-bold text-[#1D1D27] text-[2rem] max-md:text-[1.2rem]'>
              The best SEO solution with 10 years of experience
            </h2>
          </div>
          <p className='text-[#888] text-[1rem] max-md:text-[0.9rem]'>
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor
            sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem
            et sit, sed stet no labore lorem sit. Sanctus clita duo justo et
            tempor eirmod magna dolore erat amet
          </p>
          <div className='flex gap-2 my-6'>
            <div className='flex-1'>
              <h6 className='flex items-center gap-2 mb-3 font-semibold max-md:text-sm'>
                <FaCheck className='text-[#2124B1]' /> Award Winning
              </h6>
              <h6 className='flex items-center gap-2 mb-0 font-semibold max-md:text-sm'>
                <FaCheck className='text-[#2124B1]' />
                Professional Staff
              </h6>
            </div>
            <div className='flex-1'>
              <h6 className='flex items-center gap-2 mb-3 font-semibold max-md:text-sm'>
                <FaCheck className='text-[#2124B1]' />
                24/7 Support
              </h6>
              <h6 className='flex items-center gap-2 mb-0 font-semibold max-md:text-sm'>
                <FaCheck className='text-[#2124B1]' />
                Fair Prices
              </h6>
            </div>
          </div>
          <div className='flex items-center'>
            <Link
              className='border-[#2124B1] bg-[#2124B1] px-4 py-2 border border-solid rounded-[30px] text-white max-md:text-sm me-3'
              to=''
            >
              Read More
            </Link>
            <Link
              className='flex justify-center items-center border-[#2124B1] hover:bg-[#2124B1] p-[0.9rem] max-md:p-3 border border-solid rounded-[50px] max-md:text-sm group me-3'
              to=''
            >
              <FaFacebookF className='group-hover:text-white text-[#2124B1]' />
            </Link>
            <Link
              className='flex justify-center items-center border-[#2124B1] hover:bg-[#2124B1] p-[0.9rem] max-md:p-3 border border-solid rounded-[50px] max-md:text-sm group me-3'
              to=''
            >
              <FaXTwitter className='group-hover:text-white text-[#2124B1]' />
            </Link>
            <Link
              className='flex justify-center items-center border-[#2124B1] hover:bg-[#2124B1] p-[0.9rem] max-md:p-3 border border-solid rounded-[50px] max-md:text-sm group me-3'
              to=''
            >
              <FaInstagram className='group-hover:text-white text-[#2124B1]' />
            </Link>
            <Link
              className='flex justify-center items-center border-[#2124B1] hover:bg-[#2124B1] p-[0.9rem] max-md:p-3 border border-solid rounded-[50px] max-md:text-sm group'
              to=''
            >
              <FaLinkedin className='group-hover:text-white text-[#2124B1]' />
            </Link>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className='w-2/4 max-md:w-3/4'
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, type: 'spring' }}
        >
          <img className='' data-wow-delay='0.5s' src={about} alt='About' />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default About
