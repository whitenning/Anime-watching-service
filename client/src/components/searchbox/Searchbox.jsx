import React from 'react'
import './searchbox.css'
import { FiSearch } from 'react-icons/fi'


const Searchbox = () => {
  return (
    
        <div className="search">
      <FiSearch className="search__icon"/><input type="text" placeholder="Search.."/>
      </div>
      
  )
}

export default Searchbox