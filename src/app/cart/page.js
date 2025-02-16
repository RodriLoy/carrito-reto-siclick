import Navbar from "@/components/NavBar";
import React from "react";

const CartPage = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen flex-col">
        <div className="text-2xl mb-4">Tu carrito esta vacio</div>
        <div className="flex space-x-4">
          <button className="bg-blue-500  text-white px-4 py-2 rounded">
            Sign in to your account
          </button>
          <button className="bg-green-500   text-white px-4 py-2 rounded">
            Sign up now
          </button>
        </div>
      </div>
    </>
  );
};

export default CartPage;
