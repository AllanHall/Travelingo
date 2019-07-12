import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Logo from '../images/Logo.png'

export default function Login() {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [fullName, setFullName] = useState('')

  const Login = e => {
    e.preventDefault()
    axios
      .post('/auth/login', {
        password,
        email: userName
      })
      .then(resp => {
        localStorage.setItem('token', resp.data.token)
        localStorage.setItem('expires_at', resp.data.expiresAt)
        localStorage.setItem('current_user', JSON.stringify(resp.data.user))
        window.location.href = '/register'
      })
  }

  const submitNewUser = e => {
    e.preventDefault()
    axios
      .post('/auth/register', {
        password,
        email: userName,
        fullName
      })
      .then(resp => {
        localStorage.setItem('token', resp.data.token)
        localStorage.setItem('expires_at', resp.data.expiresAt)
        localStorage.setItem('current_user', JSON.stringify(resp.data.user))
        window.location.href = '/register'
      })
  }

  return (
    <div>
      <div>
        <header className="title">
          <img className="logo" src={Logo} alt="travelingo logo" />
        </header>
        <div className="nav">
          <Link className="navLinks" to="/home">
            <div>Home</div>
          </Link>
          <Link className="navLinks" to="/">
            <div>Mission</div>
          </Link>
        </div>
      </div>
      <div className="loginContainer">
        <div className="innerContainer1">
          <h1 className="loginTitle">Login</h1>
          <form onSubmit={Login}>
            <div className="login-div">
              <label for="Input Email">Email Address</label>
              <input
                type="email"
                name="email"
                className="login-input"
                aria-describedby="email"
                onChange={e => setUserName(e.target.value)}
                placeholder="Enter Email"
              />
            </div>
            <div className="login-div">
              <label for="Input Password">Password</label>
              <input
                type="password"
                name="password"
                onChange={e => setPassword(e.target.value)}
                className="login-input"
                placeholder="Password"
              />
            </div>
            <button className="updateButton">Login</button>
          </form>
        </div>
        <hr className="hr" />
        <div className="innerContainer2">
          <h2 className="signupTitle">Not a member? Sign up here!</h2>
          <form onSubmit={submitNewUser}>
            <div className="signup-div">
              <label for="Full Name">Full Name</label>
              <input
                type="text"
                name="name"
                className="signup-input"
                aria-describedby="full name"
                onChange={e => setFullName(e.target.value)}
                placeholder="Enter Your Name"
              />
            </div>
            <div className="signup-div">
              <label for="Input Email">Email Address</label>
              <input
                type="email"
                name="email"
                className="signup-input"
                aria-describedby="email"
                onChange={e => setUserName(e.target.value)}
                placeholder="Enter Email"
              />
            </div>
            <div className="signup-div">
              <label for="Input Password">Password</label>
              <input
                type="password"
                name="password"
                onChange={e => setPassword(e.target.value)}
                className="signup-input"
                placeholder="Password"
              />
            </div>
            <button className="updateButton">Signup</button>
          </form>
        </div>
      </div>
    </div>
  )
}
