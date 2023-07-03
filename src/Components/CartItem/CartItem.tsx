import {useContext} from 'react';
import {ShopContext} from '../../config/context/ShopContext';
import {CartItemProps} from '../../Types/Products';
import {ShopContextValue} from '../../Types/ShopContext';

export const CartItem = (props: CartItemProps) => {
	const {id, nameProduct, price, img} = props.data;
	const shopContext = useContext<ShopContextValue | null>(ShopContext);

	if (!shopContext || !shopContext.cartItems || !shopContext.addToCart || !shopContext.removeFromCart || !shopContext.updateCartItemCount) {
		return null;
	}

	const {cartItems, addToCart, removeFromCart, updateCartItemCount} = shopContext;

	const cartItemCount = cartItems[id] || 0;

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newAmount = Number(e.target.value);
		if (!isNaN(newAmount)) {
			updateCartItemCount(newAmount, id);
		}
	};

	return (
		<div className="cartItem">
			<img src={img} alt={nameProduct} />
			<div className="description">
				<p>
					<b>{nameProduct}</b>
				</p>
				<p>Price: ${price}</p>
				<div className="countHandler">
					<button onClick={() => removeFromCart(id)}> - </button>
					<input value={cartItemCount.toString()} onChange={handleInputChange} />
					<button onClick={() => addToCart(id)}> + </button>
				</div>
			</div>
		</div>
	);
};
