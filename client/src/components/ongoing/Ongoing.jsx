import React from 'react'
import { ongoingInfo } from './ongoing';
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination} from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css'
import './ongoing.css'
import { FaAngleRight } from 'react-icons/fa'
import { BsPlayFill } from 'react-icons/bs'
import { Link } from 'react-router-dom';



const Ongoing = () => {
  return (
    
    <div className="ongoing" id='ongoing'>
            <div className="ongoing__text">
            <h4>Ongoing</h4><a className="more__btn">More<FaAngleRight className="morebtn__icon"/></a>
            </div>

              {/* Ongoing Titles*/}
              <div className="ongoing__banners">
              <Swiper 
              pagination={false} modules={[Pagination]} spaceBetween={10} slidesPerView={3} breakpoints={{
                // when window width is >= 450px
                370: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 4,
                },
                
              }}
               className="mySwiper">

              <SwiperSlide><div className="ongoing__banner">
      
              <div className="ongoing__video">
                <Link to='/watch'><img className="video" src={ ongoingInfo[0].image } alt="" /><BsPlayFill className="play__btn"/><p className='duration'>{ ongoingInfo[0].duration }</p></Link>
              </div>
              <div className="ongoing__video-description">
                <Link to='/watch'>{ ongoingInfo[0].name }<span>{ ongoingInfo[0].episode }</span></Link>
              </div>
            </div></SwiperSlide>

            <SwiperSlide><div className="ongoing__banner">
              <div className="ongoing__video">
                <Link to='/watch'><img className="video" src={ ongoingInfo[1].image } alt="" /><BsPlayFill className="play__btn"/><p className='duration'>{ ongoingInfo[1].duration }</p></Link>
              </div>
              <div className="ongoing__video-description">
                <Link to="/watch">{ ongoingInfo[1].name }<span>{ ongoingInfo[1].episode }</span></Link>
              </div>
            </div></SwiperSlide>

            <SwiperSlide><div className="ongoing__banner">
              <div className="ongoing__video">
                <Link to="/watch"><img className="video" src={ ongoingInfo[2].image } alt="" /><BsPlayFill className="play__btn"/><p className='duration'>{ ongoingInfo[2].duration }</p></Link>
              </div>
              <div className="ongoing__video-description">
               <Link to="/watch">{ ongoingInfo[2].name }<span>{ ongoingInfo[2].episode }</span></Link>
              </div>
            </div></SwiperSlide>

            <SwiperSlide><div className="ongoing__banner">
              <div className="ongoing__video">
                <Link to="/watch"><img className="video" src={ ongoingInfo[3].image } alt="" /><BsPlayFill className="play__btn"/><p className='duration'>{ ongoingInfo[3].duration }</p></Link>
              </div>
              <div className="ongoing__video-description">
                <Link to='/watch'>{ ongoingInfo[3].name }<span>{ ongoingInfo[3].episode }</span></Link>
              </div>
            </div></SwiperSlide>

            <SwiperSlide><div className="ongoing__banner">
              <div className="ongoing__video">
                <Link to="/watch"><img className="video" src={ ongoingInfo[4].image } alt="" /><BsPlayFill className="play__btn"/><p className='duration'>{ ongoingInfo[4].duration }</p></Link>
              </div>
              <div className="ongoing__video-description">
                <Link to='/watch'>{ ongoingInfo[4].name }<span>{ ongoingInfo[4].episode }</span></Link>
              </div>
            </div></SwiperSlide>

            <SwiperSlide><div className="ongoing__banner">
              <div className="ongoing__video">
                <Link to="/watch"><img className="video" src={ ongoingInfo[5].image } alt="" /><BsPlayFill className="play__btn"/><p className='duration'>{ ongoingInfo[5].duration }</p></Link>
              </div>
              <div className="ongoing__video-description">
                <Link to="/watch">{ ongoingInfo[5].name }<span>{ ongoingInfo[5].episode }</span></Link>
              </div>
            </div></SwiperSlide>
      </Swiper>
              
            </div>
    </div>
  )
}

export default Ongoing