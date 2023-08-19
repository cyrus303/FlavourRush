import {MdCurrencyRupee} from 'react-icons/md';

const CartSummary = ({itemInCart}) => {
  const {
    imageId,
    category,
    name,
    defaultPrice,
    description,
    itemAttribute,
    price,
  } = itemInCart.item;

  return (
    <div className="card-summary-container">
      <div className="card-summary-left">
        <p className="title summary-item-title">{name}</p>
        <p>{category}</p>
      </div>
      <div className="card-summary-right">
        <p className="cart-price">
          <MdCurrencyRupee />
          {price ? price / 100 : defaultPrice / 100}
        </p>
      </div>
    </div>
  );
};

export default CartSummary;
