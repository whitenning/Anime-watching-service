import React, { useState } from 'react'
import './home.css'
import { BsArrowBarLeft } from 'react-icons/bs'
import Footer from '../../footer/Footer'
import Nav from '../../navbar/Navbar'
import Header from '../../header/Header'
import ThirdSection from '../../thirdsection/ThirdSection'
import Comments from '../../comments/Comments'

const Home = () => {
  const[btnState,setBtnState]=useState(false)
  const[hambtnState,setHamBtnState]=useState(false)
  
  function handleClick2(){
    setHamBtnState(hambtnState => !hambtnState)
  }
  function handleClick(){
    setBtnState(btnState => !btnState)
  }

  let toggleClassCheck = btnState ? ' actived': '';
  let toggleClassCheck2 = hambtnState ? ' activated': '';
  return (
    <>
    
    <div className="container">
      <div onClick={handleClick2} className={`hamburger__menu${toggleClassCheck2}`}><div className='hamburger__btnmenu'></div></div>
    <button onClick={handleClick} className={`btn${toggleClassCheck}`}><BsArrowBarLeft className={`btn__icon${toggleClassCheck}`} /></button>
    <div className={`nav__responsive${toggleClassCheck2}`}><Nav /></div>
    <div className={`main${toggleClassCheck}`}>
      <div className={`nav${toggleClassCheck}`}><Nav className="navbar"/><Comments /></div>
        <div className="main__container">
        <Header />
        <ThirdSection />
        </div>
        </div>
        </div>
        <Footer />
        </>
  )
}



export default Home