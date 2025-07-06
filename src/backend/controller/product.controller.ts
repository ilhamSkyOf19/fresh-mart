import { Hono } from "hono";
import type { ProductReq } from "../model/product-model";
import { ProductService } from "../service/product.service";

const productController = new Hono();


productController.get('/products', async (c) => {
    const category = c.req.query("category");
    const result = await ProductService.get(category as string);;
    return c.json(result);
})

productController.get('/products/favorite/:favorite', async (c) => {
    const favorite = c.req.param("favorite") === 'true' ? true : false;
    const result = await ProductService.getFavorite(favorite as boolean);;
    return c.json(result);
})

productController.post('/products', async (c) => {
    const req = await c.req.json() as ProductReq;
    const result = await ProductService.create(req);
    return c.json(result);
});

productController.put('/products/:id', async (c) => {
    const id = parseInt(c.req.param("id"));
    const favorite = c.req.query("favorite");
    const result = await ProductService.updateFavorite(id, favorite as string);
    return c.json(result);
})

export { productController }