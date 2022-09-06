
import React, {useState} from 'react'
import { BsArrowBarLeft } from 'react-icons/bs'
import './button.css'
const Button = () => {
    const[btnState,setBtnState]=useState(false)
  function handleClick(){
    setBtnState(btnState => !btnState)
  }
  let toggleClassCheck = btnState ? ' actived': '';
  return (
    <button onClick={handleClick} id="btn"><BsArrowBarLeft /></button>
  )
}

export default Button