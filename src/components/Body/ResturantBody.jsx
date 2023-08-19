import {useContext, useEffect, useState} from 'react';
import ResturantCard from './ResturantCard';
import {SearchBarShimmer} from '../../uitils/shimmerUI/SearchBar';
import './body.css';
import SearchBar from './SearchBar';
import _ from 'lodash';
import 'react-loading-skeleton/dist/skeleton.css';
import {ItemShimmerUI} from '../../uitils/shimmerUI/ItemShimmerUI';
import appLocationContext from '../../Context/Context';
import {Link} from 'react-router-dom';

function Body() {
  const {appLocation, setAppLocation} = useContext(
    appLocationContext
  );

  const [listOfResturants, setListOfResturants] = useState([]);
  const [filtredResturants, setFiltredResturants] = useState([]);
  const [searchTerm, SetSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  let cordinates = {};
  useEffect(() => {
    setLoading(true);
    fetchData();
    setFiltredResturants([]);
    SetSearchTerm('');
  }, [appLocation]);

  const setStateVariable = (jsonData) => {
    jsonData.data.cards.map((item) => {
      if (item.card.card.id === 'top_brands_for_you') {
        setListOfResturants(
          item?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
        setFiltredResturants(
          item?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
      }
    });
    setLoading(false);
  };

  switch (appLocation) {
    case 'Bengaluru':
      cordinates = {
        lat: 12.8996676,
        lng: 77.4826837,
      };
      break;
    case 'Mumbai':
      cordinates = {
        lat: 19.0759837,
        lng: 72.8776559,
      };
      break;
    case 'Chennai':
      cordinates = {
        lat: 13.0826802,
        lng: 80.2707184,
      };
      break;
    default:
      break;
  }

  const fetchData = async () => {
    const response = await fetch(
      `https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=${cordinates.lat}&lng=${cordinates.lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
    );
    const jsonData = await response.json();
    setStateVariable(jsonData);
  };

  // console.log(listOfResturants);

  const handleSortRes = (event) => {
    console.log(event.target.textContent);
    if (event.target.textContent === 'Top Rated') {
      const arrayOfObjects = [...filtredResturants]; // Your array of objects
      const sortedArray = _.sortBy(
        arrayOfObjects,
        'info.avgRating'
      ).reverse();
      setFiltredResturants(sortedArray);
    } else if (event.target.textContent === 'Delivery Time') {
      const arrayOfObjects = [...filtredResturants]; // Your array of objects
      const sortedArray = _.sortBy(
        arrayOfObjects,
        'info.sla.deliveryTime'
      ).reverse();
      setFiltredResturants(sortedArray);
    }
  };

  return loading ? (
    <div className="body">
      <SearchBarShimmer />
      <div className="title">
        <SearchBarShimmer />
      </div>
      <div className="res-container">
        {Array.from({length: 20}).map((_, index) => (
          <ItemShimmerUI key={index} />
        ))}
      </div>
    </div>
  ) : (
    <div className="body">
      <SearchBar
        handleSort={handleSortRes}
        listOfResturants={listOfResturants}
        searchTerm={searchTerm}
        SetSearchTerm={SetSearchTerm}
        setFiltredResturants={setFiltredResturants}
      />
      <h2 className="title">
        {listOfResturants.length > 0
          ? `Restaurants with online food delivery in ${appLocation}`
          : `Sorry no resturants are open at this time in
            ${appLocation}`}
      </h2>
      <div className="res-container">
        {filtredResturants.map((card) => (
          <Link key={card.info.id} to={'/resturant/' + card.info.id}>
            <ResturantCard resData={card} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Body;
