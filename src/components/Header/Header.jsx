import logo from '../../assets/logo3.png';
import FRLogo from '../../assets/FR2.png';
import Location from './Location';
import {FaLocationDot} from 'react-icons/fa6';
import {RiShoppingCart2Fill} from 'react-icons/ri';
import './header.css';
import {Link} from 'react-router-dom';
import {useContext} from 'react';
import appLocationContext from '../../Context/Context';
import {CartContext} from '../../Context/CartContext';

export const Header = () => {
  const {appLocation, setAppLocation} = useContext(
    appLocationContext
  );

  const {valueToPass} = useContext(CartContext);
  const {cartCount} = valueToPass;

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
          <li>
            <Link to={'/cart'} className="cart-icon">
              <RiShoppingCart2Fill /> Cart
              {cartCount.length > 0 && (
                <span className="header-count-tag">
                  {cartCount.length}
                </span>
              )}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
