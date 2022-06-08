import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FormContainer from '../containers/FormContainer';
import { Wrapper } from '../containers/Wrapper';
import {
	Button,
	FormControl,
	IconButton,
	InputAdornment,
	InputLabel,
	OutlinedInput,
	Typography,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Box } from '@mui/system';
import { useAppDispatch, useAppSelector } from '../hooks';
import { login } from '../context/userSlice';
import Loader from '../components/Loader';
import Message from '../components/Message';

const LoginPage = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);
	const { userInfo, status, error } = useAppSelector((state) => state.userLogin);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const handleClickShowPassword = () => {
		setShowPassword(!showPassword);
	};

	const submitHandler = (e: any) => {
		e.preventDefault();
		console.log('submitting', e);
		dispatch(login({ email, password }));
	};

	useEffect(() => {
		if (userInfo) {
			navigate('/');
		}
	}, [navigate, userInfo]);

	return (
		<Wrapper>
			<Box margin="auto" width="400px">
				{status === 'pending' && <Loader />}
				{error && <Message variant="error">{error}</Message>}
				<FormContainer onSubmit={submitHandler}>
					<FormControl component="fieldset" variant="standard">
						<Typography sx={{ mt: 2, fontWeight: 400 }} align="center" gutterBottom variant="h6">
							Sign in with your email address
						</Typography>
						<FormControl sx={{ my: 1 }} variant="outlined">
							<InputLabel htmlFor="email">Email</InputLabel>
							<OutlinedInput
								id="email"
								label="Email"
								type="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
							/>
						</FormControl>
						<FormControl sx={{ my: 1 }} variant="outlined">
							<InputLabel htmlFor="password">Password</InputLabel>
							<OutlinedInput
								id="password"
								type={showPassword ? 'text' : 'password'}
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								endAdornment={
									<InputAdornment position="end">
										<IconButton
											aria-label="toggle password visibility"
											onClick={handleClickShowPassword}
											edge="end"
										>
											{showPassword ? <VisibilityOff /> : <Visibility />}
										</IconButton>
									</InputAdornment>
								}
								label="Password"
								required
							/>
						</FormControl>
					</FormControl>
					<Button
						onClick={() => console.log('clicked')}
						variant="contained"
						color="primary"
						sx={{ my: 1 }}
						type="submit"
					>
						Sign In
					</Button>
					<Box>
						<Typography variant="subtitle1" align="center">
							New customer? <Link to="/register">Register</Link>
						</Typography>
					</Box>
				</FormContainer>
			</Box>
		</Wrapper>
	);
};

export default LoginPage;
