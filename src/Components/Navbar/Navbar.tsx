import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import './navbar.css';
import { LOGIN } from '../../config/routes/paths';

export const Navbar = () => {
	return (
        <div className="navbar">
            <div className="links">
                <Link to='/'>Shop</Link>
                <Link to='/cart'><ShoppingCart size={35}/> </Link>
                <Link to={LOGIN}>Login</Link>
            </div>
        </div>
    );
};
