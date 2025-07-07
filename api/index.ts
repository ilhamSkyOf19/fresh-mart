import { Hono } from "hono";
import { cors } from "hono/cors";
import { productController } from "../src/backend/controller/product.controller";
import { cartController } from "../src/backend/controller/cart.controller";
import { handle } from "hono/vercel"; // ✅ ini penting

const app = new Hono();

app.use("*", cors());

app.route("/", productController);
app.route("/", cartController);

// ✅ ini membuat Hono bisa berjalan di Vercel properly
export const GET = handle(app);
export const POST = handle(app);
export const PUT = handle(app);
export const DELETE = handle(app);
