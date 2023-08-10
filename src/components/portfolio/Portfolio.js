import React from 'react'
import "./portfolio.css"
import IMG from "../../assets/Dhoni.jpeg"
import IMG1 from "../../assets/project_imgs/Screenshot 2023-07-18 174205.png"
import IMG2 from "../../assets/project_imgs/Screenshot (174).png"
import IMG3 from "../../assets/project_imgs/Screenshot 2023-07-18 180148.png"
import IMG4 from "../../assets/project_imgs/Screenshot 2023-07-18 181053.png"
import IMG5 from "../../assets/project_imgs/Screenshot 2023-07-18 182631.png"
import IMG6 from "../../assets/project_imgs/Screenshot (175).png"




const data=[
  {
    id:1,
    image: IMG1,
    title: "Pizza Delivery System",
    github: "https://github.comhttps://github.com/Singhal97dhruv/Pizza-delivery",
    demo: 'https://pizza-delivery-vrgh.onrender.com/'

  },
  {
    id:2,
    image: IMG2,
    title: "FilmyVerse",
    github: "https://github.com/Singhal97dhruv/Filmyverse",
    demo: 'https://filmyverse-2adk-singhal97dhruv.vercel.app/'

  },
  {
    id:3,
    image: IMG3,
    title: "Ecommerce (GitHub)",
    github: "https://github.com/Singhal97dhruv/Ecommerce-Website",
    demo: 'https://github.com/Singhal97dhruv/Ecommerce-Website'

  },
  {
    id:4,
    image: IMG4,
    title: "Fitness Website",
    github: "https://github.com/Singhal97dhruv/Fitness-Website",
    demo: 'https://github.com/Singhal97dhruv/Fitness-Website'

  },
  {
    id:6,
    image: IMG6,
    title: "Blog Kabootar",
    github: "https://github.com/Singhal97dhruv/Blogs-Frontend",
    demo: 'https://blog-kabootar.vercel.app/'
  },
  {
    id:5,
    image: IMG5,
    title: "CodersHouse (Currently Working)",
    github: "https://github.com/Singhal97dhruv/CodersHouse-mern",
    demo: 'https://github.com/Singhal97dhruv/CodersHouse-mern',
  }
]

const Portfolio = () => {
  return (

    <section id="portfolio">

        <h5>Projects I done</h5>
        <h2>My Work</h2>

      <div className="container portfolio__container">
      {
        data.map(({id,image,title,github,demo})=>{
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </article>
          )
        })
      }
      </div>
    </section>

  )
}

export default Portfolio
