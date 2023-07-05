import {useParams} from 'react-router-dom';
import {useContext, useEffect, useState} from 'react';
import {ShopContextValue} from '../../Types/ShopContext';
import {ShopContext} from '../../config/context/ShopContext';
import {Heart} from 'phosphor-react';
import './productpage.css';
import { Product } from '../../Types/Products';

export const ProductPage = () => {
	const {id} = useParams();

	const shopContext = useContext<ShopContextValue | null>(ShopContext);
	const {addToCart, wishlistItems, addToWishlist, setWishlistItems, removeFromWishlist} = shopContext;

	const [products, setProducts] = useState();
	const apiUrl = import.meta.env.VITE_API_URL;

	const fetchProducts = async () => {
		try {
			const response = await fetch(apiUrl);
			const data = await response.json();
			setProducts(data);
			console.log(data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	useEffect(() => {
		localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
	}, [wishlistItems]);

	const product = products?.find((product: Product) => product.id === Number(id));

	if (!product) {
		return <p>Product not found</p>;
	}

	const {nameProduct, description, price, img, stock} = product;
	const stockText = stock ? 'THERE IS STOCK' : 'SORRY, THERE IS NOT STOCK AVAILABLE AT THIS MOMENT';
	const stockStyle = stock ? {color: 'green'} : {color: 'red'};

	const cartItemCount = shopContext?.cartItems[id];
	const isWishlistActive = wishlistItems.includes(+id);

	const handleAddToCart = () => {
		if (stock) {
			addToCart(id);
		}
	};

	const handleAddToWishlist = () => {
		if (isWishlistActive) {
			removeFromWishlist(+id);
		} else {
			addToWishlist(+id);
		}
	};

	return (
		<div className={`productPage ${!stock ? 'outOfStock' : ''}`}>
			<h2>Product Details</h2>
			<h3>{nameProduct}</h3>
			<img src={img} alt={nameProduct} className={!stock ? 'outOfStockImage' : ''} />
			<p>Price: ${price}</p>
			<b>
				<p style={stockStyle}>{stockText}</p>
			</b>
			<p>{description}</p>
			<button className="addToCartButton" onClick={handleAddToCart} disabled={!stock}>
				Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
			</button>
			<button className={`addToWishlistButton ${isWishlistActive ? 'active' : ''}`} onClick={handleAddToWishlist}>
				<Heart size={25} />
			</button>
		</div>
	);
};
