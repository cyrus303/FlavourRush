import {useEffect, useState} from 'react';
import ResturantCard from './ResturantCard';
import {SearchBarShimmer} from '../../uitils/shimmerUI/SearchBar';
import './body.css';
import SearchBar from './SearchBar';
import _ from 'lodash';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import {ItemShimmerUI} from '../../uitils/shimmerUI/ItemShimmerUI';

// import {SWIGGY_URL} from '../../uitils/config';

function Body({appLocation}) {
  const [listOfResturants, setListOfResturants] = useState([
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  ]);
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

  // console.log(filtredResturants);

  const fetchData = async () => {
    const response = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${cordinates.lat}&lng=${cordinates.lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
    );
    const jsonData = await response.json();
    setStateVariable(jsonData);
  };

  const setStateVariable = (jsonData) => {
    jsonData.data.cards.map((item) => {
      if (item.card.card.id === 'top_brands_for_you') {
        setListOfResturants(
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

  // console.log(listOfResturants);

  const handleSortRes = (event) => {
    console.log(event.target.textContent);
    if (event.target.textContent === 'Top Rated') {
      const arrayOfObjects = [...listOfResturants]; // Your array of objects
      const sortedArray = _.sortBy(
        arrayOfObjects,
        'info.avgRating'
      ).reverse();
      setListOfResturants(sortedArray);
    } else if (event.target.textContent === 'Delivery Time') {
      const arrayOfObjects = [...listOfResturants]; // Your array of objects
      const sortedArray = _.sortBy(
        arrayOfObjects,
        'info.sla.deliveryTime'
      ).reverse();
      setListOfResturants(sortedArray);
    }
  };

  return listOfResturants.length === 0 ? (
    <>
      <SearchBarShimmer />
      {/* <ItemShimmerUI /> */}
    </>
  ) : (
    <div className="body">
      <SearchBar
        handleSort={handleSortRes}
        listOfResturants={listOfResturants}
        searchTerm={searchTerm}
        SetSearchTerm={SetSearchTerm}
        setFiltredResturants={setFiltredResturants}
      />
      <div className="res-container">
        {filtredResturants.length > 0
          ? filtredResturants.map(() => {
              return loading ? (
                <ItemShimmerUI />
              ) : (
                <ResturantCard resData={card} key={card.info.id} />
              );
            })
          : loading
          ? listOfResturants.map((card) => {
              return <ItemShimmerUI />;
            })
          : listOfResturants.map((card) => {
              return (
                <ResturantCard resData={card} key={card.info.id} />
              );
            })}
      </div>
    </div>
  );
}

export default Body;
