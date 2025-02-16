"use client";
import { useState } from "react";
import { useCart } from "@/app/context/CartContext";
import { useAuth } from "@/app/context/AuthContext";
import Link from "next/link";
import Image from "next/image";
import Cart from "./Cart";
import CartIcon from "./CartIcon";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalProducts } = useCart();
  const { user, logout } = useAuth();

  return (
    <header className="bg-white">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="hidden w-full text-gray-600 md:flex md:items-center">
            {user ? (
              <div className="flex flex-col gap-4">
                <span>Bienvenido, {user.firstName}</span>
                <button
                  onClick={logout}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded-full text-xs"
                >
                  Cerrar Sesion
                </button>
              </div>
            ) : (
              <Link
                href="/login"
                className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
              >
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                  Iniciar Sesion
                </span>
              </Link>
            )}
          </div>
          <Image
            src="/siclik_compusoluciones.png"
            alt="logo"
            width={200}
            height={200}
          />
          <div className="flex items-center justify-end w-full">
            <div className="flex">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm">
                {totalProducts}
              </div>
              <button
                className="text-gray-600 focus:outline-none mx-4 sm:mx-0"
                onClick={() => setOpen(!open)}
              >
                <CartIcon />
              </button>
              <Cart open={open} setOpen={setOpen} />
            </div>
            <div className="flex sm:hidden">
              <button
                type="button"
                className="text-gray-600 hover:text-gray-500 focus:outline-none focus:text-gray-500"
                aria-label="toggle menu"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
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

        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } sm:flex sm:justify-center sm:items-center mt-4`}
        >
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
            {user && (
              <Link
                className="mt-3 text-gray-600 hover:underline sm:mx-3 sm:mt-0"
                href="/myorders"
              >
                Mis Pedidos
              </Link>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
