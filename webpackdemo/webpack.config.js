let path=require("path");
let HtmlWebpackPlugin =require("html-webpack-plugin")
let CleanWebpackPlugin =require("clean-webpack-plugin")

module.exports ={
    //入口
    entry:'./src/index.js',
    output:{//出口
        //文件名
        filename:"build.js",
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
            template:"./src/index.html",
            hash:true
        })
    ],
    mode:"development",
    resolve:{
        
    }
}