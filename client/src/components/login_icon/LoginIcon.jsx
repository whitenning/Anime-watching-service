import React from 'react'
import "./loginicon.css"
import { AiOutlineUser } from 'react-icons/ai'
const LoginIcon = () => {
  return (
    <a href='/login' className="signin"><AiOutlineUser className='signin__icon'/></a>
  )
}

export default LoginIcon

