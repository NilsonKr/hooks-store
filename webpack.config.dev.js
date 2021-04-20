const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		assetModuleFilename: 'assets/[name][hash].[ext]',
		filename: 'bundle.js',
		publicPath: '/'
	},
	mode: 'development',
	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			'@components': path.resolve(__dirname, './src/components/'),
			'@containers': path.resolve(__dirname, './src/containers/'),
			'@styles': path.resolve(__dirname, './src/styles'),
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
	],
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		historyApiFallback: true,
		open: true,
	},
};
