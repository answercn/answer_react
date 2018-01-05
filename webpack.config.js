const path =  require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');//添加Hash后会冗余文件，因此清除
const ManifestPlugin = require('webpack-manifest-plugin');//生成Manifest映射文件
console.log(process.env.NODE_ENV);
module.exports = {
    entry: [
        path.resolve(__dirname, './src/main.jsx')
    ],
    output: {
        path: path.resolve(__dirname, './build'),
        filename: '[name]_bundle.js',
        publicPath:"../build/",
        // 添加 chunkFilename
        chunkFilename: '[name].[chunkhash:5].chunk.js',
    },
    module: {
        loaders: [
            {  
                test: /\.jsx$/,//表示要变异的文件的类型，这里要编译的是js文件
                loader: './node_modules/babel-loader',//装载的哪些模块
                exclude: /node_modules/,//标示不变异node_modules文件夹下面的内容
                query: {//具体的编译的类型，
                    //compact: false,//表示不压缩
                    "presets": [ 
                        "es2015", 
                        "stage-1", 
                        "react"
                    ],
                    //按需加载antd组件，否则为压缩文件将有4M大小
                    "plugins": [
                        [
                            "import", {
                                "libraryName": "antd",
                                "libraryDirectory": "lib",
                                "style": true
                            }
                        ]
                    ]
                }
            },{ 
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.less$/,
                //引入ant design等组件库改为按需加载时，由于文件是从node_modules中取得的
                //所以不可以不包含node_modules，因此注释掉此处
                //exclude:/node_modules/,
                loader:ExtractTextPlugin.extract({  
                    fallback: 'style-loader',  
                    use: [  
                        {
                            loader:'css-loader'
                        },{
                            loader:'autoprefixer-loader'
                        },{
                            loader: 'less-loader'  
                        }
                    ]  
                }
                ),
            },{
                test: /\.((woff2?|svg)(\?v=[0-9]\.[0-9]\.[0-9]))|(woff2?|svg|jpe?g|png|gif|ico)$/,
                loaders: [
                    'url?limit=10240&name=img/[hash:8].[name].[ext]',
                    'image?{bypassOnDebug:true, progressive:true,optimizationLevel:3,pngquant:{quality:"65-80",speed:4}}'
                ]
            },{
                    test: /\.((ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9]))|(ttf|eot)$/,
                    loader: 'url?limit=10000&name=fonts/[hash:8].[name].[ext]'
            },{
                test: /containers\/([^/]+)\/?([^/]*)\.jsx?$/,
                include: path.resolve(__dirname, './src'),
                loaders: ['bundle-loader?lazy', 'babel-loader']
              }
        ]
    },
	resolve: {  
        alias: {  
            "antd":  path.resolve(__dirname, './node_modules/antd' ),
            "react-router": path.resolve(__dirname, './node_modules/react-router' ),
            "react-router-dom": path.resolve(__dirname,"./node_modules/react-router-dom" ),
            "react-redux": path.resolve(__dirname, './node_modules/react-redux' ),
            "react-router-redux": path.resolve(__dirname, './node_modules/react-router-redux' ),
            "redux": path.resolve(__dirname, './node_modules/redux' ),
			"babel-polyfill" :path.resolve(__dirname, './node_modules/babel-polyfill' ),
			"babel-plugin-transform-runtime":path.resolve(__dirname, './node_modules/babel-plugin-transform-runtime' ),
            "bundle-loader":path.resolve(__dirname,'./node_modules/bundle-loader'),
            "prop-types":path.resolve(__dirname,'./node_modules/prop-types'),
            "history":path.resolve(__dirname,'./node_modules/history'),
            "redux-logger":path.resolve(__dirname,'./node_modules/redux-logger'),
            "redux-thunk":path.resolve(__dirname,'./node_modules/redux-thunk'),
            "rc-form":path.resolve(__dirname,'./node_modules/rc-form'),
            "moment":path.resolve(__dirname,'./node_modules/moment')
        }  
    },  
    plugins: [
        //压缩处理
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
            mangle: {
                except: ['$super', '$', 'exports', 'require']
            }
        }),
        //默认组件
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
            },
        }),
        new ManifestPlugin({
            fileName: 'manifest.json',
            basePath: '/public/',
        }),
        //先清除build文件
        new CleanWebpackPlugin([path.resolve(__dirname, './build')]),
        //单独抽出css输出为该文件，默认路径为build输出的路径
        new ExtractTextPlugin({
            filename: 'main.css'
        })
    ]
};