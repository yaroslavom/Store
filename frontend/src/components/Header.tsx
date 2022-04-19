import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { ShoppingCart } from '@mui/icons-material';
import { styled } from '@mui/system';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
	margin: '0 60px',
	[theme.breakpoints.down('md')]: {
		margin: '0',
	},
}));

export default function Header() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar sx={{ backgroundColor: 'black' }} position="static">
				<StyledToolbar>
					<Link to={'/'}>
						<Typography color="white" variant="h6" component="div">
							STORE
						</Typography>
					</Link>
					<Box sx={{ flexGrow: 1 }}></Box>
					<Link to={'cart'}>
						<IconButton size="large" edge="start" color="primary" aria-label="menu" sx={{ mr: 1 }}>
							<ShoppingCart color="secondary" fontSize="small" />
						</IconButton>
					</Link>
					<Button color="inherit">Login</Button>
				</StyledToolbar>
			</AppBar>
		</Box>
	);
}
