export async function POST(req) {
  const { username, password, email } = await req.json();

  const filePath = path.join(process.cwd(), "data", "users.json");
  const users = JSON.parse(fs.readFileSync(filePath, "utf8"));

  if (users.some((u) => u.username === username)) {
    return Response.json({ error: "El usuario ya existe" }, { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = {
    id: users.length + 1,
    username,
    email,
    password: hashedPassword,
  };

  users.push(newUser);
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));

  return Response.json({
    message: "Usuario registrado correctamente",
    newUser,
  });
}
