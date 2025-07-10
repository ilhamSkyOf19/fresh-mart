import { Hono } from "hono";
import { handle } from 'hono/vercel'
import { cors } from "hono/cors";
import { productController } from "../src/backend/controller/product.controller";
import { cartController } from "../src/backend/controller/cart.controller";

const app = new Hono().basePath("/api");

app.use("*", cors());

app.route("/", productController);
app.route("/", cartController);

// export const GET = handle(app);
// export const POST = handle(app);
// export const PUT = handle(app);
// export const DELETE = handle(app);

export default app;
