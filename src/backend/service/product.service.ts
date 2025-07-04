import { prismaClient } from "../application/database";
import { productToRes, type ProductReq, type ProductRes } from "../model/product-model";

export class ProductService {
    // create 
    static async create(req: ProductReq): Promise<ProductRes | undefined> {

        try {
            // create 
            const result = await prismaClient.product.create({ data: req });

            return productToRes(result);
        } catch (error) {
            console.log(error);
            return undefined;
        }
    }


    // get 
    static async get(category: string): Promise<ProductRes[] | undefined> {

        try {
            // get 
            const result = await prismaClient.product.findMany({ where: { category: category as string } });
            // return 
            return result.map(productToRes);

        } catch (error) {
            console.log(error);
            return undefined;
        }
    }

    // update 
    static async updateFavorite(id: number, favorite: string): Promise<ProductRes | undefined> {


        try {
            // update
            const resultFavorite = favorite === 'true' ? true : false;
            const result = await prismaClient.product.update({ where: { id }, data: { favorite: resultFavorite } });
            // return 
            return productToRes(result);
        } catch (error) {
            console.log(error);
            return undefined;
        }
    }
}