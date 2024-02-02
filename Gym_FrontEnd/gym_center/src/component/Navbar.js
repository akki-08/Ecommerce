import React from 'react'
import { Link } from 'react-router-dom'; // If using React Router

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <h2>Fitness Club</h2>
        <ul className="nav-links">
          <li className='navbar-buttons'>
            <button className='btn btn-primary'><Link to="/">Home</Link></button>
          </li>
          <li className='navbar-buttons'>
            <button className='btn btn-primary'><Link to="/addMember">Add Member</Link></button>
          </li>
          <li className='navbar-buttons'>
            <button className='btn btn-primary'><Link to="/getMember">All Member</Link></button>
          </li>
          <li className='navbar-buttons'>
            <button className='btn btn-primary'><Link to="/contact">Contact Us</Link></button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar