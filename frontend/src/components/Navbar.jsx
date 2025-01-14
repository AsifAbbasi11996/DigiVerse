import React, { useState } from 'react'
import { FaBars, FaSearch, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleScrollToSection = (event, targetId) => {
    event.preventDefault()
    const targetElement = document.getElementById(targetId)
    const offset = 80 // Adjust this value based on your navbar height
    window.scrollTo({
      top: targetElement.offsetTop - offset,
      behavior: 'smooth'
    })
  }

  const scrollToTop = event => {
    event.preventDefault() // Prevent the default link navigation behavior
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Scroll smoothly to the top
    })
  }

  return (
    <nav className='top-0 z-50 sticky bg-[#fff] p-8 max-md:p-4 border-b-[1px] border-b-[rgba(179,179,179,0.1)] w-full text-[#2124B1]'>
      <div className='flex justify-between items-center mx-auto max-w-7xl'>
        <Link
          to='/'
          className='flex items-center space-x-2 font-bold text-4xl max-md:text-2xl'
          onClick={scrollToTop}
        >
          <FaSearch className='max-md:text-[1.3rem]' />
          <span>
            SEO<span className='text-xl max-md:text-[0.9rem]'>Master</span>
          </span>
        </Link>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className='md:hidden text-[1.5rem] max-md:text-[1.2rem] focus:outline-none'
        >
          {isMenuOpen ? (
            <FaTimes className='text-[#2d2d2d]' />
          ) : (
            <FaBars className='text-[#2d2d2d]' />
          )}
        </button>

        {/* Links for Desktop */}
        <div className='md:flex space-x-6 hidden'>
          <a
            href='#home'
            className='hover:text-yellow-400 transition duration-200'
            onClick={e => handleScrollToSection(e, 'home')}
          >
            Home
          </a>
          <a
            href='#about'
            className='hover:text-yellow-400 transition duration-200'
            onClick={e => handleScrollToSection(e, 'about')}
          >
            About
          </a>
          <a
            href='#services'
            className='hover:text-yellow-400 transition duration-200'
            onClick={e => handleScrollToSection(e, 'services')}
          >
            Services
          </a>
          <a
            href='#projects'
            className='hover:text-yellow-400 transition duration-200'
            onClick={e => handleScrollToSection(e, 'projects')}
          >
            Projects
          </a>
          <a
            href='#contact'
            className='hover:text-yellow-400 transition duration-200'
            onClick={e => handleScrollToSection(e, 'contact')}
          >
            Contact
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='top-0 right-0 left-0 absolute md:hidden bg-white mt-16 p-4'>
          <a
            href='#home'
            className='block px-4 py-2 font-semibold text-black hover:text-[#2124B1]'
            onClick={e => {
              setIsMenuOpen(false)
              handleScrollToSection(e, 'home')
            }}
          >
            Home
          </a>
          <a
            href='#about'
            className='block px-4 py-2 font-semibold text-black hover:text-[#2124B1]'
            onClick={e => {
              setIsMenuOpen(false)
              handleScrollToSection(e, 'about')
            }}
          >
            About
          </a>
          <a
            href='#services'
            className='block px-4 py-2 font-semibold text-black hover:text-[#2124B1]'
            onClick={e => {
              setIsMenuOpen(false)
              handleScrollToSection(e, 'services')
            }}
          >
            Services
          </a>
          <a
            href='#projects'
            className='block px-4 py-2 font-semibold text-black hover:text-[#2124B1]'
            onClick={e => {
              setIsMenuOpen(false)
              handleScrollToSection(e, 'projects')
            }}
          >
            Projects
          </a>
          <a
            href='#contact'
            className='block px-4 py-2 font-semibold text-black hover:text-[#2124B1]'
            onClick={e => {
              setIsMenuOpen(false)
              handleScrollToSection(e, 'contact')
            }}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navbar
