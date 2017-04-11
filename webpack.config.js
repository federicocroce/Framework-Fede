var glob = require("glob");
var ReloadPlugin = require('reload-html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer')
var path = require('path')
var webpack = require('webpack')

var config = {
	entry: path.resolve(__dirname + '/src/js/test.js'),

	output: {
		path: __dirname + '/dist', // `dist` is the destination
		filename: 'bundle.js'
	},

	resolve: {
		extensions: ['.js', '.jsx', '.sass', 'css']
	},

	watch: true,

	watchOptions:
	{
		ignored: /node_modules/
	},

	plugins: [
		new ExtractTextPlugin("/style/app.css"),
		new webpack.optimize.UglifyJsPlugin()
	],

	context: __dirname + '/src', // `__dirname` is root of project and `src` is source

	devServer: {
		host: '0.0.0.0',
		port: 8080,
		inline: true,
		contentBase: __dirname + '/dist',
	},

	devtool: "eval-source-map", // Default development sourcemap

	module: {
		rules: [
			{
				test: /\.js$/, //Check for all js files
				exclude: '/node_modules/',
				use: [{
					loader: 'babel-loader'
				}]
			},
			{
				test: /\.html$/,
				loader: 'html-loader',
				options: {
					minimize: true
				}
			},
			{
				test: /\.(sass|scss)$/, //Check for sass or scss file names

				use: [
					ExtractTextPlugin.extract({
						fallback: 'style-loader',
						//resolve-url-loader may be chained before sass-loader if necessary
						use: [
							'style-loader',
							'css-loader',
							'sass-loader']
					})
				]
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: "css-loader"
				})
			}
		]
	}
};


if (process.env.NODE_ENV === "production") {
	config.devtool = ""; // No sourcemap for production

	// Add more configuration for production here like
	// Uglify plugin
	// Offline plugin
	// Etc,
}


module.exports = config;