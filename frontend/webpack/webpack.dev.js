const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
	mode: 'development',
	devServer: {
		hot: true,
		open: true,
		// proxy: {
		// 	'/api': 'http://127.0.0.1:9090',
		// },
	},
	devtool: 'cheap-module-source-map',
	plugins: [new ReactRefreshWebpackPlugin()],
};
