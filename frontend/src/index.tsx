// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { store, persistor } from './infrastructure/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import { ThemeProvider } from '@mui/material';
import theme from './infrastructure/theme';

const root = createRoot(document.getElementById('root') as HTMLDivElement);

root.render(
	// <StrictMode>
	<BrowserRouter>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<ThemeProvider theme={theme}>
					<App />
				</ThemeProvider>
			</PersistGate>
		</Provider>
	</BrowserRouter>,
	// </StrictMode>,
);
