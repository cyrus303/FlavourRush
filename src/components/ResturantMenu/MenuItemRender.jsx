import React from 'react';
import './menuItemRender.css';
import {CDN_URL} from '../../uitils/config';
import {MdCurrencyRupee} from 'react-icons/md';
import vegLogo from '../../assets/veg.svg';
import {useContext} from 'react';
import {CartContext} from '../../Context/CartContext';

const MenuItemRender = ({itemCards}) => {
  const {valueToPass} = useContext(CartContext);
  const {cartCount, SetCartCount} = valueToPass;

  return itemCards.map((dish) => {
    const {
      name,
      price,
      imageId,
      description,
      isVeg,
      id,
      defaultPrice,
    } = dish.card.info;

    const handleAddToCart = () => {
      SetCartCount([...cartCount, {item: dish.card.info, count: 1}]);
    };

    return (
      <div className="each-item-container" key={id}>
        <div className="left-container">
          <div className="veg-symbol">
            {isVeg && <img src={vegLogo} alt="veg logo" />}
          </div>
          <h4>{name}</h4>
          <h5>
            <MdCurrencyRupee />
            {price ? price / 100 : defaultPrice / 100}
          </h5>
          <p className="description">{description}</p>
        </div>
        <div className="right-container">
          <img
            className="item-logo"
            src={CDN_URL + imageId}
            alt="resturant image"
          />
          <div className="cart-btn-container">
            <button
              className="CartBtn"
              onClick={(event) => handleAddToCart(event)}
            >
              <span className="IconContainer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 576 512"
                  fill="rgb(17, 17, 17)"
                  className="cart"
                >
                  <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
                </svg>
              </span>
              <p className="text">Add to Cart</p>
            </button>
          </div>
        </div>
      </div>
    );
  });
};

export default MenuItemRender;
