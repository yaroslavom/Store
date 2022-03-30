import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
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
					<IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						News
					</Typography>
					<Button color="inherit">Login</Button>
				</StyledToolbar>
			</AppBar>
		</Box>
	);
}
