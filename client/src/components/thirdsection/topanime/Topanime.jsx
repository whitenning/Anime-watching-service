import React from 'react'
import './topanime.css'
import { Link } from 'react-router-dom'
import { topanime } from './topanimedata'
import { AiFillStar } from 'react-icons/ai'


const Topanime = () => {
  return (
    <div className='popularthisweek'>
        <h1 className='topanime__h1'>Top anime's</h1>
        <div className="popularthisweek__banners">
        <div className="popularthisweek__banner">
        <Link to='/'><img src={ topanime[0].image } alt="" /></Link>
            <div className="banner__text">
            <Link to='/' className="banner__name">{ topanime[0].name }</Link>
                <p className="genres">{ topanime[0].genres }</p>
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
        <Link to='/'><img src={ topanime[1].image } alt="" /></Link>
            <div className="banner__text">
            <Link to='/' className="banner__name">{ topanime[1].name }</Link>
                <p className="genres">{ topanime[1].genres }</p>
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
        <Link to='/'><img src={ topanime[2].image } alt="" /></Link>
            <div className="banner__text">
            <Link to='/' className="banner__name">{topanime[2].name }</Link>
                <p className="genres">{ topanime[2].genres }</p>
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
        <Link to='/'><img src={ topanime[3].image } alt="" /></Link>
            <div className="banner__text">
            <Link to='/' className="banner__name">{ topanime[3].name }</Link>
                <p className="genres">{ topanime[3].genres }</p>
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
            <Link to='/'><img src={ topanime[4].image } alt="" /></Link>
            <div className="banner__text">
            <Link to='/' className="banner__name">{ topanime[4].name }</Link>
                <p className="genres">{ topanime[4].genres }</p>
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

export default Topanime