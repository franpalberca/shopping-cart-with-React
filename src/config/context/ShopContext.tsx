import {createContext, useState, useEffect} from 'react';
import PRODUCTS from '../../../db.json';
import {Product} from '../../Types/Products';
import {ShopContextValue} from '../../Types/ShopContext';

export const ShopContext = createContext<ShopContextValue | null>(null);

const getDefaultCart = () => {
	let cart: {[key: number]: number} = {};
	for (let i = 1; i <= PRODUCTS.length; i++) {
		cart[i] = 0;
	}
	return cart;
};

export const ShopContextProvider = (props: {children: React.ReactNode}) => {
	const [cartItems, setCartItems] = useState(getDefaultCart());

	const [wishlistItems, setWishlistItems] = useState<number[]>([]);
	const [products, setProducts] = useState();
	const url = 'http://localhost:3004/PRODUCTS';
	const fetchProducts = async () => {
		try {
			const response = await fetch(url);
			const data = await response.json();
			setProducts(data);
			console.log(data)
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		fetchProducts();
	}, []);
	const getTotalCartAmount = () => {
		let totalAmount = 0;
		for (const item in cartItems) {
			if (cartItems[item] > 0) {
				const set = new Set(PRODUCTS)
				let itemInfo = Array.from(set).find((product: Product) => product.id === Number(item));
				console.log(itemInfo)
				if (itemInfo) {
					totalAmount += cartItems[item] * itemInfo.price;
				}
			}
		}
		return totalAmount;
	};

	const addToCart = (itemId: number) => {
		setCartItems((prev) => {
			return {
				...prev,
				[itemId]: prev[itemId] + 1 || 1,
			};
		});
	};

	const removeFromCart = (itemId: number) => {
		setCartItems((prev) => {
			const updatedItems = {
				...prev,
				[itemId]: prev[itemId] - 1,
			};

			if (updatedItems[itemId] <= 0) {
				delete updatedItems[itemId];
			}

			return updatedItems;
		});
	};

	const updateCartItemCount = (newAmount: number, itemId: number) => {
		if (!isNaN(newAmount)) {
			setCartItems((prev) => ({...prev, [itemId]: newAmount}));
		}
	};

	const addToWishlist = (itemId: number) => {
		if (wishlistItems.includes(itemId)) {
			removeFromWishlist(itemId);
		} else {
			setWishlistItems((prevItems) => [...prevItems, itemId]);
		}
	};

	const removeFromWishlist = (itemId: number) => {
		setWishlistItems((prevItems) => prevItems.filter((item) => item !== itemId));
	};

	const checkout = () => {
		setCartItems(getDefaultCart());
	};

	const contextValue: ShopContextValue = {
		cartItems,
		addToCart,
		updateCartItemCount,
		removeFromCart,
		getTotalCartAmount,
		checkout,
		wishlistItems,
		setWishlistItems,
		addToWishlist,
		removeFromWishlist,
	};

	return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
};
