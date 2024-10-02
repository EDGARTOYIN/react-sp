import { createContext } from "react";
import { Product, ShoppingCart } from "./types";
import { useContext } from "react";
import { CartItemType } from "./types";

type CartContext = {
  cart: ShoppingCart;
  availableProducts: Product[];
  addTo: (product: Product) => void;
  isCartEmpty: boolean;
  amountInCart: (name: string) => number;
  filteredCart: () => Product[];
  removeFrom: (name: string) => void;
  totalItemsIn: () => number;
  totalPriceInItems: (name: string) => number;
  totalToPay: () => number;
  uniqueItemsIn: () => Product[];
  clear: () => void;
};

type CartItemContext = { product: CartItemType };

export const CartContext = createContext<CartContext | undefined>(undefined);

export const useCartContext = () => {
  const cartProps = useContext(CartContext);

  if (cartProps === undefined) {
    throw Error("Context is not initialize");
  }

  return { ...cartProps };
};

export const CartItemContext = createContext<CartItemContext | undefined>(
  undefined
);

export const useCartItem = () => {
  const ItemProps = useContext(CartItemContext);

  if (ItemProps === undefined) {
    throw Error("Context is not initialize");
  }

  return { ...ItemProps };
};
