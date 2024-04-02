import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Icon } from '@iconify/react'
import './SearchForm.css'

const SearchForm = () => {
  const [post, setPost] = useState({})
  const [location, setLocation] = useState([])
  const [locationClick, setLocationClick] = useState([])

  const handleSearch = useEffect(() => {
    axios.get(`https://api.reliancehmo.com/v3/providers/${locationClick}`)
      .then(res => {
        console.log(res)
        setPost(res.data)
      })
      .catch(error => {
        console.log('Error fetching hospitals:', error)
      })
  }, [locationClick])

  const handleLocationChange = (event) => {
    setLocation(event.target.value)
  }

  const handleLocationClick = () => {
    setLocationClick(location)
  }


  return (
    <div style={{}}>
      <div id="input-wrapper">
        <form onSubmit={handleSearch}>
          <div>
            <Icon
              icon="material-symbols:location-on-outline-rounded"
              width="24"
              height="24"
              style={{ alignSelf: "center" }}
            />
          </div>
          <input
            type="text"
            className="form-control"
            value={location}
            onChange={handleLocationChange}
            placeholder="Federal Medical Center, Ebutte Metta,Lagos State"
          />
          <div>
            <button type="submit" onClick={handleLocationClick} style={{ border: 'none', background: 'none' }}>
              <Icon icon="material-symbols:search" width="24" height="24" />
            </button>
          </div>
        </form>
      </div>
      <div>
        <span>{post.name}</span>
        <span>{post.address}</span>
      </div>
    </div>
  )
}

export default SearchForm
