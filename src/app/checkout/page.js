"use client";

import React from "react";
import Image from "next/image";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";

const CheckoutPage = () => {
  const router = useRouter();
  const { cartItems, total, clearCart } = useCart();
  const { user } = useAuth();
  const allShippingInformation = `${user?.streetAddress}, ${user?.city}, ${user?.region}, ${user?.country}, ${user?.postalCode}`;
  const allPrice = total + 99 + 200;

  async function sendOrder(e) {
    e.preventDefault();
    try {
      if (!user || !cartItems || cartItems.length === 0) {
        alert("No hay productos en el carrito.");
        return;
      }

      const res = await axios.post(
        "http://localhost:3000/api/orders",
        {
          userId: user.id,
          products: cartItems,
          allPrice,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (res.status === 200) {
        const orderId = res.data.newOrder.orderId;
        console.log("Compra guardada:", res.data);
        sessionStorage.setItem("orderId", orderId);
        clearCart();
        router.push("/confirmation");
      } else {
        alert("Error al enviar el pedido");
      }
    } catch (error) {
      console.error(
        "Error al enviar el pedido:",
        error.response?.data || error.message
      );
    }
  }

  return (
    <div>
      <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
        <form className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
              Resumen del Pedido
            </h2>

            <div className="mt-6 space-y-4 border-b border-t border-gray-200 py-8 dark:border-gray-700 sm:mt-8">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                Information de Envio
              </h4>

              <dl>
                <dd className="mt-1 text-base font-normal text-gray-500 dark:text-gray-400">
                  {allShippingInformation}
                </dd>
              </dl>
            </div>

            <div className="mt-6 sm:mt-8">
              <div className="relative overflow-x-auto border-b border-gray-200 dark:border-gray-800">
                <table className="w-full text-left font-medium text-gray-900 dark:text-white md:table-fixed">
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                    {cartItems.map((product) => (
                      <tr key={product.id}>
                        <td className="whitespace-nowrap py-4 md:w-[384px]">
                          <div className="flex items-center gap-4">
                            <a
                              href="#"
                              className="flex items-center aspect-square w-10 h-10 shrink-0"
                            >
                              <Image
                                className="h-auto w-full max-h-full"
                                src={product.image}
                                alt={product.alt}
                                width={500}
                                height={300}
                              />
                            </a>
                            <a href="#" className="hover:underline">
                              {product.name}
                            </a>
                          </div>
                        </td>

                        <td className="p-4 text-base font-normal text-gray-900 dark:text-white">
                          x{product.quantity}
                        </td>

                        <td className="p-4 text-right text-base font-bold text-gray-900 dark:text-white">
                          ${product.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-4 space-y-6">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Resumen del Pedidos
                </h4>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-gray-500 dark:text-gray-400">
                        Precio original
                      </dt>
                      <dd className="text-base font-medium text-gray-900 dark:text-white">
                        ${total}
                      </dd>
                    </dl>
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-gray-500 dark:text-gray-400">
                        Precio de envio
                      </dt>
                      <dd className="text-base font-medium text-gray-900 dark:text-white">
                        $99
                      </dd>
                    </dl>
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-gray-500 dark:text-gray-400">Tax</dt>
                      <dd className="text-base font-medium text-gray-900 dark:text-white">
                        $200
                      </dd>
                    </dl>
                  </div>

                  <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                    <dt className="text-lg font-bold text-gray-900 dark:text-white">
                      Total
                    </dt>
                    <dd className="text-lg font-bold text-gray-900 dark:text-white">
                      ${allPrice}
                    </dd>
                  </dl>
                </div>

                <div className="gap-4 sm:flex sm:items-center">
                  <Link
                    type="button"
                    href={"/catalog"}
                    className="w-full rounded-lg  border border-gray-200 bg-white px-5  py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                  >
                    Regresar al catalogo
                  </Link>

                  <button
                    type="submit"
                    onClick={sendOrder}
                    className="mt-4 flex w-full items-center justify-center rounded-lg bg-blue-800  px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300  dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 sm:mt-0"
                  >
                    Confirmar Orden
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};

export default CheckoutPage;
