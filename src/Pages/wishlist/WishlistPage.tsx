import {useContext, useState, useEffect} from 'react';
import {ShopContext} from '../../config/context/ShopContext';
import {Product} from '../../Types/Products';
import './wishlistpage.css';
import { Footer } from '../../Components/Footer/Footer';

const apiUrl = import.meta.env.VITE_API_URL;

export const WishlistPage = () => {
	const shopContext = useContext(ShopContext);
	const [products, setProducts] = useState<Product[]>([]);

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

	if (!shopContext || !shopContext.wishlistItems || !shopContext.removeFromWishlist) {
		return null;
	}

	const {wishlistItems, removeFromWishlist} = shopContext;

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

	const filteredProducts = products.filter((product: Product) => wishlistItems.includes(product.id));

	return (
		<>
        <div>
            <h2 className='wishTitle'>Wishlist</h2>
            {wishlistItems.length === 0 ? (
                <p>Your wishlist is empty.</p>
            ) : (
                <ul style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr'}}>
                    {filteredProducts.map((product: Product) => (
                        <li style={{listStyle:'none'}} key={product.id}>
                            <div className="wishItems">
							<h3 className='wishProductTitle'>{product.nameProduct}</h3>
                                <img className='wishProductImg'src={product.img} alt={product.nameProduct} />
                            <button onClick={() => removeFromWishlist(product.id)}>Remove</button>
							</div>
						</li>
                    ))}
                </ul>
            )}
        </div>
		<Footer />
		</>
    );
};
