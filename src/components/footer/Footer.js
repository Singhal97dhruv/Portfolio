import React from 'react'
import "./footer.css"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
const Footer = () => {
  return (
<footer>
<a href="#" className='footer__logo'>Dhruv Singhal</a>

    <ul className='permalinks'>
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>

    <div className="footer__socials">
      <a href="https://www.facebook.com/dhruv.singhal.1257/"><FacebookIcon/></a>
      <a href="https://www.instagram.com/dhruv.singhal.saab/"><InstagramIcon/></a>
      <a href="https://www.linkedin.com/in/singhal97/"><LinkedInIcon/></a>

    </div>

    <div className="footer__copyright">
      <small>&copy; Dhruv Singhal Portfolio. All rights Reserved.</small>
    </div>

</footer>

  )
}

export default Footer
