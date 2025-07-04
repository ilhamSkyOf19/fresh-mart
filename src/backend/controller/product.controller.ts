import { Hono } from "hono";
import type { ProductReq } from "../model/product-model";
import { ProductService } from "../service/product.service";

const productController = new Hono();


productController.get('/products', async (c) => {
    const category = c.req.query("category");
    const result = await ProductService.get(category as string);;
    return c.json(result);
})

productController.post('/products', async (c) => {
    const req = await c.req.json() as ProductReq;
    console.log("📦 Incoming product:", req); // debug log

    const result = await ProductService.create(req);
    console.log("✅ Created product:", result); // debug log
    return c.json(result);
});

productController.put('/products/:id', async (c) => {
    const id = parseInt(c.req.param("id"));
    const favorite = c.req.query("favorite");
    const result = await ProductService.updateFavorite(id, favorite as string);
    return c.json(result);
})

export { productController }