import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import ProductButtons from "@/components/ProductButtons";
import { getProducts, getProductById } from "@/utils";
export const generateMetadata = async ({ params }) => {
  const { id } = await params;
  const product = await getProductById(id);
  if (!product) return { title: "Producto no encontrado" };

  return { title: product.name };
};

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export default async function ProductPage({ params }) {
  const { id } = await params;
  const product = await getProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <section className="relative">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mx-auto max-md:px-2">
          <div className="img">
            <div className="img-box h-full max-lg:mx-auto">
              <Image
                src={product.image}
                alt={product.alt}
                className="object-cover"
                width={900}
                height={900}
                objectFit="cover"
              />
            </div>
          </div>
          <div className="data w-full lg:pr-8 pr-0 xl:justify-start justify-center flex items-center max-lg:pb-10 xl:my-2 lg:my-5 my-0">
            <div className="data w-full max-w-xl">
              <h2 className="font-manrope font-bold text-3xl leading-10 text-gray-900 mb-2 capitalize">
                {product.name}
              </h2>
              <div className="flex flex-col sm:flex-row sm:items-center mb-6">
                <h6 className="font-manrope font-semibold text-2xl leading-9 text-gray-900 pr-5 sm:border-r border-gray-200 mr-5">
                  ${product.price}
                </h6>
              </div>
              <p className="text-gray-500 text-base font-normal mb-5">
                {product.description}
              </p>
              <ProductButtons product={product} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
