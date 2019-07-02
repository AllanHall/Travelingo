import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/Logo.png'

export default function Register() {
  return (
    <>
      <div>
        <header className="title">
          <img className="logo" src={Logo} alt="travelingo logo" />
        </header>
        <div className="nav">
          <Link className="navLinks" to="/home">
            <div>Home</div>
          </Link>
          <Link className="navLinks" to="/">
            <div>Login</div>
          </Link>
        </div>
      </div>
      <div className="register">Register</div>
      <form className="form">
        <div className="register-div">
          <input className="inputField" type="text" placeholder="first name" />
          <input className="inputField" type="text" placeholder="last name" />
        </div>
        <div className="register-div">
          <input className="inputField" type="text" placeholder="location" />
          <input className="inputField" type="text" placeholder="address" />
        </div>
        <div>
          <select className="select">
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
            <option value="German">German</option>
            <option value="Chinese">Chinese</option>
            <option value="Hindi">Hindi</option>
            <option value="Arabic">Arabic</option>
            <option value="Portuguese">Portuguese</option>
            <option value="Bengali">Bengali</option>
            <option value="Russian">Russian</option>
            <option value="Japanese">Japanese</option>
            <option value="Lahnda">Lahnda</option>
            <option value="Indonesian">Indonesian</option>
            <option value="Korean">Korean</option>
            <option value="Vietnamese">Vietnamese</option>
            <option value="Turkish">Turkish</option>
          </select>
        </div>
        <div>
          <input
            className="inputFieldWeb"
            type="text"
            placeholder="website URL"
          />
        </div>
        <textarea
          className="textArea"
          type="text"
          placeholder="location description"
        />
        <div className="div">
          <button className="updateButton">Submit</button>
        </div>
      </form>
      <div className="div">
        <button className="updateButton">Update Your Information</button>
      </div>
    </>
  )
}
