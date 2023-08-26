import {useContext, useEffect, useState} from 'react';
import ResturantCard, {withDiscountLabel} from './ResturantCard';
import {SearchBarShimmer} from '../../uitils/shimmerUI/SearchBar';
import './body.css';
import SearchBar from './SearchBar';
import _ from 'lodash';
import 'react-loading-skeleton/dist/skeleton.css';
import {ItemShimmerUI} from '../../uitils/shimmerUI/ItemShimmerUI';
import appLocationContext from '../../Context/Context';
import {Link} from 'react-router-dom';
import useOnlineStatus from '../../uitils/hooks/useOnlineStatus';
import EmblaCarousel from './EmblaCarousel';
import './embla.css';
import './sandbox.css';

function Body() {
  const {appLocation, setAppLocation} = useContext(
    appLocationContext
  );

  const [listOfResturants, setListOfResturants] = useState([]);
  const [filtredResturants, setFiltredResturants] = useState([]);
  const [searchTerm, SetSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  const [carousel, setCarousel] = useState([]);

  const DiscountedResturantCard = withDiscountLabel(ResturantCard);

  const OPTIONS = {
    dragFree: true,
    containScroll: 'trimSnaps',
    loop: true,
  };

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
      if (item.card.card.id === 'topical_banner') {
        setCarousel(item.card.card.gridElements.infoWithStyle.info);
      }
    });
    setLoading(false);
  };

  const fetchData = async () => {
    const response = await fetch(
      `https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=${cordinates.lat}&lng=${cordinates.lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
    );
    const jsonData = await response.json();
    setStateVariable(jsonData);
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

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        looks like you are offline!! please check your internet
        connection
      </h1>
    );

  setTimeout(async () => {
    const response = await fetch(
      `https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=${cordinates.lat}&lng=${cordinates.lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
    );
    const jsonData = await response.json();
    console.log('2 seconds');
    jsonData.data.cards.map((item) => {
      if (item.card.card.id === 'restaurant_grid_listing') {
        console.log(
          item?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
        // setFiltredResturants(
        //   ...filtredResturants,
        //   item?.card?.card?.gridElements?.infoWithStyle?.restaurants
        // );
      }
    });
    console.log(jsonData);
  }, 2000);

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

      <div className="carousel-container">
        <h2 className="title">Best Offers For You</h2>
        <EmblaCarousel carousel={carousel} options={OPTIONS} />
      </div>

      <h2 className="title">
        {listOfResturants.length > 0
          ? `Restaurants with online food delivery in ${appLocation}`
          : `Sorry no resturants are open at this time in
            ${appLocation}`}
      </h2>
      <div className="res-container">
        {filtredResturants.map((card) => (
          <Link key={card.info.id} to={'/resturant/' + card.info.id}>
            {card.info.aggregatedDiscountInfoV3.header ? (
              <DiscountedResturantCard resData={card} />
            ) : (
              <ResturantCard resData={card} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Body;
