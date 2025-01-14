import React from 'react'
import img from '../assets/images/img-hero.png'
import bghero from '../assets/images/bg-bottom-hero.png'
import bgdot from '../assets/images/bg-dot.png'
import bground from '../assets/images/bg-round.png'
import bgtree from '../assets/images/bg-tree.png'

const Home = () => {
  return (
    <div
      id='home'
      className='bg-[#2124B1] bg-no-repeat px-5 py-2 max-md:p-0 container-xxl'
      style={{
        backgroundImage: `url(${bghero}), url(${bgdot}), url(${bground}), url(${bgtree}), url(${bgdot})`,
        backgroundPosition: 'bottom, top left, top center, bottom center,right'
      }}
    >
      <div className='flex max-md:flex-col justify-center items-center gap-10 px-12 max-md:px-0 w-full h-[81vh]'>
        <div className='w-2/4 max-md:w-3/4'>
          <h1 className='font-bold text-[40px] text-white max-md:text-[22px]'>
            All in one SEO tool need to grow your business rapidly
          </h1>
          <p className='my-8 max-md:my-5 text-[18px] text-white max-md:text-[14px]'>
            Tempor rebum no at dolore lorem clita rebum rebum ipsum rebum stet
            dolor sed justo kasd. Ut dolor sed magna dolor sea diam. Sit diam
            sit justo amet ipsum vero ipsum clita lorem
          </p>
          <button
            to=''
            className='border-white bg-white px-10 max-md:px-5 py-4 max-md:py-2 border border-solid rounded-[30px] font-semibold max-md:text-[13px]'
          >
            Free Quote
          </button>
          <button
            to=''
            className='border-white hover:bg-white ml-8 max-md:ml-4 px-10 max-md:px-5 py-4 max-md:py-2 border border-solid rounded-[30px] font-semibold text-white max-md:text-[13px] hover:text-black'
          >
            Contact Us
          </button>
        </div>
        <div className='w-2/4 max-md:w-3/4'>
          <img className='' src={img} alt='' />
        </div>
      </div>
    </div>
  )
}

export default Home
