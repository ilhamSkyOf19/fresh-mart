import { Hono } from "hono";
import { cors } from "hono/cors";
import { productController } from "../src/backend/controller/product.controller";
import { cartController } from "../src/backend/controller/cart.controller";

const app = new Hono().basePath("/api");

app.use("*", cors());

app.route("/", productController);
app.route("/", cartController);

export default app;
