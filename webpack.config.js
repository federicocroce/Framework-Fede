var glob = require("glob");
var ReloadPlugin = require('reload-html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractCSS = new ExtractTextPlugin('stylesheets/[name]-one.css');
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
		extensions: ['.js', '.jsx']
	},

	watch: true,

	context: __dirname + '/src', // `__dirname` is root of project and `src` is source

	devServer: {
		host: '0.0.0.0',
		port: 8080,
		inline: true,
		contentBase: __dirname + '/dist',
	},

	devtool: "eval-source-map", // Default development sourcemap

	plugins: [
		new ExtractTextPlugin("styles.css")
	],
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
					'style-loader',
					'css-loader',
					'sass-loader',
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