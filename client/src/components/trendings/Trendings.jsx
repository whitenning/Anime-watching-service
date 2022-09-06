import React from 'react'
import './trendings.css'
import { Link } from 'react-router-dom'
import  { trendingsInfo } from './trendings'
import { SwiperSlide, Swiper } from 'swiper/react'
import { Pagination } from 'swiper'
import "swiper/css";
import "swiper/css/pagination"


const Trendings = () => {
  return (
    <section className="trendings" id="trendings">
        <Link to="/trendings" className='trendings-tag'>Trending Anime's</Link>
        <Swiper
        breakpoints={{
          370: {
            slidesPerView: 2
          },

          768: {
            slidesPerView: 3
          },

          1024: {
            slidesPerView: 4
          },

      
        }}
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="trending-anime">
            <Link to='/watch'><img src={trendingsInfo[0].image} alt="" className='anime-img'/></Link>
            <Link to='/watch' className='anime-name'>{trendingsInfo[0].name}</Link>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div className="trending-anime">
            <Link to='/watch'><img src={trendingsInfo[1].image} alt="" className='anime-img'/></Link>
            <Link to='/watch' className='anime-name'>{trendingsInfo[1].name}</Link>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="trending-anime">
            <Link to='/watch'><img src={trendingsInfo[1].image} alt="" className='anime-img'/></Link>
            <Link to='/watch' className='anime-name'>{trendingsInfo[1].name}</Link >
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="trending-anime">
          <Link to='/watch'><img src={trendingsInfo[2].image} alt="" className='anime-img'/></Link>
            <Link to='/watch' className='anime-name'>{trendingsInfo[2].name}</Link >
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="trending-anime">
          <Link to='/watch'><img src={trendingsInfo[3].image} alt="" className='anime-img'/></Link>
            <Link to="/watch" className='anime-name'>{trendingsInfo[3].name}</Link >
          </div>
        </SwiperSlide>

      </Swiper>
        
    </section>
  )
}

export default Trendings