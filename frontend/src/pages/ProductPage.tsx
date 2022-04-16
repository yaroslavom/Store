import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../hooks';
import { getProduct } from '../context/productDetailsSlice';
import { Wrapper } from '../components/Wrapper';
import Loader from '../components/Loader';
import Message from '../components/Message';
import ProductContainer from '../containers/ProductContainer';

const ProductPage = () => {
	const { id } = useParams<'id'>();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		id && dispatch(getProduct(id));
	}, [dispatch, id]);

	const { product, status, error } = useAppSelector((state) => state.productDetails);

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
			{status === 'pending' && <Loader />}
			{error && <Message variant="error">{error}</Message>}
			{product && status === 'fulfilled' && <ProductContainer product={product} />}
		</Wrapper>
	);
};

export default ProductPage;
