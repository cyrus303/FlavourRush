import logo from '../../assets/logo3.png';
import FRLogo from '../../assets/FR.png';
import Location from './Location';
import './header.css';

export const Header = ({setAppLocation, appLocation}) => {
  // console.log(props);
  return (
    <div className="header">
      <div className="logo-container">
        <img src={FRLogo} alt="" className="FR-logo logo" />
        <img src={logo} alt="" className="logo" />
      </div>
      {
        <Location
          setAppLocation={setAppLocation}
          appLocation={appLocation}
        />
      }
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
