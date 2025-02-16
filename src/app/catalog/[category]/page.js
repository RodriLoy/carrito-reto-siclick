"use client";
import React, { useState, useEffect, use } from "react";
import axios from "axios";
import ProductCard from "../../../components/ProductCard";

const CategoryPage = ({ params }) => {
  const [products, setProducts] = useState([]);
  const resolvedParams = use(params);
  const category = resolvedParams.category;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/api/products");

        const filteredData = data.filter((item) => item.category === category);
        setProducts(filteredData);
      } catch (error) {
        console.error("Error fetching products Category", error);
      }
    };

    fetchProducts();
  }, []);
  return (
    <>
      <div className="container mx-auto px-6">
        <h3 className="text-gray-700 text-2xl font-medium">{category}</h3>
        <span className="mt-3 text-sm text-gray-500">
          {products.length} Products
        </span>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryPage;
