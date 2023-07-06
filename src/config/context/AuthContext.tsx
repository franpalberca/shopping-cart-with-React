import {createContext, useState, useCallback, useMemo, useContext} from 'react';
import { AuthContextProviderProps } from '../../Types/AuthContext';
const MY_AUTH_APP = 'MY_AUTH_APP';

export const AuthContext = createContext<{
	login: () => void;
	logout: () => void;
	isAuthenticated: boolean;
}>({
	login: () => {},
	logout: () => {},
	isAuthenticated: false,
});

export function AuthContextProvider({children}: AuthContextProviderProps) {
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(window.localStorage.getItem('MY_AUTH_APP') === 'true');

	const login = useCallback(function () {
		window.localStorage.setItem(MY_AUTH_APP, 'true');
		setIsAuthenticated(true);
	}, []);

	const logout = useCallback(function () {
		window.localStorage.removeItem(MY_AUTH_APP);
		setIsAuthenticated(false);
	}, []);

	const value = useMemo(
		() => ({
			login,
			logout,
			isAuthenticated,
		}),
		[login, logout, isAuthenticated]
	);

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
	return useContext(AuthContext);
}
