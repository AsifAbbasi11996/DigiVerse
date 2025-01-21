import React from 'react'
import Home from '../components/Home'
import About from '../components/About'
import Services from '../components/Services'
// import Projects from '../components/Projects'
import Reviews from '../components/Reviews'
import Contact from '../components/Contact'
import WhyWork from '../components/WhyWork'
import HowWeWork from '../components/HowWeWork'
import FAQ from '../components/FAQ'

const Homepage = () => {
  return (
    <div className='mx-[5.5rem] max-md:mx-0 max-xl:mx-[2rem]'>
      <Home />
      <About />
      <Services />
      <WhyWork />
      {/* <Projects /> */}
      <HowWeWork />
      <Reviews />
      <FAQ />
      <Contact />
    </div>
  )
}

export default Homepage
