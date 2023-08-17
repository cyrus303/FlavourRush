import logo from '../../assets/logo3.png';
import FRLogo from '../../assets/FR2.png';
import Location from './Location';
import {FaLocationDot} from 'react-icons/fa6';
import {RiShoppingCart2Fill} from 'react-icons/ri';
import './header.css';
import {Link} from 'react-router-dom';

import {useContext} from 'react';
import appLocationContext from '../../uitils/Context';

export const Header = () => {
  const {appLocation, setAppLocation} = useContext(
    appLocationContext
  );

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
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/about'}>About</Link>
          </li>
          <li>
            <Link to={'/contact'}>Contact</Link>
          </li>
          <li className="cart-icon">
            <RiShoppingCart2Fill /> Cart
          </li>
        </ul>
      </div>
    </div>
  );
};
