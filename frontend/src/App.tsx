import { useEffect } from 'react';
import Header from './components/Header';
import { useAppSelector, useAppDispatch } from './hooks';
import { getProducts, selectProducts, IProducts } from './store/productSlice';
import './style.css';

const App = () => {
	const dispatch = useAppDispatch();
	const data: [IProducts] = useAppSelector(selectProducts);

	useEffect(() => {
		dispatch(getProducts());
	}, [dispatch]);

	return (
		<>
			<Header />
			{!!data.length &&
				data.map((el: any) => {
					return (
						<div key={el.name} className="container">
							<p>{el.name}</p>
						</div>
					);
				})}
		</>
	);
};

export default App;
