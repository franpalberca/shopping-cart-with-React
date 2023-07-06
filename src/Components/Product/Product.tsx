import {useContext, useEffect} from 'react';
import {ShopContext} from '../../config/context/ShopContext';
import {CartItemProps} from '../../Types/Products';
import {Heart} from 'phosphor-react';
import {Link} from 'react-router-dom';
import { AuthContext } from '../../config/context/AuthContext';

export const ProductItem = (props: CartItemProps) => {
	const {id, nameProduct, price, img, stock} = props.data;
	const shopContext = useContext(ShopContext);
	const authContext = useContext(AuthContext);

	if (!shopContext) {
		return null;
	}

	const {cartItems, selectedItems, setSelectedItems, addToCart, removeFromCart, updateCartItemCount, wishlistItems, addToWishlist, removeFromWishlist} = shopContext;
	const {isAuthenticated} = authContext;

	const cartItemCount = cartItems[id];
	const isCartActive = cartItemCount > 0;
	const isWishlistActive = wishlistItems.includes(id);

	const handleAddToCart = () => {
		if (props.data.stock) {
			addToCart(id);
			setSelectedItems((prevItems) => [...prevItems, id]);
			localStorage.setItem('selectedItems', JSON.stringify([...selectedItems, id]))
		}
	};

	const handleAddToWishlist = () => {
		if (isWishlistActive) {
			removeFromWishlist(id);
		} else {
			addToWishlist(id);
		}
	};

	useEffect(() => {
		localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
	}, [wishlistItems]);

	return (
		<div className={`productHome ${!props.data.stock ? 'outOfStock' : ''}`}>
			{isAuthenticated ? (
				<Link to={`/private/product/${id}`}><img src={img} alt={nameProduct} className={!props.data.stock ? 'outOfStockImage' : ''} /></Link>
			) : (

			<Link to={`/product/${id}`}>
				<img src={img} alt={nameProduct} className={!props.data.stock ? 'outOfStockImage' : ''} />
			</Link>
			)}
			<div className="description">
				<p>
					<b>{nameProduct}</b>
				</p>
				<p>{price}€</p>
			</div>
			<button className={`addToCartButton ${isCartActive ? 'active' : ''}`} onClick={handleAddToCart}>
				Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
			</button>
			<br />
			<button className={`addToWishlistButton ${isWishlistActive ? 'active' : ''}`} onClick={handleAddToWishlist}>
				<Heart size={20} />
			</button>
		</div>
	);
};
