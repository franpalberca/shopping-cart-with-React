import { useContext } from "react";
import { ShopContext } from "../../config/context/ShopContext";

export const ThankYouPage = () => {
	const shopContext = useContext(ShopContext);
	const {cartItems, getTotalCartAmount, products} = shopContext;

	const cartItemsInCart = Object.keys(cartItems).filter((itemId) => cartItems[itemId] > 0);

	return (
		<div>
			<h2>Thank you!</h2>
			<div>
				{cartItemsInCart.map((itemId) => {
					const item = products.find((product: any) => product.id === Number(itemId));
					if (item) {
						return (
							<div key={itemId}>
								<img src={item.img} alt={item.nameProduct} />
								<p>{item.nameProduct}</p>
							</div>
						);
					}
					return null;
				})}
			</div>
			<p>Total amount: {getTotalCartAmount()}€</p>
		</div>
	);
};
