import React from 'react'
import cv from "../../assets/Dhruv_Singhal.pdf"

const CTA = () => {
  return (
    <div className='cta'>
        <a href={cv} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's TALK</a>

    </div>
  )
}

export default CTA
