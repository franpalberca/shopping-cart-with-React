import {useContext, useEffect, useState} from 'react';
import {ShopContext} from '../../config/context/ShopContext';
import {Product} from '../../Types/Products';
import {PRODUCTS} from '../../../db.json';

export const WishlistPage = () => {
	const shopContext = useContext(ShopContext);

	if (!shopContext || !shopContext.wishlistItems || !shopContext.removeFromWishlist) {
		return null;
	}

	const {wishlistItems, removeFromWishlist} = shopContext;
	const [products, setProducts] = useState<Product[]>([]);

	useEffect(() => {
		const storedWishlistItems = localStorage.getItem('wishlistItems');
		if (storedWishlistItems) {
			const parsedWishlistItems = JSON.parse(storedWishlistItems);
			if (Array.isArray(parsedWishlistItems)) {
				shopContext.setWishlistItems(parsedWishlistItems);
			}
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
	}, [wishlistItems]);

	useEffect(() => {
		const filteredProducts = PRODUCTS.filter((product: Product) => wishlistItems.includes(product.id));
		setProducts(filteredProducts);
	}, [wishlistItems]);

	return (
		<div>
			<h2>Wishlist</h2>
			{wishlistItems.length === 0 ? (
				<p>Your wishlist is empty.</p>
			) : (
				<ul>
					{products.map((product: Product) => (
						<li key={product.id}>
							<div>
								<img src={product.img} alt={product.nameProduct} />
								<span>{product.nameProduct}</span>
							</div>
							<button onClick={() => removeFromWishlist(product.id)}>Remove</button>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};
