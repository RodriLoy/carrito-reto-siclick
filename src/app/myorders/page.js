"use client";

import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import axios from "axios";
import OrderCard from "@/components/OrderCard";

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);

  const { user } = useAuth();

  useEffect(() => {
    if (!user) return;
    const fetchOrders = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:3000/api/orders?userId=${user.id}`
        );
        const sortedOrders = data.orders.sort((a, b) => {
          return new Date(b.date) - new Date(a.date); // Ordenar de más reciente a más antigua
        });
        setOrders(sortedOrders);
      } catch (error) {
        console.error("Error fetching orders", error);
      }
    };
    fetchOrders();
  }, [user]);

  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="font-manrope font-extrabold text-3xl lead-10 text-black mb-9">
          Mis Pedidos
        </h2>

        <div className="flex sm:flex-col lg:flex-row sm:items-center justify-between"></div>
        {orders.length === 0 ? (
          <div className="mt-10 text-center text-gray-500 text-lg">
            Nunca has hecho una orden.
          </div>
        ) : (
          orders.map((order, i) => (
            <OrderCard order={order} key={`${order.orderid}-${order.date}`} />
          ))
        )}
      </div>
    </section>
  );
};

export default OrderHistory;
