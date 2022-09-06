import React from 'react'
import Searchbox from '../searchbox/Searchbox'
import Popularthisweek from './popularthisweek/Popularthisweek'
import { AiOutlineUser } from 'react-icons/ai'
import Topanime from './topanime/Topanime'
import './thirdsection.css'

// =========== Icons =========== // 


const ThirdSection = () => {
  return (
    <div className="third__section">

      {/* Searchbox */}
      <div className="searchbox">
      <Searchbox className="search"/>
      <a href='/login' className="signin"><AiOutlineUser className='signin__icon'/></a>
      </div>
      {/* Searchbox END*/}

      {/* Popular this week*/}
      <Popularthisweek />
      {/* Popular this week END*/}
       {/* Top Anime Section*/}
       <Topanime />
       {/* Top Anime Section END*/}
    </div>
  )
}

export default ThirdSection