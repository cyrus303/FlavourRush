import {useEffect, useState} from 'react';
import ResturantCard from './ResturantCard';
import {Shimmer} from '../../uitils/Shimmer';
import './body.css';
// import {SWIGGY_URL} from '../../uitils/config';

function Body({appLocation}) {
  const [listOfResturants, setListOfResturants] = useState([]);
  const [topRated, setTopRated] = useState(false);

  let cordinates = {};
  useEffect(() => {
    fetchData();
  }, [appLocation]);

  const setStateVariable = (jsonData) => {
    jsonData.data.cards.map((item) => {
      if (item.card.card.id === 'top_brands_for_you') {
        setListOfResturants(
          item?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
      }
    });
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
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${cordinates.lat}&lng=${cordinates.lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
    );
    const jsonData = await response.json();
    setStateVariable(jsonData);
  };

  // console.log(listOfResturants);

  const handleFilterRes = () => {
    setTopRated((prev) => !prev);
    if (topRated) {
      const filtredData = listOfResturants.filter((item) => {
        return item.info.avgRating > 4;
      });
      setListOfResturants(filtredData);
    }
  };

  // console.log(topRated);
  if (listOfResturants.length == 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={handleFilterRes}>
          Top Rated Button
        </button>
      </div>
      <div className="search">Search</div>
      <div className="res-container">
        {listOfResturants.map((card) => {
          return <ResturantCard resData={card} key={card.info.id} />;
        })}
      </div>
    </div>
  );
}

export default Body;
