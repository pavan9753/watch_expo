import React from 'react'
import image from './download.png'
import './Topbar.css'
const Topbar = () => {
  return (
    <div>
        <header className='header'>
          <nav className='top'>
            <img src={image} alt='lowe logo'/>
          </nav>
        </header>
    </div>
  )
}

export default Topbar