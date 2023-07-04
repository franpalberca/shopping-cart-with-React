import {useContext} from 'react';
import {ShopContext} from '../../config/context/ShopContext';
import {ShopContextValue} from '../../Types/ShopContext';
import {CartItemProps} from '../../Types/Products';

export const Product = (props: CartItemProps) => {
	const {id, nameProduct, price, img} = props.data;
	const shopContext = useContext<ShopContextValue | null>(ShopContext);
	if (!shopContext || !shopContext.cartItems || !shopContext.addToCart || !shopContext.removeFromCart || !shopContext.updateCartItemCount) {
		return null;
	}
	const {cartItems, addToCart, addToWishlist} = shopContext;

	const cartItemCount = cartItems[id];

	return (
		<div className="product">
			<img src={img} />
			<div className="description">
				<p>
					<b>{nameProduct}</b>
				</p>
				<p> ${price}</p>
			</div>
			<button className="addToCartButton" onClick={() => addToCart(id)}>
				Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
			</button>
			<button className="addToWishlistButton" onClick={() => addToWishlist(id)}>
				Add to Wishlist
			</button>
		</div>
	);
};
