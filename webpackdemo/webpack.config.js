let path=require("path");
let HtmlWebpackPlugin =require("html-webpack-plugin")
let CleanWebpackPlugin =require("clean-webpack-plugin")

module.exports ={
    //入口
    entry:'./src/index.js',
    //entry:['./src/index.js','./src/server.js'],//一个入口多个文件
    // entry:{
    //     index:'./src/index.js',
    //     server:'./src/server.js'
    // },
    output:{//出口
        //文件名
        filename:"[name].[hash:8].js",
        //路径必须上绝对路径
        path:path.resolve("./build")
    },
    devServer:{//开发服务器
        contentBase:"./build",
        port:3000,//端口号
        open:true,//自动打开
        compress:true,//服务器压缩
    },
    module://模块配置
    {

    },
    plugins:[
        //清空文件插件
        new CleanWebpackPlugin(['./build','./dist']),
        //打包html插件
        new HtmlWebpackPlugin({
            filename:'index.html',//文件输入名
            template:"./src/index.html",//打包模版
            hash:true
        }),
        // new HtmlWebpackPlugin({
        //     filename:'b.html',
        //     template:"./src/index.html",
        //     hash:true,
        //     chunks:['server']
        // })
    ],
    mode:"development",
    resolve:{
        
    }
}