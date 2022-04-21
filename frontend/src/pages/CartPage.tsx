import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
	Box,
	Button,
	Card,
	CardContent,
	Divider,
	Grid,
	IconButton,
	SelectChangeEvent,
	Stack,
	Typography,
} from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Message from '../components/Message';
import { Wrapper } from '../components/Wrapper';
import Select from '../components/Select';
import { useAppSelector, useAppDispatch } from '../hooks';
import { addToCart, removeFromCart } from '../context/productCartSlice';
import { IProduct } from '../interfaces';

// const calculateToPayment = (price: number, quantity: number) => (price * quantity).toFixed(2);

interface ISelectedProduct extends IProduct {
	quantity: number;
}

const CartPage = () => {
	// const qty = location.search ? Number(location.search.split('=')[1]) : 1; // if use query with search params
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const { cart } = useAppSelector((state) => state.productCart);

	const quantityChangeHandler =
		(product: ISelectedProduct) =>
		(event: SelectChangeEvent<React.SetStateAction<number | string>>) => {
			dispatch(addToCart({ ...product, quantity: Number(event.target.value) }));
		};
	const removeProductHandler = (product: ISelectedProduct) => dispatch(removeFromCart(product));
	const checkoutHandler = () => navigate('/login?redirect=shipping');

	return (
		<Wrapper>
			<Grid container mt="auto !important">
				<Grid item lg={9}>
					{cart.length === 0 ? (
						<Box mt={2}>
							<Message variant="info">Your cart is empty</Message>
						</Box>
					) : (
						<Stack
							divider={<Divider sx={{ marginTop: '12px' }} orientation="horizontal" />}
							direction="column"
						>
							{cart.map((product: ISelectedProduct) => (
								<Grid container spacing={2} m={0} key={product._id}>
									<Grid item xs={2}>
										<Link to={`/products/${product._id}`}>
											<Box
												component="img"
												alt={product.name}
												src={`../assets${product.image}`}
												sx={{ width: '100%' }}
											/>
										</Link>
									</Grid>
									<Grid item mt={0.9} xs={5}>
										<Link to={`/products/${product._id}`}>
											<Typography color="text.secondary" variant="h6">
												{product.name}
											</Typography>
										</Link>
									</Grid>
									<Grid mt={1.5} item xs={2}>
										<Typography color="text.secondary" textAlign="center">
											${/* {calculateToPayment(product.price, product.quantity)} */}
											{product.price}
										</Typography>
									</Grid>
									<Grid item xs={1.5} mt={-0.5}>
										<Select
											selected={product.quantity}
											items={product.countInStock}
											changeHandler={quantityChangeHandler(product)}
											helpText="quantity"
										/>
									</Grid>
									<Grid ml={2} item xs={1}>
										<IconButton
											size="large"
											edge="start"
											onClick={() => removeProductHandler(product)}
											color="primary"
											aria-label="menu"
										>
											<DeleteForeverIcon fontSize="medium" />
										</IconButton>
									</Grid>
								</Grid>
							))}
						</Stack>
					)}
				</Grid>
				<Grid item lg={3}>
					<Card sx={{ maxWidth: 'auto', margin: '16px 0 0 32px' }}>
						<CardContent>
							<Typography sx={{ fontSize: 14, mt: 1 }} variant="overline" color="text.secondary">
								Count:{' '}
								{cart.reduce((acc: number, item: ISelectedProduct) => acc + item.quantity, 0)}
							</Typography>
							<Divider orientation="horizontal" flexItem />
							<Typography
								sx={{ fontSize: 14, mt: 1, display: 'block' }}
								variant="overline"
								color="text.secondary"
							>
								Subtotal: $
								{cart
									.reduce(
										(acc: number, item: ISelectedProduct) => acc + item.price * item.quantity,
										0,
									)
									.toFixed(2)}
							</Typography>
							<Divider orientation="horizontal" flexItem />
							<Button
								onClick={checkoutHandler}
								disabled={cart.length === 0}
								variant="outlined"
								fullWidth
								sx={{ mt: 3 }}
							>
								Proceed To Check
							</Button>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</Wrapper>
	);
};

export default CartPage;
