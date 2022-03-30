import { Route, Routes } from 'react-router-dom';
import HomeScreen from './container/HomeScreen';
import Layout from './container/Layout';
import ProductScreen from './container/ProductScreen';
import './style.css';

const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<HomeScreen />} />
					<Route path="products" element={<HomeScreen />} />
					<Route path="products/:id" element={<ProductScreen />} />
					<Route path="*" element={<HomeScreen />} />
				</Route>
			</Routes>
		</>
	);
};

export default App;
