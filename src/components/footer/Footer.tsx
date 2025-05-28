import "./Footer.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaTwitter, FaLinkedin, FaDiscord } from "react-icons/fa";
import users from "../../assets/users.png";
import logo from '../../assets/learnfi.png'; // Ensure you have a logo.png file in your project



function Footer() {
  return (
    <footer className="footer-container">
      
      <div className="footerContainer">
        <div>
          <h1 className="footer-header">Ready to Transform Your Learning Journey?</h1>
          <p className="footer-text">
Join other learners already earning while they master new skills. Start your adventure today and discover why LearnFi is the future of education.          </p>
          <div className='footer-getStartButton'>
        <p className='footer-getStartButtonText'>Get Started</p>
      </div>
        </div>
                <img src={users} className="about-logo" />

      </div>
      <div className="footer-contact-container">
        <div className='footer-logo-container'>
      <img src={logo} alt="Logo" className="footer-logo" />
      <p className='footerLogoText'>LearnFi</p>
      </div>
      <div className="copyright-container">
      <p className="copyright-text">Copyright: © 2025 LearnFi. All rights reserved.</p>
      <p className="copyright-text">Privacy policy</p>
      </div>
      <div className="social-icons">
            <div className="social-links">
              <a href="https://x.com/learnfi_app" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://www.linkedin.com/in/learnfi-app-80575b35a/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://discord.gg/fwafcwdu" target="_blank" rel="noopener noreferrer">
                <FaDiscord />
              </a>
            </div>
          </div>
      </div>
    </footer>
  );
}

export default Footer;
