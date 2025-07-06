import { ApiCartService } from "../service/api-cart.service";
import { ProductServiceAPI } from "../service/api-product.service";
import type { ProductRes } from "../types/product-type";

export const handleCart = async (idProduct: number | null, quantity: number, handleCountCart: () => void) => {
    try {
        if (!idProduct) return alert('Product not found');
        const result = await ApiCartService.updateQuantity(idProduct, quantity, 'add');
        if (result?.success) {
            handleCountCart();
            alert(result.message);
        } else if (result) {
            alert(result.message); // misalnya: 'Stock not enough'
        }
    } catch (error) {
        console.log(error);
        return alert('Failed to add product to cart');
    }
};


// handle favorite 

export const handleFavorite = async (id: number | null, favorite: string, setData: React.Dispatch<React.SetStateAction<ProductRes[] | null>>, handleCountFavorite: () => void) => {
    if (!id) return;

    await ProductServiceAPI.updateFavorite(id ?? 0, favorite);

    setData((prev) =>
        prev
            ? prev.map((item) =>
                item.id === id ? { ...item, favorite: favorite === 'true' } : item
            )
            : prev
    );
    handleCountFavorite();
};