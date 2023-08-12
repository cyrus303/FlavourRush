import {CDN_URL} from '../../uitils/config';

function ResturantCard({resData}) {
  const {avgRating, deliveryTime, name, cloudinaryImageId} =
    resData.info;
  // console.log(name);

  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt="resturant image"
      />
      <h3>{name}</h3>
      <h4>{avgRating} Stars</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
}

export default ResturantCard;
