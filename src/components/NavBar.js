"use client";
import { useState } from "react";
import { useCart } from "@/app/context/CartContext";
import Link from "next/link";
import Image from "next/image";
import Cart from "./Cart";
import CartIcon from "./CartIcon";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { totalProducts } = useCart();

  return (
    <header className="bg-white">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="hidden w-full text-gray-600 md:flex md:items-center">
            <Link
              href="/login"
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                Iniciar Sesion
              </span>
            </Link>
          </div>
          <Image
            src="/siclik_compusoluciones.png"
            alt="logo"
            width={200}
            height={200}
          />
          <div className="flex items-center justify-end w-full">
            <div className="flex bg-cyan-100">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm">
                {totalProducts}
              </div>
              <button
                className="text-gray-600 focus:outline-none mx-4 sm:mx-0"
                onClick={() => setOpen(!open)}
              >
                <CartIcon />
              </button>
              Carrito
              <Cart open={open} setOpen={setOpen} />
            </div>
            <div className="flex sm:hidden">
              <button
                type="button"
                className="text-gray-600 hover:text-gray-500 focus:outline-none focus:text-gray-500"
                aria-label="toggle menu"
              >
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <nav className="sm:flex sm:justify-center sm:items-center mt-4">
          <div className="flex flex-col sm:flex-row">
            <Link
              className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0"
              href="/"
            >
              Home
            </Link>
            <Link
              className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0"
              href="/catalog"
            >
              Catálogo
            </Link>

            <Link
              className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0"
              href="/orders"
            >
              Mis Pedidos
            </Link>
          </div>
        </nav>
        <div className="relative mt-6 max-w-lg mx-auto">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
            <svg
              className="h-5 w-5 text-gray-500"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>

          <input
            className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
