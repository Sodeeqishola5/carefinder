import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
import Arrow1 from '../assets/Arrow 1.png'
import Arrow2 from '../assets/Arrow 2.png'
import Arrow3 from '../assets/Arrow 3.png'
import Image7 from '../assets/Rectangle 7.png'
import Image8 from '../assets/Rectangle 8.png'
import Ellipse9 from '../assets/Ellipse 9.png'
import Ellipse10 from '../assets/Ellipse 10.png'
import Ellipse11 from '../assets/Ellipse 11.png'
import Ellipse12 from '../assets/Ellipse 12.png'
import Ellipse13 from '../assets/Ellipse 13.png'
import Ellipse13A from '../assets/Ellipse 13A.png'
import Ellipse13B from '../assets/Ellipse 13B.png'
import Ellipse14 from '../assets/Ellipse 14.png'
import Ellipse15 from '../assets/Ellipse 15.png'
import Ellipse16 from '../assets/Ellipse 16.png'
import Ellipse17 from '../assets/Ellipse 17.png'
import './About.css'

const About = () => {
  return (
    <>
      <section id="about">
        <div className="about-img">
          <img src={Image7} alt="about" className="image7"></img>
          <img src={Image8} alt="about" className="image8"></img>
        </div>
        <div className="about-text">
          <h3>
            Welcome to <br /> <span>CareFinder</span>
          </h3>
          <p>
            Carefinder is a platform where users can search for hosiptals in
            their areas, export hospital details for your records and enhance
            your healthcare experience by connecting with others and sharing
            valuable resources.
          </p>
          <Link to="/doctors">
            <button className="btn-about">OUR SERVICES</button>
          </Link>
        </div>
      </section>
      <section id="services">
        <div className="services-text">
          <span>
            <Icon className="icon" icon="streamline-emojis:hospital" />
          </span>
          <h3>Search Doctors</h3>
          <p>Effortlessly Find the Best Hospitals Near You</p>
        </div>
        <div className="services-text">
          <span>
            <Icon className="icon" icon="fontisto:doctor" color="white" />
          </span>
          <h3>Search Hospitals</h3>
          <p>Effortlessly Find the Best Doctors Near You</p>
        </div>
        <div className="services-text">
          <span>
            <Icon className="icon" icon="mingcute:save-line" color="white" />
          </span>
          <h3>Export Hospitals</h3>
          <p>Save list of hospitals.</p>
        </div>
        <div className="services-text">
          <span>
            <Icon className="icon" icon="ph:share-bold" color="white" />
          </span>
          <h3>Share Hospitals</h3>
          <p>Share the list of hospitals with others. </p>
        </div>
      </section>
      <section id="work">
        <div className="layer1">
          <p>How It Works</p>
          <div className="layer2">
            <div className="text1">
              <img src={Ellipse9} alt="ellipse" className="ellipse" />
              <h3>Find Hospital</h3>
              <p>
                Find the best hospitals and doctors near you, our efficient
                search engine provides you with the best results.
              </p>
            </div>
            <div className="layer3">
              <div className=" arrow arrow1">
                <img src={Arrow1} alt="arr" width="200px" hidden="0px" />
              </div>
              <div className="text3">
                <img src={Ellipse10} alt="ellipse" className="ellipse" />
                <h3>Save or share hospital</h3>
                <p>
                  Carefinder allows users to save and share the list of
                  hospitals with others. Users can share the information via
                  email or by generating a shareable link
                </p>
              </div>
              <div className="arrow arrow2">
                <img src={Arrow2} alt="arr" width="200px" hidden="0px" />
              </div>
              <div className="text4">
                <img src={Ellipse11} alt="ellipse" className="ellipse" />
                <h3>Book Appointment</h3>
                <p>Book appointments easily by inputting correct details</p>
              </div>
            </div>
            <div className="arrow arrow3">
              <img src={Arrow3} alt="arr" width="200px" hidden="0px" />
            </div>
            <div className="text2">
              <img src={Ellipse12} alt="ellipse" className="ellipse" />
              <h3>Make a visit</h3>
              <p>
                Appointment confirmed, then make a visit to your selected
                hospital or doctor
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="doctors">
        <div className="doctor-info" style={{ float: 'left' }}>
          <div className="doctor-text">QUALIFIED DOCTORS</div>
          <div className="doctor-img">
            <div className="discription">
              <img src={Ellipse14} alt="ellipse" />
              <h3>Dr Cole Ben</h3>
              <h4>Pediatrician</h4>
              <p>Goodwill Hospital</p>
            </div>
            <div className="discription">
              <img src={Ellipse15} alt="ellipse" />
              <h3>Dr Cole Ben</h3>
              <h4>Pediatrician</h4>
              <p>Goodwill Hospital</p>
            </div>
            <div className="discription">
              <img src={Ellipse16} alt="ellipse" />
              <h3>Dr Cole Ben</h3>
              <h4>Pediatrician</h4>
              <p>Goodwill Hospital</p>
            </div>
            <div className="discription">
              <img src={Ellipse17} alt="ellipse" />
              <h3>Dr Cole Ben</h3>
              <h4>Pediatrician</h4>
              <p>Goodwill Hospital</p>
            </div>
          </div>
        </div>
        <div className="doctor-form" style={{ float: 'left' }}>
          <h3>Book An Appointment</h3>
          <form onSubmit="handleSubmit">
            <input
              type="text"
              id="address"
              className="form-control"
              placeholder="Address"
              name="address"
              onChange="handleChange"
            />
            <select class="form-control" id="hospital">
              <option>Choose Hospital</option>
              <option>Hospital 1</option>
              <option>Hospital 2</option>
              <option>Hospital 3</option>
              <option>Hospital 4</option>
            </select>
            <select class="form-control" id="department">
              <option>Choose Department</option>
              <option>Department 1</option>
              <option>Department 2</option>
              <option>Department 3</option>
              <option>Department 4</option>
            </select>
            <input
              type="text"
              id="name"
              className="form-control"
              placeholder="Enter Name"
              name="name"
              onChange="handleChange"
            />
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Enter Email"
              name="email"
              onChange="handleChange"
            />
            <input
              type="date"
              id="date"
              className="form-control"
              placeholder="Select Date"
              name="date"
              onChange="handleChange"
            />
            <input
              type="time"
              id="time"
              className="form-control"
              placeholder="Select Time"
              name="time"
              onChange="handleChange"
            />
            <button className=" btn btn-primary btn-block" type="submit">
              Book Appointment Now
            </button>
          </form>
        </div>
        <div style={{ clear: 'both' }}></div>
      </section>
      <section id="testimonials">
        <div className="testimonials-text">
          <h3>Testimonials</h3>
          <p>What Our Users Say</p>
        </div>
        <div className="testimonials">
          <div className="testimonial">
            <div className="testimonial-text">
              <p>
                Finding the right hospital has never been easier! With this
                website, I was able to locate a nearby hospital quickly and
                efficiently. The search feature is user-friendly, and it
                provided me with all the essential information I needed. Highly
                recommended
              </p>
              <div></div>
              <div className="testimonial-info">
                <img src={Ellipse13} alt="ellipse" />
                <h3>Sarah M.</h3>
              </div>
            </div>
            <div className="testimonial-text">
              <p>
                I can’t express how grateful i am for carefinder website. When i
                needed urgent medical care while travelling, it helped me locate
                the nearest hospital in a matter of seconds. The accurate
                results and detailed directions saved me valuable time and
                ensured i received the care i needed
              </p>
              <div></div>
              <div className="testimonial-info">
                <img src={Ellipse13A} alt="ellipse" />
                <h3>John D.</h3>
              </div>
            </div>
            <div className="testimonial-text">
              <p>
                I recently moved to a new city and had no idea where to go for
                medical assistance, my friend shared me some hospital details
                using the carefinder website. It made my life easier, i was able
                to fine reputable hospitals near me effortlessly. The website’s
                is user friendly interface and comprehnsive search gave me peace
                of mind. I highly recommend.
              </p>
              <div></div>
              <div className="testimonial-info">
                <img src={Ellipse13B} alt="ellipse" />
                <h3>Emiliy T.</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
