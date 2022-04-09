import { useAppSelector } from '../hooks';
import { selectProducts } from '../infrastructure/productSlice';
import { Grid } from '@mui/material';
import ProductCard from '../components/ProductCard';
import Loader from '../components/Loader';
import Message from '../components/Message';

const ProductsScreen = () => {
	const { products, error, status } = useAppSelector(selectProducts);
	return (
		<>
			{status === 'pending' && <Loader />}
			{error && <Message variant="error">{error}</Message>}
			{status !== 'pending' && (
				<Grid
					container
					spacing={{ xs: 2, md: 3 }}
					columns={{ xs: 2, sm: 9, md: 12 }}
					mt="auto !important"
				>
					{Array.isArray(products) &&
						products.map((product: any, index: number) => {
							return (
								<Grid item xs={6} sm={3} md={3} key={index}>
									<ProductCard product={product} />
								</Grid>
							);
						})}
				</Grid>
			)}
		</>
	);
};

export default ProductsScreen;
