import React from 'react'
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaSearch
} from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import footerbg from '../assets/images/footer.png'

const Footer = () => {
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
    <footer
      className='relative bg-[#2124B1] bg-no-repeat py-12 max-md:py-6 text-white overflow-hidden'
      style={{ backgroundImage: `url(${footerbg})` }}
    >
      <div className='relative z-10 mx-auto px-6 sm:px-12 lg:px-24 container'>
        <div className='flex lg:flex-row flex-wrap justify-between items-center lg:items-start'>
          {/* Logo and Description */}
          <div className='mb-6 lg:mb-0 w-1/3 max-md:w-2/3 text-start lg:text-left'>
            <a
              href='/'
              className='flex items-center space-x-2 font-bold text-4xl max-md:text-2xl'
            >
              <FaSearch className='max-md:w-6 max-md:h-6' />
              <span>
                SEO<span className='text-xl max-md:text-sm'>Master</span>
              </span>
            </a>
            <p className='mt-2 font-medium text-lg text-white max-md:text-sm tracking-wide'>
              Creating modern, scalable, and user-centric solutions to empower
              your business.
            </p>
          </div>

          {/* Quick Links */}
          <div className='mb-6 lg:mb-0'>
            <h3 className='mb-3 font-semibold text-lg text-white max-md:text-base'>
              Quick Links
            </h3>
            <ul className='space-y-2 text-base'>
              <li>
                <a
                  href='#services'
                  onClick={e => handleScrollToSection(e, 'services')}
                  className='max-md:text-sm hover:text-yellow-400 hover:transform transition-all hover:scale-110'
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href='#projects'
                  onClick={e => handleScrollToSection(e, 'projects')}
                  className='max-md:text-sm hover:text-yellow-400 hover:transform transition-all hover:scale-110'
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href='#contact'
                  onClick={e => handleScrollToSection(e, 'contact')}
                  className='max-md:text-sm hover:text-yellow-400 hover:transform transition-all hover:scale-110'
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href='#about'
                  onClick={e => handleScrollToSection(e, 'about')}
                  className='max-md:text-sm hover:text-yellow-400 hover:transform transition-all hover:scale-110'
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className='text-center lg:text-left'>
            <h3 className='mb-3 font-semibold text-lg text-white max-md:text-base'>
              Follow Us
            </h3>
            <div className='flex justify-center lg:justify-start space-x-6'>
              <a
                href='https://facebook.com'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-yellow-400 transition-all hover:scale-125'
              >
                <FaFacebookF size={22} className='' />
              </a>
              <a
                href='https://x.com/asifabbasi7666?t=HBlZVadwCJiyS9tKtVu18A&s=08'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-yellow-400 transition-all hover:scale-125'
              >
                <FaXTwitter size={22} />
              </a>
              <a
                href='https://www.instagram.com/asif.abbasi_/'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-yellow-400 transition-all hover:scale-125'
              >
                <FaInstagram size={22} />
              </a>
              <a
                href='https://www.linkedin.com/in/asif-abbasi-42962a245'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-yellow-400 transition-all hover:scale-125'
              >
                <FaLinkedinIn size={22} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider and Copyright */}
        <hr className='border-white-700 my-6' />
        <p className='font-medium text-center text-sm text-white tracking-wide'>
          © {new Date().getFullYear()} Copyright. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
