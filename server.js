var config = JSON.stringify(process.env.NODE_ENV)==="production"?
require("./webpack.config.js"):require("./webpack.dev.config.js");
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var path = require("path"); 


var compiler = webpack(config);
var server = new WebpackDevServer(compiler, {
    contentBase:'./' ,
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    proxy: {
        "/service": {    //需要代理的路径
          target: "http://localhost:8002/",  //需要代理的域名
          secure: false,
          changeOrigin: true,  //必须配置为true，才能正确代理
          pathRewrite: {'^/service' : '/'},
        }
    },
    publicPath:path.resolve(__dirname, '/build/')
});
server.listen(8001);