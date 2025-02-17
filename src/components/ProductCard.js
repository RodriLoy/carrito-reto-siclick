"use client";
import React from "react";
import Image from "next/image";
import AddCartIcon from "./AddCartIcon";
import { useCart } from "../app/context/CartContext";
import Link from "next/link";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <>
      <div
        className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden transition-opacity duration-500"
        key={product.id}
      >
        <div className="relative flex items-end justify-end h-56 w-full">
          <Link href={`catalog/product/${product.url}/${product.id}`}>
            <Image
              src={product.image}
              alt={product.alt}
              layout="fill"
              objectFit="cover"
              className="absolute inset-0"
            />
          </Link>
          <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500 z-10">
            <AddCartIcon onClick={() => addToCart(product)} />
          </button>
        </div>
        <div className="px-5 py-3">
          <h3 className="text-gray-700">{product.name}</h3>
          <span className="text-gray-500 mt-2">${product.price}</span>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
