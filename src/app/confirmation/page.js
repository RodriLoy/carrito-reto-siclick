"use client";
import React from "react";
import Link from "next/link";
import { useAuth } from "@/app/context/AuthContext";

const OrderConfirmationPage = () => {
  const { user } = useAuth();
  const storedOrderId = sessionStorage.getItem("orderId");
  const fechaISO = new Date().toISOString();
  const fecha = new Date(fechaISO);

  const newDate = fecha.toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="mx-auto max-w-2xl px-4 2xl:px-0">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl mb-2">
          Gracias por tu orden!
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mb-6 md:mb-8">
          Tu orden{" "}
          <a
            href="#"
            className="font-medium text-gray-900 dark:text-white hover:underline"
          >
            #{storedOrderId}
          </a>{" "}
          Será procesado dentro de las 24 horas durante los días laborales. Te
          notificaremos por correo electrónico una vez que tu pedido haya sido
          enviado.
        </p>
        <div className="space-y-4 sm:space-y-2 rounded-lg border border-gray-100 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800 mb-6 md:mb-8">
          <dl className="sm:flex items-center justify-between gap-4">
            <dt className="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">
              Fecha de orden
            </dt>
            <dd className="font-medium text-gray-900 dark:text-white sm:text-end">
              {newDate}
            </dd>
          </dl>
          {/* <dl className="sm:flex items-center justify-between gap-4">
            <dt className="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">
              Payment Method
            </dt>
            <dd className="font-medium text-gray-900 dark:text-white sm:text-end">
              JPMorgan monthly installments
            </dd>
          </dl> */}
          <dl className="sm:flex items-center justify-between gap-4">
            <dt className="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">
              Nombre
            </dt>
            <dd className="font-medium text-gray-900 dark:text-white sm:text-end">
              {user.firstName} {user.lastName} {user.maternalLastName}
            </dd>
          </dl>
          <dl className="sm:flex items-center justify-between gap-4">
            <dt className="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">
              Address
            </dt>
            <dd className="font-medium text-gray-900 dark:text-white sm:text-end">
              {user?.streetAddress}, {user?.city}, {user?.region},
              {user?.country}, {user?.postalCode}
            </dd>
          </dl>
          {/* <dl className="sm:flex items-center justify-between gap-4">
            <dt className="font-normal mb-1 sm:mb-0 text-gray-500 dark:text-gray-400">
              Phone
            </dt>
            <dd className="font-medium text-gray-900 dark:text-white sm:text-end">
              {user.phoneNumber}
            </dd>
          </dl> */}
        </div>
        <div className="flex items-center space-x-4">
          <Link
            href="/catalog"
            className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Regresar al catalogo
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OrderConfirmationPage;
