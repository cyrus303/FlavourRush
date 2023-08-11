import logo from '../../assets/logo3.png';
import './header.css';

export const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={logo} alt="" className="logo" />
      </div>
      <div className="nav-items">
        <ul className="nav-list">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
