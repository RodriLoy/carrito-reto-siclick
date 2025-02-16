import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

const filePath = path.join(process.cwd(), "src", "data", "orders.json");

export async function POST(req) {
  try {
    const bodyText = await req.text();

    if (!bodyText) {
      return NextResponse.json(
        { error: "El body está vacío" },
        { status: 400 }
      );
    }

    const { userId, products, allPrice } = JSON.parse(bodyText);

    if (!userId || !products || products.length === 0) {
      return NextResponse.json({ error: "Datos inválidos" }, { status: 400 });
    }

    let orders = [];
    if (fs.existsSync(filePath)) {
      const fileData = fs.readFileSync(filePath, "utf8");
      if (fileData) {
        orders = JSON.parse(fileData);
      }
    }

    const orderDate = new Date().toISOString();
    const newOrder = {
      orderId: Date.now(),
      date: orderDate,
      products,
      allPrice,
      total: products.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      ),
    };

    let userOrders = orders.find((order) => order.userId === userId);
    if (userOrders) {
      userOrders.orders.push(newOrder);
    } else {
      orders.push({ userId, orders: [newOrder] });
    }

    fs.writeFileSync(filePath, JSON.stringify(orders, null, 2));

    return NextResponse.json({
      message: "Compra guardada exitosamente",
      newOrder,
    });
  } catch (error) {
    console.error("Error en el servidor:", error);
    return NextResponse.json(
      { error: "Error en el servidor" },
      { status: 500 }
    );
  }
}

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userId"); // Obtener el userId de los parámetros de la URL

  const filePath = path.join(process.cwd(), "src", "data", "orders.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const ordersData = JSON.parse(fileContents);

  if (!userId) {
    return NextResponse.json({ error: "userId es requerido" }, { status: 400 });
  }

  const userOrders = ordersData.find((user) => user.userId === userId);

  if (!userOrders) {
    return NextResponse.json(
      { error: "Usuario no encontrado" },
      { status: 404 }
    );
  }

  return NextResponse.json(userOrders, { status: 200 });
}
