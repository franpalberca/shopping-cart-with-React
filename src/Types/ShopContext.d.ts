export type ShopContextValue = {
	cartItems: {[key: number]: number};
	addToCart: (itemId: number) => void;
	updateCartItemCount: (newAmount: number, itemId: number) => void;
	removeFromCart: (itemId: number) => void;
	getTotalCartAmount: () => number;
	checkout: () => void;
	wishlistItems: number[];
	addToWishlist: (itemId: number) => void;
	removeFromWishlist: (itemId: number) => void;
};
