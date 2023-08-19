import {createContext, useState} from 'react';

const CartContext = createContext();

const CartProvider = ({children}) => {
  const [cartCount, SetCartCount] = useState({
    item: '',
    count: '6',
  });

  return (
    <CartContext.Provider value={{cartCount}}>
      {children}
    </CartContext.Provider>
  );
};

export {CartContext, CartProvider};
