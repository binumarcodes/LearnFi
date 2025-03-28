
import './header.css'
import logo from '../../assets/text_logo.png'; // Ensure you have a logo.png file in your project

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="Logo" className="logo" />
      <p>Just like entertainment</p>
    </div>
  );
}

export default Header;
