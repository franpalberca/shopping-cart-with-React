import {useContext, useEffect} from 'react';
import {ShopContext} from '../../config/context/ShopContext';
import {CartItemProps} from '../../Types/Products';
import {Heart} from 'phosphor-react';
import {Link} from 'react-router-dom';

export const ProductItem = (props: CartItemProps) => {
	const {id, nameProduct, price, img, stock} = props.data;
	const shopContext = useContext(ShopContext);

	if (!shopContext) {
		return null;
	}

	const {cartItems, addToCart, removeFromCart, updateCartItemCount, wishlistItems, addToWishlist, removeFromWishlist} = shopContext;

	const cartItemCount = cartItems[id];
	const isCartActive = cartItemCount > 0;
	const isWishlistActive = wishlistItems.includes(id);

	const handleAddToCart = () => {
		if (props.data.stock) {
			addToCart(id);
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
		<div className={`product ${!props.data.stock ? 'outOfStock' : ''}`}>
			<Link to={`/product/${id}`}>
				<img src={img} alt={nameProduct} className={!props.data.stock ? 'outOfStockImage' : ''} />
			</Link>
			<div className="description">
				<p>
					<b>{nameProduct}</b>
				</p>
				<p>${price}</p>
			</div>
			<button className={`addToCartButton ${isCartActive ? 'active' : ''}`} onClick={handleAddToCart} disabled={!props.data.stock}>
				Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
			</button>
			<button className={`addToWishlistButton ${isWishlistActive ? 'active' : ''}`} onClick={handleAddToWishlist}>
				<Heart size={25} />
			</button>
		</div>
	);
};
