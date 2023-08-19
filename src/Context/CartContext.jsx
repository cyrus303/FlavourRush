import {createContext, useState} from 'react';

const CartContext = createContext();

const CartProvider = ({children}) => {
  const [cartCount, SetCartCount] = useState([]);

  // const resultArray = [];

  // // Create a map to track unique items and their counts
  // const itemMap = new Map();
  // // Iterate through the input array
  // for (const itemObj of cartCount) {
  //   const item = itemObj.item;
  //   const itemId = item.id;
  //   // If the item is already in the map, increase its count
  //   if (itemMap.has(itemId)) {
  //     const existingItem = itemMap.get(itemId);
  //     existingItem.count += 1;
  //   } else {
  //     // If the item is not in the map, add it with a count of 1
  //     itemMap.set(itemId, {...itemObj, count: 1});
  //   }
  // }
  // // Convert the map values back to an array
  // for (const uniqueItem of itemMap.values()) {
  //   resultArray.push(uniqueItem);
  // }

  // SetCartCount(resultArray);

  const valueToPass = {
    SetCartCount,
    cartCount,
  };

  return (
    <CartContext.Provider value={{valueToPass}}>
      {children}
    </CartContext.Provider>
  );
};

export {CartContext, CartProvider};
