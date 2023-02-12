import React from 'react'
import './footer.css'
import {FaFacebook} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>ABHISHEK</a>
      <ul className="permalinks">
        <li><a href="#" className='btn btn-primary'>Home</a></li>
        <li><a href="#about" className='btn btn-primary'>About</a></li>
        <li><a href="#experience"className='btn btn-primary'>Experience</a></li>
        {/* <li><a href="#services">Services</a></li> */}
        <li><a href="#portfolio" className='btn btn-primary'>Portfolio</a></li>
        {/* <li><a href="#testimonials">Testimonials</a></li> */}
        <li><a href="#contact" className='btn btn-primary'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><FaFacebook/></a>
        <a href="https://instagram.com"><FiInstagram/></a>
        <a href="https://twitter.com"><IoLogoTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; ABHISHEK Portfolio. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
