import React from 'react'
import Home from '../components/Home'
import About from '../components/About'
import Services from '../components/Services'
import Projects from '../components/Projects'
import Reviews from '../components/Reviews'
import Contact from '../components/Contact'

const Homepage = () => {
  return (
    <div className='mx-[5.5rem] max-md:mx-0'>
      <Home />
      <About />
      <Services />
      <Projects />
      <Reviews />
      <Contact />
    </div>
  )
}

export default Homepage
