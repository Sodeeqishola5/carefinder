import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './Navbar.css'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const { currentUser } = useSelector((state) => state.user)

  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? '600' : 'normal',
    }
  }


  return (
    <nav>
      <div className='title'>
        <div style={{
          padding: '36px 0 11px 119px',
          color: '#08299B',
          fontWeight: '600',
          fontSize: '35px',
        }}>
          CareFinder
        </div>
        <div className='menu' onClick={() => {
          setMenuOpen(!menuOpen)
        }}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className='items'>
        <ul className={menuOpen ? "open" : ""}>
          <li>
            <NavLink style={navLinkStyles} to="/" onClick={() => setMenuOpen(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink style={navLinkStyles} to="/about" onClick={() => setMenuOpen(false)}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink style={navLinkStyles} to="/findHospital" onClick={() => setMenuOpen(false)}>
              Find Hospital
            </NavLink>
          </li>
          <li>
            <NavLink style={navLinkStyles} to="/profile" onClick={() => setMenuOpen(false)}>
              Profile
            </NavLink>
          </li>
          {
            currentUser ?
              <li>
                <NavLink
                  style={{
                    fontSize: '30px',
                    color: '#fff',
                    background: '#fd1d1d',
                    borderRadius: '12px',
                    padding: '2px 10px',
                  }}
                  to="/logout"
                >
                  Logout
                </NavLink>
              </li> : <li><NavLink
                style={{
                  fontSize: '30px',
                  color: '#fff',
                  background: '#08299B',
                  borderRadius: '12px',
                  padding: '2px 10px',
                }}
                to="/login"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </NavLink>
                <NavLink
                  style={{
                    fontSize: '30px',
                    color: '#fff',
                    background: '#08299B',
                    borderRadius: '12px',
                    padding: '2px 10px',
                  }}
                  to="/register"
                  onClick={() => setMenuOpen(false)}
                >
                  Signup
                </NavLink>
              </li>
          }
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
