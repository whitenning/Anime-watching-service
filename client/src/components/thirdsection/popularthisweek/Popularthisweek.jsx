import React from 'react'
import './popularthisweek.css'
import { Link } from 'react-router-dom'
import { AiFillStar } from 'react-icons/ai'
import  { popularThisWeek } from './database'

const Popularthisweek = () => {
  return (
    <div className='popularthisweek'>
        <h1 className='popularthisweek__h1'>Popular This Week</h1>
        <div className="popularthisweek__banners">
        <div className="popularthisweek__banner">
        <Link to='/'><img src={ popularThisWeek[0].image } alt="" /></Link>
            <div className="banner__text">
            <Link to='/' className="banner__name">{ popularThisWeek[0].name }</Link>
                <p className="genres">{ popularThisWeek[0].genres }</p>
                <div className='rating__stars'>
                <AiFillStar className='rating__star checked' />
                <AiFillStar className='rating__star checked' />
                <AiFillStar className='rating__star checked' />
                <AiFillStar className='rating__star checked' />
                <AiFillStar className='rating__star' />
              </div>
            </div>
        </div>

        <div className="popularthisweek__banner">
        <Link to='/'><img src={ popularThisWeek[1].image } alt="" /></Link>
            <div className="banner__text">
            <Link to='/' className="banner__name">{ popularThisWeek[1].name }</Link>
                <p className="genres">{ popularThisWeek[1].genres }</p>
                <div className='rating__stars'>
                <AiFillStar className='rating__star checked' />
                <AiFillStar className='rating__star checked' />
                <AiFillStar className='rating__star checked' />
                <AiFillStar className='rating__star checked' />
                <AiFillStar className='rating__star' />
              </div>
            </div>
        </div>

        <div className="popularthisweek__banner">
        <Link to='/'><img src={ popularThisWeek[2].image } alt="" /></Link>
            <div className="banner__text">
            <Link to='/' className="banner__name">{ popularThisWeek[2].name }</Link>
                <p className="genres">{ popularThisWeek[2].genres }</p>
                <div className='rating__stars'>
                <AiFillStar className='rating__star checked' />
                <AiFillStar className='rating__star checked' />
                <AiFillStar className='rating__star checked' />
                <AiFillStar className='rating__star checked' />
                <AiFillStar className='rating__star' />
              </div>
            </div>
        </div>

        <div className="popularthisweek__banner">
        <Link to='/'><img src={ popularThisWeek[3].image } alt="" /></Link>
            <div className="banner__text">
            <Link to='/' className="banner__name">{ popularThisWeek[3].name }</Link>
                <p className="genres">{ popularThisWeek[3].genres }</p>
                <div className='rating__stars'>
                <AiFillStar className='rating__star checked' />
                <AiFillStar className='rating__star checked' />
                <AiFillStar className='rating__star checked' />
                <AiFillStar className='rating__star checked' />
                <AiFillStar className='rating__star' />
              </div>
            </div>
        </div>

        <div className="popularthisweek__banner">
            <Link to='/'><img src={ popularThisWeek[4].image } alt="" /></Link>
            <div className="banner__text">
            <Link to='/' className="banner__name">{ popularThisWeek[4].name }</Link>
                <p className="genres">{ popularThisWeek[4].genres }</p>
                <div className='rating__stars'>
                <AiFillStar className='rating__star checked' />
                <AiFillStar className='rating__star checked' />
                <AiFillStar className='rating__star checked' />
                <AiFillStar className='rating__star checked' />
                <AiFillStar className='rating__star' />
              </div>
            </div>
        </div>
        </div>
        
        
        <button className="seemore__btn">See More</button>
    </div>
    
  )
}

export default Popularthisweek