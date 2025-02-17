import ProductCard from "../../components/ProductCard";
import { getProducts } from "@/utils";

export default async function CatalogPage() {
  const products = await getProducts();

  return (
    <div className="container mx-auto px-6">
      <h3 className="text-gray-700 text-2xl font-medium">
        Todos los Productos
      </h3>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
