import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import { FaFacebookF, FaInstagram, FaPhone, FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Contact = () => {
  const form = useRef()
  const [formStatus, setFormStatus] = useState('')

  const sendEmail = e => {
    e.preventDefault()

    // Log environment variables to ensure they are correctly loaded
    console.log('Service ID:', process.env.REACT_APP_SERVICE_ID)
    console.log('Template ID:', process.env.REACT_APP_TEMPLATE_ID)
    console.log('Public Key:', process.env.REACT_APP_PUBLIC_KEY)

    // Log form data to verify before sending
    const formData = new FormData(form.current)
    const formValues = {}
    formData.forEach((value, key) => {
      formValues[key] = value
    })
    console.log('Form Data:', formValues)

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.REACT_APP_PUBLIC_KEY
        }
      )
      .then(
        () => {
          setFormStatus(
            'Thank you for reaching out! We will get back to you soon.'
          )
          // Hide the form status after 3 seconds
          setTimeout(() => {
            setFormStatus('')
          }, 3000)
        },
        error => {
          setFormStatus(error.text)
        }
      )
  }

  return (
    <div id='contact' className='max-md:px-4 p-16 text-[#2124B1]'>
      <div className='mx-auto px-6 max-md:px-2 container'>
        {/* Contact Heading Animation */}
        <motion.h2
          className='font-semibold text-center text-xl max-md:text-[0.8rem]'
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Contact Us
        </motion.h2>

        {/* Social Media Links */}
        <motion.div
          className='flex justify-center items-center space-x-6 max-md:space-x-5 m-8 max-md:m-4'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Link
            to='https://www.facebook.com'
            target='_blank'
            rel='noopener noreferrer'
            className='text-2xl max-md:text-xl hover:text-yellow-400'
          >
            <FaFacebookF />
          </Link>
          <Link
            to='https://www.instagram.com'
            target='_blank'
            rel='noopener noreferrer'
            className='text-2xl max-md:text-xl hover:text-pink-500'
          >
            <FaInstagram />
          </Link>
          <Link
            to='https://wa.me/7758049221'
            target='_blank'
            rel='noopener noreferrer'
            className='text-2xl max-md:text-xl hover:text-green-500'
          >
            <FaWhatsapp />
          </Link>
          <Link
            className='flex items-center text-xl max-md:text-xl hover:text-gray-400'
            to=''
          >
            <FaPhone />
            <span className='mx-2 text-xl max-md:text-base'>
              +91 7758049221
            </span>
          </Link>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          className='relative shadow-lg mx-auto p-8 max-md:p-4 rounded-lg max-w-3xl overflow-hidden'
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          {/* Name Input */}
          <div className='mb-6'>
            <label
              htmlFor='from_name'
              className='block mb-2 font-medium text-[#2124B1] text-sm'
            >
              Name
            </label>
            <motion.input
              type='text'
              id='name'
              name='from_name'
              className='border-[#ececec] border-[2px] px-4 max-md:px-2 py-3 border-solid rounded-lg focus:ring-2 focus:ring-[#2124B1] w-full text-black max-md:text-sm focus:outline-none'
              placeholder='Enter your name'
              required
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            />
          </div>

          {/* Email Input */}
          <div className='mb-6'>
            <label
              htmlFor='from_email'
              className='block mb-2 font-medium text-[#2124B1] text-sm'
            >
              Email
            </label>
            <motion.input
              type='email'
              id='email'
              name='from_email'
              className='border-[#ececec] border-[2px] px-4 max-md:px-2 py-3 border-solid rounded-lg focus:ring-2 focus:ring-[#2124B1] w-full text-black max-md:text-sm focus:outline-none'
              placeholder='Enter your email'
              required
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
          </div>

          {/* Message Input */}
          <div className='mb-6'>
            <label
              htmlFor='message'
              className='block mb-2 font-medium text-[#2124B1] text-sm'
            >
              Message
            </label>
            <motion.textarea
              id='message'
              name='message'
              rows='5'
              className='border-[#ececec] border-[2px] px-4 max-md:px-2 py-3 border-solid rounded-lg focus:ring-2 focus:ring-[#2124B1] w-full text-black max-md:text-sm focus:outline-none'
              placeholder='Write your message here...'
              required
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            ></motion.textarea>
          </div>

          {/* Submit Button */}
          <motion.button
            type='submit'
            className='bg-[#2124B1] py-3 rounded-lg w-full font-bold text-white max-md:text-sm transition-colors'
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.6 }}
          >
            Send Message
          </motion.button>

          {/* Form Status Message */}
          {formStatus && (
            <motion.p
              className='mt-4 text-center text-lg'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {formStatus}
            </motion.p>
          )}
        </motion.form>
      </div>
    </div>
  )
}

export default Contact
