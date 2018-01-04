    var config = require("./webpack.config.js");
    var webpack = require('webpack');
    var WebpackDevServer = require('webpack-dev-server');
	var path = require("path"); 


var compiler = webpack(config);
var server = new WebpackDevServer(compiler,{
    contentBase:'./' ,
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    publicPath:path.resolve(__dirname, '/build/')
});
server.listen(8001);