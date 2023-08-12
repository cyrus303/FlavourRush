import {CDN_URL} from '../../uitils/config';
import {FaLocationDot} from 'react-icons/fa6';
import {MdStars} from 'react-icons/md';

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
  } = resData.info;
  console.log(resData.info);

  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt="resturant image"
      />
      <div className="name-location-container">
        <h4 className="name">{name}</h4>
        <p className="pin-container">
          <span className="pin">
            <FaLocationDot />
          </span>
          {areaName}
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

export default ResturantCard;
