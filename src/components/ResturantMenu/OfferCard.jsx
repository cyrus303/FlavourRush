import {BiSolidOffer} from 'react-icons/bi';

const OfferCard = () => {
  return (
    <div className="offer-card">
      <div className="offer-value">
        <BiSolidOffer className="icon offer-icon" />
        <p>FLAT 150 OFF</p>
      </div>
      <p className="cuppon-code">USE MY CAMPUS | ABOVE 349</p>
    </div>
  );
};

export default OfferCard;
