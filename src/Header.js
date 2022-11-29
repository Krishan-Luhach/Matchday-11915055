import React from 'react'
import "./Header.css"
function Header() {
  return (
    <div className='header'>
    <h1>International Matches</h1>
     <div className='search'>
     <i class="fa-solid fa-magnifying-glass"></i>
     <input  type="text" placeholder="Search for Matches"/>
     </div>
    </div>
  )
}

export default Header