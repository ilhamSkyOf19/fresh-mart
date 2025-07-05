import type { Cart, Product } from "../generated/prisma";

export type CartReqAPI = {
    idProduct: number;
    quantity: number;
}

export type CartResAPI = {
    id: number;
    idProduct: number;
    quantity: number;
    product?: Product
}



// response 
export const cartToResAPI = (cart: Cart & { product: Product }): CartResAPI => {
    return {
        id: cart.id,
        idProduct: cart.idProduct,
        quantity: cart.quantity,
        product: cart.product
    }
}