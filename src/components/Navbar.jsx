import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? '600' : 'normal',
    }
  }
  return (
    <nav>
      <div style={{
 e           padding: '36px 0 11px 119px',
            color: '#08299B',
            fontWeight: '600',
            fontSize: '35px',
          }}>
          CareFinder
      </div>
      <div>
        <NavLink style={navLinkStyles} to="/">
          Home
        </NavLink>
        <NavLink style={navLinkStyles} to="/about">
          About
        </NavLink>
        <NavLink style={navLinkStyles} to="/findHospital">
          Find Hospital
        </NavLink>
        <NavLink style={navLinkStyles} to="/profile">
          Profile
        </NavLink>
        <NavLink
          style={{
            fontSize: '30px',
            color: '#fff',
            background: '#08299B',
            borderRadius: '12px',
            padding: '2px 10px',
          }}
          to="/login"
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
        >
          Signup
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
