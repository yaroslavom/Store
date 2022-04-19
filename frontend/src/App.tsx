import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import Layout from './containers/Layout';
import './style.css';
import CartPage from './pages/CartPage';

const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path="products" element={<HomePage />} />
					<Route path="products/:id" element={<ProductPage />} />
					<Route path="cart" element={<CartPage />}>
						<Route path=":id" element={<CartPage />} />
					</Route>
					<Route path="*" element={<HomePage />} />
				</Route>
			</Routes>
		</>
	);
};

export default App;
