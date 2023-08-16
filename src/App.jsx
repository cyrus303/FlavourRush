import {useState} from 'react';
import './App.css';
import ResturantBody from './components/Body/ResturantBody';
import {Header} from './components/Header/Header';
import {Outlet} from 'react-router-dom';

function App() {
  const [appLocation, setAppLocation] = useState('Bengaluru');

  return (
    <div className="main-container">
      <Header
        setAppLocation={setAppLocation}
        appLocation={appLocation}
      />
      <ResturantBody appLocation={appLocation} />
      <Outlet />
    </div>
  );
}

export default App;
