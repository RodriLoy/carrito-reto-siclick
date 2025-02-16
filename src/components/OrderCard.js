import React from "react";
import OrderProduct from "./OrderProduct";

const OrderCard = ({ order }) => {
  return (
    <div className="mt-7 border border-gray-300 pt-9">
      <div className="flex max-md:flex-col items-center justify-between px-3 md:px-11">
        <div className="data">
          <p className="font-medium text-lg leading-8 text-black whitespace-nowrap">
            Orden: #{order.orderId}
          </p>
          <p className="font-medium text-lg leading-8 text-black mt-3 whitespace-nowrap">
            Fecha de pedido :{" "}
            {new Date(order.date).toLocaleDateString("es-ES", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>
      </div>
      <svg
        className="my-9 w-full"
        xmlns="http://www.w3.org/2000/svg"
        width="1216"
        height="2"
        viewBox="0 0 1216 2"
        fill="none"
      >
        <path d="M0 1H1216" stroke="#D1D5DB" />
      </svg>

      {order.products.map((product, i) => (
        <OrderProduct product={product} key={`${product.id}-${product.alt}`} />
      ))}

      <div className="px-3 md:px-11 flex items-center justify-between max-sm:flex-col-reverse">
        <div className="flex max-sm:flex-col-reverse items-center"></div>
        <p className="font-medium text-xl leading-8 text-black max-sm:py-4">
          {" "}
          <span className="text-gray-500">Total: </span> &nbsp;$
          {order.total}
        </p>
      </div>
    </div>
  );
};

export default OrderCard;
