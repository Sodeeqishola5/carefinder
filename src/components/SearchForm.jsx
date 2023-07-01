import React, { useState } from 'react'
import { Icon } from '@iconify/react'
import './SearchForm.css'

const SearchForm = () => {
  const [location, setLocation] = useState('')
  const [hospitals, setHospitals] = useState([])

  const handleLocationChange = (event) => {
    setLocation(event.target.value)
  }

  const handleSearch = async (event) => {
    event.preventDefault()

    try {
      // Fetch hospitals based on the entered location
      const response = await fetch(`/api/hospitals?location=${location}`)
      const data = await response.json()
      setHospitals(data)
    } catch (error) {
      console.error('Error fetching hospitals:', error)
    }
  }

  return (
    <div style={{}}>
      <div id="input-wrapper">
        <form onSubmit={handleSearch}>
          <Icon
            icon="material-symbols:location-on-outline-rounded"
            width="24"
            height="24"
            style={{alignSelf: "center"}}
          />
          <input
            type="text"
            className="form-control"
            value={location}
            onChange={handleLocationChange}
            placeholder="Federal Medical Center, Ebutte Metta,Lagos State"
          />
          <button type="submit" style={{border: 'none', background: 'none'}}>
            <Icon icon="material-symbols:search" width="24" height="24" />
          </button>
        </form>
      </div>

      <ul>
        {hospitals.map((hospital) => (
          <li key={hospital.id}>
            <span>{hospital.name}</span>
            <span>{hospital.address}</span>
            {/* Display other hospital details */}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SearchForm
