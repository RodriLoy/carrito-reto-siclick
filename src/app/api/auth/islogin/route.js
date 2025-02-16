import jwt from "jsonwebtoken";
import fs from "fs";
import path from "path";
import { cookies } from "next/headers";

const filePath = path.join(process.cwd(), "src", "data", "users.json");

const users = JSON.parse(fs.readFileSync(filePath, "utf8"));

const SECRET_KEY = "my_secret_key";

export async function GET() {
  const cookieStore = await cookies();

  const token = cookieStore.get("token");

  if (!token) {
    return Response.json({ error: "No autenticado" }, { status: 401 });
  }

  try {
    const decoded = jwt.verify(token.value, SECRET_KEY);
    const user = users.find((u) => u.id === decoded.id);
    return Response.json({ user });
  } catch (error) {
    return Response.json({ error: "Token inválido" }, { status: 401 });
  }
}
