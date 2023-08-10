import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './certifications.css';

import IMG1 from "../../assets/certificate_imgs/Codegoda.jpg"
import IMG2 from "../../assets/certificate_imgs/Css-Certificate.jpg"
import IMG3 from "../../assets/certificate_imgs/Html Certificate.jpg"
import IMG4 from "../../assets/certificate_imgs/Javascript-Certificate.jpg"
import IMG5 from "../../assets/certificate_imgs/Panipat-Quiz.jpg"
import IMG6 from "../../assets/certificate_imgs/Reactjs-Certificate.jpg"
import IMG7 from "../../assets/certificate_imgs/Six-sigma-white-belt-certificate.jpeg"
import IMG8 from "../../assets/certificate_imgs/Tata-Crucible Quiz.jpg"
import IMG9 from "../../assets/certificate_imgs/Web-Dev-certificate.jpg"
import IMG10 from "../../assets/certificate_imgs/project-management-essentials.jpeg"



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
    <section id='certifications' className="certfifications">

      <h5>My certifications</h5>
      <h2>Certificates</h2>
      <div className="container">
        
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide> <img src={IMG1} alt="" /> </SwiperSlide>
        <SwiperSlide> <img src={IMG2} alt="" /> </SwiperSlide>
        <SwiperSlide> <img src={IMG3} alt="" /> </SwiperSlide>
        <SwiperSlide> <img src={IMG4} alt="" /> </SwiperSlide>
        <SwiperSlide> <img src={IMG5} alt="" /> </SwiperSlide>
        <SwiperSlide> <img src={IMG6} alt="" /> </SwiperSlide>
        <SwiperSlide> <img src={IMG7} alt="" /> </SwiperSlide>
        <SwiperSlide> <img src={IMG8} alt="" /> </SwiperSlide>
        <SwiperSlide> <img src={IMG9} alt="" /> </SwiperSlide>
        <SwiperSlide> <img src={IMG10} alt="" /> </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            {/* <circle cx="24" cy="24" r="20"></circle> */}
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
      </div>
    </section>
    </>
  );
}
