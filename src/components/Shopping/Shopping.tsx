import treeIcon from "@/assets/icon-carbon-neutral.svg";
import { useCartContext } from "@/context";
import emptyCart from "@/assets/illustration-empty-cart.svg";
import { useState } from "react";
import CartItem from "./CartItem";
export default function Shopping() {
  const { isCartEmpty, totalItemsIn, totalToPay, uniqueItemsIn, clear } =
    useCartContext();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <h2 className="font-bold text-2xl text-red pb-6">
        Your Cart({totalItemsIn()})
      </h2>
      {isCartEmpty ? (
        <div className="p-4 flex flex-col items-center gap-4">
          <img width={128} src={emptyCart} />
          <p className="text-rose-500 font-semibold">
            your added items will be appear here
          </p>
        </div>
      ) : (
        <div>
          <ul>
            {uniqueItemsIn().map((item, key) => {
              return (
                <CartItem key={key} {...item}>
                  <div>
                    <CartItem.Name />
                    <div className="flex gap-2 items-center pb-4 pt-2">
                      <CartItem.AmounIn />
                      <CartItem.Price />
                      <div className="text-rose-500">
                        <CartItem.TPriceInItems />
                      </div>
                    </div>
                  </div>
                  <CartItem.RemoveFrom />
                </CartItem>
              );
            })}
          </ul>
          <div className="flex justify-between items-center pb-6 ">
            <p className="text-sm text-rose-900">Order Total</p>
            <p className="text-2xl text-rose-900 font-bold">${totalToPay()}</p>
          </div>
          <div className="bg-rose-50 flex gap-2 items-center justify-center p-6 text-sm">
            <img width={20} height={20} src={treeIcon} />
            <p>
              This is a{" "}
              <span className="text-rose-900 font-semibold">
                carbon neutral
              </span>{" "}
              delivery
            </p>
          </div>
          <button
            onClick={() => setIsOpen(true)}
            className="bg-red relative text-white px-6 py-4 w-full mt-4 rounded-full group"
          >
            <div className="absolute inset-0 group-hover:bg-black group-hover:bg-opacity-25 rounded-full"></div>
            <span className="relative z-10 text-white font-semibold">
              Confirm order
            </span>
          </button>
        </div>
      )}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-10">
          {/* Overlay oscuro */}
          <div className="absolute inset-0 bg-black opacity-50" />

          {/* Contenido del modal */}
          <div className="p-10 bg-white relative z-20 rounded-lg shadow-lg lg:w-[38rem] md:w-[40rem] mt-auto md:mt-0 lg:mt-0">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 32.121L13.5 24.6195L15.6195 22.5L21 27.879L32.3775 16.5L34.5 18.6225L21 32.121Z"
                fill="#1EA575"
              />
              <path
                d="M24 3C19.8466 3 15.7865 4.23163 12.333 6.53914C8.8796 8.84665 6.18798 12.1264 4.59854 15.9636C3.0091 19.8009 2.59323 24.0233 3.40352 28.0969C4.21381 32.1705 6.21386 35.9123 9.15077 38.8492C12.0877 41.7861 15.8295 43.7862 19.9031 44.5965C23.9767 45.4068 28.1991 44.9909 32.0364 43.4015C35.8736 41.812 39.1534 39.1204 41.4609 35.667C43.7684 32.2135 45 28.1534 45 24C45 18.4305 42.7875 13.089 38.8493 9.15076C34.911 5.21249 29.5696 3 24 3ZM24 42C20.4399 42 16.9598 40.9443 13.9997 38.9665C11.0397 36.9886 8.73256 34.1774 7.37018 30.8883C6.0078 27.5992 5.65134 23.98 6.34587 20.4884C7.04041 16.9967 8.75474 13.7894 11.2721 11.2721C13.7894 8.75473 16.9967 7.0404 20.4884 6.34587C23.98 5.65133 27.5992 6.00779 30.8883 7.37017C34.1774 8.73255 36.9886 11.0397 38.9665 13.9997C40.9443 16.9598 42 20.4399 42 24C42 28.7739 40.1036 33.3523 36.7279 36.7279C33.3523 40.1036 28.7739 42 24 42Z"
                fill="#1EA575"
              />
            </svg>
            <div className="mt-6">
              <h1 className="font-bold text-4xl text-rose-900">
                Order Confirmed
              </h1>
              <p className="text-sm text-rose-500">
                We hope you enjoy your food!
              </p>
            </div>
            <section className="p-6 my-8 bg-rose-50 max-h-[34rem] overflow-auto">
              {uniqueItemsIn().map((item, key) => {
                return (
                  <CartItem key={key} {...item}>
                    <div className="flex gap-4 items-center pb-4 w-full">
                      <CartItem.Image />
                      <div>
                        <CartItem.Name />
                        <div className="flex gap-2 items-center">
                          <CartItem.AmounIn />
                          <div className="text-rose-900">
                            <CartItem.Price />
                          </div>
                        </div>
                      </div>
                      <div className="ml-auto">
                        <CartItem.TPriceInItems />
                      </div>
                    </div>
                  </CartItem>
                );
              })}
              <div className="flex justify-between items-center">
                <p className="text-sm text-rose-900">Order Total</p>
                <p className="text-2xl text-rose-900 font-bold">
                  ${totalToPay()}
                </p>
              </div>
            </section>
            <button
              onClick={() => {
                setIsOpen(false);
                clear();
              }}
              className="bg-red w-full text-white px-6 py-4 rounded-full group"
            >
              Start New Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
