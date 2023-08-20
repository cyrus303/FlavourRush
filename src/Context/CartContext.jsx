import {createContext, useState, useEffect} from 'react';
import _ from 'lodash';

const CartContext = createContext();

const CartProvider = ({children}) => {
  const [cartCount, SetCartCount] = useState([]);
  const [cartSummary, setCartSummary] = useState([]);

  const refactoredCart = [];

  useEffect(() => {
    const itemMap = new Map();

    for (const itemObj of cartCount) {
      const item = itemObj.item;
      const itemId = item.id;
      if (itemMap.has(itemId)) {
        const existingItem = itemMap.get(itemId);
        existingItem.count += 1;
      } else {
        itemMap.set(itemId, {...itemObj, count: 1});
      }
    }
    for (const uniqueItem of itemMap.values()) {
      refactoredCart.push(uniqueItem);
    }

    // const arrayOfObjects = [...refactoredCart]; // Your array of objects
    // console.log(arrayOfObjects);
    // const sortedCart = _.sortBy(arrayOfObjects, 'count').reverse();
    // console.log(sortedCart);

    setCartSummary(refactoredCart);
  }, [cartCount]);

  const valueToPass = {
    cartCount,
    SetCartCount,
    cartSummary,
    setCartSummary,
  };

  return (
    <CartContext.Provider value={{valueToPass}}>
      {children}
    </CartContext.Provider>
  );
};

export {CartContext, CartProvider};
