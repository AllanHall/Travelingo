import { Link } from 'react-router-dom'
import React from 'react'
import Logo from '../images/Logo.png'

export default function Splash() {
  return (
    <div className="container">
      <div className="splashTitle">Welcome to...</div>
      <img className="splashLogo" src={Logo} alt="travelingo logo" />
      <p className="description">
        Travelingo is a site that allows adventurers to find people around the
        world that speak their same language. Meet a new friend, learn about the
        area, and have a conversation with a local to get an authentic
        experience of what it is like to live there. Now you can travel anywhere
        without language being a barrier!
      </p>
      <Link className="splashLink" to="/home">
        <button className="updateButton splashButton">Continue</button>
      </Link>
    </div>
  )
}
