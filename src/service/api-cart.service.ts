import API from "../lib/axios";
import type { CartReqAPI, CartResAPI } from "../types/cart-types";

export class ApiCartService {

    // create
    static async create(cart: CartReqAPI): Promise<CartResAPI | undefined> {
        try {
            const result = await API.post("/carts", cart);
            return result.data;
        } catch (error) {
            console.error("API error:", error);
            return undefined;
        }
    }

    // get all 
    static async getAll(): Promise<CartResAPI[] | undefined> {
        try {
            const result = await API.get("/carts");
            return result.data;
        } catch (error) {
            console.error("API error:", error);
            return undefined;
        }
    }

    // get 
    static async get(idProduct: number): Promise<CartResAPI | undefined> {
        try {
            const result = await API.get(`/carts/${idProduct}`);
            return result.data;
        } catch (error) {
            console.error("API error:", error);
            return undefined;
        }
    }

    // update api 
    static async updateQuantity(idProduct: number, quantity: number, type: string): Promise<{ success: boolean, message: string } | undefined> {
        try {
            if (!idProduct) return { success: false, message: 'Product not found' };
            // find product
            const findIdProduct = await this.get(idProduct);
            // cek is not found product
            if (!findIdProduct) {
                await this.create({ idProduct, quantity });
                return { success: true, message: 'Product added to cart' };
            } else {
                if (findIdProduct?.product?.stock !== undefined) {
                    const resultQuantity = type === 'add' ? findIdProduct.quantity + quantity : findIdProduct.quantity - quantity;
                    console.log(resultQuantity);
                    //cek stock product
                    if (findIdProduct.product.stock < resultQuantity) return { success: false, message: 'Stock not enough' };

                    // update qty product if stock is enough 
                    await API.put(`/carts/${idProduct}?quantity=${resultQuantity}`);
                    return { success: true, message: 'Product added in cart' };
                } else {
                    return { success: false, message: 'Failed to add product to cart' };
                }
            }



        } catch (error) {
            console.error("API error:", error);
            return undefined;
        }
    }

    // delete 
    static async delete(id: number): Promise<{ success: boolean, message: string }> {
        try {
            if (!id) return { success: false, message: 'Product not found' };
            const result = await API.delete(`/carts/${id}`);
            return { success: true, message: result.data.message };
        } catch (error) {
            console.error("API error:", error);
            return { success: false, message: 'Failed to delete product from cart' };
        }
    }
}