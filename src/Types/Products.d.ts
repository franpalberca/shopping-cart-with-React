export type Product = {
    id: number;
    nameProduct: string;
    img: string;
    stock: boolean;
    price: number;
};

export type CategoryProducts = {
    id: number;
    name: string;
    img: string;
    items: Product[];
    };
