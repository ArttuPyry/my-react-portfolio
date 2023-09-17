import React from 'react'
import './header.css'
import CTA from './CTA'
import profilepic from '../../assets/profilepic.png'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className='info'>
        <h5>Hi! I am</h5>
        <h1>Arttu Viitajylhä</h1>
        <h5 className="text-light">Game Developer!</h5>
        <CTA />
        </div>

        <div className='me'>
          <img src={profilepic} alt="profilepic" />
        </div>
      </div>
    </header>
  )
}

export default Header