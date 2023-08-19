import CartItem from './CartItem';
import CartSummary from './CartSummary';
import {useContext} from 'react';
import {CartContext} from '../../Context/CartContext';
import cartIsEmpty from '../../assets/cart-is-empty.svg';
import {MdCurrencyRupee} from 'react-icons/md';
import './Cart.css';

const Cart = () => {
  const {valueToPass} = useContext(CartContext);
  const {cartCount, SetCartCount} = valueToPass;

  let totalCost = cartCount.reduce(function (prevValue, currValue) {
    if (currValue.item.price) {
      return prevValue + currValue.item.price;
    } else {
      return prevValue + currValue.item.defaultPrice;
    }
  }, 0);

  let deliveryCharge =
    (totalCost * ((Math.random() * 10) / 10)) / 1000;

  let GST = (totalCost / 100) * 0.15;

  const handleClearCart = () => {
    SetCartCount([]);
  };

  return (
    <div className="cart-container">
      <div className="item-cart">
        {cartCount.length > 0 && <div className="heading">Cart</div>}
        {cartCount.length > 0 ? (
          cartCount.map((Item) => {
            return <CartItem itemInCart={Item} />;
          })
        ) : (
          <div className="empty">
            <img src={cartIsEmpty} alt="veg logo" />
          </div>
        )}
      </div>
      <div className="order-summary-container">
        <div className="order-summary">
          <div className="heading">Order Summary</div>
          <div className="total-items-container">
            <p className="title-2">Total Items</p>
            <p className="title">{cartCount.length}</p>
          </div>
          {cartCount.map((Item) => {
            return <CartSummary itemInCart={Item} />;
          })}
          <div className="gst-container">
            <p>GST</p>
            <p className="gst-price">
              <MdCurrencyRupee className="rupee-logo" />
              {GST}
            </p>
          </div>
          <div className="dc-container">
            <p>Delivery Charge</p>
            <p className="gst-price">
              <MdCurrencyRupee className="rupee-logo" />
              {Math.floor(deliveryCharge)}
            </p>
          </div>
          <div className="total-cost-container">
            <p className="title">Total Cost</p>
            <p className="cart-price">
              <MdCurrencyRupee />
              {Math.floor(totalCost / 100 + GST + deliveryCharge)}
            </p>
          </div>
        </div>
        <div className="btn-conatiner">
          <button className="ui-btn">
            <span>Pay Now</span>
          </button>
          <button className="clear-button" onClick={handleClearCart}>
            <svg
              className="svg-icon"
              fill="none"
              height="20"
              viewBox="0 0 20 20"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                stroke="#ff342b"
                strokeLinecap="round"
                strokeWidth="1.5"
              >
                <path d="m3.33337 10.8333c0 3.6819 2.98477 6.6667 6.66663 6.6667 3.682 0 6.6667-2.9848 6.6667-6.6667 0-3.68188-2.9847-6.66664-6.6667-6.66664-1.29938 0-2.51191.37174-3.5371 1.01468"></path>
                <path d="m7.69867 1.58163-1.44987 3.28435c-.18587.42104.00478.91303.42582 1.0989l3.28438 1.44986"></path>
              </g>
            </svg>
            <span className="lable">Clear Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
