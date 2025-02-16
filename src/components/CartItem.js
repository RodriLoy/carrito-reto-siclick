import React from "react";
import Image from "next/image";

const CartItem = ({
  product,
  removeAllFromCart,
  removeFromCart,
  addToCart,
}) => {
  return (
    <li className="flex py-6">
      <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
        <Image
          alt={product.alt}
          src={product.image}
          width={96}
          height={96}
          className="size-full object-cover"
        />
      </div>
      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>
              <a href="#">{product.name}</a>
            </h3>
            <p className="ml-4">${product.price}</p>
          </div>
          <p className="mt-1 text-sm text-gray-500">{}</p>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <p className="text-gray-500">Cantidad</p>
          <div className="flex items-center mt-2">
            <button
              className="text-gray-500 focus:outline-none focus:text-gray-600"
              onClick={() => addToCart(product)}
            >
              <svg
                className="h-5 w-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </button>
            <span className="text-gray-700 mx-2">{product.quantity}</span>
            <button
              className="text-gray-500 focus:outline-none focus:text-gray-600"
              onClick={() => removeFromCart(product.id)}
            >
              <svg
                className="h-5 w-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </button>
          </div>

          <div className="flex">
            <button
              type="button"
              className="font-medium text-indigo-600 hover:text-indigo-500"
              onClick={() => removeAllFromCart(product.id)}
            >
              Remover
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
