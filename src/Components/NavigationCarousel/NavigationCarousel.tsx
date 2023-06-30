import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import db from '../../assets/db/db.json';
import {Product} from '../../Types/Products';

interface NavigationCarouselProps {
	onItemClick: (items: Product[]) => void;
}

export const NavigationCarousel = (props: NavigationCarouselProps) => {
	const {onItemClick} = props;

	const handleItemClick = (items: Product) => {
		onItemClick([items]); // Pasamos el elemento individual como un arreglo
	};

	return (
		<Carousel>
			{db.Products.map((product) => (
				<div key={product.id} onClick={() => handleItemClick(product.items)}>
					<h2>{product.name}</h2>
					<img src={product.img} alt={product.name} />
				</div>
			))}
		</Carousel>
	);
};
