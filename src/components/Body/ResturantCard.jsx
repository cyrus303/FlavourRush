import React from 'react';

function Card(resData) {
  const {avgRating, deliveryTime, name, cuisines, cloudinaryImageId} =
    resData.resData;

  console.log(name);

  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/${cloudinaryImageId}`}
        alt="resturant image"
      />
      <h3>{name}</h3>
      <h4>Biryani, North Indian, Asian</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
}

export default Card;
