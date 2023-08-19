import CartItem from './CartItem';
import {useContext} from 'react';
import {CartContext} from '../../Context/CartContext';
import './Cart.css';

const Cart = () => {
  const {valueToPass} = useContext(CartContext);
  const {cartCount, SetCartCount} = valueToPass;
  console.log(cartCount);
  return (
    <div className="cart-container">
      <div className="item-cart">
        <div className="heading">Cart</div>
        <CartItem />
      </div>
      <div className="order-summary">
        <div className="heading">Order Summary</div>
      </div>
    </div>
  );
};

export default Cart;
