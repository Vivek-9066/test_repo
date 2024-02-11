import React from 'react'
import './Header.css'

const Header = () => {
  return (
   <nav>
    <div className='logo'>Aayush's <b>Creation</b></div>
    <input type='checkbox' id='click'></input>
    <label htmlFor='click' className='menu-bar'>
        <i className='fa fa-bars'></i>
    </label>
    <ul>
        <li><a href='/'>Home</a></li>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Contact</a></li>
        <li><a href='#'>Services</a></li>
        <li><a href='#'>Gallery</a></li>
        <a href='/register' className='button'>Signup</a>
    </ul>
   </nav>
  )
}

export default Header
