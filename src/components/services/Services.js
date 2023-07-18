import React from 'react'
import "./services.css"
import CheckIcon from '@mui/icons-material/Check';
const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

        <div className="container services__container">

          <article className="service">
            <div className="service__head">
                <h3>FrontEnd Developer</h3>
            </div>
            <ul className="service__list">
              <li>
                <CheckIcon className='service__list-icon'/>
                <p>Strong command of HTML5/CSS3.</p>
              </li>
              <li>
                <CheckIcon className='service__list-icon'/>
                <p>React.js specialist.</p>
              </li> <li>
                <CheckIcon className='service__list-icon'/>
                <p>JavaScript wizard.</p>
              </li> <li>
                <CheckIcon className='service__list-icon'/>
                <p>Responsive web design expert.</p>
              </li>
            </ul>
          </article>
          {/* End of ui/ux */}

          <article className="service">
            <div className="service__head">
                <h3>Problem Solving Skills</h3>
            </div>
            <ul className="service__list">
              <li>
                <CheckIcon className='service__list-icon'/>
                <p>Innovative problem solver with attention to detail</p>
              </li>
              <li>
                <CheckIcon className='service__list-icon'/>
                <p>Complex problem solver.</p>
              </li> <li>
                <CheckIcon className='service__list-icon'/>
                <p>Logical approach to challenges.</p>
              </li> <li>
                <CheckIcon className='service__list-icon'/>
                <p>Resourceful and detail-oriented troubleshooter.</p>
              </li>
            </ul>
          </article>
          {/* end of web dev */}

          <article className="service">
            <div className="service__head">
                <h3>Backend Development</h3>
            </div>
            <ul className="service__list">
              <li>
                <CheckIcon className='service__list-icon'/>
                <p>Backend development specialist.</p>
              </li>
              <li>
                <CheckIcon className='service__list-icon'/>
                <p>API integration wizard.</p>
              </li> <li>
                <CheckIcon className='service__list-icon'/>
                <p>Efficient backend solutions creator.</p>
              </li> <li>
                <CheckIcon className='service__list-icon'/>
                <p>Secure and robust backend developer.</p>
              </li>
            </ul>
          </article>

          {/* end of content creation */}
        </div>
    </section>
  )
}

export default Services
