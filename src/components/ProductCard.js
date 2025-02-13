import React from "react";
import Image from "next/image";
import AddCartIcon from "./AddCartIcon";
import { useCart } from "../app/context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <>
      <div
        className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden"
        key={product.id}
      >
        <div className="relative flex items-end justify-end h-56 w-full">
          <Image
            src="https://images.unsplash.com/photo-1495856458515-0637185db551?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
          />
          <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500 z-10">
            <AddCartIcon onClick={() => addToCart(product)} />
          </button>
        </div>
        <div className="px-5 py-3">
          <h3 className="text-gray-700 uppercase">{product.name}</h3>
          <span className="text-gray-500 mt-2">${product.price}</span>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
