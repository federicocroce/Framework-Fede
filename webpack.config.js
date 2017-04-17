var ReloadPlugin = require('reload-html-webpack-plugin');
var autoprefixer = require('autoprefixer');
var webpackUglifyJsPlugin = require('webpack-uglify-js-plugin');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var webpack = require('webpack');

const glob = require('glob');
const PurifyCSSPlugin = require('purifycss-webpack');
var NODE_MODULES = path.resolve(__dirname, "node_modules");




const isProduction = process.env.NODE_ENV === "production";

var cssDev = [
	"style-loader", // "style-loader" creates style nodes from JS strings
	"css-loader",  //"css-loader" translates CSS into CommonJS
	"sass-loader" // compiles Sass to CSS
];

var cssProd = ExtractTextPlugin.extract({
	fallback: "style-loader", // "style-loader" creates style nodes from JS strings
	use: [
		"css-loader",  //"css-loader" translates CSS into CommonJS
		"sass-loader" // compiles Sass to CSS
	],
	publicPath: "./dist/style"
});



var cssConfig = isProduction ? cssProd : cssDev;

var devtool = isProduction ? "source-map" : "eval-source-map";

console.log('cssConfig: ' , cssConfig);
console.log('devtool: ' , devtool);
console.log('PROD: ' , process.env.NODE_ENV === "production");

var config = {
	entry: path.resolve(__dirname + '/src/js/test.js'),

	output: {
		path: __dirname + '/dist', // `dist` is the destination
		filename: 'app.js'
	},

	resolve: {
		extensions: ['.js', '.jsx', '.sass', 'css']
	},

	watch: true,

	watchOptions:
	{
		ignored: NODE_MODULES
	},

	context: __dirname + '/src', // `__dirname` is root of project and `src` is source

	devServer: {
		host: '0.0.0.0',
		port: 8080,
		inline: true,
		contentBase: __dirname + '/dist',
	},

	devtool: "eval-source-map",

	module: {
		rules: [
			{
				test: /\.js$/, //Check for all js files
				exclude: NODE_MODULES,
				use: [{
					loader: 'babel-loader'
				}]
			},
			{
				test: /\.html$/, //Check for all html files
				loader: 'html-loader',
				options: {
					minimize: true
				}
			},
			{
				test: /\.scss$/, //Check for all scss files
				use: cssConfig
			},
			{
				test: /\.css$/, //Check for all scss files
				use: cssConfig
			}
		]
	},
	plugins: [
		
		new HtmlWebpackPlugin({
			title: 'My App',
			filename: './../index.html',
			template: __dirname + '/src/html/index.html'
		})
		// new PurifyCSSPlugin({
		// 	paths: glob.sync(path.join(__dirname, './src/html/*.html')),
		// })
	],
};


if (process.env.NODE_ENV === "production") {
	config.devtool = ""; // No sourcemap for production

	// Add more configuration for production here like
	// Uglify plugin
	// Offline plugin
	// Etc,
}


module.exports = config;