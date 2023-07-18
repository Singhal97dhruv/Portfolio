import React from 'react'
import "./contact.css"
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import './contact.css'
import { useRef } from "react";
import emailjs from "emailjs-com"
const Contact = () => {

  const form=useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vm6r55e', 'template_m7q0wj8', form.current, 'SeNutNPULP9JYCFSw')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };


  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact ME</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <EmailIcon className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>dhruvsinghal9876@gmail.com</h5>
            <a href="mailto:dhruvsinghal9876@gmail.com" target="_blank">Send a Message</a>
          </article>
          <article className="contact__option">
            <WhatsAppIcon className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+91 7291023130</h5>
            <a href="https://web.whatsapp.com/send?phone=+917291023130" target="_blank">Send a Message</a>
          </article>
          <article className="contact__option">
            <InstagramIcon className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>dhruv.singhal.saab</h5>
            <a href="https://www.instagram.com/dhruv.singhal.saab/" target='_blank'>Send a Message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary' >Send Message</button>
        </form>

      </div>
    </section>
  )
}

export default Contact
