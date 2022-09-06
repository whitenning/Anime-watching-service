import React, { useState } from 'react'
import './carousel.css'
import { carouselImages } from './Carouselimg'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { BsDot } from 'react-icons/bs'
import { AiFillStar } from 'react-icons/ai'


const ImageSlider = (({slides}) => {
  const [current, setCurrent]  = useState(0)
  const length = slides.length

  const nextSlide = () => {
    setCurrent(current === length -1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length -1 : current -1)
  }

  if(!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="carousel__slider">
      <AiOutlineArrowLeft className="left__arrow" onClick={prevSlide} />
      <AiOutlineArrowRight className="right__arrow" onClick={nextSlide}/>
      { carouselImages.map((slide, index) => {
        return(
          <div className={index === current ? 'slide active' : 'slide'} key={index}>
            {index === current && (
              <div className="header__content">
                <img src={slide.image} alt="carouimage" className='image'/>
              <div className="header__text">
              <p>{ slide.season } <BsDot /><span>{ slide.year }</span></p>
              <h1 className='carousel__h1'>{ slide.name }</h1>
              <div className='rating__stars'>
                <AiFillStar className='rating__star checked' />
                <AiFillStar className='rating__star checked' />
                <AiFillStar className='rating__star checked' />
                <AiFillStar className='rating__star checked' />
                <AiFillStar className='rating__star' />
              </div>
              <h4 className="description">{ slide.description }</h4>
              <button className="slider__btn">Watch</button>
              </div>
              </div>
            )}
            </div>
        )
      })}
    </div>
  )
})

export default ImageSlider