import NavBar from '../components/NavBar'
import FilterMenu from '../components/FilterMenu'
import React, { useState, useEffect } from 'react'
import ReactMapGL, { Marker, Popup, FlyToInterpolator } from 'react-map-gl'
import pin from '../images/pin.png'
import Axios from 'axios'
import 'mapbox-gl/dist/mapbox-gl.css'

const TOKEN =
  'pk.eyJ1IjoiYWxsYW1hbGxhbiIsImEiOiJjang2YTJ5ZDkwYWl6NDNtaHF1bmpvbmVyIn0.5LxH6in5O4Et8agx-t57Rw'

export default function Home() {
  const [initialLat, setInitialLat] = useState(27.83)
  const [initialLng, setInitialLng] = useState(-82.57)
  const [selectedSite, setSelectedSite] = useState(null)
  const [sites, setSites] = useState([])
  const [filteredSites, setFilteredSites] = useState([])
  const [viewport, setViewport] = useState({
    latitude: initialLat,
    longitude: initialLng,
    zoom: 9.2
  })

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        setInitialLat(position.coords.latitude)
        setInitialLng(position.coords.longitude)
      })
    } else {
      console.log('geolocation not available')
    }
    Axios.get('/api/sites').then(resp => {
      console.log({ resp })
      setSites(resp.data)
      setFilteredSites(resp.data)
    })
  }, '')

  return (
    <>
      <NavBar />
      <div className="menuWrapper">
        <FilterMenu updateSites={setFilteredSites} sites={sites} />
      </div>
      <div className="map">
        <ReactMapGL
          {...viewport}
          height="100%"
          width="100%"
          mapboxApiAccessToken={TOKEN}
          mapStyle="mapbox://styles/allamallan/cjx6aopuo3nzi1cqoy74266u6"
          onViewportChange={viewport => {
            setViewport(viewport)
          }}
        >
          {filteredSites.map(site => (
            <Marker
              key={site.id}
              latitude={site.latitude}
              longitude={site.longitude}
            >
              <button
                className="markerBtn"
                onClick={e => {
                  e.preventDefault()
                  setSelectedSite(site)
                  setViewport({
                    latitude: site.latitude,
                    longitude: site.longitude,
                    zoom: 14,
                    transitionDuration: 1300,
                    transitionInterpolator: new FlyToInterpolator()
                  })
                }}
              >
                <img src={pin} alt="map marker" />
              </button>
            </Marker>
          ))}
          {selectedSite ? (
            <Popup
              className="popUp"
              latitude={selectedSite.latitude}
              longitude={selectedSite.longitude}
              onClose={() => {
                setSelectedSite(null)
              }}
            >
              <div className="pop">
                <a
                  href={`/home#${selectedSite.locationName}`}
                  className="firstLink"
                >
                  <h4 className="popName">{selectedSite.locationName}</h4>
                </a>
                <h5 className="popLan">{selectedSite.language}</h5>
              </div>
            </Popup>
          ) : null}
        </ReactMapGL>
      </div>
      <ul className="list">
        {filteredSites.map(site => {
          return (
            <li>
              <a className="secondLink" id={site.locationName} />
              <h2 className="listHeader">{site.locationName}</h2>
              <hr className="listBreak" />
              <h3>
                {site.firstName} {site.lastName}
              </h3>
              <h4>{site.language}</h4>
              <h4>
                {site.address}, {site.city} {site.state}
              </h4>
              <p className="listDescription">{site.description}</p>
              <a
                href={site.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h5 className="urls">{site.websiteUrl}</h5>
              </a>
            </li>
          )
        })}
      </ul>
    </>
  )
}
