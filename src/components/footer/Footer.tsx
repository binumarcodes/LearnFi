import "./Footer.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p><FaMapMarkerAlt /> 44A Isa Kaita Road, Kaduna, NG</p>
          <p><FaPhone /> +234 810 800 5192</p>
          <p><FaEnvelope /> learnfiapp@gmail.com</p>
        </div>
      </div>
      <p className="footer-right">© 2025 LearnFi. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
