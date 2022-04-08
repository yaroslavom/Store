import { useAppSelector } from '../hooks';
import { selectProducts } from '../infrastructure/productSlice';
import { Grid } from '@mui/material';
import ProductCard from '../components/ProductCard';

const ProductsScreen = () => {
	const { products, error, status } = useAppSelector(selectProducts);
	return (
		<>
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
		</>
	);
};

export default ProductsScreen;
