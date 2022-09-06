import { React, useState,  useEffect } from 'react'
import ReactPlayer from 'react-player'
import './videoplayer.css'
import Player from '../player/Player'
import { BiPlay } from 'react-icons/bi'
import { videoData } from './Videodata.js'







function Videoplayer() {

  const[backendData,setBackendData] = useState([{}])

  useEffect(() => {
    fetch("http://localhost:4000/videos").then(response => response.json()).then(
    data => {
      setBackendData(data)
    }
  )
 }, [])

const[btnImg,setBtnImg] = useState(false)
  function btnImgState () {
    setBtnImg(!btnImg)
  }
  let toggleClassCheck = btnImg ? ' active': '';

 


  
    
  
    
  return (
    <>
    <h3 className="content__name">Watch anime <span className='name'>"{videoData[0].name}"</span> on <span>Bleachanime.com</span></h3>
    <div className="video__section"> 
    <div onClick={btnImgState} className={`video__cover${toggleClassCheck}`}>
    <button className='video__btn'><BiPlay className='play__btn'/></button>
    <img src={videoData[0].image} alt="" />
    </div>
    <div className="control__panels">
          <div className="control__panel">
            <select name="" id="">
              <option value="">1 season</option>
              <option value="">2 season</option>
              <option value="">3 season</option>
              <option value="">4 season</option>
            </select>
            <span></span>
          </div>
          <div className="control__panel">
            <select name="" id="">
              <option value="">1 episode</option>
              <option value="">2 episode</option>
              <option value="">3 episode</option>
              <option value="">4 episode</option>
              <option value="">5 episode</option>
              <option value="">6 episode</option>
              <option value="">7 episode</option>
              <option value="">8 episode</option>
              <option value="">9 episode</option>
              <option value="">10 episode</option>
              <option value="">11 episode</option>
              <option value="">12 episode</option>
            </select>
            <span></span>
          </div>
            <div className="next__btn">Next<span className='next__span'></span></div>
            <div className="control__panel">
              <select name="" id="">
                <option value="">Crunchyroll</option>
              </select>
              <span></span>
              </div>
        </div>
        {/* {(typeof backendData === 'undefined') ? (
          <div className="video__cover2">
          <p className='loading'>Loading...</p>
          <img src={videoData[0].image} alt="" />
          <div className="control__panels">
          <div className="control__panel">
            <select name="" id="">
              <option value="">1 season</option>
              <option value="">2 season</option>
              <option value="">3 season</option>
              <option value="">4 season</option>
            </select>
            <span></span>
          </div>
          <div className="control__panel">
            <select name="" id="">
              <option value="">1 episode</option>
              <option value="">2 episode</option>
              <option value="">3 episode</option>
              <option value="">4 episode</option>
              <option value="">5 episode</option>
              <option value="">6 episode</option>
              <option value="">7 episode</option>
              <option value="">8 episode</option>
              <option value="">9 episode</option>
              <option value="">10 episode</option>
              <option value="">11 episode</option>
              <option value="">12 episode</option>
            </select>
            <span></span>
          </div>
            <div className="next__btn">Next<span className='next__span'></span></div>
            <div className="control__panel">
              <select name="" id="">
                <option value="">Crunchyroll</option>
              </select>
              <span></span>
              </div>
        </div>
          </div> */}
        {/* ): (
          backendData.map(video => {
            key={ video.id }
                 )
    })
  )}
          return ( */}
          <div className="video">
      <div className="control__panels">
          <div className="control__panel">
            <select name="" id="">
              <option value="">1 season</option>
              <option value="">2 season</option>
              <option value="">3 season</option>
              <option value="">4 season</option>
            </select>
            <span></span>
          </div>
          <div className="control__panel">
            <select name="" id="">
              <option value="">1 episode</option>
              <option value="">2 episode</option>
              <option value="">3 episode</option>
              <option value="">4 episode</option>
              <option value="">5 episode</option>
              <option value="">6 episode</option>
              <option value="">7 episode</option>
              <option value="">8 episode</option>
              <option value="">9 episode</option>
              <option value="">10 episode</option>
              <option value="">11 episode</option>
              <option value="">12 episode</option>
            </select>
            <span></span>
          </div>
            <div className="next__btn">Next<span className='next__span'></span></div>
            <div className="control__panel">
              <select name="" id="">
                <option value="">Crunchyroll</option>
              </select>
              <span></span>
              </div>
        </div>
        <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url={""}
          controls={true} 
          width='100%'
          height ='100%'/>
      </div>
      
      
        </div>
  
        </div>
        <div className="watcher__status">
      <button className="status">I'm watching</button>
      <button className="status">Planning</button>
      <button className="status">Watched</button>
      <button className="status">Delayed</button>
      <button className="status">Thrown</button>
      </div>
      </>
 )
}
  export default Videoplayer
