import {useEffect, useState} from 'react';
import {MENU_URL} from '../config';

const useResturantMenu = (resId) => {
  const [resturantBrief, setResturantBrief] = useState([]);
  const [currentOffers, setCurrentOffers] = useState([]);
  const [menuList, setMenuList] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const response = await fetch(MENU_URL + resId);
    const json = await response.json();
    setupStateVariables(json.data);
  };

  const setupStateVariables = (resInfo) => {
    resInfo.cards.map((Item) => {
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

  return {
    resturantBrief,
    currentOffers,
    menuList,
  };
};

export default useResturantMenu;
