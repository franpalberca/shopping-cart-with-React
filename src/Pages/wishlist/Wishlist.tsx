import {useContext, useEffect, useState} from 'react';
import {ShopContext} from '../../config/context/ShopContext';
import {Product} from '../../Types/Products';

const url = 'http://localhost:3004/PRODUCTS';

export const Wishlist = () => {
	const shopContext = useContext(ShopContext);

	if (!shopContext || !shopContext.wishlistItems) {
		return null;
	}

	const {wishlistItems, removeFromWishlist} = shopContext;
	const [products, setProducts] = useState<Product[]>([]);

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
		<div>
			<h2>Wishlist</h2>
			{wishlistItems.length === 0 ? (
				<p>Your wishlist is empty.</p>
			) : (
				<ul>
					{products.length > 0 &&
						wishlistItems.map((itemId) => {
							const product: Product | undefined = products.find((product: Product) => product.id === itemId);
							if (!product) {
								return null;
							}

							return (
								<li key={itemId}>
									<div>
										<img src={product.img} alt={product.nameProduct} />
										<span>{product.nameProduct}</span>
									</div>
									<button onClick={() => removeFromWishlist(itemId)}>Remove</button>
								</li>
							);
						})}
				</ul>
			)}
		</div>
	);
};
