const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin")
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin")

module.exports = {
	mode: "development", // this will trigger some webpack default stuffs for dev
	entry: "./gallery/src/main.tsx", // if not set, default path to './src/index.js'. Accepts an object with multiple key-value pairs, with key as your custom bundle filename(substituting the [name]), and value as the corresponding file path
	output: {
		filename: "[name].bundle.js", // [name] will take whatever the input filename is. defaults to 'main' if only a single entry value
		path: path.resolve(__dirname, "gallery/build"), // the folder containing you final dist/build files. Default to './dist'
	},
	devtool: "cheap-module-source-map",
	devServer: {},
	plugins: [
		new ForkTsCheckerWebpackPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new ReactRefreshWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: "./gallery/src/index.html",
			inject: true,
		}),
	],
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /(node_modules|\.webpack)/,
				use: {
					loader: "ts-loader",
					options: {
						transpileOnly: true,
					},
				},
			},
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
		extensionAlias: {
			".js": [".tsx", ".ts", ".js"],
		},
		alias: {
			"@digitalarkivet/mui-theme": path.resolve(__dirname, "src"),
		},
	},
}
