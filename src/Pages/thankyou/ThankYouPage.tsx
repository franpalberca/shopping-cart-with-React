import {useContext, useState, useEffect} from 'react';
import {ShopContext} from '../../config/context/ShopContext';
import {HOME} from '../../config/routes/paths';
import {Link} from 'react-router-dom';
import {Footer} from '../../Components/Footer/Footer';
import './thankYouPage.css';

export const ThankYouPage = () => {
	const shopContext = useContext(ShopContext);
	const {products, getTotalCartAmount, selectedItems, setSelectedItems, handleBackToHomePage} = shopContext;
	const [finalPrice, setFinalPrice] = useState(getTotalCartAmount());


	useEffect(() => {
		const savedSelectedItems = localStorage.getItem('selectedItems');
		if (savedSelectedItems) {
			setSelectedItems(JSON.parse(savedSelectedItems));
		}
	}, []);

	const filteredItems = products.filter((product) => selectedItems.includes(product.id));

	// const handleBackToHomePage = () => {
	//     setSelectedItems([]);
	//     localStorage.removeItem('selectedItems');
	// }
	return (
		<>
			<h2 className='lastPageTitle'>Thank you!</h2>
			<div className="lastPageWhole">
				<div className="lastPageMap">
					{filteredItems.map((item) => (
						<div className="lastPageMapItem" key={item.id}>
							<img src={item.img} alt={item.nameProduct} />
							<p>{item.nameProduct}</p>
						</div>
					))}
				</div>
				{/* <p>Total amount: {finalPrice}€</p> */}
			</div>
			<Link to={HOME}>
				<div className='backToMainDiv'>
				<button className='backToMainPageButton'onClick={handleBackToHomePage}>Back to main page</button>
				</div>
			</Link>
			<Footer />
		</>
	);
};
