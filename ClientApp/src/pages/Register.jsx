import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/Logo.png'
import axios from 'axios'

const TOKEN =
  'pk.eyJ1IjoiYWxsYW1hbGxhbiIsImEiOiJjang2YTJ5ZDkwYWl6NDNtaHF1bmpvbmVyIn0.5LxH6in5O4Et8agx-t57Rw'

class Register extends Component {
  state = {
    site: {
      latitude: '',
      longitude: '',
      display: '',
      overlayDisplay: 'none'
    }
  }

  componentDidMount() {
    this.setState({
      overlayDisplay: 'none'
    })
  }

  updateValue = event => {
    const state = this.state
    state.site[event.target.name] = event.target.value
    this.setState(state)
  }

  submitNewSite = event => {
    event.preventDefault()
    const add = encodeURIComponent(this.state.site.Address)
    const cit = encodeURIComponent(this.state.site.City)
    const st = encodeURIComponent(this.state.site.State)
    axios
      .get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${add}%20${cit}%20${st}.json?country=US&access_token=${TOKEN}`
      )
      .then(resp => {
        console.log(resp.data.features[0].center[1])
        console.log(resp.data.features[0].center[0])
        this.setState(
          {
            site: {
              ...this.state.site,
              latitude: resp.data.features[0].center[1],
              longitude: resp.data.features[0].center[0]
            }
          },
          () => {
            axios.post('/api/sites', this.state.site)
          }
        )
      })
    event.target.reset()
    this.setState({
      display: 'Your location was successfully added!',
      overlayDisplay: 'block'
    })
  }

  closeOverlay = () => {
    this.setState({
      overlayDisplay: 'none'
    })
  }
  render() {
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
              <div>Splash Page</div>
            </Link>
          </div>
        </div>
        <div className="register">Register</div>
        <form className="form" name="form" onSubmit={this.submitNewSite}>
          <div className="register-div">
            <input
              className="inputField"
              type="text"
              placeholder="first name"
              name="FirstName"
              onChange={this.updateValue}
            />
            <input
              className="inputField"
              type="text"
              placeholder="last name"
              name="LastName"
              onChange={this.updateValue}
            />
          </div>
          <div className="register-div">
            <input
              className="inputField"
              type="text"
              placeholder="location name"
              name="LocationName"
              onChange={this.updateValue}
            />
            <input
              className="inputField"
              type="text"
              placeholder="address"
              name="Address"
              onChange={this.updateValue}
            />
          </div>
          <div>
            <input
              className="inputField fix"
              type="text"
              placeholder="city"
              name="City"
              onChange={this.updateValue}
            />
          </div>
          <div>
            <select
              name="Language"
              className="select"
              onChange={this.updateValue}
            >
              <option value="" selected="selected">
                Select a Language
              </option>
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
            <select name="State" onChange={this.updateValue} className="select">
              <option value="" selected="selected">
                Select a State
              </option>
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="DC">District Of Columbia</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </select>
          </div>
          <div>
            <input
              className="inputFieldWeb"
              type="text"
              placeholder="website URL"
              name="WebsiteUrl"
              onChange={this.updateValue}
            />
          </div>
          <textarea
            className="textArea"
            type="text"
            placeholder="location description"
            name="Description"
            onChange={this.updateValue}
          />
          <div className="div">
            <button className="updateButton">Submit</button>
          </div>
        </form>
        <div
          className="overlay"
          style={{
            display: `${this.state.overlayDisplay}`
          }}
        >
          <div className="overlayDisplay">
            <div className="returnDisplay">{this.state.display}</div>
            <button
              className="close updateButton"
              onClick={() => this.closeOverlay()}
            >
              New Game?
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Register
