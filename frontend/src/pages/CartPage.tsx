import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Wrapper } from '../components/Wrapper';
import { useAppSelector } from '../hooks';

const CartPage = () => {
	const { id } = useParams<'id'>();
	const location = useLocation();
	const qty = location.search ? Number(location.search.split('=')[1]) : 1;
	const state = useAppSelector((state) => state.productCart);
	console.log(state);
	console.log(qty, id);

	return <Wrapper>Cart</Wrapper>;
};

export default CartPage;
