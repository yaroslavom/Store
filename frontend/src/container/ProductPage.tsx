import React from 'react';
import { Button, Box } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { Wrapper } from '../components/Wrapper';
import { useAppSelector } from '../hooks';
import { selectProducts } from '../infrastructure/productSlice';

const ProductPage = () => {
	const { id } = useParams<'id'>();
	const { products } = useAppSelector(selectProducts);
	const navigate = useNavigate();
	const product = products.find((p: any) => p._id === id);
	return (
		<Wrapper>
			<Button
				onClick={() => {
					navigate(-1);
				}}
				variant="outlined"
			>
				GO BACK
			</Button>
			<Box
				component="img"
				// sx={{
				// 	height: 233,
				// 	width: 350,
				// 	maxHeight: { xs: 233, md: 167 },
				// 	maxWidth: { xs: 350, md: 250 },
				// }}
				alt={product?.name}
				src="../assets/images/airpods.jpeg"
			/>
			<div>{product?.name}</div>
		</Wrapper>
	);
};

export default ProductPage;
