import {useEffect, useState} from 'react';
import ResturantCard from './ResturantCard';
import {Shimmer} from '../../uitils/Shimmer';
import './body.css';
// import {DATA} from '../../uitils/mockData';
import {SWIGGY_URL} from '../../uitils/config';

function Body() {
  // const cards = DATA.data.cards[2].data.data.cards;

  const [listOfResturants, setListOfResturants] = useState([]);
  const [topRated, setTopRated] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const setStateVariable = (jsonData) => {
    jsonData.data.cards.map((item) => {
      if (item.card.card.id === 'top_brands_for_you') {
        setListOfResturants(
          item?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
      }
    });
  };

  const fetchData = async () => {
    const response = await fetch(SWIGGY_URL);
    const jsonData = await response.json();
    console.log(jsonData);
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
