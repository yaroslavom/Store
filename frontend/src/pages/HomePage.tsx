import { useEffect } from 'react';
import { useAppDispatch } from '../hooks';
import { getProducts } from '../context/productsListSlice';
import { Wrapper } from '../components/Wrapper';
import ProductsScreen from '../containers/ProductsScreen';

const HomePage = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getProducts());
	}, [dispatch]);
	return (
		<Wrapper>
			<ProductsScreen />
		</Wrapper>
	);
};

export default HomePage;
