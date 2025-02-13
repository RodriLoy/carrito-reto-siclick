import fs from "fs";
import path from "path";

export async function GET() {
  const filePath = path.join(process.cwd(), "src", "data", "products.json");
  const fileData = fs.readFileSync(filePath, "utf-8");
  const products = JSON.parse(fileData);
  return new Response(JSON.stringify(products), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
