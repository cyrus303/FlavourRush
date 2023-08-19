import React from 'react';
import {MdCurrencyRupee} from 'react-icons/md';
import {AiFillPlusCircle, AiFillMinusCircle} from 'react-icons/ai';
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

  const handleCountIncrease = () => {};

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
        <div className="order-brief">
          <div className="categeory">{category}</div>
          <div className="title-count-container">
            <p className="title">{name}</p>
            {/* <p className="total-count-tag">{itemInCart.count}</p> */}
          </div>
          <p className="cart-description">{description}</p>
          <p className="cart-price">
            <MdCurrencyRupee />
            {price ? price / 100 : defaultPrice / 100}
          </p>
        </div>
        <div className="increament-decrement">
          <button
            className="increase-logo-btn"
            onClick={handleCountIncrease}
          >
            <AiFillPlusCircle className="increase-logo" />
          </button>
          <p className="total-count-tag tag">{itemInCart.count}</p>
          <button className="decrease-logo-btn">
            <AiFillMinusCircle className="decrease-logo" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
