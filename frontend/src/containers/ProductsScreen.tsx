import { useAppSelector } from '../hooks';
import { Grid } from '@mui/material';
import ProductCard from '../components/ProductCard';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { IProduct } from '../interfaces';

const ProductsScreen = () => {
	const { products, error, status } = useAppSelector((state) => state.productList);
	return (
		<>
			{status === 'pending' && <Loader />}
			{error && <Message variant="error">{error}</Message>}
			{status === 'fulfilled' && (
				<Grid
					container
					spacing={{ xs: 2, md: 3 }}
					// columns={{ xs: 12, md: 12, lg: 12 }}
					mt="auto !important"
				>
					{Array.isArray(products) &&
						products.map((product: IProduct, index: number) => {
							return (
								<Grid item xs={6} md={4} lg={3} key={index}>
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
