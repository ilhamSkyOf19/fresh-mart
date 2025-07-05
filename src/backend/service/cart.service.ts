import { prismaClient } from "../application/database";
import { HTTPException } from 'hono/http-exception'
import { cartToRes, cartToResFull, type CartReq, type CartRes, type CartResFull } from "../model/cart-model";

export class CartService {

    // create 
    static async create(req: CartReq): Promise<CartRes | undefined> {
        try {
            const result = await prismaClient.cart.create({
                data: {
                    quantity: req.quantity,
                    product: {
                        connect: {
                            id: req.idProduct
                        }
                    }
                },
                include: {
                    product: true
                }
            });
            return cartToRes(result);
        } catch (error) {
            console.log(error);
            return undefined;
        }
    }

    // get detail
    static async get(idProduct: number): Promise<CartResFull | undefined> {
        try {
            const result = await prismaClient.cart.findFirst({ where: { idProduct }, include: { product: true } });
            return result ? cartToResFull(result) : undefined;
        } catch (error) {
            console.log(error);
            return undefined;
        }
    }
    // get detail
    static async getCart(id: number): Promise<CartResFull | undefined> {
        try {
            const result = await prismaClient.cart.findFirst({ where: { id }, include: { product: true } });
            return result ? cartToResFull(result) : undefined;
        } catch (error) {
            console.log(error);
            return undefined;
        }
    }

    // get all
    static async getAll(): Promise<CartResFull[] | undefined> {
        try {
            const result = await prismaClient.cart.findMany({ include: { product: true } });
            return result.map(cartToResFull);
        } catch (error) {
            console.log(error);
            return undefined;
        }
    }



    // update quantity 
    static async updateQuantity(idProduct: number, quantity: number): Promise<CartRes | undefined> {
        try {
            const findIdProduct = await this.get(idProduct);

            if (findIdProduct?.product?.stock !== undefined && findIdProduct.product.stock < quantity) {
                return undefined;
            }

            if (!findIdProduct) return undefined;
            const result = await prismaClient.cart.update({
                where: {
                    id: findIdProduct.id
                },
                data: {
                    quantity
                },
                include: {
                    product: true
                }
            });
            return cartToRes(result);
        } catch (error) {
            console.log(error);
            return undefined;
        }
    }

    // delete 
    static async delete(id: number): Promise<CartRes> {
        try {
            // find cart
            const findCart = await this.getCart(id);
            if (!findCart) throw new HTTPException(404, { message: 'Product not found' });
            await prismaClient.cart.delete({ where: { id }, include: { product: true } });


            return cartToRes(findCart);
        } catch (error) {
            console.log(error);
            throw new HTTPException(500, { message: 'Failed to delete product from cart' });
        }
    }
}

