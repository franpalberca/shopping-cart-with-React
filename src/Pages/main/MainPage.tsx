import {useState} from 'react';
import {NavigationCarousel} from '../../Components/NavigationCarousel/NavigationCarousel';
import {ProductCard} from '../../Components/ProductCard/ProductCard';
import {Product} from '../../Types/Products';


export const MainPage = () => {
	const [selectedItems, setSelectedItems] = useState<Product[]>([]);

	const handleItemClick = (items: Product[]) => {
		setSelectedItems(items);
	};

	return (
		<div className="shop">
			<div className="shopTitle">
				<h1>Fran's store</h1>
			</div>
			<NavigationCarousel onItemClick={handleItemClick} />
			<div className="products">
				{selectedItems.map((items: Product) => (
					<ProductCard key={items.id} items={items} /> // Pasamos 'items' en lugar de 'product'
				))}
			</div>
		</div>
	);
};
