import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/Logo.png'

class NavBar extends Component {
  render() {
    return (
      <>
        <div className="navBar">
          <header className="title">
            <img className="logo" src={Logo} alt="travelingo logo" />
          </header>
          <div className="nav">
            <Link className="navLinks" to="/Login">
              <div>Register</div>
            </Link>
            <Link className="navLinks" to="/">
              <div>Mission</div>
            </Link>
          </div>
        </div>
      </>
    )
  }
}

export default NavBar
