import { Button, Box, Grid, Stack, Typography, Divider, Card, CardContent } from '@mui/material';
import Rating from '../components/Rating';
import { IProduct } from '../interfaces';

interface Props {
	product: IProduct | Record<string, never>;
}

const ProductContainer: React.FC<Props> = ({ product }) => {
	return (
		<Grid container spacing={{ xs: 2, md: 4 }} columns={{ sm: 9, md: 12 }} mt="auto !important">
			<Grid item xs={6}>
				<Box
					component="img"
					alt={product.name}
					src={`../assets${product.image}`}
					sx={{ width: '100%' }}
				/>
			</Grid>
			<Grid item xs={3}>
				<Stack
					direction="column"
					divider={<Divider orientation="horizontal" flexItem />}
					spacing={2}
				>
					<Typography variant="h4">{product.name}</Typography>
					<Box sx={{ display: 'flex' }}>
						<Rating value={product.rating} text={`${product.numReviews} reviews`} />
					</Box>
					<Typography variant="h6">Price: ${product.price}</Typography>
					<Box>
						<Typography>Description:</Typography>
						<Typography>{product.description}</Typography>
					</Box>
				</Stack>
			</Grid>
			<Grid item xs={3}>
				<Card sx={{ maxWidth: 'auto' }}>
					<CardContent>
						<Typography
							sx={{ fontSize: 14, mt: 1 }}
							variant="overline"
							align="right"
							color="text.secondary"
							gutterBottom
						>
							Price: ${product.price}
						</Typography>
						<Divider orientation="horizontal" flexItem />
						<Typography
							sx={{ fontSize: 14, mt: 1, display: 'block' }}
							variant="overline"
							color="text.secondary"
						>
							Status: {product.countInStock > 0 ? 'In stock' : 'Out of stock'}
						</Typography>
						<Divider orientation="horizontal" flexItem />
						<Button
							onClick={() => console.log('added to card')}
							disabled={product.countInStock === 0}
							variant="outlined"
							fullWidth
							sx={{ mt: 3 }}
						>
							Add to card
						</Button>
					</CardContent>
				</Card>
			</Grid>
		</Grid>
	);
};

export default ProductContainer;
