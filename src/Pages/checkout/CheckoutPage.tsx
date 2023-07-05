import {useState} from 'react';
import './checkoutpage.css';

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
		console.log(formData);
	};

	const isFormValid = Object.values(formData).every((value) => value !== '');

	return (
		<div className="containerCheckout">
			<div className="form">
				<h2 className="title">Checkout</h2>
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
						<button type="submit" disabled={!isFormValid}>
							Pay
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
