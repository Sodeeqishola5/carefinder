import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Icon } from '@iconify/react'
// import { registerInitiate } from '../redux/actions'
import './Profile.css'

const Profile = () => {
  const [state, setState] = useState({
    name: '',
    email: '',
    address: '',
  })
  const { currentUser } = useSelector((state) => state.user)

  const navigate = useNavigate()
  useEffect(() => {
    if (currentUser) {
      navigate('/profile')
    }
  }, [currentUser, navigate])
  //   const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    // dispatch(registerInitiate(email, address, displayName))
    setState({ email: '', name: '', address: '' })
  }
  const handleChange = (e) => {
    let { name, value } = e.target
    setState({ ...state, [name]: value })
  }

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
    <div id="profiles-form">
      <div style={{display: 'flex'}}>
        <div style={{}}>
          <div className="search">
            <form onSubmit={handleSearch}>
              <input
                type="text"
                className="form-control"
                value={location}
                onChange={handleLocationChange}
                placeholder="Search hospital"
              />
              <button
                type="submit"
                style={{ border: 'none', background: 'none' }}
              >
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
        <div className="profile-picture">
          <form>
            <input
              type="file"
              className="form-control"
              onChange={handleLocationChange}
              placeholder="Add Picture"
            />
          </form>
        </div>
      </div>
      <div className="profile-form">
        <form onSubmit={handleSubmit} className="form-signup">
          <h1
            className="h3 mb-3 font-weight-normal"
            style={{ textAlign: 'center' }}
          >
            PROFILE DETAILS
          </h1>
          <label>Name</label>
          <input
            type="text"
            id="name"
            className="form-control"
            placeholder="Enter Name"
            name="name"
            onChange={handleChange}
          />
          <label>Email Address</label>
          <input
            type="email"
            id="user-email"
            className="form-control"
            placeholder=" Enter Email Address"
            name="email"
            onChange={handleChange}
          />
          <label>Address</label>
          <input
            type="text"
            id="address"
            className="form-control"
            placeholder="Enter Address"
            name="password"
            onChange={handleChange}
          />
          <div className="form-btn">
            <button className=" btn btn-primary btn-block" type="submit">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Profile
