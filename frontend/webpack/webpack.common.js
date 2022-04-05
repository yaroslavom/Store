const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname, '..', './src/index.tsx'),
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
		alias: {
			'@mui/styled-engine': '@mui/styled-engine-sc',
			// 'react-dom': '@hot-loader/react-dom',
			// assets: path.resolve(__dirname, '..', 'src/assets'),
		},
	},
	output: {
		path: path.resolve(__dirname, '..', './build'),
		clean: true,
		publicPath: '/',
		filename: '[name].bundle.js',
		chunkFilename: '[name].bundle.js',
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
						loader: require.resolve('babel-loader'), // or ts-loader
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
			},
			{
				test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
				type: 'asset/inline',
			},
		],
	},
};
