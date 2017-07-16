const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
	entry: {
		'react-accordion': './src/index'
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].js',
		libraryTarget: 'umd',
		library: 'ReactAccordion'
	},
	devtool: 'source-map',
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			},
			mangle: false,
			beautify: true,
			sourceMap: true
		})
	],
	externals: [nodeExternals({
		whitelist: [/\.(?!(?:jsx?|json)$).{1,5}$/i]
	})],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
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
