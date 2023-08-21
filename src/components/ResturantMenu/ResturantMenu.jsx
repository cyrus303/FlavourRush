import {useParams} from 'react-router-dom';
import {BsStarFill} from 'react-icons/bs';
import {RxLapTimer} from 'react-icons/rx';
import {HiOutlineCurrencyRupee} from 'react-icons/hi';
import OfferCard from './OfferCard';
import MenuList from './MenuList';
import './resturantMenu.css';
import useResturantMenu from '../../uitils/hooks/useResturantMenu';

const ResturantMenu = () => {
  const {resId} = useParams();
  const {resturantBrief, currentOffers, menuList} =
    useResturantMenu(resId);

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
            return (
              <OfferCard offer={Item} key={Item.info.offerIds[0]} />
            );
          })}
        </div>
        <MenuList menuList={menuList} />
      </div>
    </div>
  );
};

export default ResturantMenu;
