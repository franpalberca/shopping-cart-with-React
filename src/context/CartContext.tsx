import {createContext, useState} from 'react';
import {ProductCard} from '../Components/ProductCard/ProductCard';

export const CartContext = createContext(null);

const getDefaultCart = () => {
	let cart = {};
	for (let i = 1; i < ProductCard.length + 1; i++) {
		cart[i] = 0;
	}
	return cart;
};

export const CartContextProvider = (props) => {
	const [cartItems, setCartItems] = useState({});

	const addToCart = (itemId) => {
		setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}));
	};

	const removeFromCart = (itemId) => {
		setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}));
	};

	const updateCartItemCount = (newAmount, itemId) => {
		setCartItems((prev) => ({...prev, [itemId]: newAmount}));
	};

	const contextValue = {cartItems, addToCart, removeFromCart, updateCartItemCount};

	return <CartContext.Provider value={contextValue}>{props.children}</CartContext.Provider>;
};
