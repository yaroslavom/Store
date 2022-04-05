import { StrictMode } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { store, persistor } from './infrastructure';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';

ReactDom.render(
	<StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<App />
				</PersistGate>
			</Provider>
		</BrowserRouter>
	</StrictMode>,
	document.getElementById('root'),
);
