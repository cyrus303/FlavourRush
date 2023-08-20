import {createContext, useState, useEffect} from 'react';

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
