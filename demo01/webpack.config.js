var webpack = require("webpack");
var path = require("path");

/*
 * desc:打包js
 * date:2017-01-20
 */
module.exports={
	devtool:"eval-source-map",
	entry:"./src/main.js",
	output:{
		path:path.join(__dirname,"dist"),
		name:"bundle.js"
	},
	module:{
		loader:{
			test:/\.js$/,
			exclude:"node_modules"
		}
	},
	plugins:[
		new webpack.optimize.UglifyJsPlugin({
	      compressor: {
	        warnings: false,
	      },
	    }),
	    new webpack.optimize.OccurenceOrderPlugin()
	]
}