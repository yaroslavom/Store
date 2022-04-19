import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	palette: {
		primary: {
			light: '#112233',
			main: '#000',
			dark: '#778899',
			contrastText: '#fff',
		},
		secondary: {
			light: '#f0e6e6',
			main: '#fff',
			dark: '#3c3c3c',
			contrastText: '#000',
		},
	},
	shape: {
		borderRadius: 2,
	},
});

export default theme;
