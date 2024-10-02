export type Product = {
  image: { thumbnail: string; mobile: string; tablet: string; desktop: string };
  name: string;
  category: string;
  price: number;
};

export type ShoppingCart = {
  [key: string]: Product[];
};

export type CartItemType = Omit<Product, "category">;

export type CartItemWithChildren = React.PropsWithChildren<CartItemType>;
