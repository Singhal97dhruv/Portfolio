import React from 'react'
import "./about.css"
import ME from "../../assets/IMG_20230516_134618.jpg"
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know!!!</h5>
      <h2>About ME</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <MilitaryTechIcon className='about__icon'/>
              <h5>LeetCode</h5>
              <small>1.5+ years experience</small>
            </article>
            <article className="about__card">
              <MilitaryTechIcon className='about__icon'/>
              <h5>LeetCode</h5>
              <small>Annual Badge 2022</small>
            </article>
            {/* <article className="about__card">
              <MilitaryTechIcon className='about__icon'/>
              <h5>Experience</h5>
              <small>3+years experience</small>
            </article> */}
          </div>
          <p>
          hEY! Me Dhruv a Decent Problem Solver with knowledge of MERN Stack Technology. My strengths are data structures, mern stack development and domain knowledge of my stream. Highly motivated and hardworking individual dedicated to upholding the highest standards of work quality.
          </p>
          <a href="#contact" className='btn btn-primary'>Lets Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
