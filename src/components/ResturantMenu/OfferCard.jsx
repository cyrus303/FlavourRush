import {BiSolidOffer} from 'react-icons/bi';

const OfferCard = ({offer}) => {
  const {header, couponCode, description} = offer.info;
  return (
    <div className="offer-card">
      <div className="offer-value">
        <BiSolidOffer className="icon offer-icon" />
        <p>{header}</p>
      </div>
      <p className="cuppon-code">
        {couponCode} | {description}
      </p>
    </div>
  );
};

export default OfferCard;
