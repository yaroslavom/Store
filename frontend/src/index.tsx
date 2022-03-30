import { StrictMode } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { store } from './infrastructure';
import { Provider } from 'react-redux';
import App from './App';

ReactDom.render(
	<StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<App />
			</Provider>
		</BrowserRouter>
	</StrictMode>,
	document.getElementById('root'),
);
