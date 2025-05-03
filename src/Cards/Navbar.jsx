import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
      <nav>
        <div>
          <Link to="/Home">Home</Link>
          <Link to="/Products">Products</Link>
          <Link to="/Cart">Cart</Link>
        </div>
      </nav>
    </>
  )
}

export default Navbar
