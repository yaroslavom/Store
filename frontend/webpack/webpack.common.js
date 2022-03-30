const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname, '..', './src/index.tsx'),
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
		alias: {
			'@mui/styled-engine': '@mui/styled-engine-sc',
		},
	},
	output: {
		path: path.resolve(__dirname, '..', './build'),
		clean: true,
		publicPath: '/',
		filename: 'build_[hash].js',
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, '..', './public/index.html'),
		}),
		new CopyPlugin({
			patterns: [
				{ from: 'src', to: 'dist' },
				{ from: 'src/assets', to: 'assets' },
			],
		}),
	],
	module: {
		rules: [
			{
				test: /\.(ts|js)x?$/,
				exclude: /node_modules/,
				use: [
					{
						loader: require.resolve('babel-loader'),
					},
				],
			},
			{
				test: /\.html$/,
				use: 'html-loader',
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
				// use: ['file-loader'],
			},
			{
				test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
				type: 'asset/inline',
			},
		],
	},
	devServer: {
		historyApiFallback: true,
		proxy: {
			'/api': 'http://127.0.0.1:9090',
		},
	},
};
