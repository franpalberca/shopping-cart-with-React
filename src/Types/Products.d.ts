import {Product} from '../Components/Product/Product';

export type Product = {
	id: number;
	nameProduct: string;
	img: string;
	stock: boolean;
	price: number;
};

export interface CartItemProps {
	data: Product;
}

export type ReducerState = {
	products: Product[];
	filteredProducts: Product[];
};

export type ReducerAction = {type: 'FILTER_PRODUCTS'; payload: number};
