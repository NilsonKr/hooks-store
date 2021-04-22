const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const DotEnvPlugin = require('dotenv-webpack');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		assetModuleFilename: 'assets/[name][hash].[ext]',
		filename: 'bundle.[contenthash].js',
		publicPath: '/',
	},
	mode: 'production',
	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			'@components': path.resolve(__dirname, './src/components/'),
			'@containers': path.resolve(__dirname, './src/containers/'),
			'@styles': path.resolve(__dirname, './src/styles/'),
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
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
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
		new MiniCssExtractPlugin({
			filename: 'styles/[name].[contenthash].css',
		}),
		new CleanWebpackPlugin(),
		new BundleAnalyzerPlugin(),
		new DotEnvPlugin(),
	],
	optimization: {
		minimize: true,
		minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
	},
};
