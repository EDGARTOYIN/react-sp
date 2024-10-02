import { Product } from "@/types";
import cartIcon from "@/assets/icon-add-to-cart.svg";
import { useCartContext } from "@/context";
import clsx from "clsx";

const Card = (props: Product) => {
  const { addTo, amountInCart, removeFrom } = useCartContext();

  return (
    <div className="max-w-md">
      <div
        className={clsx("relative flex justify-center rounded-lg select-none", {
          "border-2 border-red": amountInCart(props.name) > 0,
        })}
      >
        <img
          alt="food thumbnail"
          width="327"
          height="200"
          src={props.image.mobile}
          className="rounded-lg md:hidden"
        />
        <img
          alt="food thumbnail"
          width="327"
          height="200"
          src={props.image.tablet}
          className="rounded-lg hidden md:block lg:hidden"
        />
        <img
          alt="food thumbnail"
          width="327"
          height="200"
          src={props.image.desktop}
          className="rounded-lg hidden lg:block"
        />
        {amountInCart(props.name) > 0 ? (
          <div className="flex gap-2 items-center p-3 justify-between bottom-0 transform translate-y-5  text-white rounded-3xl absolute text-sm font-semibold bg-red">
            <svg
              onClick={() => removeFrom(props.name)}
              xmlns="http://www.w3.org/2000/svg"
              className="border-2 border-white rounded-full hover:bg-white p-1 w-[20px] h-[20px] hover:cursor-pointer group"
              width="10"
              height="2"
              fill="none"
              viewBox="0 0 10 2"
            >
              <path
                className="fill-white group-hover:fill-red"
                d="M0 .375h10v1.25H0V.375Z"
              />
            </svg>
            <p className="px-8 select-none">{amountInCart(props.name)}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="border-2 border-white rounded-full hover:bg-white p-1 w-[20px] h-[20px] hover:cursor-pointer group"
              onClick={() => addTo(props)}
              width="10"
              height="10"
              fill="none"
              viewBox="0 0 10 10"
            >
              <path
                className="fill-white group-hover:fill-red"
                d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
              />
            </svg>
          </div>
        ) : (
          <button
            onClick={() => addTo(props)}
            className="flex gap-2 border items-center justify-center hover:border-red group bottom-0 transform translate-y-5 text-rose-900 border-rose-400 rounded-3xl absolute px-[1.60rem] py-[0.6rem] text-sm font-semibold bg-white"
          >
            <img src={cartIcon} />
            <p className="group-hover:text-red">Add to Cart</p>
          </button>
        )}
      </div>
      <div className="pt-10">
        <ul className="flex flex-col gap-1">
          <li>
            <p className="text-rose-500 text-sm">{props.category}</p>
          </li>
          <li>
            <p className="text-rose-900 font-semibold">{props.name}</p>
          </li>
          <li>
            <p className="text-red font-semibold">${props.price.toFixed(2)}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
