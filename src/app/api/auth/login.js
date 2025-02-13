import fs from "fs";
import path from "path";
import bcrypt from "bcrypt";

export async function POST(req) {
  const { username, password } = await req.json();

  const filePath = path.join(process.cwd(), "src", "data", "users.json");
  const users = JSON.parse(fs.readFileSync(filePath, "utf8"));

  const user = users.find((u) => u.username === username);
  if (!user) {
    return Response.json({ error: "Usuario no encontrado" }, { status: 404 });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return Response.json({ error: "Contraseña incorrecta" }, { status: 401 });
  }

  return Response.json({ message: "Login exitoso", user });
}
