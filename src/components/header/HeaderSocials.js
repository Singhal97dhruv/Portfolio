import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"
import CodeIcon from '@mui/icons-material/Code';

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/singhal97/" target='_blank'><BsLinkedin/></a>
      <a href="https://github.com/Singhal97dhruv" target='_blank'><BsGithub/></a>
      <a href="https://leetcode.com/singhal97" target='_blank'><CodeIcon/></a>

    </div>
  )
}

export default HeaderSocials
