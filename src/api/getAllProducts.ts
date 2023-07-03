import { useEffect } from 'react';

export const getProducts = () => {

    useEffect(() => {
		const getAllProducts = async () => {
			const url = 'http://localhost:3004';
			const response = await fetch(url);
			const products = await response.json();
			console.log(products);
        };

		getAllProducts();
	}, []);

};
