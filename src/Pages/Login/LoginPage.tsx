import {FC, ReactNode, useState, useEffect} from 'react';
import {useAuthContext} from '../../config/context/AuthContext';
import {HOME} from '../../config/routes/paths';
import {Link, useNavigate} from 'react-router-dom';
import {Footer} from '../../Components/Footer/Footer';
import './loginpage.css';

const apiUsers = import.meta.env.VITE_API_USERS;

export const LoginPage: FC<ReactNode> = () => {
	const {login} = useAuthContext();
	const [password, setPassword] = useState('');
	const [user, setUser] = useState('');
	const [userList, setUserList] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(apiUsers);
				const data = await response.json();
				setUserList(data);
			} catch (error) {
				console.log(error);
			}
		};

		fetchData();
	}, []);

	function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
		setPassword(event.target.value);
	}

	function handleUserChange(event: React.ChangeEvent<HTMLInputElement>) {
		setUser(event.target.value);
	}

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();

		const foundUser = userList.find((userData) => userData.nameUser == user && userData.passwordUser == Number(password));
		if (foundUser) {
			login();
			navigate(HOME);
		} else {
			alert('Incorrect user or password');
		}
	}

	return (
		<div className='containerWhole'>
			<h1 className="titleLogin">Login Page</h1>
			<div className="containerLogin">
				<div className="formLogin">
					<form onSubmit={handleSubmit}>
						<div className="formGridLogin">
							<div className="formItemLogin">
								<label htmlFor="user">User:</label>
								<input type="text" id="user" value={user} onChange={handleUserChange} />
							</div>
							<div className="formItemLogin">
								<label htmlFor="password">Password:</label>
								<input type="password" id="password" value={password} onChange={handlePasswordChange} />
							</div>
							<button type="submit">Iniciar sesión</button>
							<Link to={HOME}>
								<button type="button">Continue Navigating</button>
							</Link>
						</div>
					</form>
				</div>
			</div>
			<Footer />
		</div>
	);
};
