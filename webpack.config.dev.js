const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const DotEnvPlugin = require('dotenv-webpack');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		assetModuleFilename: 'assets/[name][hash].[ext]',
		filename: 'bundle.js',
		publicPath: '/',
	},
	mode: 'development',
	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			'@components': path.resolve(__dirname, './src/components/'),
			'@containers': path.resolve(__dirname, './src/containers/'),
			'@styles': path.resolve(__dirname, './src/styles'),
			'@hooks': path.resolve(__dirname, './src/hooks/'),
		},
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: 'babel-loader',
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
				test: /\.(jpg|png|svg|webp)$/i,
				type: 'asset/resource',
			},
		],
	},
	plugins: [
		new HtmlPlugin({
			template: './public/index.html',
			filename: './index.html',
		}),
		new DotEnvPlugin(),
	],
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		historyApiFallback: true,
		open: true,
	},
};
