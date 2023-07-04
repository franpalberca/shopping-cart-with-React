import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {ShopContextProvider} from '../config/context/ShopContext';
import {Navbar} from '../Components/Navbar/Navbar';
import {PublicRoute} from '../Components/router/PublicRoute';
import {FILTERPAGE, LOGIN, LOGOUT, PRIVATE, WISHLIST} from '../config/routes/paths';
import {LoginPage} from '../Pages/login/LoginPage';
import {PrivateRoute} from '../Components/router/PrivateRoute';
import {Logout} from '../Pages/Logout/Logout';
import {Cart} from '../Pages/cart/CartPage';
import {HomePage} from '../Pages/home/HomePage';
import {AuthContextProvider} from '../config/context/AuthContext';
import {Wishlist} from '../Pages/wishlist/Wishlist';
import { FilterPage } from '../Pages/filter/FilterPage';

export const RouterPaths = () => {
	return (
		<AuthContextProvider>
			<ShopContextProvider>
				<Router>
					<Navbar />
					<Routes>
						<Route path="/" element={<PublicRoute />}>
							<Route index element={<HomePage />} />
							<Route path={FILTERPAGE} element={<FilterPage />} />

							<Route path={LOGIN} element={<LoginPage />} />
							<Route path="/cart" element={<Cart />} />
						</Route>
						<Route path={PRIVATE} element={<PrivateRoute />}>
							<Route index element={<HomePage />} />
							<Route path={WISHLIST} element={<Wishlist />} />
                            {/* <Route path={FILTERPAGE} element={<FilterPage />} /> */}
							{/* <Route index element={<Private />}/> */}
							<Route path={LOGOUT} element={<Logout />} />
						</Route>
					</Routes>
				</Router>
			</ShopContextProvider>
		</AuthContextProvider>
	);
};
