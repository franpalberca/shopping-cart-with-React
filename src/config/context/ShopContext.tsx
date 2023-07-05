import {createContext, useState, useEffect} from 'react';
import {Product} from '../../Types/Products';
import {ShopContextValue} from '../../Types/ShopContext';

const apiUrl = import.meta.env.VITE_API_URL;

export const ShopContext = createContext<ShopContextValue | null>(null);

export const ShopContextProvider = (props: {children: React.ReactNode}) => {
	const [products, setProducts] = useState<Product[]>([]);
	const [cartItems, setCartItems] = useState<{[key: number]: number}>({});
	const [wishlistItems, setWishlistItems] = useState<number[]>([]);

	useEffect(() => {
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

		fetchProducts();
	}, []);

	const getDefaultCart = () => {
		let cart: {[key: number]: number} = {};
		for (let i = 1; i <= products?.length; i++) {
			cart[i] = 0;
		}
		return cart;
	};

	useEffect(() => {
		setCartItems(getDefaultCart());
	}, [products]);

	const getTotalCartAmount = () => {
		let totalAmount = 0;
		for (const item in cartItems) {
			if (cartItems[item] > 0) {
				let itemInfo = products?.find((product: Product) => product.id === Number(item));
				console.log(itemInfo);
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
