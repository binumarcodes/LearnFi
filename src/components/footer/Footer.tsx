import "./Footer.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaTwitter, FaLinkedin, FaDiscord } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-row">
          <div className="footer-section contact">
            <h3>Contact Us</h3>
            <p><FaMapMarkerAlt /> 44A Isa Kaita Road, Kaduna, NG</p>
            <p><FaPhone /> +234 810 800 5192</p>
            <p><FaEnvelope /> learnfiapp@gmail.com</p>
          </div>

          <div className="social-icons">
            <h3>Follow Us</h3>
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
      </div>
      <p className="footer-right">© 2025 LearnFi. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
