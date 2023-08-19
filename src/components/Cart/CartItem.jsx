import React from 'react';
import {MdCurrencyRupee} from 'react-icons/md';
import {CDN_URL} from '../../uitils/config';

const CartItem = ({itemInCart}) => {
  const {
    imageId,
    category,
    name,
    defaultPrice,
    price,
    description,
    itemAttribute,
  } = itemInCart.item;

  return (
    <div className="cart-item-container">
      <div className="cart-item-left">
        <img
          className="cart-item-logo"
          src={CDN_URL + imageId}
          alt="resturant image"
        />
      </div>
      <div className="cart-item-right">
        <div className="categeory">{category}</div>
        <p className="title">{name}</p>
        <p className="cart-description">{description}</p>
        <p className="cart-price">
          <MdCurrencyRupee />
          {price ? price / 100 : defaultPrice / 100}
        </p>
        {/* <p>{Object.values(itemAttribute).join(', ')}</p> */}
      </div>
    </div>
  );
};

export default CartItem;
