import React from 'react';
import { Button } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { Wrapper } from '../components/Wrapper';
import { useAppSelector } from '../hooks';
import { selectProducts } from '../infrastructure/productSlice';

const ProductScreen = () => {
	const [count, setCount] = React.useState(0);
	const { products } = useAppSelector(selectProducts);
	const { id } = useParams<'id'>();
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
			<img src="../assets/images/airpods.jpeg" alt="img" />
			<div>{product?.name}</div>
			<div>{count}</div>
			<button onClick={() => setCount((count) => ++count)}>Add</button>
		</Wrapper>
	);
};

export default ProductScreen;
