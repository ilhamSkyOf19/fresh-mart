import type { Cart, Product } from "../../generated/prisma";

export type CartReq = {
    idProduct: number;
    quantity: number;
}

export type CartRes = {
    id: number;
    idProduct: number;
    quantity: number;
}


export type CartResFull = {
    id: number;
    idProduct: number;
    quantity: number;
    product: Product;
}


// response 
export const cartToRes = (cart: Cart): CartRes => {
    return {
        id: cart.id,
        idProduct: cart.idProduct,
        quantity: cart.quantity
    }
}

export const cartToResFull = (cart: Cart & { product: Product }): CartResFull => {
    return {
        id: cart.id,
        idProduct: cart.idProduct,
        quantity: cart.quantity,
        product: cart.product
    }
}