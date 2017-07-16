const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		demo: './demo/app'
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].js'
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			inject: true,
			template: path.join(__dirname, 'demo/index.html')
		})
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: [/node_modules/],
				use: [
					{
						loader: 'babel-loader',
						options: {presets: ['es2015', 'react']}
					}
				]
			},
			{
				test: /\.scss$/,
				use: [
					'isomorphic-style-loader?insertAt=top',
					{
						loader: 'css-loader',
						options: {importLoaders: 1}
					},
					'postcss-loader',
					'sass-loader'
				],
				include: path.join(__dirname, 'src')
			}
		]
	}
};
