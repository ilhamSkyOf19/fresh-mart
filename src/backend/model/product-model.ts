import type { Product } from "../../generated/prisma";

export type ProductReq = {
    category: string;
    title: string;
    price: string;       // <- string, akan dikonversi ke Decimal saat proses
    favorite: boolean;  // optional, default false
    img: string;
    netWeight: number;
    stock: number;
}


export type ProductRes = {
    id: number;
    category: string;
    title: string;
    price: number;
    favorite: boolean;
    img: string;
    netWeight: number;
    stock: number;
}


export const productToRes = (product: Product): ProductRes => {
    return {
        id: product.id,
        category: product.category,
        title: product.title,
        price: Number(product.price),
        favorite: product.favorite,
        img: product.img,
        netWeight: product.netWeight,
        stock: product.stock,
    }
}