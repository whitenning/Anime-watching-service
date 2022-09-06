import React from 'react'
import './moreanime.css'
import { Link } from 'react-router-dom'
import { moreanimeData } from './Moreanimedata.js'
const Moreanime = () => {
  return (
    <div className="moreanime__section">
        <h3 className="moreanime__tag">More anime</h3>
        <div className="moreanime__banners">

            <div className="moreanime__banner">
                <div className="moreanime__poster">
                    <img src={moreanimeData[0].image} alt=""/>
                    <div className="poster__label">{moreanimeData[0].label}</div>
                </div>
                <div className="poster__description"><Link to="/">{moreanimeData[0].name}</Link></div>
            </div>

            <div className="moreanime__banner">
                <div className="moreanime__poster">
                    <img src={moreanimeData[1].image} alt=""/>
                    <div className="poster__label">{moreanimeData[1].label}</div>
                </div>
                <div className="poster__description"><Link to="/">{moreanimeData[1].name}</Link></div>
            </div>

            <div className="moreanime__banner">
                <div className="moreanime__poster">
                    <img src={moreanimeData[2].image} alt=""/>
                    <div className="poster__label">{moreanimeData[2].label}</div>
                </div>
                <div className="poster__description"><Link to="/">{moreanimeData[2].name}</Link></div>
            </div>

            <div className="moreanime__banner">
                <div className="moreanime__poster">
                    <img src={moreanimeData[3].image} alt=""/>
                    <div className="poster__label">{moreanimeData[3].label}</div>
                </div>
                <div className="poster__description"><Link to="/">{moreanimeData[3].name}</Link></div>
            </div>

        </div>
    </div>
  )
}

export default Moreanime