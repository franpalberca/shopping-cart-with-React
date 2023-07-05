import {useParams} from 'react-router-dom';
import {useContext, useEffect} from 'react';
import {ShopContextValue} from '../../Types/ShopContext';
import {ShopContext} from '../../config/context/ShopContext';
import {Heart} from 'phosphor-react';
import './productpage.css';
import {PRODUCTS} from '../../../db.json';

export const ProductPage = () => {
	const {id} = useParams();
	const product = PRODUCTS.find((product) => product.id === Number(id));

	if (!product) {
		return <p>Product not found</p>;
	}

	const {nameProduct, price, img, stock} = product;
	const stockText = stock ? 'THERE IS STOCK' : 'SORRY, THERE IS NOT STOCK AVAILABLE AT THIS MOMENT';
	const stockStyle = stock ? {color: 'green'} : {color: 'red'};

	const shopContext = useContext<ShopContextValue | null>(ShopContext);

	if (!shopContext || !shopContext.addToCart || !shopContext.addToWishlist || !shopContext.removeFromWishlist) {
		return null;
	}

	const {cartItems, addToCart, wishlistItems, addToWishlist, setWishlistItems, removeFromWishlist} = shopContext;
	const cartItemCount = cartItems[id];
	const isWishlistActive = wishlistItems.includes(id);

	useEffect(() => {
		localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
	}, [wishlistItems]);

	const handleAddToCart = () => {
		addToCart(id);
	};

	const handleAddToWishlist = () => {
		if (isWishlistActive) {
			shopContext.removeFromWishlist(id);
		} else {
			shopContext.addToWishlist(id);
		}
	};

	return (
		<div>
			<h2>Product Details</h2>
			<h3>{nameProduct}</h3>
			<img src={img} alt={nameProduct} />
			<p>Price: ${price}</p>
			<b>
				<p style={stockStyle}>{stockText}</p>
			</b>
			<button className="addToCartButton" onClick={handleAddToCart}>
				Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
			</button>
			<button className={`addToWishlistButton ${isWishlistActive ? 'active' : ''}`} onClick={handleAddToWishlist}>
				<Heart size={25} />
			</button>
		</div>
	);
};
