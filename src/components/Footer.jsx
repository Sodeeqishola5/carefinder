import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div id="footer">
      <div className="footer-text">
        <p style={{width: '200px', height: '194px'}}><span>CareFinder</span><br/>Plot 42, Akinza Street, Victoria island, Lagos +2349167351788</p>
      </div>
      <div className="footer-text">
        <p style={{width: '146px', height: '161px'}}><span>About Us</span><br/>News & Media Contact Us</p>
      </div>
      <div className="footer-text">
        <p style={{width: '200px', height: '194px'}}><span>Quick Links</span><br/>My account Book an appointment Library</p>
      </div>
    </div>
  )
}

export default Footer
