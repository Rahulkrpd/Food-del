import { assets } from '../../assets/assets'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>we’re dedicated to delivering exceptional culinary experiences. Our diverse menu features fresh, high-quality ingredients prepared by expert chefs. From comforting classics to gourmet specialties, we aim to satisfy every craving. Whether it’s for a family gathering or a cozy evening, we ensure each meal is delicious and memorable. Celebrate great food and exceptional service with us. Thank you for choosing Tomato where every meal is a special occasion.</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <a href="#"><li>Home</li></a>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-212-345-7890</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copy-right">
        Copyright 2024 © Tomato.com -All Right Reserved.
      </p>
    </div>
  )
}

export default Footer
