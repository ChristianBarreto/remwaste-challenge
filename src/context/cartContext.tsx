import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";

type CartItem = {
  id: string
}

type CartItems = CartItem[];

const initCart: CartItems = [];

type CartContexType = {
  cart: CartItems,
  addToCart: (action: CartItem) => void;
};

const CartContext = createContext({} as CartContexType);

export function CartProvider({
  children
}: {
  children: ReactNode
}) {
  const [cart, setCart] = useState<CartItems>(initCart);

  const addToCart = (cartItems: CartItems) => {
    console.log(cartItems)
  };

  useEffect(() => {

  }, []);
  
  return (
    <CartContext.Provider value={{cart, addToCart}}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext);
};