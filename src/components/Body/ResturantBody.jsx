import React from 'react';
import ResturantCard from './ResturantCard';
import './body.css';
import {DATA} from '../../Constants';

function Body() {
  const cards = DATA.data.cards[2].data.data.cards;
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {cards.map((card) => {
          return <ResturantCard resData={card.data} />;
        })}
      </div>
    </div>
  );
}

export default Body;
