import {useEffect, useState} from 'react';
import {Product} from '../../Components/Product/Product';
import './homepage.css';
import {ReducerAction, ReducerState} from '../../Types/Products';

const url = 'http://localhost:3004/PRODUCTS';

export const HomePage = () => {
	const [products, setProducts] = useState([]);

	const fetchProducts = async () => {
		try {
			const response = await fetch(url);
			const data = await response.json();
			setProducts(data);
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		fetchProducts();
	}, []);

	const reducer = (state: ReducerState, action: ReducerAction): ReducerState => {
		switch (action.type) {
			case 'FILTER_PRODUCTS':
				const minPrice = action.payload;
				const maxPrice = action.payload + 9;
				const filteredProducts = state.products.filter((product) => product.price >= minPrice && product.price <= maxPrice);
				return {...state, filteredProducts};
			default:
				return state;
		}
	};

	return (
		<div className="shop">
			<div className="shopTitle">
				<h1>FRAN'S E-COMMERCE</h1>
			</div>

			<div className="products">
				{products.map((product) => (
					<Product key={product.id} data={product} />
				))}
			</div>
		</div>
	);
};
