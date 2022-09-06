import React from 'react'
import { Link } from 'react-router-dom'
import { BsFillArrowUpRightSquareFill } from 'react-icons/bs'
import './footer.css'

const Footer = () => {
  return (
    <div className="footer container">
      <div className="footer-left">
        <img src="https://static.vecteezy.com/system/resources/previews/001/188/562/original/fire-png.png" alt="" /><p>© 2022 <Link to='/'>bleachanime.com</Link> - watch anime online for free.<br/>
        All rights reserved, be careful pirats! Send us BleachAnime.com@gmail.com</p>
      </div>
      <div className="footer-right">
      <Link to=""><span>@copyright owners</span><BsFillArrowUpRightSquareFill className='copyright__icon'/></Link>
      </div>
    </div>
  )
}

export default Footer