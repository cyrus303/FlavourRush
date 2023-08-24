import {CDN_URL} from '../../uitils/config';
import {FaLocationDot} from 'react-icons/fa6';
import {MdStars} from 'react-icons/md';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function ResturantCard({resData}) {
  const {
    avgRating,
    deliveryTime,
    name,
    cloudinaryImageId,
    areaName,
    cuisines,
    sla,
    costForTwo,
    aggregatedDiscountInfoV3,
  } = resData.info;

  return (
    <div
      className={`res-card ${
        aggregatedDiscountInfoV3.header ? '' : 'res-card-hover'
      }`}
    >
      <div
        className={
          aggregatedDiscountInfoV3.header
            ? 'img-container'
            : 'res-logo'
        }
      >
        <img
          className="res-logo"
          src={CDN_URL + cloudinaryImageId}
          alt="resturant image"
        />
      </div>
      <div className="name-location-container">
        <h4 className="name">{name} </h4>
        <p className="pin-container">
          <span className="pin">
            <FaLocationDot />
          </span>
          <span className="area-name">{areaName}</span>
        </p>
      </div>

      <div className="rating-container">
        <h5 className="rating">
          <span className="pin">
            <MdStars />
          </span>
          {avgRating}
        </h5>
        <p className="pin-container">{sla.lastMileTravelString}</p>
      </div>

      <div className="cuisines-container">
        <p className="cuisines">
          <span>{cuisines.join(', ')}</span>
        </p>
      </div>
    </div>
  );
}

export const withDiscountLabel = (ResturantCard) => {
  return (props) => {
    return (
      <div className="label-anchor">
        <div className="label-container">
          <label>
            {props.resData.info.aggregatedDiscountInfoV3.header +
              ' ' +
              props.resData.info.aggregatedDiscountInfoV3.subHeader}
          </label>
        </div>
        <ResturantCard {...props} />
      </div>
    );
  };
};

export default ResturantCard;
