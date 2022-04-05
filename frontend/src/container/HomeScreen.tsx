import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../hooks';
import { getProducts, selectProducts } from '../infrastructure/productSlice';
import { Grid } from '@mui/material';
import ProductCard from '../components/ProductCard';
import { Wrapper } from '../components/Wrapper';

const HomeScreen = () => {
	const dispatch = useAppDispatch();
	const { products, error, status } = useAppSelector(selectProducts);
	console.log(products, 'prod app');

	useEffect(() => {
		dispatch(getProducts());
	}, [dispatch]);
	return (
		<Wrapper>
			{status === 'pending' && <p>Loading...</p>}
			{error && <p>{error}</p>}
			<Grid
				container
				spacing={{ xs: 2, md: 3 }}
				columns={{ xs: 2, sm: 8, md: 12 }}
				mt="auto !important"
			>
				{Array.isArray(products) &&
					products.map((product: any, index: number) => {
						return (
							<Grid item xs={6} sm={4} md={4} key={index}>
								<ProductCard product={product} />
							</Grid>
						);
					})}
			</Grid>
		</Wrapper>
	);
};

export default HomeScreen;
