import { CartContext } from "@/context";
import { ReactNode, useEffect, useState } from "react";
import { Product, ShoppingCart } from "@/types";
import availableProducts from "@/data/data.json";

// Proveedor del contexto
export const CartProvider = ({ children }: { children: ReactNode }) => {
  // Estado para manejar los productos del carrito
  const [cart, setCart] = useState<ShoppingCart>({});
  const [isCartEmpty, setCartIsEmpty] = useState(true);

  useEffect(() => {
    setCartIsEmpty(() => {
      if (Object.keys(cart).length === 0) {
        return true;
      }
      return false;
    });
  }, [cart]);

  const clear = () => {
    setCart({});
  };

  const addTo = (product: Product): void => {
    setCart((prev) => {
      if (product.name in prev) {
        // Si el producto ya existe, agrega el nuevo producto al arreglo
        return {
          ...prev,
          [product.name]: [...prev[product.name], product],
        };
      }
      return {
        ...prev,
        [product.name]: [product],
      };
    });
  };

  const amountInCart = (name: string) => {
    if (name in cart) {
      return cart[name].length;
    }
    return 0;
  };

  const filteredCart = (): Product[] => {
    const cartNames = Object.keys(cart);
    return cartNames
      .map((item) => cart[item]?.[0]) // Usa el operador de encadenamiento opcional para prevenir errores
      .filter((product) => product !== undefined); // Filtra valores undefined
  };

  // return <CartItem key={key} name={item.name} price={item.price} />;

  const uniqueItemsIn = () => {
    const cartNames = Object.keys(cart);
    const uniqueItems = cartNames
      .map((item) => cart[item]?.[0])
      .filter((product) => product !== undefined);
    return uniqueItems;
  };

  const totalItemsIn = () => {
    return Object.values(cart).flat().length;
  };

  const totalToPay = (): number => {
    return Object.values(cart)
      .flat()
      .reduce((acc, item) => acc + item.price, 0);
  };

  const totalPriceInItems = (name: string): number => {
    return cart[name].reduce((acc, item) => item.price + acc, 0);
  };

  const removeFrom = (name: string) => {
    setCart((prev) => {
      const updatedItems = prev[name].slice(0, -1); // Elimina el último elemento del array
      const newCart = { ...prev }; // Crea una copia del objeto de estado actual

      if (updatedItems.length === 0) {
        delete newCart[name]; // Elimina la propiedad si el array está vacío
      } else {
        newCart[name] = updatedItems; // Actualiza el array con los elementos restantes
      }

      return newCart; // Devuelve el nuevo objeto de estado
    });
  };

  return (
    // Usamos CartContext.Provider para proveer el estado del carrito
    <CartContext.Provider
      value={{
        cart,
        availableProducts,
        addTo,
        isCartEmpty,
        amountInCart,
        filteredCart,
        removeFrom,
        totalItemsIn,
        totalPriceInItems,
        totalToPay,
        uniqueItemsIn,
        clear,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
