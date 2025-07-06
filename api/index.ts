import { Hono } from "hono";
import { cors } from "hono/cors";
import { productController } from "../src/backend/controller/product.controller";
import "dotenv/config";
import { cartController } from "../src/backend/controller/cart.controller";


export const app = new Hono();

app.use("*", cors());

// app.get("/", (c) => c.text("Hello World!"));

app.route("/api", productController);
app.route("/api", cartController);

export default app