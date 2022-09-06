import React from 'react'
import './discover.css'
import { Link } from 'react-router-dom'
import { ImCompass } from 'react-icons/im'
import { GoTriangleDown } from 'react-icons/go'

const Discover = () => {
  return (
    <section className="discover">
        <Link to="/discover"><ImCompass className='discover__icon'/>Discover</Link>
        <div className="discover__container">
            <div className="select-genre"><select name="genre" id=""><option selected disabled value="0">Genre</option></select></div>
            <div className="select-genre"><select name="genre" id=""><option selected disabled value="1">Except Genre</option></select></div>
            <div className="select-genre"><select name="genre" id=""><option selected disabled value="2">Year</option></select></div>
            <div className="select-genre"><select name="genre" id=""><option selected disabled value="3">By Date</option></select></div>
            <div className="select-genre"><select name="genre" id=""><option selected disabled value="4">Status</option></select></div>
            <div className="select-genre"><select name="genre" id=""><option selected disabled value="5">Type</option></select></div>
        </div>
    </section>
  )
}

export default Discover