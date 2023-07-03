import {PRODUCTS} from '../../assets/db/db.json'
import {Product} from '../../Components/Product/Product';
import './homepage.css';

export const HomePage = () => {
	return (
		<div className="shop">
			<div className="shopTitle">
				<h1>FRAN'S E-COMMERCE</h1>
			</div>

			<div className="products">
				{PRODUCTS.map((product) => (
					<Product key={product.id} data={product} />
				))}
			</div>
		</div>
	);
};
