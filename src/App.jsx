import {useState} from 'react';
import './App.css';
import ResturantBody from './components/Body/ResturantBody';
import {Header} from './components/Header/Header';
import {Route, Routes} from 'react-router-dom';

/* My Food App structure will look like this,
  1) Header
      - Logo
      - Nav Items(right side)
      - Cart
  2) Body
      - Search bar
      - Restaurants List
          - Restaurant card
              - Image
              - Name
              - Rating
  3) Footer
      - Links
      - Copyrights

*/

function App() {
  const [appLocation, setAppLocation] = useState('Bengaluru');

  return (
    <div className="main-container">
      <Header
        setAppLocation={setAppLocation}
        appLocation={appLocation}
      />
      <ResturantBody appLocation={appLocation} />
    </div>
  );
}

export default App;
