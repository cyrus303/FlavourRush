import {useState} from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import appLocationContext from './Context/Context';
import {Outlet} from 'react-router-dom';

function App() {
  const [appLocation, setAppLocation] = useState('Mumbai');

  return (
    <appLocationContext.Provider
      value={{appLocation, setAppLocation}}
    >
      <div className="main-container">
        <Header />
        <Outlet />
      </div>
    </appLocationContext.Provider>
  );
}

export default App;
