import React, {useState} from 'react'
import './navbar.css'
import { BrowserRouter } from 'react-router-dom'
import  { NavLink, Link } from 'react-router-dom'



// ================ Icons =============== //
import { FaCompass } from 'react-icons/fa'
import { BiTrendingUp } from 'react-icons/bi'
import { AiFillHome } from 'react-icons/ai'
import { AiFillFire } from 'react-icons/ai'
import { GiBackwardTime } from 'react-icons/gi'
import { AiOutlineUnorderedList } from 'react-icons/ai'
import { ImLoop } from 'react-icons/im'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { IoIosDesktop } from 'react-icons/io'
import { MdLocalMovies } from 'react-icons/md'
import { GiBowman } from 'react-icons/gi'
import { IoMdSettings } from 'react-icons/io'
import { GiEntryDoor } from 'react-icons/gi'
import { BsArrowBarLeft } from 'react-icons/bs'
import { FaDiscord } from 'react-icons/fa'
import { FaTelegramPlane } from 'react-icons/fa'

// ================ Icons END =============== //

const Navbar = () => {
  
  return (
    <div className="wrapper">
    <div className='navbar__section'  id='navbar__section'>
      <div className="logo"><AiFillFire color='orange' className="logo__icon"/><a href="#" className="logo">BleachAnime</a></div>
        <ul className="main__nav-links">
          <li><NavLink to='/' className={({ isActive }) => isActive ? 'active' : ''}><AiFillHome className='nav__icon'/>Home</NavLink></li>
          <li><NavLink to="/watch" className={({ isActive }) => isActive ? 'active' : ''}><BiTrendingUp className='nav__icon'/>Trending</NavLink></li>
          <li className='discover__padding'><NavLink to='/discover' className={({ isActive }) => isActive ? 'active' : ''}><FaCompass className='nav__icon'/>Discover</NavLink></li>
          <li className='recent__padding'><NavLink to='/recent' className={({ isActive }) => isActive ? 'active' : ''}><GiBackwardTime className='nav__icon'/>Recent</NavLink></li>
          <li className='animelist__padding'><NavLink to='/list' className={({ isActive }) => isActive ? 'active' : ''}><AiOutlineUnorderedList className='nav__icon'/>Anime List</NavLink></li>
          <li className='ongoing__padding'><NavLink to='/ongoing'><ImLoop className='nav__icon'/>Ongoing</NavLink></li>
          <li><NavLink to='completed' className={({ isActive }) => isActive ? 'active' : ''}><BsFillCheckCircleFill className='nav__icon'/>Completed</NavLink></li>
          <li><NavLink to='tvseries' className={({ isActive }) => isActive ? 'active' : ''}><IoIosDesktop className='nav__icon'/>TV Series</NavLink></li>
          <li><NavLink to='movies' className={({ isActive }) => isActive ? 'active' : ''}><MdLocalMovies className='nav__icon'/>Movies</NavLink></li>
          <li className="liveaction__padding"><NavLink to='/liveaction' className={({ isActive }) => isActive ? 'active' : ''}><GiBowman className='nav__icon'/>Live Action</NavLink></li>
          <li><NavLink to='/settings' className={({ isActive }) => isActive ? 'active' : ''}><IoMdSettings className='nav__icon'></IoMdSettings>Settings</NavLink></li>
          <li className='signin__padding'><NavLink to='/signin' className={({ isActive }) => isActive ? 'active' : ''}><GiEntryDoor className='nav__icon'/>Sign In</NavLink></li>
        </ul>

          {/* Socials START */}
        <div className="socials">
          <div className="discord"><FaDiscord className='discord__icon'/><a href="">We are in Discord</a></div>
          <div className="telegram"><FaTelegramPlane className='telegram__icon'/><a href="">We are in Telegram</a></div>
        </div>
        {/* Socials END */}


      </div>
      </div>
  )
}









export default Navbar