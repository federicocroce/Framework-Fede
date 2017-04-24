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

var scssDev = [
	{
		loader: "style-loader",
		options: {
			sourceMap: true
		}
	},
	{
		loader: "css-loader",
		options: {
			sourceMap: true
		}
	},
	{
		loader: "sass-loader",
		options: {
			sourceMap: false
		}
	}
];

// var scssDev = [
// 	"style-loader", // "style-loader" creates style nodes from JS strings
// 	"css-loader",  //"css-loader" translates CSS into CommonJS
// 	"sass-loader" // compiles Sass to CSS
// ];

var scssProd = ExtractTextPlugin.extract({
	fallback: "style-loader", // "style-loader" creates style nodes from JS strings
	use: [
		"css-loader",  //"css-loader" translates CSS into CommonJS
		"sass-loader" // compiles Sass to CSS
	],
	publicPath: "./dist/style"
});



var cssConfig = isProduction ? scssProd : scssDev;

var devtool = isProduction ? "source-map" : "eval-source-map";

// console.log('cssConfig: ', cssConfig);
// console.log('devtool: ', devtool);
// console.log('PROD: ', process.env.NODE_ENV === "production");
// console.log('HTML __dirname', __dirname + '/src/html/index.ejs');
// console.log('HTML SIN __dirname', '/src/html/index.ejs');

var config = {
	entry: path.resolve(__dirname + '/src/main/app.js'),

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
		port: 1234,
		inline: true,
		contentBase: __dirname + '/dist',
	},

	devtool: "eval-source-map",

	module: {
		rules: [
			{
				test: /\.js$/, //Check for all js files
				exclude: /(node_modules|bower_components)/,
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
		new ExtractTextPlugin({
			filename: "app.css",
			disable: !isProduction,
			allChunks: true
		}),
		new HtmlWebpackPlugin({
			title: 'My App',
			template: __dirname + '/src/main/index.html'
		}),
		new webpack.LoaderOptionsPlugin({
			minimize: false,
			debug: true,
			options: {
				postcss: [
					autoprefixer({
						browsers: ['last 2 version', 'Explorer >= 10', 'Android >= 4']
					})
				],
				sassLoader: {
					includePaths: [
						path.resolve(__dirname, 'node_modules/sanitize.css/')
					]
				}
			}
		}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin()
		// new PurifyCSSPlugin({
		// 	paths: glob.sync(path.join(__dirname, './src/html/*.html')),
		// })
	],
};


if (process.env.NODE_ENV === "production") {


	// Add more configuration for production here like
	// Uglify plugin
	// Offline plugin
	// Etc,
}


module.exports = config;