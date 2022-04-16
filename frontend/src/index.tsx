// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { store, persistor } from './context/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import { ThemeProvider } from '@mui/material';
import theme from './context/theme';

const root = createRoot(document.getElementById('root') as HTMLDivElement);
const state = (globalThis.state = store);
console.log(
	state.getState(),
	"it's initial state, for review changes use this method - state.getState()",
);

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
