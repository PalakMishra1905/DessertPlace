import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer' id="footer">
       <div className="footer-content">
         <div className="footer-content-left">
            <img src="Bakery_Logo.png" alt="" className='Logo'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolore eius tempora consequuntur quibusdam recusandae autem nam ex iste, labore non odio, dolores facere ab. Maxime inventore iste magni fuga?</p>
            <div className="footer-social-icons">
                <img src="facebook_icon.png" alt="" />
                <img src="twitter_icon.png" alt="" />
                <img src="linkedin_icon.png" alt="" />
            </div>
         </div>
         <div className="footer-content-center">
            <h2>Company</h2>
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Delivery</li>
              <li>Privacy policy</li>
            </ul>  
         </div>
         <div className="footer-content-right">
             <h2>Get In Touch</h2>
             <ul>
                <li>+1-212-456-7980</li>
                <li>dessertplace@contact.com</li>
             </ul>
         </div>
       </div>
       <hr/>
       <p className='footer-copyright'>
          Copyright 2025 @ dessertplace.com -All rights Reserved.
       </p>
    </div>
  )
}

export default Footer