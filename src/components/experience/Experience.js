import React from 'react'
import "./experience.css"
import VerifiedIcon  from '@mui/icons-material/Verified';
const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have!!</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
                <VerifiedIcon classname="experience__details-icon"  />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
            <VerifiedIcon classname="experience__details-icon" />
            <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div> </article>
              
              <article className='experience__details'>
              <VerifiedIcon classname="experience__details-icon"  />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div> </article> <article className='experience__details'>
              <VerifiedIcon classname="experience__details-icon" />
              <div>
                <h4>React</h4>
                <small className='text-light'>Intermediate</small>
              </div>
              </article> 

              <article className='experience__details'>
              <VerifiedIcon classname="experience__details-icon" />
              <div>
                <h4>Tailwindcss</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article> 
            
            <article className='experience__details'>
              <VerifiedIcon classname="experience__details-icon" />
              <div>
                <h4>Laravel</h4>
                <small className='text-light'>Beginner</small>
              </div></article>
              
            
          </div>
        </div>

        {/* End of Frontend */}

        <div className="experience__backend">
          <h3>Backend Development & Databases</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <VerifiedIcon classname="experience__details-icon" />
              <div>
                <h4>NodeJS</h4>
                <small className='text-light'>Experienced</small>
              </div>
              </article> 
              
              <article className='experience__details'>
              <VerifiedIcon classname="experience__details-icon" />
              <div>
                <h4>ExpressJS</h4>
                <small className='text-light'>Experienced</small>
              </div>
              </article>
              
              <article className='experience__details'>
              <VerifiedIcon classname="experience__details-icon"  />
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Experienced</small>
              </div>  </article>

              <article className='experience__details'>
              <VerifiedIcon classname="experience__details-icon"  />
              <div>
                <h4>Firebase</h4>
                <small className='text-light'>Intermediate</small>
              </div>  </article>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
