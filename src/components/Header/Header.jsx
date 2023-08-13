import logo from '../../assets/logo3.png';
import FRLogo from '../../assets/FR2.png';
import Location from './Location';
import {FaLocationDot} from 'react-icons/fa6';
import {RiShoppingCart2Fill} from 'react-icons/ri';
import './header.css';

export const Header = ({setAppLocation, appLocation}) => {
  // console.log(props);
  return (
    <div className="header">
      <div className="logo-container">
        <img src={FRLogo} alt="" className="FR-logo logo" />
        <img src={logo} alt="" className="logo" />
      </div>
      <div className="location-container">
        <FaLocationDot />
        {
          <Location
            setAppLocation={setAppLocation}
            appLocation={appLocation}
          />
        }
      </div>
      <div className="nav-items">
        <ul className="nav-list">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li className="cart-icon">
            <RiShoppingCart2Fill /> Cart
          </li>
        </ul>
      </div>
    </div>
  );
};
