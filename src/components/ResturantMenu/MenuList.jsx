import {useEffect} from 'react';
import MenuItemRender from './MenuItemRender';

const MenuList = ({menuList}) => {
  const updatedList = menuList.slice(1, -2);

  return (
    <>
      {updatedList.map((Item) => {
        let {title, itemCards} = Item.card.card;
        // console.log(title + itemCards[0]);
        if (title !== undefined && itemCards !== undefined) {
          return (
            <>
              <h3 className="catageory-title">{title}</h3>
              <MenuItemRender itemCards={itemCards} />
            </>
          );
        }
      })}
    </>
  );
};

export default MenuList;
