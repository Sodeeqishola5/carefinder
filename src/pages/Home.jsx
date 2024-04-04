import { useNavigate } from 'react-router-dom'
import SearchForm from '../components/SearchForm'
import './Home.css'

const Home = () => {
 
  const navigate = useNavigate()
  return (
    <div className="home">
      <h2>Find the nearest hospital to you and make an appointment</h2>
      <p className="sub-heading">
        Discover Your Perfect Care: Find Your Hospital, Anytime, Anywhere!
      </p>
      <button className="get-start" onClick={() => navigate('findHospital')}>GET STARTED</button>
      <p className="learn">
        Learn more <i className="fa fa-arrow-right" aria-hidden="true" onClick={() => navigate('about')}></i>
      </p>
      <p className="find-hospital">Find a nearby hospital</p>
      <div> <SearchForm /></div>
    </div>
  )
}

export default Home
