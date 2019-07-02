import NavBar from '../components/NavBar'
import React, { useState } from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import * as mockData from '../data/mockData.json'
import pin from '../images/pin.png'

const TOKEN =
  'pk.eyJ1IjoiYWxsYW1hbGxhbiIsImEiOiJjang2YTJ5ZDkwYWl6NDNtaHF1bmpvbmVyIn0.5LxH6in5O4Et8agx-t57Rw'

export default function Home() {
  const [selectedSite, setSelectedSite] = useState(null)
  const [viewport, setViewport] = useState({
    latitude: 27.76,
    longitude: -82.66,
    zoom: 10
  })
  // const search = e => {
  //   e.preventDefault()
  //   axios.get('/api/sites?searchTerm=' + searchTerm).then(resp => {
  //     setQuestion(resp.data)
  //   })
  // }
  return (
    <>
      <NavBar />
      {/* <form onSubmit={search}>
        <input
          type="search"
          placeholder="Search by a language"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <button>Search</button>
      </form> */}
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
          {mockData.features.map(site => (
            <Marker
              key={site.properties.Location_Id}
              latitude={site.geometry.coordinates[0]}
              longitude={site.geometry.coordinates[1]}
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
              latitude={selectedSite.geometry.coordinates[0]}
              longitude={selectedSite.geometry.coordinates[1]}
              onClose={() => {
                setSelectedSite(null)
              }}
            >
              <div>
                <a href={`#${selectedSite.properties.Name}`}>
                  <h3>{selectedSite.properties.Name}</h3>
                </a>
                <p>{selectedSite.properties.Description}</p>
              </div>
            </Popup>
          ) : null}
        </ReactMapGL>
      </div>
      <ul className="list">
        {mockData.features.map(site => {
          return (
            <li>
              <a className="secondLink" id={site.properties.Name}>
                <h2>{site.properties.Name}</h2>
              </a>
              <h2>
                {site.properties.FirstName} {site.properties.LastName}
              </h2>
              <p>{site.properties.Language}</p>
              <p>{site.properties.Address}</p>
              <p>{site.properties.Description}</p>
              <a
                href={site.properties.WebsiteURL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>{site.properties.WebsiteURL}</p>
              </a>
            </li>
          )
        })}
      </ul>
    </>
  )
}
