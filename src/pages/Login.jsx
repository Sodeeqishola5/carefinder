import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import Rectangle113 from '../assets/Rectangle 113.png'
import './Login.css'
import {
  fbSignInInitiate,
  googleSignInInitiate,
  loginInitiate,
} from '../redux/actions'

const Login = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
  })
  const { email, password } = state
  const { currentUser } = useSelector((state) => state.user)

  const navigate = useNavigate()
  useEffect(() => {
    if (currentUser) {
      navigate('/')
    }
  }, [currentUser, navigate])
  const dispatch = useDispatch()

  const handleGoogleSignin = () => {
    dispatch(googleSignInInitiate())
  }
  const handleFBSignin = () => {
    dispatch(fbSignInInitiate())
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email || !password) {
      return
    }
    dispatch(loginInitiate(email, password))
    setState({ email: '', password: '' })
  }
  const handleChange = (e) => {
    let { name, value } = e.target
    setState({ ...state, [name]: value })
  }
  return (
    <div style={{ display: 'flex' }}>
      <div id="logreg-forms">
        <div className="logreg-forms">
          <form onSubmit={handleSubmit} className="form-signin">
            <h1 className="h3 mb-3 font-weight-normal">Welcome Back</h1>
            <h3 className="h3 mb-3 font-weight-normal">
              Login using correct details!
            </h3>
            <label>Email Address</label>
            <input
              type="email"
              id="inputEmail"
              className="form-control"
              placeholder="Enter Email Address"
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
            <button
              className=" btn btn-primary btn-block btn-center"
              type="submit"
            >
              <i className="fas fa-sign-in-alt"></i> Login
            </button>
            <p style={{ textAlign: 'center' }}>OR</p>
            <hr />
            <div className="social-login">
              <button
                className="btn google-btn social-btn"
                type="button"
                onClick={handleGoogleSignin}
              >
                <span>
                  <i className="fab fa-google-plus-g"></i> Login with Google+
                </span>
              </button>
              <button
                className="btn facebook-btn social-btn"
                type="button"
                onClick={handleFBSignin}
              >
                <span>
                  <i className="fab fa-facebook-f"></i> Login with Facebook
                </span>
              </button>
            </div>

            <p>Don't have an account</p>
            <Link to="/register">
              <button
                className=" btn btn-primary btn-block"
                type="button"
                id="btn-signup"
              >
                <i className="fas fa-user-plus"></i> Sign up New Account
              </button>
            </Link>
          </form>
        </div>
        <div className="ellipse20">
          <div className="ellipse21"></div>
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

export default Login
