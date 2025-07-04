import "./Footer.css";
import { FaTwitter, FaLinkedin, FaDiscord, FaInstagram } from "react-icons/fa"; // Added FaInstagram
import users from "../../assets/Users.png";
import logo from '../../assets/learnfi.png';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footerContainer">
        <div className="footerContainer-texts">
          <h1 className="footer-header">Ready to Transform Your Learning Journey?</h1>
          <p className="footer-text">
            Join other learners already earning while they master new skills. Start your adventure today and discover why LearnFi is the future of education.
          </p>
          <div className='footer-getStartButton'>
            <p className='footer-getStartButtonText'>Get Started</p>
          </div>
        </div>
        <img src={users} className="footer-image" />
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
            <a href="https://www.instagram.com/learnfiapp/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
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
