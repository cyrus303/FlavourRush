import React from 'react';
import {useContext} from 'react';
import {CartContext} from '../../Context/CartContext';
import {MdCurrencyRupee} from 'react-icons/md';
import {AiFillPlusCircle, AiFillMinusCircle} from 'react-icons/ai';
import {CDN_URL} from '../../uitils/config';

const CartItem = ({itemInCart}) => {
  const {valueToPass} = useContext(CartContext);
  const {cartCount, SetCartCount, cartSummary, setCartSummary} =
    valueToPass;

  const {
    imageId,
    category,
    name,
    defaultPrice,
    price,
    description,
    itemAttribute,
  } = itemInCart.item;

  const handleCountDecrease = ({event}) => {
    const indexOfObject = cartCount.findIndex((element) => {
      return element.item.id === itemInCart.item.id;
    });
    const updatedCart = [
      ...cartCount.slice(0, indexOfObject),
      ...cartCount.slice(indexOfObject + 1),
    ];
    SetCartCount(updatedCart);
  };

  const handleCountIncrease = () => {
    const updatedCart = [...cartCount, itemInCart];
    SetCartCount(updatedCart);
  };

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
            className="decrease-logo-btn"
            onClick={handleCountDecrease}
          >
            <AiFillMinusCircle className="decrease-logo" />
          </button>
          <p className="total-count-tag tag">{itemInCart.count}</p>
          <button
            className="increase-logo-btn"
            onClick={handleCountIncrease}
          >
            <AiFillPlusCircle className="increase-logo" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
