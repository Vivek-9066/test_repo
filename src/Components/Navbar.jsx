import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
        <div className='logo'>Aayush's <b>Creation</b></div>
        <input type='checkbox' id='click'/>
        <label  htmlFor='click' className='menubar'>
            <i className='fa fa-bars'></i>
        </label>
        <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='#'>Contact</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Services</a></li>
            <li><a href='#'>Gallery</a></li>
            <a href='/signup'><button className='button'>Signup</button></a>
        </ul>
    </nav>
  )
}

export default Navbar;