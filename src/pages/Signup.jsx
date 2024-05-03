import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import Rectangle113 from '../assets/Rectangle 113.png'
import './Signup.css'
import { registerInitiate } from '../redux/actions'

const Register = () => {
  const [state, setState] = useState({
    displayName: '',
    email: '',
    password: '',
    passwordConfirm: '',
  })

  const { currentUser } = useSelector((state) => state.user)

  const navigate = useNavigate()
  useEffect(() => {
    if (currentUser) {
      navigate('/')
    }
  }, [currentUser, navigate])
  const dispatch = useDispatch()

  const { email, password, displayName, passwordConfirm } = state

  const handleSubmit = (e) => {
    e.preventDefault()
    if (password !== passwordConfirm) {
      return
    }
    dispatch(registerInitiate(email, password, displayName))
    setState({ email: '', displayName: '', password: '', passwordConfirm: '' })
  }
  const handleChange = (e) => {
    let { name, value } = e.target
    setState({ ...state, [name]: value })
  }
  return (
    <div id='logreg-forms'>
      <div className="register-forms">
        <div className="register-form">
          <form onSubmit={handleSubmit} className="form-signup">
            <h1
              className="h3 mb-3 font-weight-normal"
              style={{ textAlign: 'center' }}
            >
              Create An Account
            </h1>
            <label>Name</label>
            <input
              type="text"
              id="displayName"
              className="form-control"
              placeholder="Enter Name"
              name="displayName"
              onChange={handleChange}
              value={displayName}
              required
            />
            <label>Email Address</label>
            <input
              type="email"
              id="user-email"
              className="form-control"
              placeholder=" Enter Email Address"
              name="email"
              onChange={handleChange}
              value={email}
              required
            />
            <label>Password</label>
            <input
              type="password"
              id="inputPassword"
              className="form-control"
              placeholder="Enter Password"
              name="password"
              onChange={handleChange}
              value={password}
              required
            />
            <label>Confirm Password</label>
            <input
              type="password"
              id="inputRePassword"
              className="form-control"
              placeholder="Repeat Password"
              name="passwordConfirm"
              onChange={handleChange}
              value={passwordConfirm}
              required
            />
            <button className=" btn btn-primary btn-block" type="submit">
              <i className="fas fa-user-plus"></i> Sign Up
            </button>
            <Link to="/login">
              <i className="fas fa-angle-left"></i> Back
            </Link>
          </form>
        </div>
      </div>
      <div id="logreg-texts">
        <div className="logreg-texts">
          <h3>CareFinder</h3>
          <h4>Join Our Community</h4>
          <p>Enjoy seamless access to medical services.</p>
          <img src={Rectangle113} alt="rectangle" />
        </div>
      </div>
    </div>
  )
}

export default Register
