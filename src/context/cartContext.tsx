import { createContext, useContext, useReducer } from "react";
import type { ReactNode, Reducer } from "react";
import type { Skip } from "../api/skips/types";

type Cart = {
  total: number,
  items: Skip[]
};

const initCart: Cart = {
  total: 0,
  items: []
};

type ACTIONTYPE =
  | { type: "add"; skip: Skip }
  | { type: "remove"; skip: Skip }

type CartContexType = {
  cart: Cart,
  dispatch: (action: ACTIONTYPE) => void;
};

const CartContext = createContext({} as CartContexType);

export function CartProvider({
  children
}: {
  children: ReactNode
}) {
  const [cart, dispatch] = useReducer<Reducer<CartItems, ACTIONTYPE>>(cartReducer, initCart);
  
  return (
    <CartContext.Provider value={{cart, dispatch}}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext);
};

function cartReducer(cart: Cart, action: ACTIONTYPE): Cart {
  switch(action.type) {
    case 'add': {
      return {
        total: cart.total + action.skip.price_before_vat,
        items: [...cart.items, action.skip]
      }
    }
    case 'remove': {
      return {
        total: cart.total - action.skip.price_before_vat,
        items: cart.items.filter((s) => s.id !== action.skip.id)
      }
    }
    default: {
      return cart;
    }
  }
} // NOTE: I used here immutabilities which is strongly recommended to handle complex data handling.