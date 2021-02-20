import React from 'react'
import '../assets/header.css'
import Logo from '../img/logo_svg'

export default ({black}) => {
  return (
    <header className={black ? 'black' : ''}>
      <div >
        <a href="#">
          <Logo.logoNetFlix />
        </a>
      </div>
      <div className="img-user">
        <a href="#">
          <Logo.logoUser />
        </a>
      </div>
    </header>
  )
};