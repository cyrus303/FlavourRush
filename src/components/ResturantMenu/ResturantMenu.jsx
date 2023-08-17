import {useEffect, useState} from 'react';

const ResturantMenu = () => {
  const [resturantBrief, setResturantBrief] = useState([]);
  const [currentOffers, setCurrentOffers] = useState([]);
  const [menuList, setMenuList] = useState([]);

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

  useEffect(() => {
    console.log('resturant beirf');
    console.log(resturantBrief);
    console.log('offers');
    console.log(currentOffers);
    console.log('menu');
    console.log(menuList);
  }, [resturantBrief]);

  const fetchMenu = async () => {
    const response = await fetch(
      'https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.8996676&lng=77.4826837&restaurantId=626772&catalog_qa=undefined&submitAction=ENTER'
    );
    const data = await response.json();
    setStateVariable(data);
    // setResturantInfo(data.data.cards);
  };

  return (
    <div className="menu">
      <h1>{resturantBrief.name}</h1>
      <h2>Menu</h2>
      <ul>
        {/* {menuList.map((item) => {
          return <li>{item}</li>;
        })} */}
      </ul>
    </div>
  );
};

export default ResturantMenu;
