import {useContext, useState, useEffect } from 'react';
import {ShopContext} from '../../config/context/ShopContext';
import { HOME } from '../../config/routes/paths';
import { Link } from 'react-router-dom';
import { Footer } from '../../Components/Footer/Footer';

export const ThankYouPage = () => {
    
	const shopContext = useContext(ShopContext);
	const {products, getTotalCartAmount, selectedItems, setSelectedItems, handleBackToHomePage} = shopContext;
    const [finalPrice, setFinalPrice] = useState(getTotalCartAmount())

	// const [selectedItems, setSelectedItems] = useState<number[]>([]);

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
		<div>
			<h2>Thank you!</h2>
			<div>
				{filteredItems.map((item) => (
					<div key={item.id}>
						<img src={item.img} alt={item.nameProduct} />
						<p>{item.nameProduct}</p>
					</div>
				))} 
			</div>
			<p>Total amount: {finalPrice}€</p>
            <Link to={HOME}><button onClick={handleBackToHomePage}>Back to main page</button></Link>
		
        <Footer />
        </div>
    );
}

