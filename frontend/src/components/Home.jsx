import React from 'react'
import img from '../assets/images/img-hero.png'
import bghero from '../assets/images/bg-bottom-hero.png'
import bgdot from '../assets/images/bg-dot.png'
import bground from '../assets/images/bg-round.png'
import bgtree from '../assets/images/bg-tree.png'

const Home = () => {
  const handleScrollToSection = (event, targetId) => {
    event.preventDefault()
    const targetElement = document.getElementById(targetId)
    const offset = 80 // Adjust this value based on your navbar height
    window.scrollTo({
      top: targetElement.offsetTop - offset,
      behavior: 'smooth'
    })
  }

  return (
    <div
      id='home'
      className='bg-[#2124B1] bg-no-repeat px-5 py-2 max-md:p-0 container-xxl'
      style={{
        backgroundImage: `url(${bghero}), url(${bgdot}), url(${bground}), url(${bgtree}), url(${bgdot})`,
        backgroundPosition: 'bottom, top left, top center, bottom center,right'
      }}
    >
      <div className='flex max-md:flex-col justify-center items-center gap-10 px-12 max-md:px-0 max-xl:px-6 w-full h-[81vh]'>
        <div className='w-2/4 max-md:w-3/4'>
          <h1 className='font-bold text-[24px] text-white max-md:text-[18px] max-xl:text-[15px]'>
            Welcome to DigiVerse
          </h1>
          <p className='my-4 max-xl:my-5 text-[16px] text-white max-md:text-[12px] max-xl:text-[14px]'>
            Your Universe of Digital Possibilities
          </p>
          <h1 className='font-bold text-[30px] text-white max-md:text-[22px] max-xl:text-[20px]'>
            Let's Build Something Amazing Together!
          </h1>
          <p className='my-6 max-xl:my-5 text-[16px] text-white max-md:text-[12px] max-xl:text-[14px]'>
            Hey there! At DigiVerse, we're all about helping businesses like
            yours grow and shine online. Whether you're just starting out or
            looking to take your brand to the next level, we've got the
            expertise and passion to make it happen.
          </p>
          <a href='#contact' onClick={e => handleScrollToSection(e, 'contact')}>
            <button
              to=''
              className='border-white bg-transparent hover:bg-white max-md:ml-4 px-10 max-xl:px-5 py-4 max-xl:py-2 border border-solid rounded-[30px] font-semibold text-white max-md:text-[13px] hover:text-black'
            >
              Contact Us
            </button>
          </a>
        </div>
        <div className='w-2/4 max-md:w-3/4 max-xl:w-[400px]'>
          <img className='max-md:w-[250px] max-xl:w-[400px]' src={img} alt='' />
        </div>
      </div>
    </div>
  )
}

export default Home
