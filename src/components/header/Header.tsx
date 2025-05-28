
import './header.css'
import logo from '../../assets/learnfi.png'; // Ensure you have a logo.png file in your project

function Header() {
  return (
    <div className="header">
      <div className='logo-container'>
      <img src={logo} alt="Logo" className="logo" />
      <p className='logo-text'>LearnFi</p>
      </div>
      <div className='getStartButton'>
        <p className='getStartButtonText'>Get Started</p>
      </div>
    </div>
  );
}

export default Header;
