import React from 'react';
import './menuItemRender.css';
import {CDN_URL} from '../../uitils/config';
import {MdCurrencyRupee} from 'react-icons/md';
import vegLogo from '../../assets/veg.svg';

const MenuItemRender = ({itemCards}) => {
  // console.log(itemCards[2]);

  //name, price, veg, nonveg, item image
  //     const {name, price, imageId, description, isVeg} = dish.card.info;
  return itemCards.map((dish) => {
    const {name, price, imageId, description, isVeg} = dish.card.info;
    return (
      <div className="each-item-container">
        <div className="left-container">
          <div className="veg-symbol">
            {isVeg && <img src={vegLogo} alt="veg logo" />}
          </div>
          <h4>{name}</h4>
          <h5>
            <MdCurrencyRupee />
            {price / 100}
          </h5>
          <p className="description">{description}</p>
        </div>
        <div className="right-container">
          <img
            className="item-logo"
            src={CDN_URL + imageId}
            alt="resturant image"
          />
        </div>
      </div>
    );
  });
};

export default MenuItemRender;
