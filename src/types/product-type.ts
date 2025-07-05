
export type ProductReq = {
    category: string;
    title: string;
    price: number;       // <- string, akan dikonversi ke Decimal saat proses
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



export type Category = ['bread', 'fruits', 'organic', 'seafood', 'wine & beer'];
