import fs from "fs";
import path from "path";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

const SECRET_KEY = "my_secret_key";

export async function POST(req) {
  const { email, password } = await req.json();

  const filePath = path.join(process.cwd(), "src", "data", "users.json");
  const users = JSON.parse(fs.readFileSync(filePath, "utf8"));

  const user = users.find((u) => u.email === email);
  if (!user) {
    return Response.json({ error: "Usuario no encontrado" }, { status: 404 });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return Response.json({ error: "Contraseña incorrecta" }, { status: 401 });
  }

  const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, {
    expiresIn: "1h",
  });

  const cookieStore = await cookies();

  cookieStore.set("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 3600,
    path: "/",
  });

  return Response.json({ message: "Login exitoso", user });
}
