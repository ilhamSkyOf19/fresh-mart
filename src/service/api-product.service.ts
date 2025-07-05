import API from "../lib/axios";
import type { ProductReq, ProductRes } from "../types/product-type";


export class ProductServiceAPI {
    static async createProduct(product: ProductReq): Promise<ProductRes | undefined> {
        try {
            const result = await API.post("/api/products", product);
            return result.data;
        } catch (error) {
            console.error("API error:", error);
            return undefined;
        }
    }

    // get 
    static async getProducts(category: string): Promise<ProductRes[] | undefined> {
        try {
            const result = await API.get('/api/products', { params: { category } });
            return result.data;
        } catch (error) {
            console.error("API error:", error);
            return undefined;
        }
    }

    // update 
    static async updateFavorite(id: number, favorite: string): Promise<ProductRes | undefined> {
        try {
            const result = await API.put(`/api/products/${id}?favorite=${favorite}`);
            return result.data;
        } catch (error) {
            console.error("API error:", error);
            return undefined;
        }
    }
}

