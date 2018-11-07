const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    watch: true,
    target: 'electron',
    entry: ['babel-polyfill',"./src/index.js"],
    output: {
        path: __dirname + '/dist',
        publicPath: 'dist/',
        filename: 'bundle.js'
    },
    externals: {
        /*jquery: 'jQuery',
        sqlite3:"require('sqlite3')",
        oracledb:"require('oracledb')"
        knex: 'commonjs knex',*/
        //jquery: 'jQuery',
        //'mysql':"require('mysql')",
        //'local-worker':"require('local-worker')"
    },
    module: {
        loaders: [
            { 
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react','stage-0'],  
                }
                 
            },
            {
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					use: "css-loader"
				})
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                query: {
                    name: '[name].[ext]?[hash]'
                }
            },
            {
                test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/',    // where the fonts will go
                        publicPath: './'       // override the default path
                    }
                }]
            },
        ]
    },
    plugins: [
		new ExtractTextPlugin({
			filename: "bundle.css",
			allChunks: true
		})
	]
}