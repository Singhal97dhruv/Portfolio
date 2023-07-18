import React from 'react'
import "./header.css"
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import ME from "../../assets/1Z7A49978-removebg.png"

const Header = () => {
  return (
    <>
      <header>
        <div className="container header__container">
          <h5>Hey! I'm</h5>
          <h1>Dhruv Singhal</h1>
          <h5 className="text-light">FullStack-Developer</h5>
          <CTA />
          <HeaderSocials />
          <div className="me">
            <img src={ME} alt="me" />
          </div>

          <a href="#contact" className='scroll__down'>Scroll Down</a>

        </div>
      </header><div>
        {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus sapiente, dolore consequatur sit sunt nesciunt veritatis assumenda aut quidem corrupti enim corporis quasi quam pariatur facere vitae expedita cupiditate quia earum animi, blanditiis sequi omnis! */}
        {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia necessitatibus quam animi est vel modi excepturi adipisci tenetur nam molestiae, temporibus libero! Dolorum voluptatem dolore facere odio dicta, ab praesentium recusandae eum corporis atque amet sit ipsum. In amet laudantium molestias nisi? Deserunt laboriosam saepe amet quis praesentium, ullam aut autem accusantium dolore eligendi qui minus itaque iusto ex ipsam rerum molestiae molestias dolor quos. Ipsam quia magnam repellat dolorum suscipit saepe ab amet quae minima molestias! At reprehenderit quasi aliquam nisi. Harum exercitationem itaque sunt? Optio, cupiditate, doloremque hic enim aliquam quis perspiciatis dolore ex numquam maiores unde ut incidunt aspernatur impedit explicabo, distinctio nesciunt odio magni quam? Quia magnam natus error numquam, placeat officia quis maxime similique, id cupiditate sed quo asperiores eos itaque aliquid voluptatum iusto molestias, ipsam modi iste quasi. Quia neque a nam accusamus. Aliquam ipsam deleniti dolor eaque dolore tempora quibusdam aliquid iusto porro sint voluptatibus commodi minima ex maiores illum sapiente eius, debitis voluptates magni dignissimos cum velit ratione iste numquam! Quaerat eligendi voluptas voluptatem sed reiciendis quam suscipit excepturi eveniet sunt dolore doloremque consequuntur, dolor necessitatibus pariatur at! Similique atque id fugiat eligendi voluptatibus animi, autem, facere dignissimos tempore dolores, aliquid quidem? */}
      </div>
    </>
  )
}

export default Header
