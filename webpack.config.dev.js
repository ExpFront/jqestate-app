const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');

const config = {
	entry: [
		'webpack-hot-middleware/client',
		path.join(__dirname, 'src', 'app')
	],
	output: {
		path: path.join(__dirname, 'src'),
		filename: 'app.js',
		publicPath: '/build/'
	},
	module: {
		loaders: [
			{
				test: /(.js|.jsx)/,
				exclude: /node_modules/,
				loaders: ['babel?cacheDirectory=true']
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
			},
			{
				test: /\.styl$/,
				loader: 'style-loader!css-loader!postcss-loader!stylus-loader'
			},
			{
				test: /(.woff|.ttf|.eot|.svg|.jpg|.png)/,
				loader: 'file-loader'
			}
		],
	},
	postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ],
	resolve: {
		root: path.join(__dirname, 'src'),
		extensions: ['', '.js', '.json', '.jsx', '.css', '.svg']
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
};

module.exports = config;
