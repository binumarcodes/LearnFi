
import './Header.css';
import logo from '../../assets/text_logo.png'; // Ensure you have a logo.png file in your project

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logo" className="logo" />
    </header>
  );
}

export default Header;
