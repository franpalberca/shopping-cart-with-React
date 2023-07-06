import {useEffect, useState} from 'react';
import {ProductItem} from '../../Components/Product/Product.tsx';
import './homepage.css';
import {Footer} from '../../Components/Footer/Footer.tsx';

const apiUrl = import.meta.env.VITE_API_URL;

export const HomePage = () => {
	const [products, setProducts] = useState([]);

	const fetchProducts = async () => {
		try {
			const response = await fetch(apiUrl);
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
		<>
			<div className="shop">
				<div className="products">
					{products.map((product) => (
						<ProductItem key={product.id} data={product} />
					))}
				</div>
			</div>
			<Footer />
		</>
	);
};
