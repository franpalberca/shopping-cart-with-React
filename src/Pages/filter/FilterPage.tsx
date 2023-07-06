import {useEffect, useReducer} from 'react';
import {ProductItem} from '../../Components/Product/Product';
// import './homepage.css';
import {ReducerAction, ReducerState} from '../../Types/Products';
import { Footer } from '../../Components/Footer/Footer';

const apiUrl = import.meta.env.VITE_API_URL;

export const FilterPage = () => {
	const reducer = (state: ReducerState, action: ReducerAction): ReducerState => {
		switch (action.type) {
			case 'SET_PRODUCTS':
				return {...state, products: action.payload};
			case 'FILTER_PRODUCTS':
				const minPrice = action.payload;
				const maxPrice = action.payload + 9;
				const filteredProducts = state.products.filter((product) => product.price >= minPrice && product.price <= maxPrice);
				return {...state, filteredProducts};
			default:
				return state;
		}
	};
	const [state, dispatch] = useReducer(reducer, {
		products: [],
		filteredProducts: [],
	});

	const fetchProducts = async () => {
		try {
			const response = await fetch(apiUrl);
			const data = await response.json();
			dispatch({type: 'SET_PRODUCTS', payload: data});
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	const filterProducts = (minPrice: number) => {
		dispatch({type: 'FILTER_PRODUCTS', payload: minPrice});
	};

	return (
		<div className="shop">
			<div className="shopTitle">
				<h1>FRAN'S E-COMMERCE</h1>
			</div>

			<div className="filterButtons">
				<button onClick={() => filterProducts(1)}>1-10</button>
				<button onClick={() => filterProducts(11)}>11-20</button>
				<button onClick={() => filterProducts(21)}>21-30</button>
				<button onClick={() => filterProducts(31)}>31-40</button>
				<button onClick={() => filterProducts(41)}>41-50</button>
			</div>

			<div className="products">
				{state.filteredProducts.map((product) => (
					<ProductItem key={product.id} data={product} />
				))}
			</div>
            <Footer />
		</div>
	);
};
