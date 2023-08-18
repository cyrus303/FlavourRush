import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {MENU_URL} from '../../uitils/config';
import './resturantMenu.css';

const ResturantMenu = () => {
  const [resturantBrief, setResturantBrief] = useState([]);
  const [currentOffers, setCurrentOffers] = useState([]);
  const [menuList, setMenuList] = useState([]);

  const {resId} = useParams();
  console.log(resId);

  useEffect(() => {
    fetchMenu();
  }, []);

  const setStateVariable = ({data}) => {
    data.cards.map((Item) => {
      if (
        //for resturant brief
        !Item.groupedCard &&
        Item.card.card['@type'] ===
          'type.googleapis.com/swiggy.presentation.food.v2.Restaurant'
      ) {
        setResturantBrief(Item?.card?.card?.info);
      } else if (
        !Item.groupedCard &&
        Item.card.card['@type'] ===
          'type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget'
      ) {
        setCurrentOffers(
          Item?.card?.card?.gridElements?.infoWithStyle?.offers
        );
      } else if ('groupedCard' in Item) {
        setMenuList(Item.groupedCard.cardGroupMap.REGULAR.cards);
      }
    });
  };

  const fetchMenu = async () => {
    const response = await fetch(MENU_URL + resId);
    const data = await response.json();
    setStateVariable(data);
  };

  if (menuList.length === 0) return null;
  return (
    <div className="menu">
      <h1>{resturantBrief.name}</h1>
      <h2>Menu</h2>
      <ul>
        {menuList[2].card.card.itemCards.map((Item) => {
          return (
            <li key={Item.card.info.id}>{Item.card.info.name}</li>
          );
        })}
      </ul>
    </div>
  );
};

export default ResturantMenu;
