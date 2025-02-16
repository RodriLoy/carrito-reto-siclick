import fs from "fs";
import path from "path";
import bcrypt from "bcrypt";

export async function POST(req) {
  const {
    firstName,
    lastName,
    maternalLastName,
    email,
    password,
    country,
    streetAddress,
    city,
    region,
    postalCode,
  } = await req.json();

  const filePath = path.join(process.cwd(), "src", "data", "users.json");
  const users = JSON.parse(fs.readFileSync(filePath, "utf8"));

  if (users.some((u) => u.email === email)) {
    return Response.json(
      { error: "El email registrado ya existe" },
      { status: 400 }
    );
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = {
    id: crypto.randomUUID(),
    firstName,
    lastName,
    maternalLastName,
    email,
    password: hashedPassword,
    country,
    streetAddress,
    city,
    region,
    postalCode,
  };

  users.push(newUser);
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));

  return Response.json({
    message: "Usuario registrado correctamente",
    newUser,
  });
}
