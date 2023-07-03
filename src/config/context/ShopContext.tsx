import {createContext, useState} from 'react';
import PRODUCTS from '../../assets/db/db.json';
import {Product} from '../../Types/Products';
import {ShopContextValue} from '../../Types/ShopContext';

export const ShopContext = createContext<ShopContextValue | null>(null);

const getDefaultCart = () => {
	let cart: {[key: number]: number} = {};
	for (let i = 1; i <= PRODUCTS.PRODUCTS.length; i++) {
		cart[i] = 0;
	}
	return cart;
};

export const ShopContextProvider = (props: {children: React.ReactNode}) => {
	const [cartItems, setCartItems] = useState(getDefaultCart());

	const getTotalCartAmount = () => {
		let totalAmount = 0;
		for (const item in cartItems) {
			if (cartItems[item] > 0) {
				let itemInfo = PRODUCTS.PRODUCTS.find((product: Product) => product.id === Number(item));
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

	const checkout = () => {
		setCartItems(getDefaultCart());
	};

	const contextValue = {
		cartItems,
		addToCart,
		updateCartItemCount,
		removeFromCart,
		getTotalCartAmount,
		checkout,
	};

	return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
};
