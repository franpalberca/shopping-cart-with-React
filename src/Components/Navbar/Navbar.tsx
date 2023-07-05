import {Link} from 'react-router-dom';
import {useContext} from 'react';
import { ShoppingCart} from 'phosphor-react';
import {ShopContext} from '../../config/context/ShopContext';
import './navbar.css';
import {FILTERPAGE, LOGIN, WISHLIST} from '../../config/routes/paths';

export const Navbar = () => {
	const shopContext = useContext(ShopContext);

	if (!shopContext) {
		return null;
	}

	const {cartItems} = shopContext;
	const totalCartItems = Object.values(cartItems).reduce((acc, count) => acc + count, 0);

	return (
		<div className="navbar">
            <div className='links'>
			<div className="links-left">
				<Link to="/">Shop</Link>
				<Link to="/cart">
					<ShoppingCart size={35} />
					{totalCartItems > 0 && <span className="cartItemCount">{totalCartItems}</span>}
				</Link>
                <Link to={FILTERPAGE}>Filter</Link>
                </div>
                <div className="links-right">
				<Link to={LOGIN}>Login</Link>
                <Link to={WISHLIST}>Wishlist</Link>
			</div>
            </div>
		</div>
	);
};
