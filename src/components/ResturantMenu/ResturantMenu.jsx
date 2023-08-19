import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {MENU_URL} from '../../uitils/config';
import {BsStarFill} from 'react-icons/bs';
import {RxLapTimer} from 'react-icons/rx';
import {HiOutlineCurrencyRupee} from 'react-icons/hi';
import OfferCard from './OfferCard';
import MenuList from './MenuList';
import './resturantMenu.css';

const ResturantMenu = () => {
  const [resturantBrief, setResturantBrief] = useState([]);
  const [currentOffers, setCurrentOffers] = useState([]);
  const [menuList, setMenuList] = useState(null);
  const {resId} = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const response = await fetch(MENU_URL + resId);
    const data = await response.json();
    setStateVariable(data);
  };

  const setStateVariable = ({data}) => {
    data.cards.map((Item) => {
      if (
        //for resturant brief
        !Item.groupedCard &&
        Item.card.card['@type'] ===
          'type.googleapis.com/swiggy.presentation.food.v2.Restaurant'
      ) {
        setResturantBrief(Item?.card?.card?.info);
      } else if (
        !Item.groupedCard &&
        Item.card.card['@type'] ===
          'type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget'
      ) {
        setCurrentOffers(
          Item?.card?.card?.gridElements?.infoWithStyle?.offers
        );
      } else if ('groupedCard' in Item) {
        setMenuList(Item.groupedCard.cardGroupMap.REGULAR.cards);
      }
    });
  };

  if (menuList === null) return null;

  const {
    city,
    name,
    areaName,
    avgRating,
    totalRatingsString,
    cuisines,
    costForTwo,
  } = resturantBrief;

  return (
    <div className="menu-container">
      <div className="menu-items">
        <div className="bread-crumb">
          <small>
            home / {city} / {name}
          </small>
        </div>
        <div className="res-header">
          <div className="res-header-left">
            <h2>{name}</h2>
            <p>{cuisines.join(', ')}</p>
            <p>{areaName}</p>
          </div>
          <div className="res-header-right">
            <h4>
              <BsStarFill className="star-icon" />
              {avgRating}
            </h4>
            <p className="total-rating">{totalRatingsString}</p>
          </div>
        </div>
        <div className="timing-info">
          <div className="time">
            <RxLapTimer className="icon" />
            29 min
          </div>
          <div className="cost">
            <HiOutlineCurrencyRupee className="icon" />
            {costForTwo / 100 + ' for two'}
          </div>
        </div>
        <div className="offer-container">
          {currentOffers.map((Item) => {
            return <OfferCard offer={Item} />;
          })}
        </div>
        <MenuList menuList={menuList} />
      </div>
    </div>
  );
};

export default ResturantMenu;
