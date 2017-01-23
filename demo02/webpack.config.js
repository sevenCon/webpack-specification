var webpack = require("webpack");
var path = require("path");

/*
 * desc:打包js，多入口, 分离公共部分
 * date:2017-01-20
 */
module.exports={
	devtool:"eval-source-map",
	entry:['./src/main1.js','./src/main2.js'],
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