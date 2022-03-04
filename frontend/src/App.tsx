import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';

interface Book {
	name: string;
	// ...
}

const App = () => {
	const [data, setData] = useState<Array<Book>>([]);

	useEffect(() => {
		(async () => {
			const response = await axios.get('/api/data/1');
			setData(response.data);
		})();
	}, []);

	return (
		<>
			{console.log(data, 'data')}
			{data.length &&
				data.map((el) => {
					return (
						<div key={el.name} className="container">
							<p>{el.name}</p>
						</div>
					);
				})}
		</>
	);
};

export default App;
