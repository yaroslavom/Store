import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Rating from './Rating';
import { Link } from 'react-router-dom';

const Product = ({ product }: any) => {
	return (
		<Card>
			<Link to={`products/${product._id}`}>
				<CardMedia
					component="img"
					height="auto"
					image={`assets${product.image}`}
					alt={product.name}
				/>
			</Link>
			<CardContent>
				<Link to={`products/${product._id}`}>
					<Typography variant="h6" color="text.secondary">
						<strong>{product.name}</strong>
					</Typography>
				</Link>
			</CardContent>
			<CardContent sx={{ display: 'flex', py: 0 }}>
				<Rating value={product.rating} text={`${product.numReviews} reviews`} />
			</CardContent>
			<CardContent>
				<Typography variant="h5" color="text.secondary">
					${product.price}
				</Typography>
			</CardContent>
		</Card>
	);
};

export default Product;
