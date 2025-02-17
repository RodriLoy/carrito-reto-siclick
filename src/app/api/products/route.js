import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "src", "data", "products.json");

function getProducts() {
  const fileData = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(fileData);
}

export async function GET(req) {
  const { searchParams } = req.nextUrl;
  const productId = searchParams.get("id");

  const products = getProducts();

  if (productId) {
    const product = products.find((p) => p.id.toString() === productId);
    if (!product) {
      return new Response(
        JSON.stringify({ message: "Producto no encontrado" }),
        {
          status: 404,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
    return new Response(JSON.stringify(product), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify(products), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
