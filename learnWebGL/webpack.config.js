var path = require('path');
var appPath = path.resolve(__dirname, './src/index.js');
var buildPath = path.resolve(__dirname, './build');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: appPath,//整个页面的入口文件
    output: {
        path: buildPath,//打包输出的地址
        filename: "bundle.js",//输出的文件名称
    },
    module: {
    },
    //以下是服务环境配置
    devServer: {
        port: 8085,//端口
        host: 'localhost',//地址
        inline: true,//用来支持dev-server自动刷新
        open: true,//开启webpack-dev-server时自动打开页面
        historyApiFallback: true,
        contentBase: path.resolve(__dirname),//用来指定index.html所在目录
        publicPath: '/build/',//用来指定编译后的bundle.js的目录
        openPage: "build/index.html",//指定打开的页面
        hot:true,//热部署
    },
    plugins: [
        // new HtmlWebpackPlugin(),
        //热部署插件
       // new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            // filename:'b.html',
            template: "./src/index.html",
            chunksSortMode: 'none'
        })
    ],
}