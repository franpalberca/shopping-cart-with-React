import {useState, useEffect, useContext} from 'react';
import './checkoutpage.css';
import {Link} from 'react-router-dom';
import {Footer} from '../../Components/Footer/Footer';
import { AuthContext } from '../../config/context/AuthContext';
import { THANKYOUPAGE } from '../../config/routes/paths';

export const CheckoutPage = () => {
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		address: '',
		phoneNumber: '',
		postalCode: '',
		country: '',
		shippingOption: 'standard',
		creditCard: '',
	});

	useEffect(() => {
		const savedFormData = localStorage.getItem('formData');
		if (savedFormData) {
			const parsedFormData = JSON.parse(savedFormData);
			setFormData((prevData) => ({
				...prevData,
				...parsedFormData,
				creditCard: '',
			}));
		}
	}, []);

	const authContext = useContext(AuthContext);

	const {isAuthenticated} = authContext;

	useEffect(() => {
		localStorage.setItem('formData', JSON.stringify(formData));
	}, [formData]);

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const {name, value} = event.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleShippingOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const {value} = event.target;
		setFormData((prevData) => ({
			...prevData,
			shippingOption: value,
		}));
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	};

	const isFormValid = Object.values(formData).every((value) => value !== '');

	return (
		<>
			<h2 className="title">Checkout</h2>
			<div className="containerCheckout">
				<div className="form">
					<form onSubmit={handleSubmit}>
						<div className="formGrid">
							<div className="formItem">
								<label>
									Name:
									<input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} required />
								</label>
							</div>
							<div className="formItem">
								<label>
									Last Name:
									<input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} required />
								</label>
							</div>
							<div className="formItem">
								<label>
									Address:
									<input type="text" name="address" value={formData.address} onChange={handleInputChange} required />
								</label>
							</div>
							<div className="formItem">
								<label>
									Phone Number:
									<input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} required />
								</label>
							</div>
							<div className="formItem">
								<label>
									Postal Code:
									<input type="text" name="postalCode" value={formData.postalCode} onChange={handleInputChange} required />
								</label>
							</div>
							<div className="formItem">
								<label>
									Country:
									<input type="text" name="country" value={formData.country} onChange={handleInputChange} required />
								</label>
							</div>
							<div className="formItem">
								<label>
									Shipment options:
									<select name="shippingOption" value={formData.shippingOption} onChange={handleShippingOptionChange} required>
										<option value="standard">Standard Shipment</option>
										<option value="premium">Premium Shipment (+5€)</option>
									</select>
								</label>
							</div>
							<div className="formItem">
								<label>
									Credit Card:
									<input type="text" name="creditCard" value={formData.creditCard} onChange={handleInputChange} placeholder="XXXX-XXXX-XXXX-XXXX" required />
								</label>
							</div>
							{/* {isAuthenticated ? (
								<Link to='/private/thankyoupage'>
								<button type="submit" disabled={!isFormValid}>
									Pay
								</button>
							</Link>
							) : ( */}
							<Link to={THANKYOUPAGE}>
							<button type="submit" disabled={!isFormValid}>
								Pay
							</button>
						</Link>
						</div>
					</form>
				</div>
			</div>
			<Footer />
		</>
	);
};
