import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/Navbar'
import Home from './pages/Home'
import About from './components/About'
import FindHospital from './components/FindHospital'
import Login from './pages/Login'
import Logout from './pages/Logout'
import Register from './pages/Signup'
import Footer from './components/Footer'
import UserRoute from './components/UserRoute'
import NoMatch from './components/NoMatch'
import Profile from './components/Profile'
import { useDispatch } from 'react-redux'
import { auth } from './firebase'
import { setUser } from './redux/actions'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(setUser(authUser))
      } else {
        dispatch(setUser(null))
      }
    })
  }, [dispatch])
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <UserRoute>
              <Home />
            </UserRoute>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/findHospital" element={<FindHospital />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<NoMatch/>} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
