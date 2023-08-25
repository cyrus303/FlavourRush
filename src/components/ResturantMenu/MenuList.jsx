import React, {useEffect, useState} from 'react';
import TitleItem from './TitleItem';

const MenuList = ({menuList}) => {
  const updatedList = menuList.slice(1, -2);

  const [showIndex, setShowIndex] = useState(-1);

  const handleIndex = (index) => {
    if (showIndex === index) {
      setShowIndex(-1);
    } else {
      setShowIndex(index);
    }
  };

  return (
    <>
      {updatedList.map((Item, index) => {
        let {title, itemCards} = Item.card.card;
        return (
          <TitleItem
            key={index}
            title={title}
            itemCards={itemCards}
            showItems={index === showIndex && true}
            handleIndex={handleIndex}
            index={index}
          />
        );
      })}
    </>
  );
};

export default MenuList;
