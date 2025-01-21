import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPlus, FaMinus } from 'react-icons/fa' // Importing plus and minus icons

const faqs = [
  {
    question: 'How soon will I see results?',
    answer:
      'It depends on the service. SEO can take a few months to show impact, while PPC and social media campaigns often deliver faster results. We’ll give you a realistic timeline upfront.'
  },
  {
    question: 'What industries do you work with?',
    answer:
      'We’ve helped businesses in retail, healthcare, tech, education, and more. No matter your industry, we’re ready to dive in.'
  },
  {
    question: 'Can small businesses afford your services?',
    answer:
      'Absolutely! We offer flexible packages to suit businesses of all sizes and budgets. Let’s find the right fit for you.'
  }
]

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null) // Track which FAQ is open

  const handleToggle = index => {
    setActiveIndex(activeIndex === index ? null : index) // Toggle FAQ answer visibility
  }

  return (
    <div id='faq' className='p-16 max-md:p-6 text-[#2124B1]'>
      <h6 className='mb-4 font-semibold text-[#2124B1] text-center max-md:text-[0.8rem]'>
        Frequently Asked Questions
      </h6>
      <h2 className='font-[600] text-3xl text-black text-center max-md:text-[1.2rem]'>
        Got Questions? We Have Answers!
      </h2>
      <div className='m-12 max-md:m-6'>
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className='relative items-start border-[#dedede] my-4 px-6 py-2 border border-solid rounded-lg transition-all duration-700'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div
              className='flex justify-between items-center my-4 max-md:my-2 font-semibold text-black text-xl max-md:text-base transition-colors duration-300 cursor-pointer'
              onClick={() => handleToggle(index)} // Toggle the question
            >
              {faq.question}
              {/* Conditional rendering of plus/minus icon */}
              {activeIndex === index ? (
                <FaMinus className='mr-2' />
              ) : (
                <FaPlus className='mr-2' />
              )}
            </div>
            {/* Show answer only if the FAQ is clicked */}
            {activeIndex === index && (
              <motion.p
                className='text-black max-md:text-sm transition-colors duration-300'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {faq.answer}
              </motion.p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default FAQ
