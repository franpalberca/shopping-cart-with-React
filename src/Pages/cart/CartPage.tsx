import {useContext, useState, useEffect} from 'react';
import {CartItem} from '../../Components/CartItem/CartItem';
import {useNavigate} from 'react-router-dom';
import './cart.css';
import {ShopContext} from '../../config/context/ShopContext';
import {ShopContextValue} from '../../Types/ShopContext';
import {Product} from '../../Types/Products';
import { Footer } from '../../Components/Footer/Footer';

const apiUrl = import.meta.env.VITE_API_URL;

export const CartPage = () => {
	const {cartItems, getTotalCartAmount, checkout, selectedItems, setSelectedItems} = useContext<ShopContextValue>(ShopContext);
	const totalAmount = getTotalCartAmount();
	const [products, setProducts] = useState<Product[]>([]);

	const fetchProducts = async () => {
		try {
			const response = await fetch(apiUrl);
			const data = await response.json();
			setProducts(data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	useEffect(() => {
		const savedSelectedItems = localStorage.getItem('selectedItems');
		if (savedSelectedItems) {
			setSelectedItems(JSON.parse(savedSelectedItems));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('selectedItems', JSON.stringify(selectedItems));
	}, [selectedItems]);

	const navigate = useNavigate();

	return (
		<div className="cart">
			<div>
				<h1>Your Cart Items</h1>
			</div>
			<div className="cart">
				{products.map((product) => {
					if (cartItems[product.id] && cartItems[product.id] > 0) {
						return <CartItem key={product.id} data={product} />;
					}
					return null;
				})}
			</div>

			{totalAmount > 0 ? (
				<div className="checkout">
					<p> Subtotal: ${totalAmount.toFixed(2)} </p>
					<button onClick={() => navigate('/')}> Continue Shopping </button>
					<button
						onClick={() => {
							navigate('/checkout');
						}}>
						{' '}
						Checkout{' '}
					</button>
				</div>
			) : (
				<h1> Your Shopping Cart is Empty</h1>
			)}
      <Footer />
		</div>
	);
};
