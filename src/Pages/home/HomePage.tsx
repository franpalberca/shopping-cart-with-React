import {useEffect, useState} from 'react';
import {Product} from '../../Components/Product/Product';
import './homepage.css';

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