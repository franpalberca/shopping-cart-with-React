import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import {ShopContextProvider} from '../config/context/ShopContext';
import {Navbar} from '../Components/Navbar/Navbar';
import {PublicRoute} from '../Components/router/PublicRoute';
import {CARTPAGE, CHECKOUT, FILTERPAGE, HOME, LOGIN, LOGOUT, PRIVATE, PRODUCT, THANKYOUPAGE, WISHLIST} from '../config/routes/paths';
import {LoginPage} from '../Pages/login/LoginPage';
import {PrivateRoute} from '../Components/router/PrivateRoute';
import {Logout} from '../Pages/Logout/Logout';
import {CartPage} from '../Pages/cart/CartPage';
import {HomePage} from '../Pages/home/HomePage';
import {AuthContextProvider} from '../config/context/AuthContext';
import {WishlistPage} from '../Pages/wishlist/WishlistPage';
import {FilterPage} from '../Pages/filter/FilterPage';
import {ProductPage} from '../Pages/product/ProductPage';
import {CheckoutPage} from '../Pages/checkout/CheckoutPage';
import {ThankYouPage} from '../Pages/thankyou/ThankYouPage';

export const RouterPaths = () => {
	return (
		<AuthContextProvider>
			<ShopContextProvider>
				<Router>
					<Navbar />
					<Routes>
						<Route path={HOME} element={<PublicRoute />}>
							<Route index element={<HomePage />} />
                            <Route path={LOGIN} element={<LoginPage />} />
							<Route path={FILTERPAGE} element={<FilterPage />} />
							<Route path={PRODUCT} element={<ProductPage />} />
                            <Route path={CARTPAGE} element={<CartPage />} />
							<Route path={CHECKOUT} element={<CheckoutPage />} />
							<Route path={THANKYOUPAGE} element={<ThankYouPage />} />
                            <Route path='*' element={<Navigate replace to='/'/> }/>
						</Route>
						<Route path={PRIVATE} element={<PrivateRoute />}>
							<Route index element={<HomePage />} />
							<Route path={WISHLIST} element={<WishlistPage />} />
                            <Route path='/private/product/:id' element={<ProductPage />} />
                            <Route path='/private/filterpage' element={<FilterPage />} />
							<Route path={LOGOUT} element={<Logout />} />
                            <Route path='/private/mycart' element={<CartPage />}/>
						</Route>
					</Routes>
				</Router>
			</ShopContextProvider>
		</AuthContextProvider>
	);
};
