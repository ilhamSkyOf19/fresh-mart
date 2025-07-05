import { Hono } from "hono";
import type { CartReq } from "../model/cart-model";
import { CartService } from "../service/cart.service";

const cartController = new Hono();


// create 
cartController.post('/carts', async (c) => {
    const req = await c.req.json() as CartReq;
    const result = await CartService.create(req);
    return c.json(result);
})

// get all 
cartController.get('/carts', async (c) => {
    const result = await CartService.getAll();
    return c.json(result);
})

// get 
cartController.get('/carts/:id', async (c) => {
    const idProduct = Number(c.req.param("id"));
    const result = await CartService.get(idProduct);
    return c.json(result);
})


cartController.put('/carts/:id', async (c) => {
    const idProduct = Number(c.req.param("id"));
    const quantity = Number(c.req.query("quantity"));
    const result = await CartService.updateQuantity(idProduct, quantity as number);
    return c.json(result);
})


cartController.delete('/carts/:id', async (c) => {
    const id = Number(c.req.param("id"));
    const result = await CartService.delete(id);
    return c.json(result);
})




export { cartController }