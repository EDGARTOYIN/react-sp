import { useCartContext } from "@/context";
import { CartItemContext, useCartItem } from "@/context";
import { CartItemWithChildren } from "@/types";

//price and total, and amount selected
export default function CartItem(props: CartItemWithChildren) {
  return (
    <CartItemContext.Provider value={{ product: props }}>
      <li className="flex justify-between items-center pb-4">
        <div className="flex gap-2 w-full justify-between items-center border-b border-rose-100">
          {props.children}
        </div>
      </li>
    </CartItemContext.Provider>
  );
}

CartItem.Name = function ItemName() {
  const props = useCartItem();
  return (
    <h1 className="text-rose-900 font-semibold text-sm">
      {props.product.name}
    </h1>
  );
};

CartItem.TPriceInItems = function TPriceInItems() {
  const props = useCartItem();
  const { totalPriceInItems } = useCartContext();
  return (
    <p className="text-sm font-semibold">
      ${totalPriceInItems(props.product.name).toFixed(2)}
    </p>
  );
};

CartItem.AmounIn = function AmountIn() {
  const props = useCartItem();
  const { amountInCart } = useCartContext();
  return (
    <p className="text-red text-sm font-semibold">
      {amountInCart(props.product.name)}x
    </p>
  );
};

CartItem.Price = function Price() {
  const props = useCartItem();
  return (
    <p className="text-sm text-rose-500">@{props.product.price.toFixed(2)}</p>
  );
};

CartItem.RemoveFrom = function RemoveFrom() {
  const { removeFrom } = useCartContext();
  const props = useCartItem();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => removeFrom(props.product.name)}
      className="border border-rose-400 rounded-full p-1 w-[20px] h-[20px] hover:cursor-pointer group hover:border-rose-900"
      fill="none"
      viewBox="0 0 10 10"
    >
      <path
        className="group-hover:fill-rose-900"
        fill="#CAAFA7"
        d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
      />
    </svg>
  );
};

CartItem.Image = function Image() {
  const props = useCartItem();
  return (
    <img
      className="rounded-md"
      width={48}
      height={48}
      src={props.product.image.thumbnail}
    />
  );
};
