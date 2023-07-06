export type AuthContextProps = {
	login: () => void;
	logout: () => void;
	isAuthenticated: boolean;
};

interface AuthContextProviderProps {
	children: ReactNode;
}
