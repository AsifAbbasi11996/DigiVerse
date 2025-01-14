import React from 'react'
import { motion } from 'framer-motion'
import { FaQuoteLeft, FaStar } from 'react-icons/fa'
import img1 from '../assets/images/testimonial-1.jpg'
import img2 from '../assets/images/testimonial-2.jpg'
import img3 from '../assets/images/testimonial-3.jpg'
import bg from '../assets/images/bg-newsletter.png'

const reviews = [
  {
    name: 'John Doe',
    rating: 5,
    comment: 'Amazing service and incredible results!',
    image: img1
  },
  {
    name: 'Jane Smith',
    rating: 4,
    comment: 'Professional and efficient team!',
    image: img2
  },
  {
    name: 'Mark Lee',
    rating: 5,
    comment: 'Highly recommend for any business!',
    image: img3
  }
]

const Reviews = () => {
  return (
    <section
      className='bg-[#2124B1] bg-no-repeat max-md:px-8 py-16'
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className='gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-6 lg:px-24'>
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            className='relative bg-white shadow-lg p-6 rounded-lg text-center group'
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className='group-hover:scale-150 absolute inset-0 bg-gradient-to-r from-yellow-400 to-purple-500 opacity-20 blur-2xl transition-transform duration-500'></div>
            <FaQuoteLeft className='text-[#2124B1] text-2xl' />
            <img
              src={review.image}
              alt={review.name}
              className='border-4 border-yellow-400 max-md:border-2 group-hover:border-purple-500 mx-auto mb-4 p-1 max-md:p-[0.2rem] rounded-full w-20 max-md:w-16 h-20 max-md:h-16 transition-all duration-300'
            />
            <h3 className='group-hover:text-purple-500 font-semibold text-lg text-yellow-400 transition-colors duration-300'>
              {review.name}
            </h3>
            <div className='flex justify-center mt-2 mb-4'>
              {Array(review.rating)
                .fill()
                .map((_, i) => (
                  <FaStar
                    key={i}
                    className='group-hover:text-purple-500 text-yellow-400 transition-colors duration-300'
                  />
                ))}
            </div>
            <p className='group-hover:text-[#2124B1] text-black transition-colors duration-300'>
              {review.comment}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Reviews
