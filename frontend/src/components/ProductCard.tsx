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
					height="194"
					image={`assets${product.image}`}
					alt={product.name}
				/>
			</Link>
			<Link to={`products/${product._id}`}>
				<CardContent>
					<Typography variant="body1" color="text.secondary">
						<strong>{product.name}</strong>
					</Typography>
				</CardContent>
			</Link>
			<CardContent sx={{ display: 'flex' }}>
				<Rating value={product.rating} text={`${product.numReviews} reviews`} />
			</CardContent>
			<CardContent>
				<Typography variant="h4" color="text.secondary">
					${product.price}
				</Typography>
			</CardContent>
		</Card>
	);
};

export default Product;
