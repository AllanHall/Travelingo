import NavBar from '../components/NavBar'
import FilterMenu from '../components/FilterMenu'
import React, { useState, useEffect } from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import pin from '../images/pin.png'
import Axios from 'axios'

const TOKEN =
  'pk.eyJ1IjoiYWxsYW1hbGxhbiIsImEiOiJjang2YTJ5ZDkwYWl6NDNtaHF1bmpvbmVyIn0.5LxH6in5O4Et8agx-t57Rw'

export default function Home() {
  const [selectedSite, setSelectedSite] = useState(null)
  const [sites, setSites] = useState([])
  const [viewport, setViewport] = useState({
    latitude: 27.76,
    longitude: -82.67,
    zoom: 10
  })

  useEffect(() => {
    Axios.get('/api/sites').then(resp => {
      console.log({ resp })
      setSites(resp.data)
    })
  }, '')

  return (
    <>
      <NavBar />
      <div className="menuWrapper">
        <FilterMenu />
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
          {sites.map(site => (
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
                }}
              >
                <img src={pin} alt="map marker" />
              </button>
            </Marker>
          ))}
          {selectedSite ? (
            <Popup
              latitude={selectedSite.latitude}
              longitude={selectedSite.longitude}
              onClose={() => {
                setSelectedSite(null)
              }}
            >
              <div>
                <a
                  href={`/home#${selectedSite.locationName}`}
                  className="secondLink"
                >
                  <h4>{selectedSite.locationName}</h4>
                </a>
                <p>
                  {selectedSite.firstName} {selectedSite.lastName}
                </p>
              </div>
            </Popup>
          ) : null}
        </ReactMapGL>
      </div>
      <ul className="list">
        {sites.map(site => {
          return (
            <li>
              <a className="secondLink" id={site.locationName}>
                <h2>{site.locationName}</h2>
              </a>
              <h3>
                {site.firstName} {site.lastName}
              </h3>
              <p>{site.language}</p>
              <p>{site.address}</p>
              <p>{site.description}</p>
              <a
                href={site.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>{site.websiteUrl}</p>
              </a>
            </li>
          )
        })}
      </ul>
    </>
  )
}
