import { Hono } from "hono";
import { cors } from "hono/cors";
import { productController } from "../src/backend/controller/product.controller";
import { cartController } from "../src/backend/controller/cart.controller";

const app = new Hono().basePath("/api");

app.use(
    "*",
    cors({
        origin: "https://fresh-mart-indol.vercel.app/", // ganti dengan domain vercel kamu
        credentials: true, // kalau pakai cookie / auth
    })
);


app.route("/", productController);
app.route("/", cartController);

export default app;
