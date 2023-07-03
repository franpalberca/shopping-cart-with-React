import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShopContextProvider } from "../config/context/ShopContext";
import { Navbar } from "../Components/Navbar/Navbar";
import { PublicRoute } from "../Components/router/PublicRoute";
import { LOGIN, LOGOUT, PRIVATE } from "../config/routes/paths";
import { Login } from "../Pages/Login/LoginPage";
import { PrivateRoute } from "../Components/router/PrivateRoute";
import { Logout } from "../Pages/Logout/Logout";
import { Cart } from "../Pages/cart/CartPage";
import { HomePage } from "../Pages/home/HomePage";


export const RouterPaths = () => {
	return (
		<ShopContextProvider>
			<Router>
				<Navbar />
				<Routes>
                <Route path='/' element={<PublicRoute />}>
                            <Route index element={<HomePage />}/>
                            <Route path={LOGIN} element={<Login />}/>
                            <Route path="/cart" element={<Cart />} />
                        </Route>
                        <Route path={PRIVATE} element={<PrivateRoute />}>
                            {/* <Route index element={<Private />}/> */}
                            <Route path={LOGOUT} element={<Logout />}/>
                        </Route>
				</Routes>
			</Router>
		</ShopContextProvider>
	);
};
