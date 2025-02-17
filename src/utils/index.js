import axios from "axios";

export async function getProducts() {
  try {
    const { data } = await axios.get("http://localhost:3000/api/products");
    return data;
  } catch (error) {
    console.error("Error fetching products", error);
    return [];
  }
}

export const getProductById = async (id) => {
  const { data } = await axios.get(
    `http://localhost:3000/api/products?id=${id}`
  );
  return data;
};
