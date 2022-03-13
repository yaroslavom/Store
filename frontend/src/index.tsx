import { StrictMode } from 'react';
import ReactDom from 'react-dom';
import { store } from './store';
import { Provider } from 'react-redux';
import App from './App';

ReactDom.render(
	<StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</StrictMode>,
	document.getElementById('root'),
);
