import {createContext, useState} from 'react';

const CartContext = createContext();

const CartProvider = ({children}) => {
  const [cartCount, SetCartCount] = useState([]);

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
