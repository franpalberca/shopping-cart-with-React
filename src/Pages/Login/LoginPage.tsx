import {FC, ReactNode, useState} from 'react';
import {useAuthContext} from '../../config/context/AuthContext';
import {MAGIC_WORD} from '../../consts/magicWord';

export const Login: FC<ReactNode> = () => {
	const {login} = useAuthContext();
	const [magicWord, setMagicWord] = useState('');

	function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
		setMagicWord(event.target.value);
	}

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		if (magicWord === MAGIC_WORD) {
			login();
		}
	}

	return (
		<div>
			<h1>Login Page</h1>
			<form onSubmit={handleSubmit}>
				<input type="text" value={magicWord} onChange={handleInputChange} />
				<button type="submit">Iniciar sesión</button>
			</form>
		</div>
	);
};
