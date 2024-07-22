import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search from '../../assets/search_icon.svg'
import bell from '../../assets/bell_icon.svg'
import profile from '../../assets/profile_img.png'
import caret from '../../assets/caret.svg'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>Tv Shows</li>
          <li>Movies</li>
          <li>News & popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search} className='icon' alt="" />
        <p>Children</p>
        <img src={bell} className='icon' alt="" />
        <div className="navbar-profile">
          <img src={profile} className='profile' alt="profile" />
          <img src={caret} alt="caret" />
          <div className="dropdown">
            <p>Sign Out Of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
