import React from "react";
import ProductCard from "../../../components/ProductCard";
import { getProducts } from "@/utils";

const CategoryPage = async ({ params }) => {
  const resolvedParams = await params;
  const category = resolvedParams.category;
  const products = await getProducts();

  const filteredData = products.filter((item) => item.category === category);

  return (
    <>
      <div className="container mx-auto px-6">
        <h3 className="text-gray-700 text-2xl font-medium">{category}</h3>
        <span className="mt-3 text-sm text-gray-500">
          {filteredData.length} Products
        </span>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
          {filteredData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryPage;
