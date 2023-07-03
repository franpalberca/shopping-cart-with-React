import { useContext } from 'react';
import { CategoryProducts, Product } from '../../Types/Products';
import { CartContext } from '../../context/CartContext';

export const ProductCard = (props: CategoryProducts) => {
	const { items } = props;
	const { addToCart, cartItems } = useContext(CartContext);

	return (
		<>
			{items &&
				items.map((item: Product) => {
					const cartItemAmount = cartItems[item.id] || 0;

					return (
						<div key={item.id}>
							<img className="image" src={item.img} alt={item.nameProduct} />
							<div className="description">
								<p className="title">
									<b>{item.nameProduct}</b>
								</p>
								<p>Stock: {item.stock ? 'Disponible' : 'Agotado'}</p>
								<p>Precio: {item.price}</p>
								<button className="addToCartButton" onClick={() => addToCart(item.id)}>
									Add to Cart {cartItemAmount > 0 && `(${cartItemAmount})`}
								</button>
							</div>
						</div>
					);
				})}
		</>
	);
};