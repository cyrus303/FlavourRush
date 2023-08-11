import './App.css';
import ResturantBody from './components/Body/ResturantBody';
import {Header} from './components/Header/Header';

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
  return (
    <>
      <Header />
      <ResturantBody />
    </>
  );
}

export default App;
