import { Hono } from "hono";
import { cors } from "hono/cors";
import { productController } from "../src/backend/controller/product.controller";
import { cartController } from "../src/backend/controller/cart.controller";
import "dotenv/config";

const app = new Hono();

app.use("*", cors());

// Gunakan route langsung, tanpa '/api' karena kamu sudah berada di /api di Vercel
app.route("/", productController);
app.route("/", cartController);

export default app;
